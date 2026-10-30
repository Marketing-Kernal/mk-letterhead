# Marketing Kernal Private Limited - Corporate Letterhead Suite

Official corporate stationery and automated document generation suite for **Marketing Kernal Private Limited** ([marketingkernal.com](https://marketingkernal.com)).

* **CIN:** `U62011ME2026PTC477307`
* **Registered Office:** Awasti Layout, Big Umari, Jatherpeth, Akola, Maharashtra, India, - 444005
* **Official Signatory:** Mr. Vaibhav Palhade, Director, Marketing Kernal Private Limited
* **Official Website:** [marketingkernal.com](https://marketingkernal.com) | **Email:** [info@marketingkernal.com](mailto:info@marketingkernal.com) | **Tel:** +91 9172648748
* **Live Web Studio:** [https://mk-letterhead.vercel.app/](https://mk-letterhead.vercel.app/)

---

## 🏛️ System Architecture: Dual-Engine Design

This repository is built as a **hybrid suite** providing two synchronized document engines:

```
MK Letterhead/
├── assets/                          # Official vector logos, marks & watermarks
│   ├── mk-icon.png                  # Transparent RGBA ultraviolet ribbon emblem
│   ├── mk-monogram.png              # Wide transparent monogram
│   ├── watermark.svg                # Background security watermark
│   └── signature-placeholder.svg    # Digital verification stamp
│
├── web-studio/                      # Engine 1: Interactive Browser Studio
│   ├── index.html                   # Side-by-side reactive editor & A4 live preview
│   ├── styles.css                   # Print-perfect CSS (@page { size: A4; })
│   ├── app.js                       # 2-way data binding, presets & Smart Doc / AI import
│   └── assets/                      # Self-contained assets for cloud hosting
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

## 🚀 Engine 1: Interactive Web Studio & Smart AI Formatter

The **Letterhead Web Studio** is hosted live at **[https://mk-letterhead.vercel.app/](https://mk-letterhead.vercel.app/)** and requires zero installation.

### Key Features:
1. **Clean Divided Categories**:
   * **Blank Templates**: Start completely fresh with a clean blank canvas.
   * **Commercial & Client SOW**: Client proposals, monthly service retainers, formal quotations.
   * **Corporate & Governance**: Official correspondence, partnership MoUs, board letters of authority.
   * **People & HR**: Employment offers, internship appointments, experience & relieving certificates.
2. **Smart Document Import & AI Formatter**:
   * Click **"Import Doc / AI Formatter"** in the top bar.
   * Drop any **`.docx` (Word)**, **`.pdf`**, **`.txt`**, or **`.md`** file, or paste raw meeting notes.
   * Automatically extracts the Date, Reference Number, Recipient, Subject, and paragraphs.
   * Optional **Gemini AI enhancement** to polish rough notes into an executive-grade corporate tone.
3. **Official Corporate Signatory**:
   * Pre-configured with **Mr. Vaibhav Palhade, Director, Marketing Kernal Private Limited**.
4. **Print to PDF (A4)**:
   * 1-click pixel-perfect export with zero margins and background watermark support.

---

## ⚡ Engine 2: Typst Typesetting Engine (Code & CLI)

Built on [Typst](https://typst.app), a modern Rust-based typesetting system that replaces LaTeX:

```bash
# Compile to PDF:
typst compile typst/formal-letter.typ output/formal-letter.pdf
typst compile typst/client-proposal.typ output/client-proposal.pdf
typst compile typst/hr-offer-letter.typ output/hr-offer-letter.pdf
```

---

## 🎨 Corporate Identity & Brand Tokens

| Token | Value / Spec | Notes |
| :--- | :--- | :--- |
| **Royal Purple** | `#5A09D1` | Primary header accent & formal authority |
| **Imperial Violet** | `#7C1BF0` | Brand text gradient midpoint & divider line |
| **Ultraviolet Glow** | `#9E2CFE` | High-tech accent & active highlight bar |
| **Obsidian Noir** | `#090714` | High-contrast luxury body text |
| **Soft Lilac** | `#FAF5FF` | Subtle background tint for cards & badges |
| **Paper Standard** | International A4 (`210mm x 297mm`) | Standard corporate stationery |
| **Corporate CIN** | `U62011ME2026PTC477307` | Official Corporate Identity Number |
| **Registered Office** | Akola, Maharashtra, India - 444005 | Awasti Layout, Big Umari, Jatherpeth |

---

## 📄 License & Proprietary Rights

Copyright &copy; 2026 Marketing Kernal Private Limited. All rights reserved.
