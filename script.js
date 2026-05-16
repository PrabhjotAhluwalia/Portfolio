const dot=document.getElementById('curDot'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function ar(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar);})();
document.querySelectorAll('a,button,.cs-card,.etl-body,.sk-tile,.cc-card,.pill').forEach(el=>{
  el.addEventListener('mouseenter',()=>{dot.style.width='16px';dot.style.height='16px';dot.style.background='#fb923c';ring.style.width='52px';ring.style.height='52px';ring.style.borderColor='#fb923c';});
  el.addEventListener('mouseleave',()=>{dot.style.width='10px';dot.style.height='10px';dot.style.background='var(--lav2)';ring.style.width='38px';ring.style.height='38px';ring.style.borderColor='var(--lav2)';});
});
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));
const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rl,.rr,.ru').forEach(el=>ro.observe(el));
let pos=0;const CARD=364;
function slide(d){const tr=document.getElementById('carTrack');const max=tr.children.length-3;pos=Math.max(0,Math.min(max,pos+d));tr.style.transform='translateX(-'+(pos*CARD)+'px)';}

const expD={
  alumni:{logo:'🏟️',bg:'linear-gradient(135deg,#34d399,#a78bfa)',co:'Georgia Tech — Smart Stadium',ro:'Alumni Affiliate Researcher · Jun 2026 – Present · Atlanta, GA · Volunteer',items:[
    {m:'BT',s:'Networks',t:'<strong>Bluetooth Ad-Hoc Network Research</strong> — Researching use of Bluetooth-based ad-hoc networks to enable GT fans to connect with each other and with the mobile app server during games — without congesting cellular or WiFi networks in the stadium. Key challenge: stadium-scale mesh topology under 55K concurrent users.'},
    {m:'Mobile',s:'Fan App',t:'<strong>Fan Connectivity Mobile App</strong> — Developing and deploying mobile applications that enable football fans to connect with each other and play fun football-related games during GT games. Building on the Spring Boot + IoT beacon infrastructure from the previous Smart Stadium semester.'},
    {m:'ML',s:'Vibration',t:'<strong>Structural Vibration Sensing for Fan Excitement</strong> — Integrating a sensor network that monitors structural vibrations of the stadium to measure the level of fan excitement during and after each play. Working with the team to train ML classifiers that map vibration signatures to excitement levels in real time.'},
    {m:'AI',s:'Play Class.',t:'<strong>Real-Time Play Classification</strong> — Building ML algorithms for real-time classification of plays from video recordings and audio descriptions by radio announcers. The system will fuse multimodal inputs (computer vision + NLP on audio transcripts) to classify play type within seconds of execution.'}
  ]},
  gt:{logo:'🐝',bg:'var(--mint3)',co:'Georgia Institute of Technology',ro:'Graduate Assistant · Scheller College of Business · Jan 2026 – Apr 2026 · Atlanta, GA',items:[
    {m:'GenAI',s:'Curriculum',t:'<strong>MBA Technology Strategy Curriculum — Prof. Marco Ceccagnoli</strong> — Revamped Scheller College MBA coursework by creating business case studies integrating GenAI and ML applications into enterprise technology strategy frameworks.'},
    {m:'+64%',s:'CTR',t:'<strong>Smart Stadium — AI Poster Generation</strong> — Used Stable Diffusion + ControlNet to generate 47 demographic-personalized VIP section marketing posters across 6 game themes. Prompt engineering framework with cultural resonance layers for international student cohorts. A/B tested on Fanplay notifications: CTR 23% vs 14% baseline (+64%); VIP ticket purchases +18%.'},
    {m:'Friend',s:'Finder',t:'<strong>Friend Finder Feature — Spring Boot</strong> — Built RESTful API contracts for proximity-based Friend Finder using IoT beacon data, friend request lifecycle, and real-time notification delivery. Designed data model for user-friend relationships with O(log n) indexed lookups for stadium-scale user bases.'},
    {m:'PMF',s:'Strategy',t:'<strong>PMF & IoT Vendor Strategy</strong> — Led PMF research for VIP experience monetization. Conducted stakeholder interviews with stadium ops, athletics, and fan experience teams. Built IoT vendor evaluation matrix across 6 dimensions for Bobby Dodd Stadium deployment. Used Claude (multimodal) to analyze stadium photos and identify 3 optimal digital touchpoint locations.'}
  ]},
  ptmsr:{logo:'💳',bg:'var(--peach3)',co:'Paytm — India\'s Largest Fintech',ro:'Senior Product Manager · Apr 2023 – Mar 2025 · Noida, India',items:[
    {m:'2 PMs',s:'+ 1 DA',t:'<strong>Team Leadership</strong> — Managed 2 Associate PMs and 1 Data Analyst. Stood up OKR cadence, ran Jira sprint planning, conducted weekly 1:1s. Served as primary interface with Director/VP leadership for weekly business reviews and quarterly roadmap reviews across Engineering, Finance, Analytics, Compliance, and Business teams.'},
    {m:'3.5min',s:'Avg Handle',t:'<span class="cs-link" onclick="openCS(0)"><strong>BOSS-GPT — Internal LLM Ops Tool</strong> — Self-hosted DeepSeek V2 LLM ops assistant connected to live merchant panel data via MCP-compliant tool APIs. Deployed as Slack bot for 180 ops agents. Avg handling time 12 min → 3.5 min; 64% query self-resolution; new agent ramp-up 4 weeks → 10 days. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'78%',s:'Retention',t:'<span class="cs-link" onclick="openCS(1)"><strong>Agentic Merchant Retention System</strong> — LangChain + Claude multi-step agent scoring churn signals (transaction velocity, wallet/rental ratio, cohort benchmarks) and auto-generating personalized discounts. A/B tested: 78% vs 61% retention (+17pp). Saved 120K device returns/yr (~$420K/month GMV). <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'RAG ×3',s:'Pipelines',t:'<strong>3 RAG Pipelines Shipped</strong> — (1) Regulatory Q&A over 200+ RBI circulars: response 4-6h → 15 min. (2) Merchant support KB over 12mo tickets: resolution 18 min → 7 min, FCR +22%. (3) Commercial agreement search over 40+ acquirer contracts: lookup 2-3h → 10 min. All FAISS + sentence-transformers, self-hosted for PII compliance.'},
    {m:'78%',s:'Tool Faster',t:'<strong>MCP Migration</strong> — Migrated all AI tool-calling infrastructure to full MCP (Model Context Protocol) architecture across 4 domain servers (transaction, merchant, settlement, compliance). Tool integration time reduced 78%; tool coverage 8 → 31 tools; new agent deployment 2 weeks → 3 days.'},
    {m:'$0.5M',s:'New PAT',t:'<span class="cs-link" onclick="openCS(2)"><strong>MDR Pricing Engine ($440M Revenue)</strong> — 5-level specificity hierarchy rule engine with trie-based BIN lookup (O(k) per transaction). Identified and closed BNPL and super-premium card margin leakage. $0.5M net new annualized PAT. 700K+ merchant configurations corrected. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'300K',s:'Activations',t:'<strong>RuPay Credit Card Activation</strong> — End-to-end merchant and consumer activation flows for RuPay on UPI rails. Self-serve merchant toggle, A/B tested checkout placement. 300K monthly activations in 3 months; became 3rd-largest credit instrument on platform.'}
  ]},
  ptmpm:{logo:'💳',bg:'var(--peach3)',co:'Paytm — India\'s Largest Fintech',ro:'Product Manager · Apr 2022 – Mar 2023 · Noida, India · First PM hire on Merchant Payments',items:[
    {m:'60%',s:'Churn Drop',t:'<strong>XGBoost Merchant Risk Scoring Model</strong> — Designed and shipped XGBoost churn/risk classifier on 6 features (vintage, unique payer count, transaction velocity, LOB, dispute rate, wallet balance trend). SHAP values for per-decision explainability to meet RBI requirements. 60% reduction in chargebacks vs generic GMV limits. Auto-upgrade journey via document submission.'},
    {m:'$2.4M',s:'Savings/yr',t:'<span class="cs-link" onclick="openCS(3)"><strong>Project BINARY — Invoicing Automation</strong> — Custom SAP pre-processor middleware. 10M invoices/month automated, 9-day cycle → 1 day (80% faster), Finance team 50 → 5 members, $2.4M annual savings, 4% contact center reduction. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'$400K',s:'Saved/yr',t:'<span class="cs-link" onclick="openCS(4)"><strong>Interchange Cost Reconciliation ($320M)</strong> — Discovered systemic bank overcharging via SQL analysis. Built 15,000-rule engine with O(1) hash evaluation. Prevented $400K annual fund loss, uncovered $300K acquirer overcharges + $100K internal undercharges. <br><strong><i>Click to Read More</i></strong></span>'},
    {m:'$540K',s:'Cost Saved',t:'<strong>Salesforce → Custom Onboarding Engine</strong> — 3NF-normalized data schema, CDC-based bidirectional sync across 6 downstream systems. 3-phase zero-downtime rollout. API gateway for multi-bank onboarding. Eliminated $540K licensing costs, 60% fraud reduction, 2.5M annual merchants maintained.'},
    {m:'94%',s:'TnC Accept',t:'<strong>Dynamic Terms & Conditions Charter</strong> — Converted static PDF TnC system to version-controlled, merchant-specific, acknowledgment-tracked commercial terms. Built interstitial acknowledgment flow + CleverTap plain-English notifications. Merchant acknowledgment rate: 94% within 48 hours (vs near-0% for static PDF emails).'},
    {m:'$2M',s:'Revenue',t:'<strong>Subscription Payments Launch (0→1)</strong> — 60+ merchant interviews across 3 verticals (EdTech, SIP, dating apps). Validated with 5-merchant pilot. Became first native recurring billing product on Paytm. $2M net-new annual revenue.'}
  ]},
  hsbc:{logo:'🏦',bg:'var(--lav3)',co:'HSBC',ro:'Project Manager — MBA Summer Intern · May 2021 – Jul 2021 · Remote',items:[
    {m:'8',s:'Competitors',t:'<strong>Payroll Portfolio Competitive Benchmarking</strong> — Led competitive benchmarking of HSBC\'s Payroll portfolio across 8 domestic and international competitors. Identified 3 unaddressed SMB value proposition gaps.'},
    {m:'Director',s:'Delivery',t:'<strong>Value Proposition Discovery Tool</strong> — Built a structured value proposition discovery framework for HSBC\'s retail customer advisory team. Delivered to Director-level stakeholders. Framework adopted for quarterly product review cadence.'}
  ]},
  infosys:{logo:'💻',bg:'var(--yellow)',co:'Infosys',ro:'Sr. Software Engineer — Specialist Programmer · Aug 2019 – Aug 2020 · Hyderabad',items:[
    {m:'+50%',s:'CSAT',t:'<strong>Customer Service Platform</strong> — Managed complete SDLC, creating HLDs, defining acceptance criteria, tracking sprint velocity, and coordinating onshore/offshore releases for a platform serving 25 service agents worldwide. CSAT improved 50% post-deployment.'},
    {m:'6',s:'Sprints',t:'<strong>E-Commerce Progressive Web App (MERN)</strong> — Built end-to-end PWA using MERN stack (MongoDB, Express.js, React, Node.js). Automated regression testing suite. Shipped in 6 sprints. This engineering foundation gives me the technical empathy I rely on daily as a PM.'}
  ]}
};

function openExp(k){const d=expD[k];const ml=document.getElementById('mLogo');ml.textContent=d.logo;ml.style.background=d.bg;ml.style.fontSize='28px';document.getElementById('mCo').textContent=d.co;document.getElementById('mRo').textContent=d.ro;document.getElementById('mItems').innerHTML=d.items.map(i=>'<div class="mi"><div class="mi-m">'+i.m+'<small>'+i.s+'</small></div><div class="mi-t">'+i.t+'</div></div>').join('');document.getElementById('expMO').classList.add('open');document.body.style.overflow='hidden';}
function closeExpMO(e){if(e.target===document.getElementById('expMO'))closeExpMOD();}
function closeExpMOD(){document.getElementById('expMO').classList.remove('open');document.body.style.overflow='';}

const csD=[
  {em:'🤖',bg:'linear-gradient(135deg,#1e293b,#334155)',
  t:'BOSS-GPT + MCP Migration — Internal LLM Ops Tool',
  s:'Paytm · AI/LLM Product · Agentic Architecture · 2023–2025',
  ch:'180 merchant ops agents at Paytm were handling complex merchant queries manually — account blocks, dispute statuses, settlement holds. Average handling time was 12 minutes per query because agents had to navigate 4-5 internal tools, copy-paste merchant IDs, and cross-reference policy documents. New agent ramp-up took 4 weeks.',
  so:'I scoped and shipped BOSS-GPT — a self-hosted DeepSeek V2 LLM ops assistant connected to live BOSS merchant panel data via MCP (Model Context Protocol)-compliant tool APIs. Deployed as a Slack bot so agents could query it in natural language within their existing workflow. Then in Jan 2025, I led a full MCP migration across 4 domain servers (transaction, merchant, settlement, compliance) — standardizing all AI tool-calling infrastructure and expanding from 8 to 31 active tools.',
  out:[{n:'3.5min',l:'Avg Handle Time (from 12min)'},{n:'64%',l:'Query Self-Resolution'},{n:'10 days',l:'New Agent Ramp-up (from 4wks)'},{n:'8→31',l:'Tools via MCP Migration'}],
  lrn:'MCP is not just a technical protocol — it\'s a product architecture decision. By standardizing how AI tools are called and composed, you make every future AI feature faster to build and safer to deploy. The migration from ad-hoc integrations to MCP reduced new tool integration time by 78%.'},

  {em:'🔗',bg:'linear-gradient(135deg,var(--mint3),var(--lav3))',
  t:'LangChain Agentic Merchant Retention System',
  s:'Paytm · Agentic AI · Churn Prevention · 2022–2023',
  ch:'9M+ mPOS merchants on monthly rental billing were churning at high rates when their transaction volumes dipped. The business used fixed-template discount emails as the retention tool — one size fits all, easily ignored, and often economically unsound (discounts sometimes exceeded interchange cost floor).',
  so:'I designed and launched a LangChain + Claude API multi-step reasoning agent that assessed 3 churn signals per merchant (transaction velocity decline, wallet balance vs rental ratio, cohort benchmark position) and auto-generated personalized outreach with dynamic discount offers calibrated to each merchant\'s economic profile. A/B tested against the fixed-template control group with a matched cohort. Fund-loss gate enforced via mandatory Maker-Checker for any discount within 10bps of interchange cost floor.',
  out:[{n:'78% vs 61%',l:'Retention Rate (+17pp)'},{n:'120K',l:'Device Returns Prevented/Year'},{n:'~$420K',l:'Monthly GMV Protected'},{n:'Maker-Checker',l:'Fund-Loss Gate Enforced'}],
  lrn:'The fund-loss gate was the hardest PM decision on this project. The agent was generating excellent discounts, but without a hard constraint on the minimum discount floor, it could theoretically generate a discount that cost more than the rental revenue itself. Enforcing the Maker-Checker on economically risky discounts was a non-negotiable safety control.'},

  {em:'💳',bg:'linear-gradient(135deg,var(--peach3),var(--yellow))',
  t:'MDR Pricing Engine — $440M Revenue Portfolio',
  s:'Paytm · Monetization · Pricing Strategy · 2023–2025',
  ch:'I owned the MDR charging module for 30M merchants across 10B+ annual transactions. The system used a flat nearest-match logic — BNPL plans (Affirm/Klarna equivalents) and super-premium cards (Amex Centurion equivalents) were processed at standard rates, causing massive margin leakage. GMV tiers for Credit Cards and EMI were tracked separately, so merchants couldn\'t hit discount thresholds.',
  so:'Designed a 5-level specificity hierarchy rule engine with trie-based BIN lookup (O(k) per transaction) and pre-indexed hash evaluation (O(1) regardless of 15,000-rule count). Upgraded the in-house BIN center in coordination with 7 card issuers. Fixed GMV tier logic, consolidating CC and EMI volume. Added instrument-level revenue split to Finance MIS. Built a Leadership P&L dashboard showing MDR revenue vs interchange cost per instrument.',
  out:[{n:'$440M',l:'Revenue Portfolio'},{n:'$0.5M',l:'Net New Annual PAT'},{n:'700K+',l:'Merchants Corrected'},{n:'O(1)',l:'Rule Evaluation Speed'}],
  lrn:'Pricing is a product. Turning a static rate spreadsheet into a trie-indexed rule engine made pricing a strategic lever — not a Finance manual exercise. The entire margin unlock came from data analysis, not from charging merchants more.'},

  {em:'📄',bg:'linear-gradient(135deg,var(--mint3),var(--lav3))',
  t:'Project BINARY — Invoicing Automation for 30M Merchants',
  s:'Paytm · Digital Transformation · Financial Automation · 2022–2023',
  ch:'Invoicing for 30M merchants was handled manually by a 50-person Finance team. Revenue reports required manual aggregation, Profit Centers and GL Codes needed manual enrichment, and the process had a 9-day cycle time. For enterprise merchants with multi-state locations, there was no consolidated billing.',
  so:'Designed "BINARY" — a custom SAP pre-processor middleware. Aggregated multi-stream revenue (Gateway MDR + device rentals + BNPL commissions) at MID x Instrument x Time. Engineered SAP Business Partner model with role-based invoice consolidation (Payment Gateway Role, Device Rental Role, Audio Confirmation Role). Parsed EIN-equivalent Tax IDs for Parent-Child enterprise hierarchy consolidation. Built Finance control layer: Maker-Checker, role-based access, data masking, audit logs. 24/7 merchant-facing invoice download portal.',
  out:[{n:'10M',l:'Invoices/Month Automated'},{n:'80%',l:'Cycle Time Reduction (9d→1d)'},{n:'50→5',l:'Ops Team Headcount'},{n:'$2.4M',l:'Annual Savings'}],
  lrn:'The biggest unlock was merchant-facing invoice visibility — not just backend automation. Once merchants could download invoices 24/7 and see line items, dispute volume dropped before we finished resolving all backend edge cases.'},

  {em:'🔁',bg:'linear-gradient(135deg,var(--lav3),var(--mint3))',
  t:'Interchange Cost Reconciliation — $320M Cost Center',
  s:'Paytm · Operational Efficiency · Revenue Defense · 2022–2023',
  ch:'Payment processing costs to acquiring banks totaled $320M annually — Paytm\'s second-largest cost driver. Reconciliation was entirely manual and only covered the top 50 merchants. The acquiring bank appeared to be the largest cost center because it invoiced Paytm for the full processing cost (interchange + network fees + acquirer markup) via FBO accounts. I ran a SQL grouping analysis on Card + Merchant ID combinations and found Axis Bank had overcharged $3,000 for a single merchant by misclassifying a retail debit card as corporate.',
  so:'Built a 15,000-rule reconciliation engine reusing the existing commercial charging system as a shadow calculation engine. O(1) rule evaluation via specificity-indexed hash maps. SFTP-based reconciliation pipeline with auto-email discrepancy reports to Finance. Leadership P&L dashboard showing transaction-level cost vs revenue. Full audit trail and Maker-Checker for Finance rule uploads.',
  out:[{n:'$400K',l:'Annual Fund Loss Prevented'},{n:'$300K',l:'Acquirer Overcharges Found'},{n:'$100K',l:'Internal Undercharges Fixed'},{n:'$320M',l:'Cost Base Now Monitored'}],
  lrn:'Building an internal shadow calculation engine to audit vendor invoices at scale is a fundamental requirement for any payment processor at volume. The discovery came from a simple SQL group-by — the infrastructure to act on it at scale took engineering discipline.'},

  {em:'🏟️',bg:'linear-gradient(135deg,var(--mint3),var(--yellow))',
  t:'Smart Stadium — Fan AI Platform (GT Research)',
  s:'Georgia Tech · AI Product · Sports Analytics · 2026',
  ch:'Bobby Dodd Stadium hosts ~55,000 fans per game with a completely fragmented digital experience. No personalized recommendations, no fan-to-fan connectivity, no real-time excitement analytics. The Athletic Department lacked both the data infrastructure and the research framework to quantify fan engagement or monetize VIP experiences digitally.',
  so:'Spring 2026 (GA role): Built Stable Diffusion + ControlNet poster generation pipeline (47 demographic-personalized VIP posters, +64% CTR). Built Spring Boot Friend Finder APIs with IoT beacon-based proximity matching and O(log n) indexed lookups at stadium scale. Led PMF research and IoT vendor evaluation. Used Claude multimodal to identify 3 optimal digital touchpoint locations from stadium photos. From June 2026 (Alumni Affiliate): Leading Bluetooth ad-hoc network research, structural vibration sensing ML, and real-time play classification from video + radio audio.',
  out:[{n:'+64%',l:'CTR on VIP Notifications'},{n:'+18%',l:'VIP Advance Ticket Sales'},{n:'55K',l:'Stadium Capacity'},{n:'Jun 2026',l:'Alumni Research Starts'}],
  lrn:'Stadium tech forces you to design for real-time at massive concurrent scale — decisions must complete in under 2 seconds while 55,000 people are doing unpredictable things. It\'s the best forcing function for learning to build low-latency AI systems backed by solid infrastructure.'},

  {em:'⚙️',bg:'linear-gradient(135deg,#0f172a,#1e293b)',
  t:'Personal AI Automation Suite',
  s:'Personal Projects · n8n · LLM · 2025–2026',
  ch:'Job hunting, inbox management, and nutrition tracking were consuming 5+ hours of my week with mostly repetitive, rule-based cognitive work — categorizing emails, scoring job postings, logging food. These were classic automation targets.',
  so:'Built 3 self-hosted n8n pipelines: (1) Job Application Pipeline — Gmail trigger → Claude API job-fit scoring (1-10 with reasoning) → Airtable routing → auto-customized resume via Google Docs API. (2) Inbox Intelligence Pipeline — classifies 80-120 emails/day into 8 categories, auto-archives spam/rejections, creates Google Calendar events from deadline emails. (3) Nutritional Scoring Web App — React + FastAPI + Claude API scoring meals against personal targets with LLM-generated recommendations.',
  out:[{n:'31%',l:'Job Interview Callback Rate (vs 8-12% avg)'},{n:'12 min',l:'Daily Email Management (from 45min)'},{n:'+44%',l:'Daily Protein Intake'},{n:'-3.2kg',l:'Body Weight Over 12 Weeks'}],
  lrn:'The best way to understand AI product limitations is to ship AI products yourself. Building and dogfooding these pipelines gave me direct insight into where LLM outputs need guardrails, how to design eval loops, and what "good enough" accuracy means in a real product context.'}
];

function openCS(i){const d=csD[i];const b=document.getElementById('csmBanner');b.textContent=d.em;b.style.background=d.bg;b.style.fontSize='60px';document.getElementById('csmTtl').textContent=d.t;document.getElementById('csmSub').textContent=d.s;document.getElementById('csmBody').innerHTML='<div class="csm-sec"><h4>🎯 The Challenge</h4><p>'+d.ch+'</p></div><div class="csm-sec"><h4>💡 My Approach</h4><p>'+d.so+'</p></div><div class="csm-sec"><h4>📈 Results</h4><div class="csm-res">'+d.out.map(o=>'<div class="csr"><div class="csr-n">'+o.n+'</div><div class="csr-l">'+o.l+'</div></div>').join('')+'</div></div><div class="csm-sec"><h4>🧠 Key Learning</h4><p>'+d.lrn+'</p></div>';document.getElementById('csmoOv').classList.add('open');document.body.style.overflow='hidden';}
function closeCSmO(e){if(e.target===document.getElementById('csmoOv'))closeCSMOD();}
function closeCSMOD(){document.getElementById('csmoOv').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeExpMOD();closeCSMOD();}});
