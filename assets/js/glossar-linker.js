// assets/js/glossar-linker.js

document.addEventListener("DOMContentLoaded", () => {
  // Wörterbuch mit allen Begriffen → korrekte Glossar-IDs
  const terms = {
    "Digital Humanities": "digital-humanities",
    "Large Language Models": "large-language-models-llms",
    "LLMs": "large-language-models-llms",
    "LLM": "large-language-models-llms",

    "Netzwerkanalyse": "netzwerkanalyse",
    "Netzwerkmodell": "netzwerkmodell",

    "Knoten": "knoten",
    "Node": "knoten",

    "Kanten": "kanten",
    "Zentralität": "zentralitaet",

    "Datenmodellierung": "datenmodellierung",
    "Datenbank": "datenbank",
    "SQLite": "sqlite",
    "SQLite-Datenbank": "sqlite-datenbank",

    "ER-Diagramm": "er-diagramm",
    "Entität": "entitaet",
    "Metadata": "metadata",
    "Normalisierung": "normalisierung",

    "Webscraping": "webscraping",

    "Named Entity Recognition": "named-entity-recognition-ner",
    "NER": "named-entity-recognition-ner",

    "Disambiguierung": "disambiguierung",
    "Clusterbildung": "clusterbildung",
    "Cluster": "clusterbildung",

    "Visualisierung": "visualisierung",
    "Interaktive Visualisierung": "interaktive-visualisierung",
    "Visualisierungslayout": "visualisierungslayout",
    "Zoom-Interaktion": "zoom-interaktion",

    "Gephi": "gephi",
    "Graphology": "graphology",
    "Sigma.js": "sigma-js",
    "API": "api",

    "Graph": "graph",
    "Graphdatenbank": "graphdatenbank",
    "GEXF": "gexf",

    "Knowledge Graphs": "knowledge-graphs",
    "Knowledge Graph": "knowledge-graphs",
    "Wissensgraph": "wissensgraph",

    "Semantic AI": "semantic-ai",

    "Backend": "backend",
    "CSV": "csv",
    "Data Cleaning": "data-cleaning",

    "Rolle": "rolle",
    "Temporalität": "temporalitaet",

    "Communities of Practice": "communities-of-practice",
    "Infrastrukturen des Kulturellen": "infrastrukturen-des-kulturellen",

    "Akteur-Netzwerk-Theorien": "akteur-netzwerk-theorien",

    "Layout-Algorithmus": "layout-algorithmus",
  };

  // Elemente, in denen NICHT verlinkt werden soll
  const forbiddenParents = ["A", "CODE", "PRE", "H1", "H2", "H3", "H4"];

  // 🔹 Basis-Pfad für den Glossar-Link je nach Verzeichnis
  // Root-Seiten:   "glossar.html#…"
  // Unterordner (z.B. /posts/): "../glossar.html#…"
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
