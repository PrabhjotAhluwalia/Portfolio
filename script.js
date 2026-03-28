const dot=document.getElementById('curDot'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function ar(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar);})();
document.querySelectorAll('a,button,.cs-card,.exp-card,.sk-tile,.cc-card,.pill').forEach(el=>{
  el.addEventListener('mouseenter',()=>{dot.style.width='16px';dot.style.height='16px';dot.style.background='#fb923c';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='#fb923c';});
  el.addEventListener('mouseleave',()=>{dot.style.width='10px';dot.style.height='10px';dot.style.background='var(--lav2)';ring.style.width='38px';ring.style.height='38px';ring.style.borderColor='var(--lav2)';});
});
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));
const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rl,.rr,.ru').forEach(el=>ro.observe(el));
let pos=0;const CARD=364;
function slide(d){const tr=document.getElementById('carTrack');const max=tr.children.length-3;pos=Math.max(0,Math.min(max,pos+d));tr.style.transform='translateX(-'+(pos*CARD)+'px)';}

const expD={
  ptm:{logo:'💳',bg:'var(--peach3)',co:'Paytm (India\'s largest Fintech)',ro:'Sr. Product Manager · Apr 2022 – Dec 2025 · Noida, India',items:[
    {m:'$440M',s:'Revenue',t:'<span class="cs-link" onclick="openCS(0)"><strong>MDR Pricing Engine</strong> — Owned commercial charging module for 30M gateway merchants, 10B transactions, $440M annual revenue. Identified margin leakage on BNPL & super-premium cards. Unlocked $0.5M additional annualized PAT. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'$400K',s:'Saved/yr',t:'<span class="cs-link" onclick="openCS(1)"><strong>Interchange Cost Reconciliation</strong> — Built automated reconciliation for $300M cost center (2nd largest cost driver). 15,000+ rule engine caught $300K in acquirer overcharges, prevented $400K in annual leakage. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'10M',s:'Invoices/mo',t:'<span class="cs-link" onclick="openCS(2)"><strong>Project BINARY — Invoicing Automation</strong> — Manual 50-person team invoicing 30M merchants. Built SAP Pre-Processor middleware. Automated 10M invoices/month, cut cycle 80% (9d→1d), team 50→5. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'$540K',s:'Cost Saved',t:'<span class="cs-link" onclick="openCS(3)"><strong>Salesforce → Custom Onboarding Engine</strong> — Migrated 2.5M annual merchants off $540K/yr Salesforce license. Built phased migration with native KYB APIs. Reduced fraud 60%, maintained acquisition rate. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'300K',s:'Activations',t:'<span class="cs-link" onclick="openCS(4)"><strong>RuPay Card Activation Journeys</strong> — Found 80% drop-off at discovery via Pulse funnel analytics. Built self-serve Payment Settings page + CleverTap nudges. Drove 300K monthly activations in 3 months. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'120K',s:'Churn Saved',t:'<strong>Subscription Charging Engine</strong> — Architected dynamic rental charging for 9M+ mPOS devices. Integrated CleverTap offers, CRON-based billing, retry logic. Reduced annual device churn by 120K units.'},
    {m:'2 PMs',s:'Managed',t:'<strong>Team Leadership</strong> — Promoted to Senior PM. Managed 2 Associate PMs + 1 Data Analyst. Stood up OKR cadence, ran Jira sprint planning, acted as main interface with Director/VP leadership for weekly business reviews.'}
  ]},
  gt:{logo:'🐝',bg:'var(--mint3)',co:'Georgia Institute of Technology',ro:'Graduate Assistant + Smart Stadium Project · Jan 2026 – Present · Atlanta, GA',items:[
    {m:'Research',s:'Focus',t:'<strong>Scheller College of Business — Graduate Assistant</strong> — Supporting Prof. Marco Ceccagnoli on Technology Strategy curriculum. Revamping MBA coursework by creating business case studies incorporating GenAI and ML applications.'},
    {m:'PMF',s:'Strategy',t:'<strong>Smart Stadium — Fan Engagement Platform</strong> — Building a fan-engagement and recommendation engine for in-stadium experiences at Bobby Dodd Stadium (~55K attendees). Leading PMF strategy, IoT vendor lead-generation, and Spring Boot backend development.'},
    {m:'3.66',s:'GPA',t:'<strong>MSCS Coursework — AI Specialization</strong> — Machine Learning (CS7641), HCI (CS6750), Big Data & Visual Analytics (CSE6242), Graduate Algorithms (CSE6140). Building rigorous CS foundation to lead AI-driven product portfolios.'}
  ]},
  infosys:{logo:'💻',bg:'var(--lav3)',co:'Infosys',ro:'Sr. Software Engineer – Specialist Programmer · Aug 2019 – Aug 2020 · Hyderabad',items:[
    {m:'25x',s:'Agent Scale',t:'<strong>Product Optimization</strong> — Managed SDLC and architected high-level designs for a service platform serving 25x service agents. Improved customer satisfaction (CSAT) by 50% through performance and UX improvements.'},
    {m:'6',s:'Sprints',t:'<strong>E-Commerce PWA</strong> — Built end-to-end progressive web app using full-stack (MongoDB, Express, React, Node). Shipped in 6 sprints with automation testing — a formative experience that gave me engineering empathy as a PM.'}
  ]}
};

function openExp(k){const d=expD[k];const ml=document.getElementById('mLogo');ml.textContent=d.logo;ml.style.background=d.bg;ml.style.fontSize='28px';document.getElementById('mCo').textContent=d.co;document.getElementById('mRo').textContent=d.ro;document.getElementById('mItems').innerHTML=d.items.map(i=>'<div class="mi"><div class="mi-m">'+i.m+'<small>'+i.s+'</small></div><div class="mi-t">'+i.t+'</div></div>').join('');document.getElementById('expMO').classList.add('open');document.body.style.overflow='hidden';}
function closeExpMO(e){if(e.target===document.getElementById('expMO'))closeExpMOD();}
function closeExpMOD(){document.getElementById('expMO').classList.remove('open');document.body.style.overflow='';}

const csD=[
  {
    em:'💳',
    bg:'linear-gradient(135deg,var(--peach3),var(--yellow))',
    t:'MDR Pricing Engine — $440M Revenue Portfolio',
    s:'Paytm · Monetization · Pricing Strategy · 2022–2025',
    ch:'I owned the MDR (Merchant Discount Rate) charging module for Paytm\'s Payment Gateway — the engine charging fees to 30M merchants across 10B+ annual transactions. The core problem: the system treated all card types identically. BNPL plans (Affirm/Klarna equivalents), co-branded premium cards, and super-premium cards (Amex Centurion equivalents) were all processed at standard rates, causing massive margin leakage. On top of this, GMV tiers for Credit Cards and EMI were tracked separately — merchants couldn\'t hit discount thresholds because the system split their volume in two.',
    so:'I upgraded Paytm\'s in-house Card BIN center to detect card category (retail, corporate, co-branded, super-premium) at the BIN level, coordinating with Visa, Mastercard, and 7 card-issuing banks to validate BIN ranges. I then passed these identifiers downstream to the charging engine at transaction time. I also fixed the GMV tier logic, consolidating Credit Card and EMI GMV into one unified bucket so merchants could correctly hit their discount thresholds. Built a fallback cascade to prevent zero-fee transactions, and added instrument-level revenue split columns to the Finance MIS. Designed a Leadership dashboard showing MDR revenue vs. interchange cost per instrument — so the business could see exactly where we were losing money.',
    out:[{n:'$440M',l:'Revenue Portfolio'},{n:'$0.5M',l:'Net New Annual PAT'},{n:'700K+',l:'Merchants Corrected'},{n:'4',l:'New Instruments Enabled'}],
    lrn:'Pricing is a product. Turning a static rate spreadsheet into a dynamic rule engine that reads BIN-level transaction attributes made pricing a strategic lever — not a Finance manual exercise. And the margin unlock came entirely from data analysis, not from charging merchants more.'
  },
  {
    em:'🔁',
    bg:'linear-gradient(135deg,var(--lav3),var(--mint3))',
    t:'Interchange Cost Reconciliation — $300M Cost Center',
    s:'Paytm · Operational Efficiency · Revenue Defense · 2023–2025',
    ch:'Payment processing costs to acquiring banks totaled $300M annually — Paytm\'s second-largest cost driver. The entire reconciliation process was manual: a small team used Excel to compare bank invoices against internal estimates for only the top 50 merchants. The other 29.95M merchants were completely unaudited. I ran an ad-hoc SQL grouping analysis on Card + Merchant ID combinations and discovered Axis Bank (equivalent to JPMorgan Chase) had overcharged $3,000 for a single merchant by misclassifying a retail debit card as a corporate card. Extrapolating even a 0.1% error rate across 10B transactions implied millions in undetected leakage.',
    so:'I presented the finding to leadership with a quantified risk model and got greenlit to build a full reconciliation engine. I mapped 15,000+ pricing rule combinations across card network, merchant category, and special negotiated rates for high-volume clients. Instead of building from scratch, I reused the existing MDR charging engine — parameterizing it to compute expected bank cost per transaction. Built an SFTP pipeline to receive the acquiring bank\'s daily transaction files, compared them against our expected cost on a primary key (Transaction ID + Card + Merchant), and auto-emailed discrepancy reports to Finance and Banking Alliances. Added a Maker-Checker UI for bulk rule upload with full audit trail.',
    out:[{n:'$400K+',l:'Annual Revenue Saved'},{n:'$300K',l:'Acquirer Overcharges Found'},{n:'$300M',l:'Cost Base Now Monitored'},{n:'15,000+',l:'Pricing Rules Mapped'}],
    lrn:'The biggest insight was that building an internal shadow calculation engine to audit vendor invoices at scale is not just a cost-saving exercise — it\'s a fundamental requirement for any payment processor operating at this volume. You cannot manage what you cannot measure.'
  },
  {
    em:'📄',
    bg:'linear-gradient(135deg,var(--mint3),var(--lav3))',
    t:'Project BINARY — Invoicing Automation for 30M Merchants',
    s:'Paytm · Digital Transformation · Financial Automation · 2022–2024',
    ch:'Invoicing for 30M merchants was handled manually by a 50-person Finance team using Excel files. Revenue reports required manual aggregation, data enrichment for Profit Centers and GL Codes was done by separate teams, and the entire process had a 9-day cycle time. This caused massive merchant support ticket volume and made invoice disputes nearly impossible to resolve quickly. For enterprise merchants with multi-state locations, there was no way to consolidate invoices — every location got a separate bill.',
    so:'I designed "BINARY" — an SAP Pre-Processor middleware that sat between Paytm\'s data layer and SAP ERP. It consumed daily MIS reports, aggregated charges at the Merchant-Instrument level, and prepared structured data for SAP invoice creation. I engineered the SAP integration using the Business Partner model: a single merchant Business Partner could hold multiple roles (Payment Gateway Role, Device Rental Role, Audio Confirmation Device Role) — consolidating all charges into one invoice. For enterprise merchants, the system parsed Federal Tax IDs (EIN equivalents) to map Parent/Child hierarchies, enabling national or state-level consolidated billing. Built a Maker-Checker frontend for Finance with role-based access and a 24/7 merchant-facing invoice download portal.',
    out:[{n:'10M',l:'Invoices/Month Automated'},{n:'80%',l:'Cycle Time Reduction (9d→1d)'},{n:'50→5',l:'Ops Team Headcount'},{n:'4%',l:'Contact Center Volume Down'}],
    lrn:'The biggest unlock was giving merchants self-serve invoice visibility — not just automating the backend. Once merchants could download their own invoices 24/7 and track line items, dispute volume dropped before we even finished resolving all the backend edge cases.'
  },
  {
    em:'🔄',
    bg:'linear-gradient(135deg,var(--yellow),var(--peach3))',
    t:'Salesforce → Custom Onboarding Engine Migration',
    s:'Paytm · Digital Transformation · Merchant Onboarding · 2022–2023',
    ch:'At 2.5M new merchants acquired per year, legacy Salesforce licensing costs had ballooned to $540K annually. Worse: Salesforce lacked native KYB (Know Your Business) validation hooks, so fake merchant applications slipped through — fraud rates were unacceptably high. The system also had 6 fragile point-to-point integrations with downstream systems like Pricing, Invoicing, and SAP, causing data inconsistencies that generated incorrect fee charges.',
    so:'I ran the migration in three phases to avoid disrupting live acquisition. Phase 1: Shadow Mode — new applications continued through Salesforce but were mirrored into the new engine to validate schemas and KYB triggers without affecting live traffic. Phase 2: Partial Cutover — new merchant signups routed directly to the new engine while Salesforce remained active for historical merchants. Phase 3: Batch Migration — exported and transformed millions of historical records, ran validation scripts to catch legacy data inconsistencies before final import. Built an API gateway handling onboarding across multiple acquiring banks using penny drop verification, name match validation, and async callbacks. Established a Central Data Store as the single system of record, with bidirectional API sync eliminating all 6 point-to-point integrations.',
    out:[{n:'$540K',l:'Annual Licensing Eliminated'},{n:'60%',l:'Fraud Reduction'},{n:'2.5M',l:'Annual Merchants Maintained'},{n:'6',l:'Legacy Integrations Removed'}],
    lrn:'Phased rollouts using shadow mode are critical for zero-downtime migrations on live acquisition funnels. The 3-month migration with continuous validation meant we never dropped a single merchant application — and the downstream data quality improvements paid dividends every sprint after launch.'
  },
  {
    em:'📱',
    bg:'linear-gradient(135deg,var(--mint3),var(--yellow))',
    t:'RuPay Card Activation — 300K Monthly Activations',
    s:'Paytm · Merchant UX · Growth · 2024–2025',
    ch:'Banks started issuing RuPay Credit Cards that worked instantly on UPI rails — a massive growth opportunity. But our analytics showed adoption was completely flat despite the feature being technically live. I conducted VoC research with 50+ merchants, segmenting by business type (retail, restaurants, online), merchant size, and existing payment methods to avoid selection bias. The finding was stark: merchants had no idea they could accept RuPay Credit Cards via QR. The option was buried three levels deep in a legacy "My Services" menu.',
    so:'I built funnel analysis using product analytics (Pulse events: merchant_id, timestamp, OS, app version, event names) and tracked the journey from App Open → My Settings → Payment Charges Page → RuPay CC Toggle → Activation Success. Found an 80% drop-off right at the My Settings page — this was discovery friction, not product rejection. I redesigned the flow with a dedicated "Payments Settings" page where merchants could self-activate via simple toggles, with transparent fee disclosures per transaction type. Created CleverTap activation funnels showing merchants their average revenue uplift from enabling cards. Mapped the full RuPay Card journey from merchant enabling to consumer first transaction, ran A/B tests on placement, and built a proactive deactivation bottom-sheet to prevent churn.',
    out:[{n:'300K',l:'Monthly Activations'},{n:'80%',l:'Drop-Off Point Found & Fixed'},{n:'3mo',l:'To Scale Results'},{n:'#3',l:'Credit Card Instrument on Platform'}],
    lrn:'Never assume low adoption means a bad product. Always start with funnel analysis and distinguish discovery friction from activation friction — they require completely different solutions. The 80% drop-off at the My Settings page told us exactly where to invest, not what to rebuild.'
  }
];

function openCS(i){const d=csD[i];const b=document.getElementById('csmBanner');b.textContent=d.em;b.style.background=d.bg;b.style.fontSize='60px';document.getElementById('csmTtl').textContent=d.t;document.getElementById('csmSub').textContent=d.s;document.getElementById('csmBody').innerHTML='<div class="csm-sec"><h4>🎯 The Challenge</h4><p>'+d.ch+'</p></div><div class="csm-sec"><h4>💡 My Approach</h4><p>'+d.so+'</p></div><div class="csm-sec"><h4>📈 Results</h4><div class="csm-res">'+d.out.map(o=>'<div class="csr"><div class="csr-n">'+o.n+'</div><div class="csr-l">'+o.l+'</div></div>').join('')+'</div></div><div class="csm-sec"><h4>🧠 Key Learning</h4><p>'+d.lrn+'</p></div>';document.getElementById('csmoOv').classList.add('open');document.body.style.overflow='hidden';}
function closeCSmO(e){if(e.target===document.getElementById('csmoOv'))closeCSMOD();}
function closeCSMOD(){document.getElementById('csmoOv').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeExpMOD();closeCSMOD();}});
