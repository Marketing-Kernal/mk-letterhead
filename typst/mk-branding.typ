// ==============================================================================
// MARKETING KERNAL PRIVATE LIMITED - TYPST LETTERHEAD ENGINE
// Official Document & Stationery Template System
// Website: https://marketingkernal.com | Contact: info@marketingkernal.com
// ==============================================================================

#let brand-navy = rgb("#0F172A")
#let brand-blue = rgb("#2563EB")
#let brand-cyan = rgb("#0284C7")
#let text-dark = rgb("#1E293B")
#let text-muted = rgb("#64748B")
#let border-light = rgb("#E2E8F0")

#let mk-letterhead(
  doc-type: "OFFICIAL CORRESPONDENCE",
  doc-ref: "MK/2026/DOC-001",
  date: datetime.today().display("[month repr:long] [day], [year]"),
  recipient-name: none,
  recipient-title: none,
  recipient-company: none,
  recipient-address: none,
  subject: none,
  signatory-name: "Authorized Signatory",
  signatory-title: "Director / Authorized Officer",
  signatory-dept: "Executive Leadership",
  include-signature: true,
  watermark: true,
  body
) = {
  // Page Configuration (Standard A4 Corporate Stationery)
  set page(
    paper: "a4",
    margin: (top: 4.2cm, bottom: 3.2cm, left: 2.4cm, right: 2.4cm),
    header-ascent: 20%,
    footer-descent: 25%,
    
    // Background Watermark (Subtle MK Emblem)
    background: if watermark {
      place(
        center + horizon,
        image("../assets/watermark.svg", width: 45%)
      )
    } else { none },
    
    // Header (Every Page has brand identity, first page has primary letterhead)
    header: context {
      let page-num = counter(page).get().first()
      if page-num == 1 {
        // First Page: Full Corporate Letterhead
        grid(
          columns: (1fr, auto),
          align: (left + horizon, right + horizon),
          [
            #image("../assets/logo-horizontal.svg", width: 7.2cm)
          ],
          [
            #set text(font: ("Inter", "Segoe UI", "Arial"), size: 7.8pt, fill: text-muted, spacing: 120%)
            #align(right)[
              *Marketing Kernal Private Limited* \
              CIN: U74999MH2026PTC000000 \
              Web: #link("https://marketingkernal.com")[marketingkernal.com] \
              Email: #link("mailto:info@marketingkernal.com")[info@marketingkernal.com] \
              Tel: +91 9172648748
            ]
          ]
        )
        #v(3pt)
        #line(length: 100%, stroke: 1.5pt + brand-blue)
      } else {
        // Subsequent Pages: Sleek Running Header
        grid(
          columns: (1fr, auto),
          align: (left + bottom, right + bottom),
          [
            #set text(font: ("Inter", "Segoe UI", "Arial"), size: 8pt, fill: text-muted)
            #image("../assets/logo-icon.svg", width: 0.6cm)
            #h(6pt)
            *MARKETING KERNAL* | #doc-ref
          ],
          [
            #set text(font: ("Inter", "Segoe UI", "Arial"), size: 8pt, fill: text-muted)
            #date
          ]
        )
        #v(2pt)
        #line(length: 100%, stroke: 0.5pt + border-light)
      }
    },
    
    // Footer: Corporate Headquarters, Footprint & Page Counter
    footer: context {
      let page-num = counter(page).get().first()
      let total-pages = counter(page).final().first()
      
      line(length: 100%, stroke: 0.5pt + border-light)
      #v(3pt)
      grid(
        columns: (1fr, auto),
        align: (left + top, right + top),
        [
          #set text(font: ("Inter", "Segoe UI", "Arial"), size: 7pt, fill: text-muted)
          *Registered Office:* Marketing Kernal Private Limited &bull; India | Global Presence: US, UK, Canada \
          *Confidentiality Notice:* The contents of this document are privileged and confidential to the intended recipient.
        ],
        [
          #set text(font: ("Inter", "Segoe UI", "Arial"), size: 7.5pt, fill: brand-navy, weight: "bold")
          Page #page-num of #total-pages
        ]
      )
    }
  )

  // Typography Settings
  set text(
    font: ("Inter", "Segoe UI", "Helvetica Neue", "Arial"),
    size: 10pt,
    fill: text-dark,
    lang: "en"
  )
  set par(justify: true, leading: 0.72em)

  // Document Metadata Band (Ref, Date, Category)
  grid(
    columns: (1fr, auto),
    align: (left + horizon, right + horizon),
    [
      #set text(size: 8pt, fill: brand-blue, weight: "bold")
      #rect(
        fill: rgb("#EFF6FF"),
        radius: 3pt,
        inset: (x: 7pt, y: 4pt),
        stroke: 0.5pt + rgb("#BFDBFE")
      )[#doc-type]
      #h(8pt)
      #text(size: 8.5pt, fill: text-muted)[Ref: *#doc-ref*]
    ],
    [
      #set text(size: 9pt, fill: text-dark, weight: "medium")
      *Date:* #date
    ]
  )

  #v(14pt)

  // Recipient Block
  if recipient-name != none or recipient-company != none {
    block(
      width: 100%,
      stroke: (left: 2pt + brand-blue),
      inset: (left: 10pt),
      [
        #set text(size: 9.5pt, spacing: 130%)
        #text(fill: text-muted, size: 8pt, weight: "bold")[TO:] \
        #if recipient-name != none [*#recipient-name* \ ]
        #if recipient-title != none [#recipient-title \ ]
        #if recipient-company != none [*#recipient-company* \ ]
        #if recipient-address != none [#recipient-address]
      ]
    )
    #v(14pt)
  }

  // Subject Header
  if subject != none {
    rect(
      width: 100%,
      fill: rgb("#F8FAFC"),
      stroke: (left: 3pt + brand-blue, rest: 0.5pt + border-light),
      radius: (right: 4pt),
      inset: (x: 12pt, y: 8pt),
      [
        #set text(size: 10.5pt, weight: "bold", fill: brand-navy)
        *Subject:* #subject
      ]
    )
    #v(12pt)
  }

  // Letter Body Content
  body

  #v(20pt)

  // Signatory & Authentication Section
  block(
    breakable: false,
    [
      #text(size: 9.5pt, fill: text-muted)[Sincerely,] \
      #v(4pt)
      #text(size: 10pt, weight: "bold", fill: brand-navy)[For Marketing Kernal Private Limited]
      
      #v(6pt)
      #if include-signature {
        image("../assets/signature-placeholder.svg", width: 4.5cm)
        #v(4pt)
      } else {
        #v(35pt)
      }
      
      #line(length: 5.5cm, stroke: 0.8pt + text-muted)
      #v(2pt)
      #text(size: 10pt, weight: "bold", fill: brand-navy)[#signatory-name] \
      #text(size: 8.5pt, fill: text-muted)[#signatory-title] \
      #text(size: 8pt, fill: text-muted)[#signatory-dept]
    ]
  )
}
