// ==============================================================================
// MARKETING KERNAL PRIVATE LIMITED - TYPST LETTERHEAD ENGINE
// Official Corporate Stationery & Document Generation Suite
// CIN: U62011ME2026PTC477307 | Address: Akola, Maharashtra, India - 444005
// Website: https://marketingkernal.com | Contact: info@marketingkernal.com
// ==============================================================================

#let brand-deep = rgb("#5A09D1")
#let brand-mid = rgb("#7C1BF0")
#let brand-glow = rgb("#9E2CFE")
#let brand-obsidian = rgb("#090714")
#let text-dark = rgb("#1F1B2E")
#let text-muted = rgb("#64748B")
#let brand-tint = rgb("#FAF5FF")
#let brand-border = rgb("#E9D5FF")

#let mk-letterhead(
  doc-type: "OFFICIAL CORRESPONDENCE",
  doc-ref: "MK/2026/DOC-001",
  date: datetime.today().display("[month repr:long] [day], [year]"),
  recipient-name: none,
  recipient-title: none,
  recipient-company: none,
  recipient-address: none,
  subject: none,
  signatory-name: "Mr. Vaibhav Palhade",
  signatory-title: "Director",
  signatory-dept: "Marketing Kernal Private Limited",
  include-signature: false,
  watermark: true,
  body
) = {
  // Page Configuration (Standard A4 Corporate Stationery)
  set page(
    paper: "a4",
    margin: (top: 4.2cm, bottom: 3.2cm, left: 2.4cm, right: 2.4cm),
    header-ascent: 20%,
    footer-descent: 25%,
    
    // Background Watermark (Official MK Ribbon Emblem)
    background: if watermark {
      place(
        center + horizon,
        image("../assets/mk-icon.png", width: 45%)
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
            #grid(
              columns: (auto, 1fr),
              gutter: 10pt,
              align: (left + horizon, left + horizon),
              [
                #image("../assets/mk-icon.png", width: 1.35cm)
              ],
              [
                #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"))
                #text(size: 15.5pt, weight: "bold", fill: brand-obsidian)[Marketing ]
                #text(size: 15.5pt, weight: "bold", fill: brand-mid)[Kernal] \
                #v(-3pt)
                #text(size: 5.6pt, weight: "bold", fill: text-muted, spacing: 180%)[AI-POWERED GROWTH & VISIBILITY PARTNER] \
                #v(-4pt)
                #text(size: 6.8pt, fill: rgb("#94A3B8"))[Marketing Kernal Private Limited]
              ]
            )
          ],
          [
            #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"), size: 7.2pt, fill: text-muted, spacing: 120%)
            #align(right)[
              *Marketing Kernal Private Limited* \
              *CIN: U62011ME2026PTC477307* \
              Web: #link("https://marketingkernal.com")[marketingkernal.com] \
              Email: #link("mailto:info@marketingkernal.com")[info@marketingkernal.com] \
              Tel: +91 9172648748
            ]
          ]
        )
        #v(4pt)
        #line(length: 100%, stroke: 1.8pt + brand-mid)
      } else {
        // Subsequent Pages: Running Header
        grid(
          columns: (1fr, auto),
          align: (left + bottom, right + bottom),
          [
            #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"), size: 8pt, fill: text-muted)
            #image("../assets/mk-icon.png", width: 0.5cm)
            #h(6pt)
            *MARKETING KERNAL PRIVATE LIMITED* | #doc-ref
          ],
          [
            #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"), size: 8pt, fill: text-muted)
            #date
          ]
        )
        #v(2pt)
        #line(length: 100%, stroke: 0.5pt + brand-border)
      }
    },
    
    // Footer: Corporate Headquarters, Official Registered Address & Page Counter
    footer: context {
      let page-num = counter(page).get().first()
      let total-pages = counter(page).final().first()
      
      line(length: 100%, stroke: 0.5pt + brand-border)
      #v(3pt)
      grid(
        columns: (1fr, auto),
        align: (left + top, right + top),
        [
          #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"), size: 6.8pt, fill: text-muted)
          *Regd. Office:* Marketing Kernal Private Limited, Awasti Layout, Big Umari, Jatherpeth, Akola, Maharashtra, India - 444005 \
          *CIN:* U62011ME2026PTC477307 &bull; *Confidentiality:* Privileged communication issued under official governance standards.
        ],
        [
          #set text(font: ("Plus Jakarta Sans", "Inter", "Arial"), size: 7.5pt, fill: brand-deep, weight: "bold")
          Page #page-num of #total-pages
        ]
      )
    }
  )

  // Typography Settings
  set text(
    font: ("Plus Jakarta Sans", "Inter", "Helvetica Neue", "Arial"),
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
      #set text(size: 8pt, fill: brand-deep, weight: "bold")
      #rect(
        fill: brand-tint,
        radius: 3pt,
        inset: (x: 7pt, y: 4pt),
        stroke: 0.5pt + brand-border
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
      stroke: (left: 2.5pt + brand-mid),
      inset: (left: 10pt),
      [
        #set text(size: 9.5pt, spacing: 130%)
        #text(fill: brand-deep, size: 8pt, weight: "bold")[TO:] \
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
      fill: brand-tint,
      stroke: (left: 3.5pt + brand-glow, rest: 0.5pt + brand-border),
      radius: (right: 4pt),
      inset: (x: 12pt, y: 8pt),
      [
        #set text(size: 10.5pt, weight: "bold", fill: brand-obsidian)
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
      #v(3pt)
      #text(size: 10pt, weight: "bold", fill: brand-obsidian)[For Marketing Kernal Private Limited]
      
      #v(6pt)
      #if include-signature {
        image("../assets/signature-placeholder.svg", width: 4.5cm)
        #v(4pt)
      } else {
        #v(35pt)
      }
      
      #line(length: 5.5cm, stroke: 0.8pt + brand-border)
      #v(2pt)
      #text(size: 10pt, weight: "bold", fill: brand-obsidian)[#signatory-name] \
      #text(size: 8.5pt, fill: brand-deep, weight: "semibold")[#signatory-title] \
      #text(size: 8pt, fill: text-muted)[#signatory-dept]
    ]
  )
}
