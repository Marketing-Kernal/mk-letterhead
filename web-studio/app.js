// ==============================================================================
// MARKETING KERNAL - CORPORATE LETTERHEAD STUDIO CONTROLLER
// Real-time two-way reactive preview, preset loaders & print-to-PDF dispatch
// ==============================================================================

const PRESETS = {
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
    signatory: "pratyush",
    showSignature: true,
    showWatermark: true
  },

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
  <li><strong>Phase 1: Entity Audit (Weeks 1 - 2):</strong> Comprehensive audit of AI citations, knowledge panels, and LLM brand perception across Gemini, ChatGPT, and Perplexity.</li>
  <li><strong>Phase 2: GEO & PR Blueprint (Weeks 3 - 6):</strong> Publication of verified entity nodes, digital PR placements, and structured knowledge-base synthesis.</li>
  <li><strong>Phase 3: AI Agent Automation (Weeks 7 - 10):</strong> Custom automated monitoring agent deployment to continuously track prompt share of voice.</li>
</ul>
<p><strong>Commercial Terms & Investment:</strong> Total engagement fee is $14,500 USD (Net of statutory taxes), billed 40% upon mobilization, 30% at Milestone 2, and 30% upon final delivery. This commercial proposal remains firm and valid for 30 calendar days from the date of issuance.</p>
<p>To accept this proposal and authorize project mobilization, please countersign and return a scanned copy to info@marketingkernal.com.</p>`,
    signatory: "vaibhav",
    showSignature: true,
    showWatermark: true
  },

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
    signatory: "tejas",
    showSignature: true,
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
    signatory: "pratyush",
    showSignature: true,
    showWatermark: true
  }
};

const SIGNATORIES = {
  pratyush: {
    name: "Pratyush Shrivastava",
    title: "Co-Founder & Director",
    dept: "Executive Leadership & Growth"
  },
  vaibhav: {
    name: "Vaibhav Palhade",
    title: "Co-Founder & Director",
    dept: "Client Delivery & AI Strategy"
  },
  tejas: {
    name: "Tejas Guruo",
    title: "Co-Founder & Director",
    dept: "People Operations & Engineering"
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
    viewSubjectBanner.style.display = "block";
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
  viewSignatoryName.textContent = inputSignatoryName.value || "Authorized Signatory";
  viewSignatoryTitle.textContent = inputSignatoryTitle.value || "Director";
  viewSignatoryDept.textContent = inputSignatoryDept.value || "Executive Leadership";

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
  const data = PRESETS[key];
  if (!data) return;

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

// Reset Button
resetBtn.addEventListener("click", () => {
  if (confirm("Reset letterhead editor to blank template?")) {
    inputDocType.value = "OFFICIAL CORRESPONDENCE";
    inputDocRef.value = "MK/2026/DOC-001";
    inputDate.value = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    inputRecipientName.value = "";
    inputRecipientTitle.value = "";
    inputRecipientCompany.value = "";
    inputRecipientAddress.value = "";
    inputSubject.value = "";
    inputSalutation.value = "Dear Sir/Madam,";
    inputBody.value = "<p>Please enter your document text here...</p>";
    updatePreview();
  }
});

// Print Dispatch
printBtn.addEventListener("click", () => {
  window.print();
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPreset("formal");
});
