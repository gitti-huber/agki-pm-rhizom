# WorkPackages – Projektstrukturplan & Tasks

> Abbildung der Projektplanung auf Arbeitspakete (Work Packages, WP), konkrete Tasks und grobe Aufwandsabschätzung (Low/Medium/High).

## PSP – Überblick (Ebene 1)

- **WP1 – Projektsetup & Kontext**
- **WP2 – Datenerhebung & Datenaufbereitung**
- **WP3 – Analyse & Modellierung**
- **WP4 – Visualisierung & Webpublikation**
- **WP5 – Dokumentation, Kontext & Reflexion**

---

## WP1 – Projektsetup & Kontext

**Ziel:** Projektdefinition schärfen, Forschungsfrage(n) präzisieren, Rahmen abstecken.

### Tasks

- [ ] Projektbeschreibung & Forschungsfrage formulieren (Blog & README)  
  _Effort: Medium_
- [ ] Projektkontext und Fallbeispiel RHIZOM aufbereiten  
  _Effort: Medium_
- [ ] Repository-Struktur aufsetzen (`/posts`, `/data`, `/notebooks`, `/assets`)  
  _Effort: Low_
- [ ] Obsidian-Vault strukturieren (dieser `/vault`-Ordner)  
  _Effort: Low_

---

## WP2 – Datenerhebung & Datenaufbereitung

**Ziel:** Aufbau einer konsistenten, analysierbaren Datenbasis zum Verein RHIZOM.

### Tasks

- [ ] Datenerhebung: Webscraping, manuelle Korrektur, Extraktion von Entitäten (Personen, Projekte, Orte)  
  _Effort: High_
- [ ] Zusammenführung heterogener Quellen in tabellarische Formate (`/data/csv`)  
  _Effort: High_
- [ ] Normalisierung & ID-Vergabe (`personen_clean.csv`, `projekte_clean.csv`)  
  _Effort: Medium_
- [ ] Aufbau einer Kanten-Tabelle (`edges.csv`)  
  _Effort: Medium_

---

## WP3 – Analyse & Modellierung

**Ziel:** Aufbau des Netzwerkmodells und analytische Auswertung.

### Tasks

- [ ] Definition des Graphmodells (Knoten- und Kantentypen, Attribute)  
  _Effort: Medium_
- [ ] Implementierung der Analyse-Pipeline in Python-Notebooks (`/notebooks`)  
  _Effort: High_
- [ ] Berechnung zentraler Netzwerkmetriken (Degree, Centrality, Communities)  
  _Effort: Medium_
- [ ] Export der Netzwerkdaten für Visualisierung (Gephi, JSON)  
  _Effort: Medium_

---

## WP4 – Visualisierung & Webpublikation

**Ziel:** Entwicklung einer interaktiven Webvisualisierung und Bereitstellung via GitHub Pages.

### Tasks

- [ ] Definition der Visualisierungsanforderungen in [[UserStories]] und [[Specs]]  
  _Effort: Medium_
- [ ] Prototypische Netzwerkkarten erstellen  
  _Effort: Medium_
- [ ] Implementierung einer Webvisualisierung mit Filterung nach Jahr, Rolle, Projekttyp  
  _Effort: High_
- [ ] Einbettung der Visualisierung in die bestehende Website  
  _Effort: Medium_

---

## WP5 – Dokumentation, Kontext & Reflexion

**Ziel:** Laufende Dokumentation, Kontextualisierung und Reflexion des Projekts.

### Tasks

- [ ] Fortlaufende Dokumentation im Forschungsblog (`/posts`)  
  _Effort: Medium_
- [ ] Domänenwissen, Ontologie und Prozesse als Semantic Markdown strukturieren  
  _Effort: Medium_
- [ ] Abschlusszusammenfassung und Lessons Learned  
  _Effort: Medium_

