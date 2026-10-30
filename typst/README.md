# Marketing Kernal - Typst Letterhead Engine

This directory contains the code-based typesetting engine for **Marketing Kernal Private Limited** built on [Typst](https://typst.app), an ultra-fast, modern alternative to LaTeX.

---

## 📁 Files Overview

- **`mk-branding.typ`**: The foundational template layout containing Marketing Kernal's vector header, running header for subsequent pages, corporate metadata, signature blocks, and confidentiality notices.
- **`formal-letter.typ`**: Standard corporate correspondence, partnership notices, and legal communications.
- **`client-proposal.typ`**: Scope of Work (SOW), quotations, and milestone proposals.
- **`hr-offer-letter.typ`**: Official employment offers, internship letters, and talent contracts.

---

## 🚀 How to Use & Compile

### Option 1: With Typst CLI (Command Line)
If you have `typst` installed:

```bash
# Compile to PDF
typst compile formal-letter.typ formal-letter.pdf

# Watch mode (automatically recompiles on every file edit)
typst watch formal-letter.typ

# Export high-res raster preview (similar to onefact repository)
typst compile --format png --ppi 300 formal-letter.typ formal-letter.png
```

### Option 2: In VS Code (Recommended for Developers)
1. Install the official **Typst** extension (`Myriad-Dreamin.tinymist` or `nvarner.typst-lsp`).
2. Open any `.typ` file.
3. Click "Typst: Show Preview" to see a live PDF preview updating in real time as you type.

### Option 3: Typst Web App (`typst.app`)
1. Create a free workspace at [typst.app](https://typst.app).
2. Upload the `assets/` and `typst/` folders.
3. Edit collaboratively with your team in the browser with cloud PDF export.
