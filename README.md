# TeleFormers Landing Page

Eine moderne, responsive Landing Page für TeleFormers - die Plattform für Training und Vermittlung von Home-Office Telefonie-Talenten.

## 🚀 Features

- **Responsive Design**: Optimiert für alle Geräte
- **Moderne UI**: Dark Theme mit blau-orange Farbpalette
- **Interaktive Elemente**: Smooth Scrolling, Hover-Effekte
- **Kontaktformular**: Funktionales Formular für Talente und Unternehmen
- **SEO-optimiert**: Meta-Tags und strukturierte Inhalte

## 🛠️ Technologien

- **React 19** mit TypeScript
- **Vite** für Build-Tooling
- **Tailwind CSS** für Styling
- **Railway** für Deployment

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build erstellen
npm run build

# Preview starten
npm run preview
```

## 🚀 Railway Deployment

Das Projekt ist für Railway vorbereitet:

1. **Railway-Konfiguration**: `railway.json` ist bereits konfiguriert
2. **Port-Konfiguration**: Automatische Port-Erkennung über `$PORT`
3. **Build-Prozess**: Nixpacks Builder für automatisches Deployment
4. **Health Checks**: Konfiguriert für stabile Bereitstellung

### Deployment-Schritte:

1. Verbinden Sie Ihr GitHub-Repository mit Railway
2. Railway erkennt automatisch die Konfiguration
3. Deployment erfolgt automatisch bei jedem Push

## 🎨 Design-System

- **Farben**: Blau (#3B82F6) und Orange (#F97316)
- **Typografie**: Sans-serif mit klarer Hierarchie
- **Spacing**: Konsistente Abstände mit Tailwind-Klassen
- **Animationen**: Subtle Hover-Effekte und Transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Entwicklung

```bash
# Entwicklungsserver mit Hot Reload
npm run dev

# TypeScript-Checks
npx tsc --noEmit

# Build für Produktion
npm run build
```

## 📄 Projektstruktur

```
├── components/          # React-Komponenten
│   ├── Header.tsx      # Navigation & Logo
│   ├── Hero.tsx        # Hero-Sektion
│   ├── About.tsx       # Über uns
│   ├── ForTalents.tsx  # Für Talente
│   ├── ForCompanies.tsx # Für Unternehmen
│   ├── ContactForm.tsx # Kontaktformular
│   └── Footer.tsx      # Footer
├── App.tsx             # Haupt-App-Komponente
├── index.html          # HTML-Template
├── vite.config.ts      # Vite-Konfiguration
├── railway.json        # Railway-Konfiguration
└── package.json        # Dependencies
```

## 🌐 Live-Demo

Die Website ist live verfügbar über Railway.

## 📞 Kontakt

- **Telefon**: +49 123 456 789
- **E-Mail**: info@teleformers.de
- **Adresse**: Musterstraße 123, 12345 Musterstadt

---

© 2024 TeleFormers. Alle Rechte vorbehalten.
