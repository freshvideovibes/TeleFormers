# TeleFormers - Formation für Kommunikation

Eine moderne Landing Page für TeleFormers, ein Unternehmen das sich auf Kommunikationstraining und die Verbindung von Talenten mit Unternehmen spezialisiert hat.

## 🚀 Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobile
- **Moderne UI**: Dunkles Design mit Orange/Blau Akzenten
- **Interaktive Komponenten**: Smooth Scrolling, Hover-Effekte, Animationen
- **Kontaktformular**: Funktionales Formular für Anfragen
- **SEO-optimiert**: Semantisches HTML und Meta-Tags

## 🛠 Technologie-Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Railway (Docker)

## 📁 Projektstruktur

```
├── components/
│   ├── Header.tsx          # Navigation mit Logo
│   ├── Hero.tsx           # Hauptbereich mit großem Logo
│   ├── About.tsx          # Über uns Sektion
│   ├── ForTalents.tsx     # Services für Talente
│   ├── ForCompanies.tsx   # Services für Unternehmen
│   ├── ContactForm.tsx    # Kontaktformular
│   └── Footer.tsx         # Footer mit Links
├── public/
│   └── assets/           # Statische Assets
├── App.tsx              # Haupt-App-Komponente
├── index.tsx           # Entry Point
├── index.html          # HTML Template
├── index.css           # Globale Styles
├── Dockerfile          # Docker-Konfiguration
└── railway.json        # Railway-Deployment-Config
```

## 🎨 Design-System

### Farbschema
- **Primär**: Slate (Grautöne für Hintergründe)
- **Akzent 1**: Orange (#f97316) - für Call-to-Actions
- **Akzent 2**: Blau (#3b82f6) - für Unternehmen-Bereich
- **Text**: Weiß/Grau für guten Kontrast

### Logo
Das TeleFormers-Logo ist als SVG implementiert und zeigt ein Transformer-inspiriertes geometrisches Design, das die Idee der "Transformation" von Kommunikation symbolisiert.

## 🚀 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Vorschau der Produktion
npm run preview
```

## 🌐 Railway Deployment

Das Projekt ist für Railway konfiguriert und kann mit einem Klick deployed werden:

1. **Automatisches Deployment**: Push zu GitHub löst automatisch ein Deployment aus
2. **Docker-basiert**: Verwendet das mitgelieferte Dockerfile
3. **Umgebungsvariablen**: Keine speziellen Env-Vars erforderlich

### Deployment-Befehle

```bash
# Manueller Build (falls nötig)
docker build -t teleformers .

# Lokaler Docker-Test
docker run -p 3000:3000 teleformers
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Konfiguration

### Vite Config
- React Plugin aktiviert
- Port 3000 für Entwicklung
- Optimierte Builds

### Tailwind CSS
- Vollständig konfiguriert mit Custom Colors
- Responsive Design System
- Custom Animations

## 📞 Kontakt

- **E-Mail**: info@teleformers.de
- **Telefon**: +49 (0) 123 456 789
- **Standort**: Berlin, Deutschland

## 📄 Lizenz

© 2024 TeleFormers. Alle Rechte vorbehalten.
