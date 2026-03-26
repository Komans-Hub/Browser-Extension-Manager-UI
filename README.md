# 🧩 Browser Extension Manager UI

A clean, modern browser extension manager built with **React + Vite + Tailwind CSS**. Fully interactive, state-driven, and theme-aware.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
browser-extension-ui/
├── public/                        # Static public assets
├── src/
│   ├── App.jsx                    # Root component — state, handlers, layout
│   ├── main.jsx                   # React DOM mount point
│   ├── index.css                  # Tailwind directives + local fonts + base styles
│   ├── assets/
│   │   ├── data.json              # ← Extension data (add new extensions here)
│   │   ├── images/                # SVG logos + icons
│   │   └── fonts/                 # Noto Sans (Regular, Medium, Bold)
│   └── Components/
│       ├── components.jsx         # All reusable UI components
│       └── components.css         # Component-level styles (BEM)
├── manifest.json                  # Chrome Extension MV3 manifest
├── background.js                  # Service worker
├── content.js                     # Content script
├── options.html                   # Extension options page
├── icons/                         # Extension icons
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

---

## 🧱 Component Architecture

All UI components live in `src/Components/components.jsx`, exported individually:

| Component        | Purpose                                              |
|------------------|------------------------------------------------------|
| `Header`         | Sticky top bar with logo + `ThemeToggle`             |
| `ThemeToggle`    | Sun/moon button — switches dark ↔ light              |
| `FilterBar`      | All / Active / Inactive pill buttons                 |
| `ExtensionCard`  | Individual extension tile (logo, info, toggle, remove) |
| `ExtensionLogo`  | Renders the correct SVG logo by `extensionKey`       |
| `Toggle`         | Accessible ARIA switch with animated thumb           |
| `EmptyState`     | Shown when filtered list is empty                    |

Styles are co-located in `components.css` using BEM class naming.

---

## ➕ Adding a New Extension

1. Open `src/assets/data.json`
2. Append a new entry:

```json
{
  "id": 13,
  "key": "mynewtool",
  "name": "My New Tool",
  "description": "Does something awesome.",
  "active": true
}
```

3. Add a matching SVG logo inside `ExtensionLogo` in `components.jsx`:

```jsx
mynewtool: (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} ...>
    ...
  </svg>
),
```

That's it — the card renders automatically. ✅

---

## 🎨 Features

- **Dark / Light theme** — persisted via `localStorage`, applied via `dark` class on `<html>`
- **Filter** — All / Active / Inactive with instant state-driven filtering
- **Toggle** — Enable/disable each extension; UI opacity reflects state
- **Remove** — Animated card exit (scale + fade), then dropped from state
- **Responsive** — 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- **Accessible** — ARIA roles, `role="switch"`, `aria-checked`, `aria-pressed`, focus-visible rings

---

## 🛠 Tech Stack

| Tool         | Version   | Purpose                        |
|--------------|-----------|--------------------------------|
| React        | 18.x      | UI rendering & state           |
| Vite         | 6.x       | Dev server & bundler           |
| Tailwind CSS | 3.x       | Utility-first styling          |
| PostCSS      | 8.x       | CSS processing                 |
| ESLint       | 9.x       | Linting                        |

---

## 📜 License

MIT
