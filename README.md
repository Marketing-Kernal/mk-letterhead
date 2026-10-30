# Marketing Kernal Private Limited - Corporate Letterhead Suite

Official corporate stationery and automated document generation suite for **Marketing Kernal Private Limited** ([marketingkernal.com](https://marketingkernal.com)).

Designed to support executive correspondence, client proposals, Statements of Work (SOW), HR employment letters, and partnership MoUs with pixel-perfect brand consistency across both developer and non-developer workflows.

---

## 🏛️ System Architecture: Dual-Engine Design

This repository is built as a **hybrid suite** providing two synchronized document engines:

```
MK Letterhead/
├── assets/                          # Official vector logos, marks & watermarks
│   ├── logo-horizontal.svg          # Primary corporate logo for headers
│   ├── logo-icon.svg                # Kernel AI emblem
│   ├── watermark.svg                # Document security background watermark
│   └── signature-placeholder.svg    # Digital verification stamp
│
├── web-studio/                      # Engine 1: Interactive Browser Studio
│   ├── index.html                   # Side-by-side reactive editor & A4 live preview
│   ├── styles.css                   # Print-perfect CSS (@page { size: A4; })
│   └── app.js                       # 2-way data binding, presets & PDF export
│
├── typst/                           # Engine 2: Typst Typesetting Engine
│   ├── mk-branding.typ              # Core branding layout & typography rules
│   ├── formal-letter.typ            # Official correspondence template
│   ├── client-proposal.typ          # Commercial proposal & SOW template
│   ├── hr-offer-letter.typ          # Employment offer letter template
│   └── README.md                    # Typst usage & CLI instructions
│
├── templates/                       # Pre-configured structured JSON datasets
│   ├── formal-letter.json
│   ├── client-proposal.json
│   └── hr-offer-letter.json
│
├── server.js                        # Zero-dependency local server for Web Studio
├── package.json                     # NPM workflow scripts
└── README.md                        # Documentation
```

---

## 🚀 Engine 1: Interactive Web Studio (Zero Installation)

The **Letterhead Web Studio** is a browser-based application with real-time A4 preview, built for fast day-to-day use by founders, client account leads, HR, and marketing teams.

### How to Run Locally

You can launch the studio in any terminal with Node.js installed:

```bash
# 1. Start the zero-dependency local server
npm start
# (or: node server.js)

# 2. Open your browser at:
http://localhost:3000/web-studio/index.html
```

*(You can also simply double-click `web-studio/index.html` to open it directly in Google Chrome, Microsoft Edge, or Safari without a server!)*

### Features
- **Live Two-Way Reactive Preview**: As you edit recipient details, reference IDs, dates, subjects, or body text on the left, the A4 page on the right updates instantly.
- **One-Click Presets**:
  - `Official Correspondence` (General notices, client letters)
  - `Client Proposal & SOW` (Deliverable tables, pricing, milestones)
  - `HR Employment Offer` (CTC breakdown, position terms)
  - `Partnership MoU` (Collaborative research agreements)
- **Signatory Switching**: Quickly select between co-founders (**Pratyush Shrivastava**, **Vaibhav Palhade**, **Tejas Guruo**) or enter custom signatory details.
- **Toggles**: Enable/disable background watermarks and digital signature verification stamps.
- **Print to PDF**: Click **"Print to PDF (A4)"** (or press `Ctrl+P`) to export an authentic A4 PDF with zero margins, exact color fidelity, and no browser UI clutter.

---

## ⚡ Engine 2: Typst Typesetting Engine (Code & CLI)

Built on [Typst](https://typst.app), a next-generation Rust-based typesetting system that replaces LaTeX with blazing-fast compilation and clean, readable code.

### Prerequisites
Install the Typst CLI (or use the VS Code Typst extension):
```bash
# Windows (via winget or cargo)
winget install --id Typst.Typst
# or: cargo install typst-cli
```

### Compiling to PDF
```bash
# Compile a formal letter to PDF
typst compile typst/formal-letter.typ output/formal-letter.pdf

# Watch mode (live recompile on every save)
typst watch typst/formal-letter.typ

# High-resolution raster preview (300 DPI)
typst compile --format png --ppi 300 typst/formal-letter.typ output/preview.png
```

### Using in VS Code
1. Install the **Typst** extension (`Myriad-Dreamin.tinymist`).
2. Open any `.typ` file in `typst/`.
3. Press `Ctrl+K V` or click "Show Preview" for an interactive live document renderer.

---

## 🎨 Corporate Identity & Brand Tokens

| Token | Value / Spec | Notes |
| :--- | :--- | :--- |
| **Primary Navy** | `#0F172A` | Core dark corporate tone for text & headers |
| **Electric Blue** | `#2563EB` | Primary brand accent & divider highlights |
| **Cyan Glow** | `#0284C7` / `#06B6D4` | Accent tone representing AI / GEO data flows |
| **Slate Gray** | `#64748B` | Subtitles, metadata, and footer notices |
| **Paper Standard** | International A4 (`210mm x 297mm`) | Standard corporate stationery |
| **Typography** | Inter, Segoe UI, Arial | Web-safe, clean, modern corporate sans-serif |
| **Company CIN** | `U74999MH2026PTC000000` | Corporate Identity Number placeholder |
| **Contact Phone** | `+91 9172648748` | Official contact line |
| **Contact Email** | `info@marketingkernal.com` | Official correspondence email |
| **Website** | `https://marketingkernal.com` | Corporate portal |

---

## 📄 License & Proprietary Rights

Copyright &copy; 2026 Marketing Kernal Private Limited. All rights reserved. Confidential and proprietary to Marketing Kernal Private Limited.
