// Central data model for the Services ecosystem. Add a category here and
// it gets a nav entry, a landing page card, and a full detail page for
// free — no new components needed for ordinary growth of the service list.

export const serviceCategories = [
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    icon: "BookOpenCheck",
    tagline: "Books that are ready for a bank, an investor, or a tax notice on any given day.",
    heroSubtext:
      "Monthly, reconciled, review-ready accounting for businesses that don't have time to chase their own numbers.",
    metaTitle: "Accounting & Bookkeeping Services",
    metaDescription:
      "Monthly bookkeeping, MIS reporting, and financial statement preparation from Anand Shyam & Associates, Chartered Accountants in Kolkata.",
    overview:
      "Most businesses don't lose money because of bad decisions — they lose it because the numbers arrive too late to decide anything. We keep your books current, not just compliant, so you know your cash position, your receivables, and your margins before they become a problem instead of after.",
    subServices: [
      {
        title: "Monthly Bookkeeping",
        icon: "BookOpenCheck",
        description:
          "Every transaction entered, categorized, and reconciled on a fixed monthly schedule — not a scramble each March.",
      },
      {
        title: "MIS & Management Reporting",
        icon: "FileBarChart",
        description:
          "Reports built for decisions, not just filing: cash flow, margin by product line, and receivable ageing on request.",
      },
      {
        title: "Bank & Ledger Reconciliation",
        icon: "Repeat",
        description:
          "Bank statements matched against your books every month, so discrepancies get caught in weeks, not years.",
      },
      {
        title: "Financial Statement Preparation",
        icon: "FileSpreadsheet",
        description:
          "P&L, balance sheet, and cash flow statements prepared to schedule for management, lenders, or investors.",
      },
      {
        title: "Accounts Payable & Receivable",
        icon: "Coins",
        description:
          "Vendor payment tracking and customer collection follow-up built into your monthly cycle, not left to chase later.",
      },
      {
        title: "Year-End Closing & Audit Handover",
        icon: "ClipboardCheck",
        description:
          "Books closed and reconciled ahead of your statutory audit, with a clean handover file for your auditor.",
      },
    ],
    benefits: [
      {
        title: "Real-Time Financial Visibility",
        icon: "TrendingUp",
        description: "Know your cash position and margins this month, not three months from now.",
      },
      {
        title: "Audit-Ready, Always",
        icon: "ShieldCheck",
        description: "No year-end scramble — your books are reconciled and explainable every single month.",
      },
      {
        title: "Fewer Costly Errors",
        icon: "BadgeCheck",
        description: "Monthly reconciliation catches mismatched entries while they're still cheap to fix.",
      },
      {
        title: "More Time on the Business",
        icon: "Clock",
        description: "Hand off the ledger work and spend your hours on customers and growth instead.",
      },
    ],
    faqs: [
      {
        q: "How often will I actually see my numbers?",
        a: "Monthly, on a fixed schedule you agree with us upfront — not only when you ask, and not only at year-end. Most clients get a management report within the first two weeks of the following month.",
      },
      {
        q: "Can you work with our existing software (Tally, Zoho Books, QuickBooks)?",
        a: "Yes. We work inside whatever system you already use rather than forcing a migration, unless your current setup genuinely can't support your reporting needs — in which case we'll tell you plainly and explain why.",
      },
      {
        q: "We're a small business — is this overkill for us?",
        a: "It's actually smaller businesses that benefit most, since you rarely have an in-house accountant catching errors early. Monthly bookkeeping scaled to your transaction volume, not a one-size enterprise package.",
      },
      {
        q: "What happens if we've fallen behind on our books?",
        a: "We handle catch-up bookkeeping regularly — it's one of the most common calls we get. We'll quote a fixed fee to bring you current, then move you onto a monthly cycle from there.",
      },
    ],
  },
  {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    icon: "ShieldCheck",
    tagline: "Independent assurance that stands up to lenders, regulators, and your own board.",
    heroSubtext:
      "Statutory, internal, and tax audits conducted with the rigor your stakeholders expect and the practicality your business needs.",
    metaTitle: "Audit & Assurance Services",
    metaDescription:
      "Statutory audit, internal audit, tax audit, and due diligence services from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "An audit done purely to tick a compliance box tells you nothing you didn't already suspect. We treat every engagement as a genuine review of what's working and what isn't in your financial controls — so the findings are useful to you, not just defensible to a regulator.",
    subServices: [
      {
        title: "Statutory Audit",
        icon: "ShieldCheck",
        description:
          "Independent audit of financial statements under the Companies Act, delivered with a clear management letter, not just a signed report.",
      },
      {
        title: "Internal Audit",
        icon: "ClipboardCheck",
        description:
          "A structured review of your internal controls and processes to catch operational risk before it becomes a financial one.",
      },
      {
        title: "Tax Audit",
        icon: "FileCheck2",
        description:
          "Audit under Section 44AB completed and filed within deadline, with working papers that hold up under scrutiny.",
      },
      {
        title: "Stock Audit",
        icon: "Building2",
        description: "Physical stock verification and valuation review for lenders, insurers, or your own management.",
      },
      {
        title: "Concurrent Audit",
        icon: "Search",
        description: "Ongoing, real-time transaction review for banks and NBFCs requiring ongoing assurance coverage.",
      },
      {
        title: "Due Diligence",
        icon: "FileSpreadsheet",
        description:
          "Financial due diligence for M&A, investment, or lending decisions — the numbers behind the deal, verified.",
      },
    ],
    benefits: [
      {
        title: "Credibility With Stakeholders",
        icon: "Award",
        description: "An independent opinion lenders, investors, and regulators actually trust.",
      },
      {
        title: "Early Warning on Risk",
        icon: "ShieldAlert",
        description: "Control weaknesses surfaced in the audit, not discovered later in a crisis.",
      },
      {
        title: "Regulatory Confidence",
        icon: "BadgeCheck",
        description: "Statutory and tax audit obligations met on time, every time, with clean documentation.",
      },
      {
        title: "Sharper Decision-Making",
        icon: "TrendingUp",
        description: "A management letter that tells you what to actually fix, not just what passed.",
      },
    ],
    faqs: [
      {
        q: "Is a statutory audit mandatory for my company?",
        a: "Every private and public limited company registered under the Companies Act requires a statutory audit regardless of turnover. Tax audit applicability depends on turnover thresholds under the Income Tax Act — we'll confirm exactly where you stand in an initial call.",
      },
      {
        q: "Will the audit disrupt our day-to-day operations?",
        a: "We plan fieldwork around your business cycle and request documentation in structured batches rather than all at once, so your team isn't pulled off their regular work for an extended stretch.",
      },
      {
        q: "What's the difference between internal and statutory audit?",
        a: "Statutory audit is a legal requirement focused on whether your financial statements are accurate. Internal audit is optional and focused on whether your processes and controls are actually working — the two answer different questions and often surface different findings.",
      },
      {
        q: "Do you audit companies outside Kolkata?",
        a: "Yes — concurrent and stock audits in particular are often conducted at client or branch locations across India, and much of the documentation review happens remotely regardless of location.",
      },
    ],
  },
  {
    slug: "taxation",
    name: "Taxation",
    icon: "Receipt",
    tagline: "Every rupee of tax you legally owe. Not one rupee more.",
    heroSubtext:
      "Direct tax and GST handled end-to-end — filing, planning, notices, and everything in between.",
    metaTitle: "Direct Tax & GST Services",
    metaDescription:
      "Income tax filing, tax planning, and GST registration, returns, and compliance from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "Tax compliance and tax planning are two different skills, and most firms are only good at one. We file on time because that's table stakes — the real value is in structuring your affairs in advance so there are fewer surprises, and fewer rupees paid, when the deadline actually arrives.",
    subServices: [
      {
        title: "Direct Tax",
        icon: "Receipt",
        description:
          "Income tax return filing for individuals, firms, and companies; advance tax planning; TDS compliance; and representation in assessments and appeals when a notice arrives.",
      },
      {
        title: "GST Services",
        icon: "FileCheck2",
        description:
          "GST registration, monthly and annual return filing, input credit reconciliation, GST audit, and refund claims — with notices and departmental queries handled directly.",
      },
    ],
    benefits: [
      {
        title: "Legally Minimized Tax Outflow",
        icon: "TrendingUp",
        description: "Structured planning ahead of deadlines, not reactive filing after the fact.",
      },
      {
        title: "Zero Missed Deadlines",
        icon: "CalendarCheck2",
        description: "A compliance calendar tracks every return and payment due date on your behalf.",
      },
      {
        title: "Notice-Ready Documentation",
        icon: "ShieldCheck",
        description: "Filings backed by working papers that hold up if the department asks questions.",
      },
      {
        title: "One Point of Contact",
        icon: "Users",
        description: "Direct tax and GST handled by the same team, so nothing falls between two specialists.",
      },
    ],
    faqs: [
      {
        q: "I've received an income tax notice — can you help?",
        a: "Yes, this is one of our most common engagements. Bring us the notice as soon as you receive it — most have response deadlines, and an early start gives us far more room to respond properly.",
      },
      {
        q: "How is GST return filing priced?",
        a: "It depends on your transaction volume and number of GSTINs, not a flat fee regardless of size. We'll quote a clear monthly rate once we understand your filing frequency and volume.",
      },
      {
        q: "Can you help reduce my tax liability, or just file returns?",
        a: "Planning is where we add the most value — reviewing your structure, investments, and timing well before the financial year closes, not just filing whatever the numbers happen to be in March.",
      },
      {
        q: "We're a small business below the GST threshold — do we still need you?",
        a: "Possibly not for GST specifically, but voluntary registration can make sense if your customers are GST-registered businesses claiming input credit. We'll give you a straight answer on whether it helps or not.",
      },
    ],
  },
  {
    slug: "business-registration",
    name: "Business Registration & Compliance",
    icon: "Building2",
    tagline: "From idea to incorporated, without the paperwork slowing you down.",
    heroSubtext:
      "Company and LLP incorporation, startup registration, and the ongoing ROC compliance that keeps you in good standing after.",
    metaTitle: "Business Registration & ROC Compliance Services",
    metaDescription:
      "Company incorporation, LLP registration, startup services, and ROC/annual compliance from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "Incorporating a company is the easy part — most compliance trouble starts eighteen months later, when annual filings, director KYC, and ROC deadlines pile up on a founder who's busy running the business. We handle both ends: getting you registered correctly, and keeping you compliant every year after without you having to track it yourself.",
    subServices: [
      {
        title: "Company Incorporation",
        icon: "Building2",
        description:
          "Private limited, public limited, or Section 8 company registration, handled end-to-end with the ROC.",
      },
      {
        title: "LLP Registration",
        icon: "Handshake",
        description: "Limited Liability Partnership formation for firms wanting partnership flexibility with liability protection.",
      },
      {
        title: "Startup Services",
        icon: "Rocket",
        description:
          "DPIIT startup recognition, funding-readiness documentation, and structuring guidance for early-stage founders.",
      },
      {
        title: "ROC Compliance",
        icon: "ClipboardCheck",
        description: "Event-based ROC filings — share allotments, director changes, charge registration — filed as they occur.",
      },
      {
        title: "Annual Compliance",
        icon: "CalendarCheck2",
        description: "Annual returns, financial statement filing, and board meeting documentation, tracked to a fixed yearly calendar.",
      },
      {
        title: "Director KYC",
        icon: "IdCard",
        description: "Annual DIN KYC filing for every director, so directorships never lapse for a missed form.",
      },
      {
        title: "Secretarial Services",
        icon: "ScrollText",
        description: "Statutory registers, minute books, and board resolution drafting kept current and audit-ready.",
      },
    ],
    benefits: [
      {
        title: "Correct From Day One",
        icon: "BadgeCheck",
        description: "Incorporation structured properly upfront, avoiding costly rework later.",
      },
      {
        title: "No Lapsed Compliance",
        icon: "ShieldCheck",
        description: "A tracked calendar means annual filings and KYC never slip past deadline.",
      },
      {
        title: "Investor & Lender Ready",
        icon: "TrendingUp",
        description: "Clean statutory records that don't raise red flags in due diligence.",
      },
      {
        title: "One Team, Start to Finish",
        icon: "Users",
        description: "The same firm that incorporates you also keeps you compliant every year after.",
      },
    ],
    faqs: [
      {
        q: "Private limited company or LLP — which should we register?",
        a: "It depends on whether you plan to raise external investment (private limited is generally required), your appetite for compliance overhead, and how you want liability and profit-sharing structured. We'll walk through the trade-offs against your specific plans, not give a generic answer.",
      },
      {
        q: "How long does company incorporation actually take?",
        a: "Typically 7–10 working days once we have your documents and name approval comes through, though ROC processing times do vary. We'll give you a realistic timeline once your application is filed, not an optimistic one.",
      },
      {
        q: "What happens if we miss an annual ROC filing?",
        a: "Penalties accrue per day of delay and can become substantial, and repeated defaults can affect director eligibility. If you've already missed a filing, tell us early — the earlier we're in it, the less it costs to fix.",
      },
      {
        q: "Do you handle compliance for companies incorporated elsewhere, not by you?",
        a: "Yes — a large share of our compliance clients were incorporated by someone else and came to us afterward for ongoing ROC and secretarial work. We'll review your existing filings first to confirm nothing's already lapsed.",
      },
    ],
  },
  {
    slug: "business-advisory",
    name: "Business Advisory",
    icon: "TrendingUp",
    tagline: "The financial judgment call you want a second opinion on before you make it.",
    heroSubtext:
      "Strategic financial guidance for the decisions that don't have a clear right answer in a textbook.",
    metaTitle: "Business Advisory Services",
    metaDescription:
      "Financial strategy, budgeting, cost optimization, and business valuation advisory from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "Most of the decisions that actually matter to a business — whether to expand, how to price a product line, whether an acquisition makes sense — don't have a single correct answer in a compliance manual. This is advisory work in the traditional sense: an experienced outside opinion, grounded in your actual numbers, when you're weighing a decision that's bigger than routine bookkeeping.",
    subServices: [
      {
        title: "Financial Strategy & Planning",
        icon: "TrendingUp",
        description: "Medium-term financial planning aligned to your growth targets, not just this year's budget.",
      },
      {
        title: "Budgeting & Forecasting",
        icon: "FileBarChart",
        description: "Realistic budgets and rolling forecasts built from your actual historical performance.",
      },
      {
        title: "Cost Optimization",
        icon: "Wrench",
        description: "A structured review of where money leaks in operations, and what's actually worth cutting.",
      },
      {
        title: "Investment Advisory",
        icon: "PiggyBank",
        description: "Guidance on capital allocation and investment decisions grounded in your risk appetite.",
      },
      {
        title: "Mergers & Acquisitions Support",
        icon: "Handshake",
        description: "Deal structuring, valuation input, and financial due diligence for both sides of a transaction.",
      },
      {
        title: "Business Valuation",
        icon: "Scale",
        description: "Defensible valuations for fundraising, buy-outs, succession planning, or dispute resolution.",
      },
    ],
    benefits: [
      {
        title: "Decisions Backed by Numbers",
        icon: "FileBarChart",
        description: "Financial modeling behind the call, not just gut instinct.",
      },
      {
        title: "Lower Operating Costs",
        icon: "Wrench",
        description: "Structured cost reviews find savings that routine bookkeeping never surfaces.",
      },
      {
        title: "Confidence in Big Decisions",
        icon: "ShieldCheck",
        description: "An independent second opinion before capital gets committed.",
      },
      {
        title: "Growth on a Plan",
        icon: "TrendingUp",
        description: "Expansion paced against a forecast, not against optimism alone.",
      },
    ],
    faqs: [
      {
        q: "We're a small business — is advisory only for larger companies?",
        a: "No — some of our most valuable advisory work is with smaller businesses making their first big call: a first hire, a first loan, a first expansion. The stakes are proportionally just as high for you as a larger decision is for a bigger company.",
      },
      {
        q: "How is a valuation engagement priced and how long does it take?",
        a: "It depends on the purpose (fundraising, dispute, succession) and complexity of the business, typically two to four weeks. We'll scope it and quote a fixed fee before starting, not bill by the hour with no ceiling.",
      },
      {
        q: "Can you support us through an acquisition even if the deal is being led by someone else?",
        a: "Yes — we regularly work alongside legal counsel or investment bankers, focused specifically on the financial due diligence and numbers, while other advisors handle their part of the transaction.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll & HR Compliance",
    icon: "Users",
    tagline: "Payroll that's accurate, on time, and never the reason an employee is upset.",
    heroSubtext:
      "Payroll processing and statutory HR compliance handled monthly, so nothing depends on someone remembering a due date.",
    metaTitle: "Payroll & HR Compliance Services",
    metaDescription:
      "Payroll processing, PF and ESI compliance, professional tax, and labour law compliance from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "Payroll is one of the few compliance areas where a mistake is felt immediately and personally — by an employee who got paid wrong, or short, or late. We run it as a disciplined monthly process with statutory filings built in, not a spreadsheet someone updates when they remember to.",
    subServices: [
      {
        title: "Payroll Processing",
        icon: "Users",
        description: "Monthly salary computation, payslips, and disbursement support, run to a fixed cycle every month.",
      },
      {
        title: "PF & ESI Compliance",
        icon: "ShieldCheck",
        description: "Provident Fund and ESI registration, monthly contributions, and return filing handled without gaps.",
      },
      {
        title: "Professional Tax",
        icon: "Receipt",
        description: "State professional tax registration and periodic payment compliance for your business and employees.",
      },
      {
        title: "Labour Law Compliance",
        icon: "Gavel",
        description: "Statutory registers, licenses, and filings under applicable labour legislation kept current.",
      },
      {
        title: "Employee Tax Planning",
        icon: "PiggyBank",
        description: "Salary structuring guidance that helps employees legally optimize their personal tax outcome.",
      },
      {
        title: "HR Policy Advisory",
        icon: "ScrollText",
        description: "Practical guidance on leave, reimbursement, and compensation policy from a compliance standpoint.",
      },
    ],
    benefits: [
      {
        title: "Payroll Errors Eliminated",
        icon: "BadgeCheck",
        description: "A fixed monthly process removes the last-minute scramble that causes mistakes.",
      },
      {
        title: "Statutory Filings Never Missed",
        icon: "CalendarCheck2",
        description: "PF, ESI, and professional tax filed on schedule without manual tracking on your end.",
      },
      {
        title: "Happier, Better-Informed Employees",
        icon: "Users",
        description: "Accurate payslips and salary structuring guidance employees actually understand.",
      },
      {
        title: "Reduced Labour Law Exposure",
        icon: "ShieldCheck",
        description: "Registers and licenses kept current, reducing exposure in a labour inspection.",
      },
    ],
    faqs: [
      {
        q: "At what employee count does PF/ESI registration become mandatory?",
        a: "PF applies once you cross 20 employees; ESI applies at 10 employees in most states (varies slightly by state and establishment type). We'll confirm your exact obligation and register you before it becomes a liability.",
      },
      {
        q: "Can you run payroll for a team of 5, or only larger companies?",
        a: "Yes — payroll compliance obligations exist regardless of team size, and small teams are exactly where an informal spreadsheet process tends to go wrong. We scale the service to your headcount.",
      },
      {
        q: "Do you handle payroll for employees across multiple states?",
        a: "Yes — professional tax rates and labour law requirements vary by state, and we account for each employee's actual work location rather than applying one state's rules uniformly.",
      },
    ],
  },
  {
    slug: "finance-banking",
    name: "Finance & Banking",
    icon: "Landmark",
    tagline: "The financial documentation banks actually approve, not just accept.",
    heroSubtext:
      "Loan documentation, project reports, and credit support built to how lenders actually evaluate a file.",
    metaTitle: "Finance & Banking Advisory Services",
    metaDescription:
      "Bank loan documentation, project reports, CMA data, and credit rating support from Anand Shyam & Associates, Chartered Accountants.",
    overview:
      "A loan application isn't rejected because a business is unbankable — it's usually rejected because the financial documentation didn't answer the questions a credit officer needed answered. We prepare the numbers the way lenders actually read them, because we've seen both sides of that file.",
    subServices: [
      {
        title: "Bank Loan Documentation",
        icon: "FileSpreadsheet",
        description: "Complete loan application financials prepared to the format your specific lender expects.",
      },
      {
        title: "Project Reports & CMA Data",
        icon: "FileBarChart",
        description: "Credit Monitoring Arrangement data and project feasibility reports for term loans and working capital.",
      },
      {
        title: "Working Capital Assessment",
        icon: "Coins",
        description: "Realistic working capital requirement calculation, aligned to actual operating cycle, not a rule of thumb.",
      },
      {
        title: "Credit Rating Assistance",
        icon: "BadgeCheck",
        description: "Documentation support through the credit rating process for businesses seeking a formal rating.",
      },
      {
        title: "Government Subsidy Guidance",
        icon: "Landmark",
        description: "Eligibility review and application support for applicable state and central subsidy schemes.",
      },
      {
        title: "Trade Finance Advisory",
        icon: "Globe2",
        description: "Letter of credit, bank guarantee, and export finance documentation for trading businesses.",
      },
    ],
    benefits: [
      {
        title: "Higher Loan Approval Odds",
        icon: "BadgeCheck",
        description: "Documentation prepared the way credit officers actually assess a file.",
      },
      {
        title: "Right-Sized Working Capital",
        icon: "Coins",
        description: "Financing requests based on your real operating cycle, not overestimated or underestimated.",
      },
      {
        title: "Faster Turnaround With Lenders",
        icon: "Clock",
        description: "Complete, correctly formatted files mean fewer rounds of bank queries and delays.",
      },
      {
        title: "Access to Government Support",
        icon: "Landmark",
        description: "Subsidy and scheme eligibility identified that many businesses never claim.",
      },
    ],
    faqs: [
      {
        q: "What is CMA data and do we actually need it?",
        a: "CMA (Credit Monitoring Arrangement) data is a standardized financial format banks require for term loans and working capital limits above a certain threshold. If you're applying for bank credit above roughly ₹2 crore, you'll almost certainly need it — we'll confirm your lender's specific requirement.",
      },
      {
        q: "Can you help if our loan application was already rejected once?",
        a: "Yes, and it's worth understanding why before reapplying — often it's a documentation or working capital calculation issue that's fixable, not a fundamental creditworthiness problem. We'll review the rejection reason with you first.",
      },
      {
        q: "Do you work with a specific bank, or across lenders?",
        a: "We're not tied to any single bank — we prepare documentation to what your chosen lender needs, whether that's a nationalized bank, private bank, or NBFC, and can advise on which type of lender fits your situation.",
      },
    ],
  },
  {
    slug: "specialized-services",
    name: "Specialized Professional Services",
    icon: "Award",
    tagline: "The specific certificate or registration you need, without a runaround.",
    heroSubtext:
      "PAN, TAN, DSC, IEC, FEMA advisory, NRI taxation, and certification services — handled precisely, not as an afterthought.",
    metaTitle: "Specialized Professional & Certification Services",
    metaDescription:
      "PAN/TAN application, Digital Signature Certificate, Import Export Code, FEMA advisory, NRI taxation, and certification services.",
    overview:
      "Some of the most important filings a business ever makes are also the ones-off requests: a digital signature ahead of a tender deadline, an import-export code before a first shipment, an NRI's first Indian tax return. These get handled here with the same care as our ongoing retainer work, not treated as a lesser priority because they're a single transaction.",
    subServices: [
      {
        title: "PAN / TAN Application",
        icon: "IdCard",
        description: "PAN and TAN application and correction for individuals, businesses, and trusts.",
      },
      {
        title: "Digital Signature Certificate (DSC)",
        icon: "FileSignature",
        description: "Class 3 DSC issuance for company filings, tenders, and GST/ROC portal access.",
      },
      {
        title: "Import Export Code (IEC)",
        icon: "Globe2",
        description: "IEC registration and modification for businesses starting or expanding into cross-border trade.",
      },
      {
        title: "FEMA Advisory",
        icon: "Scale",
        description: "Foreign exchange compliance for inbound investment, overseas remittance, and FDI/ODI reporting.",
      },
      {
        title: "NRI Taxation",
        icon: "Globe2",
        description: "Indian tax filing, DTAA relief, and repatriation guidance for Non-Resident Indians.",
      },
      {
        title: "Certification Services",
        icon: "Stamp",
        description: "Net worth, turnover, and other CA certificates required for tenders, visas, or bank submissions.",
      },
    ],
    benefits: [
      {
        title: "No Runaround",
        icon: "BadgeCheck",
        description: "One-off filings handled with a clear timeline, not indefinitely deprioritized.",
      },
      {
        title: "Cross-Border Confidence",
        icon: "Globe2",
        description: "FEMA and NRI matters handled by people who work in this area regularly, not occasionally.",
      },
      {
        title: "Fast Turnaround When It's Urgent",
        icon: "Clock",
        description: "DSC and certification requests turned around against real deadlines like tenders and visas.",
      },
      {
        title: "One Firm for Every Filing",
        icon: "Users",
        description: "No need to find a different specialist for each one-off registration or certificate.",
      },
    ],
    faqs: [
      {
        q: "How quickly can we get a Digital Signature Certificate?",
        a: "Typically 1–2 working days once your identity verification is complete, faster if you have a working aadhaar-based e-KYC. Tell us your deadline upfront and we'll flag immediately if it's not achievable.",
      },
      {
        q: "I'm an NRI who hasn't filed Indian taxes in a few years — where do we start?",
        a: "We start with a review of what income and assets you have in India and what filing obligations actually apply, since NRI tax exposure is often smaller than people fear. Bring whatever documents you have and we'll map out exactly what needs filing.",
      },
      {
        q: "Do we need an IEC if we only import occasionally, not regularly?",
        a: "Yes — IEC is required for any commercial import or export transaction regardless of frequency, with a small list of exemptions. It's a one-time registration, so it's worth getting before your first shipment rather than scrambling at customs.",
      },
      {
        q: "What's FEMA advisory actually for — who needs it?",
        a: "Anyone receiving foreign investment, sending money abroad beyond routine limits, or holding foreign assets as an Indian resident has FEMA reporting obligations. It's a frequently overlooked compliance area until a bank or the RBI raises a query.",
      },
    ],
  },
];

export const industries = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Trading", icon: "Store" },
  { name: "Retail", icon: "ShoppingCart" },
  { name: "Healthcare", icon: "Stethoscope" },
  { name: "Hospitality", icon: "UtensilsCrossed" },
  { name: "Construction", icon: "HardHat" },
  { name: "Professionals", icon: "Briefcase" },
  { name: "Exporters", icon: "Plane" },
  { name: "Startups", icon: "Rocket" },
  { name: "NGOs", icon: "HeartHandshake" },
  { name: "Service Businesses", icon: "Handshake" },
];

export const processSteps = [
  {
    title: "Consultation",
    description: "A direct conversation about your situation, not a sales pitch — we listen before we scope anything.",
  },
  {
    title: "Requirement Analysis",
    description: "We map exactly what applies to you: filings, deadlines, and risk areas specific to your business.",
  },
  {
    title: "Documentation",
    description: "A clear checklist of what we need from you, requested in batches so it's never overwhelming.",
  },
  {
    title: "Execution",
    description: "The actual filing, audit, or advisory work, carried out against a timeline we've agreed together.",
  },
  {
    title: "Review",
    description: "Every deliverable checked before it reaches you or a regulator — nothing goes out unreviewed.",
  },
  {
    title: "Continuous Support",
    description: "The relationship continues after delivery, with your compliance calendar tracked for what's next.",
  },
];

export const whyChooseUsExtended = [
  {
    title: "Professional Expertise",
    icon: "GraduationCap",
    description: "Two decades of ICAI-qualified experience across audit, tax, and advisory work.",
  },
  {
    title: "Accuracy",
    icon: "BadgeCheck",
    description: "Every filing reviewed before submission — precision isn't negotiable in this work.",
  },
  {
    title: "Confidentiality",
    icon: "Lock",
    description: "Your financial information handled with the discretion it deserves, always.",
  },
  {
    title: "Technology Driven",
    icon: "Cpu",
    description: "Modern accounting and compliance tools that make your data accessible, not locked in a filing cabinet.",
  },
  {
    title: "Personalized Service",
    icon: "Users",
    description: "You work directly with experienced professionals, not a rotating cast of juniors.",
  },
  {
    title: "Fast Turnaround",
    icon: "Zap",
    description: "Realistic timelines, met — urgent requests flagged and handled with real urgency.",
  },
  {
    title: "Ethical Practice",
    icon: "Scale",
    description: "Advice grounded in what's compliant and defensible, not just what's convenient.",
  },
  {
    title: "Regulatory Compliance",
    icon: "ShieldCheck",
    description: "A tracked compliance calendar means deadlines are never left to memory.",
  },
];

export const landingFaqs = [
  {
    q: "I'm not sure which service I actually need — where do I start?",
    a: "Start with a call, not with picking a category off this page. Tell us what's prompting the search — a notice, a new business, a lender's request — and we'll tell you plainly what applies, including if the answer is simpler than you expected.",
  },
  {
    q: "Do you work with businesses outside Kolkata?",
    a: "Yes. Most of our ongoing work — bookkeeping, tax filing, compliance — is handled remotely regardless of location, and we travel for audit fieldwork and in-person meetings when a client needs it.",
  },
  {
    q: "How are your fees structured?",
    a: "It depends on the service — some work is a fixed monthly retainer (bookkeeping, payroll, compliance), some is a fixed one-time fee (incorporation, a certificate), and some is scoped after an initial review (audits, advisory). We agree the fee before starting, not after.",
  },
  {
    q: "Can one firm really handle everything from bookkeeping to FEMA advisory?",
    a: "That range is exactly why clients consolidate with one CA firm instead of five specialists — your bookkeeper, auditor, and tax advisor are working from the same numbers instead of three different versions of them.",
  },
  {
    q: "Do you offer an initial consultation before we commit to anything?",
    a: "Yes, an initial call costs you nothing and commits you to nothing. Its purpose is to understand your situation well enough to tell you honestly whether and how we can help.",
  },
];

export const getServiceBySlug = (slug) => serviceCategories.find((s) => s.slug === slug);
