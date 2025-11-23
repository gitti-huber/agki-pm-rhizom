// assets/js/glossar-linker.js

document.addEventListener("DOMContentLoaded", () => {
  // Wörterbuch mit allen Begriffen → korrekte Glossar-IDs
  const terms = {
  "Akteur-Netzwerk-Theorien": "akteur-netzwerk-theorien",
  "API": "api",

  "Art World": "art-world",
  "Artworld": "artworld-danto",

  "Backend": "backend",

  "CSV": "csv",
  "Cluster": "clusterbildung",
  "Clusterbildung": "clusterbildung",
  "Communities of Practice": "communities-of-practice",

  "Consistent Lines of Activity": "consistent-lines-of-activity",

  "Datenbank": "datenbank",
  "Datenmodellierung": "datenmodellierung",
  "Data Cleaning": "data-cleaning",
  "Disambiguierung": "disambiguierung",
  "Digital Humanities": "digital-humanities",

  "Entität": "entitaet",
  "ER-Diagramm": "er-diagramm",

  "Feld": "feld-bourdieu",
  "Feld (Bourdieu)": "feld-bourdieu",

  "Gephi": "gephi",
  "GEXF": "gexf",
  "Graph": "graph",
  "Graphdatenbank": "graphdatenbank",
  "Graphology": "graphology",

  "Infrastrukturen des Kulturellen": "infrastrukturen-des-kulturellen",
  "Institutionelle Logiken": "institutionelle-logiken",
  "Interaktive Visualisierung": "interaktive-visualisierung",
  "Interpretativer Rahmen": "interpretativer-rahmen",

  "Kanten": "kanten",
  "Knowledge Graph": "knowledge-graphs",
  "Knowledge Graphs": "knowledge-graphs",
  "Knoten": "knoten",

  "Large Language Models": "large-language-models-llms",
  "Layout-Algorithmus": "layout-algorithmus",
  "LLM": "large-language-models-llms",
  "LLMs": "large-language-models-llms",

  "Metadata": "metadata",

  "Named Entity Recognition": "named-entity-recognition-ner",
  "NER": "named-entity-recognition-ner",
  "Neo-Institutionalismus": "neo-institutionalismus",
  "Netzwerkanalyse": "netzwerkanalyse",
  "Netzwerkmodell": "netzwerkmodell",
  "Node": "knoten",
  "Normalisierung": "normalisierung",

  "Production of Culture Perspective": "production-of-culture",

  "Relationale Muster": "relationale-muster",

  "Rolle": "rolle",

  "Rhizomatische Strukturen": "rhizomatische-strukturen",
  "rhizomatische Strukturen": "rhizomatische-strukturen",
  "Rhizom": "rhizomatische-strukturen",
  "rhizomatisch": "rhizomatische-strukturen",

  "Semantic AI": "semantic-ai",
  "Sigma.js": "sigma-js",
  "Soziale Netzwerktheorie": "soziale-netzwerktheorie",
  "SQLite": "sqlite",
  "SQLite-Datenbank": "sqlite-datenbank",
  "Symbolisches Kapital": "symbolisches-kapital",
  "System": "system-luhmann",
  "System (Luhmann)": "system-luhmann",

  "Temporalität": "temporalitaet",

  "Visualisierung": "visualisierung",
  "Visualisierungslayout": "visualisierungslayout",
  "Webscraping": "webscraping",

  "Wissensgraph": "wissensgraph",

  "Zentralität": "zentralitaet"
};


  // Elemente, in denen NICHT verlinkt werden soll
  const forbiddenParents = ["A", "CODE", "PRE", "H1", "H2", "H3", "H4"];

  // 🔹 Basis-Pfad für den Glossar-Link je nach Verzeichnis
  let baseHref = "glossar.html";
  const path = window.location.pathname;

  if (path.includes("/posts/") || path.includes("/prompts/")) {
    baseHref = "../glossar.html";
  }

  // Textknoten durchsuchen
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  let node;
  while ((node = walker.nextNode())) {
    // Keine Links/Code/Headers verändern
    if (forbiddenParents.includes(node.parentNode.tagName)) continue;

    let text = node.nodeValue;

    // Falls nur Whitespace → überspringen
    if (!text.trim()) continue;

    let replaced = false;

    // Begriffe ersetzen
    Object.keys(terms).forEach(term => {
      const id = terms[term];

      // Begriff mit Escaping aller Sonderzeichen
      const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedTerm}\\b`, "g");

      if (regex.test(text)) {
        text = text.replace(
          regex,
          `<a href="${baseHref}#${id}" class="glossar-link">${term}</a>`
        );
        replaced = true;
      }
    });

    if (replaced) {
      const span = document.createElement("span");
      span.innerHTML = text;
      node.replaceWith(span);
    }
  }
});
