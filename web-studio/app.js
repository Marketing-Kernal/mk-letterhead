// ==============================================================================
// MARKETING KERNAL PRIVATE LIMITED - CORPORATE LETTERHEAD STUDIO CONTROLLER
// Signatory: Mr. Vaibhav Palhade, Director, Marketing Kernal Private Limited
// CIN: U62011ME2026PTC477307 | Akola, Maharashtra, India - 444005
// ==============================================================================

const SIGNATORIES = {
  vaibhav: {
    name: "Mr. Vaibhav Palhade",
    title: "Director",
    dept: "Marketing Kernal Private Limited"
  },
  pratyush: {
    name: "Pratyush Shrivastava",
    title: "Co-Founder & Director",
    dept: "Executive Leadership & Growth Strategy"
  },
  tejas: {
    name: "Tejas Guruo",
    title: "Co-Founder & Director",
    dept: "People Operations & Engineering"
  }
};

const PRESETS = {
  // ==========================================
  // REGULATORY, DSC & STATUTORY DECLARATIONS
  // ==========================================
  xtratrust_dsc: {
    docType: "DECLARATION",
    docRef: "MK/2026/DECL-DSC-001",
    date: "30-10-2026",
    recipientName: "XtraTrust DigiSign Private Limited.",
    recipientTitle: "",
    recipientCompany: "",
    recipientAddress: "",
    subject: "Declaration for Non-Submission of Bank Statement",
    salutation: "Dear Sir/Madam,",
    body: `<p>We hereby declare that we have incorporated our Company by the name of <strong>Marketing Kernal Private Limited</strong> on <strong>22-10-2026</strong>. The said document is being submitted to you. We are in the process of opening our current bank account.</p>
<p>In lieu of a bank statement or letter as required, we are providing this declaration as confirmation of our company incorporation and intent to open the Bank Account as stated above. Please consider this declaration Letter as a substitute to bank account statement/Bank Letter for XtraTrust DSC Issuance.</p>
<p>Thank You.</p>
<div style="margin-top: 18px; display: flex; justify-content: space-between;">
  <div>
    <strong>Place:</strong> Akola<br>
    <strong>Date:</strong> 30-10-2026
  </div>
  <div style="text-align: right; font-weight: 700; color: #64748B;">
    Seal &amp; Sign
  </div>
</div>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  bank_resolution: {
    docType: "BOARD RESOLUTION",
    docRef: "MK/2026/RES-BNK-001",
    date: "30-10-2026",
    recipientName: "The Branch Manager",
    recipientTitle: "Corporate Commercial Banking",
    recipientCompany: "Commercial Banking Partner",
    recipientAddress: "Akola, Maharashtra",
    subject: "Board Resolution for Opening Corporate Current Bank Account",
    salutation: "Dear Sir/Madam,",
    body: `<p><strong>CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF MARKETING KERNAL PRIVATE LIMITED (CIN: U62011ME2026PTC477307) HELD ON 24-10-2026 AT THE REGISTERED OFFICE.</strong></p>
<p><strong>RESOLVED THAT</strong> a Corporate Current Account in the name and style of <em>Marketing Kernal Private Limited</em> be opened with your Bank, and the Bank be and is hereby authorized to honor all cheques, drafts, bills of exchange, and promissory notes drawn, accepted, or signed on behalf of the Company.</p>
<p><strong>FURTHER RESOLVED THAT</strong> <strong>Mr. Vaibhav Palhade</strong>, Director, be and is hereby singly authorized to sign and execute all account opening forms, declarations, KYC documentation, internet banking mandates, and operate the said account on behalf of the Company.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  statutory_undertaking: {
    docType: "STATUTORY UNDERTAKING",
    docRef: "MK/2026/UND-002",
    date: "30-10-2026",
    recipientName: "Registrar of Companies / Regulatory Authorities",
    recipientTitle: "Ministry of Corporate Affairs",
    recipientCompany: "Government of India",
    recipientAddress: "Maharashtra, India",
    subject: "Statutory Undertaking & Compliance Declaration",
    salutation: "Respected Authorities,",
    body: `<p>We, <strong>Marketing Kernal Private Limited</strong> (CIN: <strong>U62011ME2026PTC477307</strong>), incorporated on <strong>22-10-2026</strong> having our registered office at Awasti Layout, Big Umari, Jatherpeth, Akola, Maharashtra, India, - 444005, do hereby solemnly affirm and state that all statutory compliances and regulatory filings are in adherence with the Companies Act, 2013 and relevant governance standards.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  // ==========================================
  // BLANK TEMPLATES (CLEAN CANVAS)
  // ==========================================
  blank_letter: {
    docType: "OFFICIAL CORRESPONDENCE",
    docRef: "MK/2026/DOC-001",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    recipientName: "",
    recipientTitle: "",
    recipientCompany: "",
    recipientAddress: "",
    subject: "",
    salutation: "Dear Sir/Madam,",
    body: `<p>Please enter your document text here. You can write paragraphs, bullet lists, or paste text directly.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  blank_memo: {
    docType: "INTERNAL MEMORANDUM",
    docRef: "MK/2026/MEMO-001",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    recipientName: "All Departments & Teams",
    recipientTitle: "Internal Distribution",
    recipientCompany: "Marketing Kernal Private Limited",
    recipientAddress: "Akola / Remote Teams",
    subject: "Internal Operational Directive",
    salutation: "To All Team Members,",
    body: `<p>Please enter the memorandum contents here.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  // ==========================================
  // COMMERCIAL & CLIENT SOW
  // ==========================================
  proposal: {
    docType: "COMMERCIAL PROPOSAL & SOW",
    docRef: "MK/2026/SOW-GEO-044",
    date: "October 30, 2026",
    recipientName: "Strategic Acquisitions & Marketing Committee",
    recipientTitle: "Chief Marketing Officer",
    recipientCompany: "HyperScale Cloud Systems Ltd.",
    recipientAddress: "One Canada Square, Canary Wharf\nLondon E14 5AA, United Kingdom",
    subject: "Statement of Work: Next-Gen AI Visibility, Generative Engine Optimization & Entity PR",
    salutation: "Dear Leadership Team,",
    body: `<p><strong>Marketing Kernal Private Limited</strong> is delighted to submit this formal Commercial Proposal and Scope of Work (SOW) designed to position HyperScale Cloud Systems Ltd. as the definitive solution within generative search engines worldwide.</p>
<h4>Scope of Deliverables & Timeline:</h4>
<ul>
  <li><strong>Phase 1: Entity Audit (Weeks 1 - 2):</strong> Comprehensive audit of AI citations, knowledge panels, and LLM brand perception across Gemini, ChatGPT, Claude, and Perplexity.</li>
  <li><strong>Phase 2: GEO & PR Blueprint (Weeks 3 - 6):</strong> Publication of verified entity nodes, digital PR placements, and structured knowledge-base synthesis.</li>
  <li><strong>Phase 3: AI Agent Automation (Weeks 7 - 10):</strong> Custom automated monitoring agent deployment to continuously track prompt share of voice.</li>
</ul>
<p><strong>Commercial Terms & Investment:</strong> Total engagement fee is $14,500 USD (Net of statutory taxes), billed 40% upon mobilization, 30% at Milestone 2, and 30% upon final delivery. This commercial proposal remains firm and valid for 30 calendar days from the date of issuance.</p>
<p>To accept this proposal and authorize project mobilization, please countersign and return a scanned copy to info@marketingkernal.com.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  retainer: {
    docType: "SERVICE RETAINER AGREEMENT",
    docRef: "MK/2026/RET-015",
    date: "October 30, 2026",
    recipientName: "Enterprise Brand Growth Division",
    recipientTitle: "Managing Director",
    recipientCompany: "Global Horizon Media Corp",
    recipientAddress: "55 Wall Street, Suite 1200\nNew York, NY 10005, United States",
    subject: "Monthly Retainer Agreement for Continuous Generative Engine Visibility",
    salutation: "Dear Directors,",
    body: `<p>This letter formalizes the ongoing monthly retainer agreement under which <strong>Marketing Kernal Private Limited</strong> will provide enterprise AI Discovery, Generative Engine Optimization, and Knowledge-Graph Maintenance services.</p>
<h4>Retainer Inclusions:</h4>
<ul>
  <li>Monthly generative citation benchmarking across top AI search engines.</li>
  <li>Real-time entity defense against competitive brand displacement.</li>
  <li>Dedicated AI engineering support and continuous digital PR syndication.</li>
</ul>
<p>Monthly fee: $5,000 USD billed on the 1st of each calendar month on Net-15 terms.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  quotation: {
    docType: "COMMERCIAL QUOTATION",
    docRef: "MK/2026/QT-089",
    date: "October 30, 2026",
    recipientName: "Procurement & Finance Department",
    recipientTitle: "Director of Procurement",
    recipientCompany: "Apex Innovations Inc.",
    recipientAddress: "700 Tech Gateway Boulevard\nAustin, TX 78701, USA",
    subject: "Formal Quotation: Entity SEO & Multimodal Search Deployment",
    salutation: "Dear Procurement Team,",
    body: `<p>We are pleased to provide the official pricing quotation for the requested technical search and AI optimization sprint.</p>
<h4>Investment Breakdown:</h4>
<ul>
  <li><strong>Comprehensive Entity Graph Reconstruction:</strong> $6,500 USD</li>
  <li><strong>Digital PR & Citation Authority Syndication:</strong> $4,800 USD</li>
  <li><strong>Automated Monitoring Intelligence Dashboard:</strong> $2,200 USD</li>
</ul>
<p><strong>Total Investment:</strong> $13,500 USD (Applicable taxes as per Indian corporate export provisions).</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  // ==========================================
  // CORPORATE & GOVERNANCE
  // ==========================================
  formal: {
    docType: "OFFICIAL CORRESPONDENCE",
    docRef: "MK/2026/CORR-102",
    date: "October 30, 2026",
    recipientName: "Enterprise Client Solutions",
    recipientTitle: "Vice President of Growth & Marketing",
    recipientCompany: "Vertex Global Enterprises",
    recipientAddress: "742 Silicon Valley Boulevard, Suite 500\nSan Francisco, CA 94107, USA",
    subject: "Strategic Partnership in Generative Engine Optimization (GEO) & Entity Discovery",
    salutation: "Dear Enterprise Growth Team,",
    body: `<p>On behalf of <strong>Marketing Kernal Private Limited</strong>, I am pleased to present this formal communication outlining our strategic roadmap for integrating Generative Engine Optimization (GEO) and AI Visibility frameworks within your brand's global digital ecosystem.</p>
<p>As modern search paradigms transition rapidly from keyword-indexed directories to large language models (ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews), establishing authoritative entity presence is imperative. Marketing Kernal's proprietary AI agent frameworks ensure your brand is continuously cited, indexed, and privileged across generative inference engines.</p>
<h4>Key Engagement Objectives:</h4>
<ol>
  <li><strong>Entity Graph Reconstruction:</strong> Architecting structured knowledge-graph anchors across top-tier digital authorities and ontology datasets.</li>
  <li><strong>Generative Engine Optimization (GEO):</strong> Calibrating your technical and digital PR footprint to maximize citation probability across generative answer surfaces.</li>
  <li><strong>Autonomous AI Intelligence Agents:</strong> Deploying automated monitoring workflows that track brand sentiment, prompt penetration, and citation market share.</li>
</ol>
<p>This communication and any accompanying technical annexures are subject to strict non-disclosure obligations. Both parties agree that proprietary architectures, benchmark data, and algorithmic strategies shared during this evaluation shall remain confidential.</p>
<p>We look forward to initiating our collaborative technical sprint and helping your organization establish undisputed authority in the era of generative discovery.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  mou: {
    docType: "MEMORANDUM OF UNDERSTANDING",
    docRef: "MK/2026/MOU-007",
    date: "October 30, 2026",
    recipientName: "Board of Directors & Innovation Office",
    recipientTitle: "Managing Director",
    recipientCompany: "Nexus Media & AI Holdings",
    recipientAddress: "473 Mundet Place, Suite US711336\nHillside, NJ 07205, United States",
    subject: "MoU for Bilateral AI Citation Syndication & Search Agent Research",
    salutation: "Dear Distinguished Partners,",
    body: `<p>This Memorandum of Understanding (MoU) establishes a cooperative partnership between <strong>Marketing Kernal Private Limited</strong> and <strong>Nexus Media &amp; AI Holdings</strong> for collaborative research in Large Multimodal Model (LMM) citation dynamics and synthetic search discovery.</p>
<h4>Key Areas of Bilateral Collaboration:</h4>
<ul>
  <li>Joint deployment of high-frequency AI crawl agents across emerging generative search endpoints.</li>
  <li>Cross-jurisdictional syndication of verified entity signals across Indian, North American, and European enterprise networks.</li>
  <li>Shared benchmarking of LLM hallucination resistance regarding brand attributes.</li>
</ul>
<p>This document reflects mutual intent and sets forth the foundational principles for binding commercial contracts to be executed within sixty (60) calendar days.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  authority: {
    docType: "LETTER OF AUTHORITY",
    docRef: "MK/2026/LOA-003",
    date: "October 30, 2026",
    recipientName: "To Whomsoever It May Concern",
    recipientTitle: "",
    recipientCompany: "All Regulatory & Commercial Authorities",
    recipientAddress: "India / International",
    subject: "Letter of Authority & Representation for Marketing Kernal Private Limited",
    salutation: "To Whomsoever It May Concern,",
    body: `<p>This is to certify that <strong>Marketing Kernal Private Limited</strong> (CIN: U62011ME2026PTC477307), having its registered office at Awasti Layout, Big Umari, Jatherpeth, Akola, Maharashtra, India - 444005, hereby authorizes the bearer of this letter to represent the company in corporate and contractual affairs as designated.</p>
<p>This authorization is issued pursuant to board resolutions and remains valid until expressly revoked in writing.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  // ==========================================
  // PEOPLE & HUMAN RESOURCES
  // ==========================================
  offer: {
    docType: "OFFICIAL EMPLOYMENT OFFER",
    docRef: "MK/2026/HR-OFF-019",
    date: "October 30, 2026",
    recipientName: "Aarav Sharma",
    recipientTitle: "Prospective Team Member",
    recipientCompany: "",
    recipientAddress: "Flat 402, Green Meadows Residency\nPune, Maharashtra 411038, India",
    subject: "Offer of Employment: Senior AI Growth Engineer & GEO Strategist",
    salutation: "Dear Aarav,",
    body: `<p>On behalf of <strong>Marketing Kernal Private Limited</strong>, we are thrilled to extend this formal offer of employment for the position of <strong>Senior AI Growth Engineer &amp; GEO Strategist</strong>.</p>
<p>We were deeply impressed by your technical proficiency, strategic vision in generative discovery architectures, and cultural alignment with Marketing Kernal's mission to pioneer the next generation of digital marketing.</p>
<h4>Summary of Terms & Compensation:</h4>
<ul>
  <li><strong>Position Title:</strong> Senior AI Growth Engineer &amp; GEO Strategist</li>
  <li><strong>Department:</strong> Artificial Intelligence &amp; Search Innovation</li>
  <li><strong>Work Mode:</strong> Hybrid / Remote-First with flexible core hours</li>
  <li><strong>Annual CTC:</strong> INR 18,00,000 (Eighteen Lakhs Rupees Only) per annum, structured as per company compensation standards, inclusive of performance bonuses and medical coverage.</li>
</ul>
<p>Please confirm your formal acceptance by signing and dating this document below and returning a scanned copy within five (5) business days. We look forward to welcoming you to the Marketing Kernal team!</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  internship: {
    docType: "INTERNSHIP APPOINTMENT LETTER",
    docRef: "MK/2026/HR-INT-008",
    date: "October 30, 2026",
    recipientName: "Rohan Deshmukh",
    recipientTitle: "AI Research & Digital Growth Intern",
    recipientCompany: "",
    recipientAddress: "Shivaji Nagar, Akola, Maharashtra - 444001",
    subject: "Appointment Letter for AI Marketing & GEO Research Internship",
    salutation: "Dear Rohan,",
    body: `<p>We are delighted to offer you an internship position as <strong>AI Research & Digital Growth Intern</strong> at <strong>Marketing Kernal Private Limited</strong>.</p>
<h4>Internship Terms:</h4>
<ul>
  <li><strong>Duration:</strong> 3 Months (Commencing November 15, 2026)</li>
  <li><strong>Stipend:</strong> INR 25,000 per month</li>
  <li><strong>Scope:</strong> LLM prompt benchmarking, entity node indexing, and automated content discovery sprints.</li>
</ul>
<p>Upon successful completion of the internship, you will be eligible for a full-time consideration and certificate of excellence.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  },

  experience: {
    docType: "EXPERIENCE & RELIEVING CERTIFICATE",
    docRef: "MK/2026/EXP-012",
    date: "October 30, 2026",
    recipientName: "To Whomsoever It May Concern",
    recipientTitle: "",
    recipientCompany: "",
    recipientAddress: "",
    subject: "Service Experience & Relieving Certificate",
    salutation: "To Whomsoever It May Concern,",
    body: `<p>This is to certify that <strong>Ms. Ananya Joshi</strong> was employed with <strong>Marketing Kernal Private Limited</strong> from January 15, 2025 to October 15, 2026 as a <strong>Senior SEO & AI Visibility Specialist</strong>.</p>
<p>During her tenure with us, she exhibited high professionalism, analytical capability, and dedication. She has been formally relieved of her duties at the close of business hours on October 15, 2026.</p>
<p>We wish her every success in her future career endeavors.</p>`,
    signatory: "vaibhav",
    showSignature: false,
    showWatermark: true
  }
};

// DOM References - Form Inputs
const inputDocType = document.getElementById("inputDocType");
const inputDocRef = document.getElementById("inputDocRef");
const inputDate = document.getElementById("inputDate");
const inputRecipientName = document.getElementById("inputRecipientName");
const inputRecipientTitle = document.getElementById("inputRecipientTitle");
const inputRecipientCompany = document.getElementById("inputRecipientCompany");
const inputRecipientAddress = document.getElementById("inputRecipientAddress");
const inputSubject = document.getElementById("inputSubject");
const inputSalutation = document.getElementById("inputSalutation");
const inputBody = document.getElementById("inputBody");
const signatoryPreset = document.getElementById("signatoryPreset");
const inputSignatoryName = document.getElementById("inputSignatoryName");
const inputSignatoryTitle = document.getElementById("inputSignatoryTitle");
const inputSignatoryDept = document.getElementById("inputSignatoryDept");
const toggleSignature = document.getElementById("toggleSignature");
const toggleWatermark = document.getElementById("toggleWatermark");
const templatePreset = document.getElementById("templatePreset");
const printBtn = document.getElementById("printBtn");
const resetBtn = document.getElementById("resetBtn");
const saveJsonBtn = document.getElementById("saveJsonBtn");

// DOM References - Preview View
const viewDocType = document.getElementById("viewDocType");
const viewDocRef = document.getElementById("viewDocRef");
const viewDate = document.getElementById("viewDate");
const viewRecipientSection = document.getElementById("viewRecipientSection");
const viewRecipientName = document.getElementById("viewRecipientName");
const viewRecipientTitle = document.getElementById("viewRecipientTitle");
const viewRecipientCompany = document.getElementById("viewRecipientCompany");
const viewRecipientAddress = document.getElementById("viewRecipientAddress");
const viewSubjectBanner = document.getElementById("viewSubjectBanner");
const viewSubject = document.getElementById("viewSubject");
const viewSalutation = document.getElementById("viewSalutation");
const viewBody = document.getElementById("viewBody");
const viewSignatureBox = document.getElementById("viewSignatureBox");
const viewSignatoryName = document.getElementById("viewSignatoryName");
const viewSignatoryTitle = document.getElementById("viewSignatoryTitle");
const viewSignatoryDept = document.getElementById("viewSignatoryDept");
const sheetWatermark = document.getElementById("sheetWatermark");

// DOM References - Smart Import Modal
const openImportModalBtn = document.getElementById("openImportModalBtn");
const closeImportModalBtn = document.getElementById("closeImportModalBtn");
const cancelImportBtn = document.getElementById("cancelImportBtn");
const importModal = document.getElementById("importModal");
const fileDropzone = document.getElementById("fileDropzone");
const fileInput = document.getElementById("fileInput");
const importRawText = document.getElementById("importRawText");
const importStatus = document.getElementById("importStatus");
const toggleAiEnhance = document.getElementById("toggleAiEnhance");
const aiKeyGroup = document.getElementById("aiKeyGroup");
const geminiApiKey = document.getElementById("geminiApiKey");
const processImportBtn = document.getElementById("processImportBtn");

// Load stored API key if present
if (localStorage.getItem("mk_gemini_api_key")) {
  geminiApiKey.value = localStorage.getItem("mk_gemini_api_key");
}

// Sync Functions
function updatePreview() {
  viewDocType.textContent = inputDocType.value || "OFFICIAL CORRESPONDENCE";
  viewDocRef.textContent = inputDocRef.value || "MK/2026/DOC-001";
  viewDate.textContent = inputDate.value || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // Recipient block
  const hasRecipient = inputRecipientName.value || inputRecipientTitle.value || inputRecipientCompany.value || inputRecipientAddress.value;
  viewRecipientSection.style.display = hasRecipient ? "block" : "none";
  viewRecipientName.textContent = inputRecipientName.value;
  viewRecipientName.style.display = inputRecipientName.value ? "block" : "none";
  viewRecipientTitle.textContent = inputRecipientTitle.value;
  viewRecipientTitle.style.display = inputRecipientTitle.value ? "block" : "none";
  viewRecipientCompany.textContent = inputRecipientCompany.value;
  viewRecipientCompany.style.display = inputRecipientCompany.value ? "block" : "none";
  viewRecipientAddress.textContent = inputRecipientAddress.value;
  viewRecipientAddress.style.display = inputRecipientAddress.value ? "block" : "none";

  // Subject
  if (inputSubject.value.trim()) {
    viewSubjectBanner.style.display = "flex";
    viewSubject.textContent = inputSubject.value;
  } else {
    viewSubjectBanner.style.display = "none";
  }

  // Salutation & Body
  viewSalutation.textContent = inputSalutation.value;
  viewSalutation.style.display = inputSalutation.value ? "block" : "none";

  // If body has HTML tags, render HTML; otherwise format line breaks into paragraphs
  const rawBody = inputBody.value;
  if (/<[a-z][\s\S]*>/i.test(rawBody)) {
    viewBody.innerHTML = rawBody;
  } else {
    viewBody.innerHTML = rawBody.split("\n\n").map(para => `<p>${para.replace(/\n/g, "<br>")}</p>`).join("");
  }

  // Signatory
  viewSignatoryName.textContent = inputSignatoryName.value || "Mr. Vaibhav Palhade";
  viewSignatoryTitle.textContent = inputSignatoryTitle.value || "Director";
  viewSignatoryDept.textContent = inputSignatoryDept.value || "Marketing Kernal Private Limited";

  // Toggles
  if (toggleSignature.checked) {
    viewSignatureBox.classList.remove("hidden");
  } else {
    viewSignatureBox.classList.add("hidden");
  }

  if (toggleWatermark.checked) {
    sheetWatermark.classList.remove("hidden");
  } else {
    sheetWatermark.classList.add("hidden");
  }
}

// Preset Loader
function loadPreset(key) {
  const data = PRESETS[key] || PRESETS.formal;

  inputDocType.value = data.docType;
  inputDocRef.value = data.docRef;
  inputDate.value = data.date;
  inputRecipientName.value = data.recipientName;
  inputRecipientTitle.value = data.recipientTitle;
  inputRecipientCompany.value = data.recipientCompany;
  inputRecipientAddress.value = data.recipientAddress;
  inputSubject.value = data.subject;
  inputSalutation.value = data.salutation;
  inputBody.value = data.body;
  
  if (data.signatory && SIGNATORIES[data.signatory]) {
    signatoryPreset.value = data.signatory;
    const sig = SIGNATORIES[data.signatory];
    inputSignatoryName.value = sig.name;
    inputSignatoryTitle.value = sig.title;
    inputSignatoryDept.value = sig.dept;
  }

  toggleSignature.checked = data.showSignature;
  toggleWatermark.checked = data.showWatermark;

  updatePreview();
}

// Event Listeners for Live Preview
const inputsToListen = [
  inputDocType, inputDocRef, inputDate, inputRecipientName,
  inputRecipientTitle, inputRecipientCompany, inputRecipientAddress,
  inputSubject, inputSalutation, inputBody,
  inputSignatoryName, inputSignatoryTitle, inputSignatoryDept,
  toggleSignature, toggleWatermark
];

inputsToListen.forEach(input => {
  input.addEventListener("input", updatePreview);
  input.addEventListener("change", updatePreview);
});

// Signatory Preset Selector
signatoryPreset.addEventListener("change", (e) => {
  const val = e.target.value;
  if (SIGNATORIES[val]) {
    inputSignatoryName.value = SIGNATORIES[val].name;
    inputSignatoryTitle.value = SIGNATORIES[val].title;
    inputSignatoryDept.value = SIGNATORIES[val].dept;
  }
  updatePreview();
});

// Template Preset Selector
templatePreset.addEventListener("change", (e) => {
  loadPreset(e.target.value);
});

// Reset Button -> Clean Blank Canvas
resetBtn.addEventListener("click", () => {
  if (confirm("Reset to a blank Marketing Kernal letterhead?")) {
    templatePreset.value = "blank_letter";
    loadPreset("blank_letter");
  }
});

// Print Dispatch
printBtn.addEventListener("click", () => {
  window.print();
});

// Save / Export Letterhead Data as JSON
saveJsonBtn.addEventListener("click", () => {
  const docData = {
    docType: inputDocType.value,
    docRef: inputDocRef.value,
    date: inputDate.value,
    recipient: {
      name: inputRecipientName.value,
      title: inputRecipientTitle.value,
      company: inputRecipientCompany.value,
      address: inputRecipientAddress.value
    },
    subject: inputSubject.value,
    salutation: inputSalutation.value,
    body: inputBody.value,
    signatory: {
      preset: signatoryPreset.value,
      name: inputSignatoryName.value,
      title: inputSignatoryTitle.value,
      department: inputSignatoryDept.value
    },
    options: {
      includeSignature: toggleSignature.checked,
      includeWatermark: toggleWatermark.checked
    },
    metadata: {
      companyName: "Marketing Kernal Private Limited",
      cin: "U62011ME2026PTC477307",
      incorporationDate: "22-10-2026",
      registeredAddress: "Awasti Layout, Big Umari, Jatherpeth, Akola, Maharashtra, India, - 444005",
      website: "https://marketingkernal.com",
      email: "info@marketingkernal.com",
      phone: "+91 9172648748",
      exportedAt: new Date().toISOString()
    }
  };

  const jsonString = JSON.stringify(docData, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  
  // Format clean filename: e.g. "MK-2026-DECL-DSC-001.json"
  const cleanRef = (inputDocRef.value || "letterhead").replace(/[^a-zA-Z0-9_-]/g, "_");
  a.href = url;
  a.download = `${cleanRef}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// ==============================================================================
// SMART DOCUMENT IMPORT & AI FORMATTER LOGIC
// ==============================================================================

// Open / Close Modal
openImportModalBtn.addEventListener("click", () => {
  importModal.style.display = "flex";
  importStatus.style.display = "none";
});

function closeModal() {
  importModal.style.display = "none";
}

closeImportModalBtn.addEventListener("click", closeModal);
cancelImportBtn.addEventListener("click", closeModal);
importModal.addEventListener("click", (e) => {
  if (e.target === importModal) closeModal();
});

// AI Key Toggle
toggleAiEnhance.addEventListener("change", (e) => {
  aiKeyGroup.style.display = e.target.checked ? "block" : "none";
});

// Dropzone Click & Drag
fileDropzone.addEventListener("click", () => fileInput.click());
fileDropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileDropzone.classList.add("dragover");
});
fileDropzone.addEventListener("dragleave", () => {
  fileDropzone.classList.remove("dragover");
});
fileDropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  fileDropzone.classList.remove("dragover");
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    handleFile(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files[0]) {
    handleFile(e.target.files[0]);
  }
});

function showStatus(msg, type = "info") {
  importStatus.textContent = msg;
  importStatus.className = `import-status ${type}`;
  importStatus.style.display = "block";
}

// File Reading & Parsing
async function handleFile(file) {
  showStatus(`Reading "${file.name}"...`, "info");
  const ext = file.name.split('.').pop().toLowerCase();

  try {
    if (ext === "docx" || ext === "doc") {
      if (typeof mammoth !== "undefined") {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        importRawText.value = result.value.replace(/<[^>]+>/g, '\n');
        showStatus(`Extracted content from Word document "${file.name}". Click "Apply to Letterhead" below.`, "success");
      } else {
        showStatus("Word parser loading. Please paste text directly if offline.", "error");
      }
    } else if (ext === "pdf") {
      if (typeof pdfjsLib !== "undefined") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map(item => item.str).join(" ");
          fullText += pageText + "\n\n";
        }
        importRawText.value = fullText;
        showStatus(`Extracted ${pdf.numPages} page(s) from PDF "${file.name}". Click "Apply to Letterhead" below.`, "success");
      } else {
        showStatus("PDF parser loading. Please paste text directly if offline.", "error");
      }
    } else if (ext === "json") {
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        if (data.docType) inputDocType.value = data.docType;
        if (data.docRef) inputDocRef.value = data.docRef;
        if (data.date) inputDate.value = data.date;
        if (data.recipient) {
          inputRecipientName.value = data.recipient.name || "";
          inputRecipientTitle.value = data.recipient.title || "";
          inputRecipientCompany.value = data.recipient.company || "";
          inputRecipientAddress.value = data.recipient.address || "";
        }
        if (data.subject) inputSubject.value = data.subject;
        if (data.salutation) inputSalutation.value = data.salutation;
        if (data.body) inputBody.value = data.body;
        if (data.signatory) {
          if (data.signatory.preset && SIGNATORIES[data.signatory.preset]) {
            signatoryPreset.value = data.signatory.preset;
          }
          inputSignatoryName.value = data.signatory.name || SIGNATORIES.vaibhav.name;
          inputSignatoryTitle.value = data.signatory.title || SIGNATORIES.vaibhav.title;
          inputSignatoryDept.value = data.signatory.department || SIGNATORIES.vaibhav.dept;
        }
        if (data.options) {
          if (typeof data.options.includeSignature === "boolean") {
            toggleSignature.checked = data.options.includeSignature;
          }
          if (typeof data.options.includeWatermark === "boolean") {
            toggleWatermark.checked = data.options.includeWatermark;
          }
        }
        updatePreview();
        showStatus(`Restored letterhead data from "${file.name}"!`, "success");
        setTimeout(closeModal, 600);
        return;
      } catch (jsonErr) {
        importRawText.value = text;
        showStatus(`Loaded raw JSON text from "${file.name}". Click "Apply to Letterhead" below.`, "info");
      }
    } else {
      // Plain text, markdown
      const text = await file.text();
      importRawText.value = text;
      showStatus(`Loaded "${file.name}". Click "Apply to Letterhead" below.`, "success");
    }
  } catch (err) {
    console.error("Error reading file:", err);
    showStatus(`Failed to read file: ${err.message}`, "error");
  }
}

// Intelligent Heuristic Document Extractor
function parseDocumentHeuristically(raw) {
  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  let docType = "OFFICIAL CORRESPONDENCE";
  let docRef = "MK/2026/DOC-" + Math.floor(100 + Math.random() * 900);
  let date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  let recipientName = "";
  let recipientTitle = "";
  let recipientCompany = "";
  let recipientAddress = "";
  let subject = "";
  let salutation = "Dear Sir/Madam,";
  const bodyParagraphs = [];

  let inRecipient = false;
  let recipientLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect Date
    if (/^(Date\s*:|Dated\s*:)/i.test(line)) {
      date = line.replace(/^(Date\s*:|Dated\s*:)/i, "").trim();
      continue;
    }

    // Detect Ref
    if (/^(Ref\s*:|Reference\s*:)/i.test(line)) {
      docRef = line.replace(/^(Ref\s*:|Reference\s*:)/i, "").trim();
      continue;
    }

    // Detect Subject
    if (/^(Subject\s*:|Sub\s*:|Re\s*:)/i.test(line)) {
      subject = line.replace(/^(Subject\s*:|Sub\s*:|Re\s*:)/i, "").trim();
      inRecipient = false;
      continue;
    }

    // Detect Salutation
    if (/^(Dear|To Whomsoever|Respected|Hello|Greetings)/i.test(line)) {
      salutation = line;
      inRecipient = false;
      continue;
    }

    // Detect Recipient block
    if (/^(To\s*:|Attention\s*:|Attn\s*:)/i.test(line)) {
      inRecipient = true;
      const stripped = line.replace(/^(To\s*:|Attention\s*:|Attn\s*:)/i, "").trim();
      if (stripped) recipientLines.push(stripped);
      continue;
    }

    if (inRecipient) {
      if (line.length > 0 && !/^(Subject|Dear|Dated|Ref)/i.test(line)) {
        recipientLines.push(line);
        if (recipientLines.length >= 4) inRecipient = false;
        continue;
      } else {
        inRecipient = false;
      }
    }

    // Regular body paragraphs
    bodyParagraphs.push(line);
  }

  // Parse recipient lines
  if (recipientLines.length > 0) {
    recipientName = recipientLines[0] || "";
    recipientTitle = recipientLines[1] || "";
    recipientCompany = recipientLines[2] || "";
    recipientAddress = recipientLines.slice(3).join("\n");
  }

  const formattedBody = bodyParagraphs.length > 0
    ? bodyParagraphs.map(p => `<p>${p}</p>`).join("")
    : "<p>" + raw.replace(/\n\n/g, "</p><p>") + "</p>";

  return {
    docType,
    docRef,
    date,
    recipientName,
    recipientTitle,
    recipientCompany,
    recipientAddress,
    subject: subject || "Corporate Communication",
    salutation,
    body: formattedBody
  };
}

// Dynamic discovery of supported Gemini models for the user's specific API key
async function getAvailableGeminiModel(apiKey) {
  try {
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (listRes.ok) {
      const data = await listRes.json();
      const models = data.models || [];
      const generateModels = models
        .filter(m => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes("generateContent"))
        .map(m => m.name.replace(/^models\//, ''));
      
      if (generateModels.length > 0) {
        // Pick best available flash model, then pro, then first supported
        const best = generateModels.find(m => m.includes("2.5-flash"))
                  || generateModels.find(m => m.includes("2.0-flash"))
                  || generateModels.find(m => m.includes("1.5-flash-latest"))
                  || generateModels.find(m => m.includes("1.5-flash"))
                  || generateModels.find(m => m.includes("flash"))
                  || generateModels.find(m => m.includes("pro"))
                  || generateModels[0];
        console.log("Auto-detected supported Gemini model:", best);
        return best;
      }
    }
  } catch (e) {
    console.warn("Could not query ListModels, attempting fallback cascade", e);
  }
  return null;
}

// AI Formatter via Gemini API with auto model discovery & fallback cascade
async function formatWithGemini(rawText, apiKey) {
  showStatus("Connecting to Gemini AI...", "info");
  const prompt = `You are an executive correspondence assistant for "Marketing Kernal Private Limited".
Convert the following unstructured draft or document into a polished, formal corporate letter.
Return strictly a valid JSON object without markdown formatting, following this exact schema:
{
  "docType": "OFFICIAL CORRESPONDENCE",
  "docRef": "MK/2026/DOC-108",
  "date": "Month Day, Year",
  "recipientName": "Name if found",
  "recipientTitle": "Title if found",
  "recipientCompany": "Company if found",
  "recipientAddress": "Address if found",
  "subject": "Clear, professional executive subject line",
  "salutation": "Formal salutation",
  "body": "HTML formatted body using <p>, <h4>, <ul>, <li> tags with polished corporate tone"
}

Draft Document:
${rawText}`;

  // Discover model or cascade through common Gemini models
  const detected = await getAvailableGeminiModel(apiKey);
  const candidates = [
    detected,
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-pro"
  ].filter(Boolean);

  const uniqueCandidates = [...new Set(candidates)];
  let lastError = null;

  for (const model of uniqueCandidates) {
    try {
      showStatus(`Formatting with Gemini AI (${model})...`, "info");
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textOutput) throw new Error("Empty response from AI model");

      const cleaned = textOutput.replace(/```json/gi, "").replace(/```/g, "").trim();
      return JSON.parse(cleaned);
    } catch (err) {
      console.warn(`Model ${model} failed:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error("Unable to connect to supported Gemini models");
}

// Apply Processed Import to Studio
processImportBtn.addEventListener("click", async () => {
  const raw = importRawText.value.trim();
  if (!raw) {
    showStatus("Please paste text or upload a file first.", "error");
    return;
  }

  try {
    let result;
    const apiKey = geminiApiKey.value.trim();

    if (toggleAiEnhance.checked && apiKey) {
      localStorage.setItem("mk_gemini_api_key", apiKey);
      try {
        result = await formatWithGemini(raw, apiKey);
      } catch (aiErr) {
        console.warn("Gemini formatting failed, gracefully falling back to Smart Heuristic Extractor:", aiErr);
        result = parseDocumentHeuristically(raw);
        showStatus(`Gemini Notice: ${aiErr.message}. Applied cleanly with Smart Heuristic Extractor!`, "info");
      }
    } else {
      result = parseDocumentHeuristically(raw);
    }

    // Apply to Letterhead
    inputDocType.value = result.docType || "OFFICIAL CORRESPONDENCE";
    inputDocRef.value = result.docRef || "MK/2026/DOC-108";
    inputDate.value = result.date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    inputRecipientName.value = result.recipientName || "";
    inputRecipientTitle.value = result.recipientTitle || "";
    inputRecipientCompany.value = result.recipientCompany || "";
    inputRecipientAddress.value = result.recipientAddress || "";
    inputSubject.value = result.subject || "";
    inputSalutation.value = result.salutation || "Dear Sir/Madam,";
    inputBody.value = result.body || "<p>" + raw + "</p>";

    // Ensure Mr. Vaibhav Palhade is selected as Signatory
    signatoryPreset.value = "vaibhav";
    inputSignatoryName.value = SIGNATORIES.vaibhav.name;
    inputSignatoryTitle.value = SIGNATORIES.vaibhav.title;
    inputSignatoryDept.value = SIGNATORIES.vaibhav.dept;

    updatePreview();
    closeModal();
  } catch (err) {
    console.error("Import processing error:", err);
    showStatus(`Error processing document: ${err.message}`, "error");
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  templatePreset.value = "xtratrust_dsc";
  loadPreset("xtratrust_dsc");
});
