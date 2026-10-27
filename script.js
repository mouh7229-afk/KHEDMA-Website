const professionals = [
  {
    id:1,
    name:"Yassine Amrani",
    service:"Plumber",
    category:"Plumbing",
    city:"Agadir",
    rating:4.9,
    reviews:28,
    price:"150–400 DH",
    availability:"Today",
    phone:"+212600000001",
    initials:"YA",
    about:"Demo profile — plumbing repairs, leaks, bathroom installations and general maintenance."
  },
  {
    id:2,
    name:"Omar El Idrissi",
    service:"Electrician",
    category:"Electricity",
    city:"Marrakech",
    rating:4.8,
    reviews:41,
    price:"200–600 DH",
    availability:"Available",
    phone:"+212600000002",
    initials:"OE",
    about:"Demo profile — electrical troubleshooting, installations, lighting and home repairs."
  },
  {
    id:3,
    name:"Hamza Berrada",
    service:"Painter",
    category:"Painting",
    city:"Casablanca",
    rating:4.7,
    reviews:19,
    price:"25–60 DH/m²",
    availability:"Tomorrow",
    phone:"+212600000003",
    initials:"HB",
    about:"Demo profile — interior painting, exterior work, finishing and decorative walls."
  },
  {
    id:4,
    name:"Ayoub Saidi",
    service:"AC Technician",
    category:"Air Conditioning",
    city:"Agadir",
    rating:4.9,
    reviews:33,
    price:"200–700 DH",
    availability:"Today",
    phone:"+212600000004",
    initials:"AS",
    about:"Demo profile — AC installation, cleaning, maintenance and troubleshooting."
  },
  {
    id:5,
    name:"Mehdi Alaoui",
    service:"Carpenter",
    category:"Carpentry",
    city:"Rabat",
    rating:4.6,
    reviews:17,
    price:"From 300 DH",
    availability:"This week",
    phone:"+212600000005",
    initials:"MA",
    about:"Demo profile — custom woodwork, furniture repair, doors and interior projects."
  },
  {
    id:6,
    name:"Karim Naciri",
    service:"Mechanic",
    category:"Mechanic",
    city:"Taroudant",
    rating:4.8,
    reviews:26,
    price:"From 150 DH",
    availability:"Available",
    phone:"+212600000006",
    initials:"KN",
    about:"Demo profile — vehicle diagnostics, maintenance, brakes and general mechanical work."
  },
  {
    id:7,
    name:"Salma Benali",
    service:"Cleaner",
    category:"Cleaning",
    city:"Fes",
    rating:4.8,
    reviews:22,
    price:"From 120 DH",
    availability:"Tomorrow",
    phone:"+212600000007",
    initials:"SB",
    about:"Demo profile — home, apartment and office cleaning services."
  },
  {
    id:8,
    name:"Anas Chraibi",
    service:"Web Developer",
    category:"Web & Digital",
    city:"Kenitra",
    rating:4.9,
    reviews:15,
    price:"From 800 DH",
    availability:"Available",
    phone:"+212600000008",
    initials:"AC",
    about:"Demo profile — websites, landing pages and small business digital solutions."
  }
];

const serviceSearch = document.getElementById("serviceSearch");
const citySearch = document.getElementById("citySearch");
const searchBtn = document.getElementById("searchBtn");
const resultsSection = document.getElementById("resultsSection");
const searchResults = document.getElementById("searchResults");
const resultsCount = document.getElementById("resultsCount");
const resultsDescription = document.getElementById("resultsDescription");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const featuredProfessionals = document.getElementById("featuredProfessionals");

function normalize(value){
  return String(value || "").trim().toLowerCase();
}

function phoneLink(phone){
  return `tel:${phone.replace(/[^\d+]/g,"")}`;
}

function whatsappLink(phone){
  const number = phone.replace(/\D/g,"");
  return `https://wa.me/${number}`;
}

function professionalCard(pro){
  return `
    <article class="prof-card">
      <div class="prof-top">
        <div class="prof-avatar">${pro.initials}</div>
      </div>
      <div class="prof-body">
        <div class="demo-badge">DEMO PROFILE — NOT VERIFIED</div>
        <h3 class="prof-name">${pro.name}</h3>
        <div class="prof-service">${pro.service}</div>

        <div class="prof-meta">
          <span>📍 ${pro.city}</span>
          <span class="rating">★ ${pro.rating} (${pro.reviews})</span>
          <span>◷ ${pro.availability}</span>
        </div>

        <div class="prof-actions">
          <button class="btn-outline view-profile" data-id="${pro.id}">View profile</button>
          <a class="btn btn-dark" href="${whatsappLink(pro.phone)}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured(){
  featuredProfessionals.innerHTML = professionals
    .slice(0,6)
    .map(professionalCard)
    .join("");
}

function searchProfessionals(){
  const service = normalize(serviceSearch.value);
  const city = normalize(citySearch.value);

  const results = professionals.filter(pro => {
    const serviceMatch =
      !service ||
      normalize(pro.service).includes(service) ||
      normalize(pro.category).includes(service);

    const cityMatch =
      !city || normalize(pro.city) === city;

    return serviceMatch && cityMatch;
  });

  resultsSection.classList.remove("hidden");
  resultsCount.textContent = results.length;

  if(service || city){
    const parts = [];
    if(service) parts.push(`"${serviceSearch.value.trim()}"`);
    if(city) parts.push(citySearch.value);
    resultsDescription.textContent = `Showing results for ${parts.join(" in ")}.`;
  }else{
    resultsDescription.textContent = "Showing all demo professionals currently available in KHEDMA.";
  }

  searchResults.innerHTML = results.length
    ? results.map(professionalCard).join("")
    : `<div class="empty-state" style="grid-column:1/-1;padding:30px;background:#f1e8da;border-radius:18px;color:#496056">
         No demo professional matches this search yet. Try another service or city.
       </div>`;

  resultsSection.scrollIntoView({behavior:"smooth", block:"start"});
}

function clearSearch(){
  serviceSearch.value = "";
  citySearch.value = "";
  resultsSection.classList.add("hidden");
  searchResults.innerHTML = "";
}

function openModal(id){
  const modal = document.getElementById(id);
  if(modal) modal.classList.add("open");
}

function closeModal(id){
  const modal = document.getElementById(id);
  if(modal) modal.classList.remove("open");
}

function showProfile(id){
  const pro = professionals.find(p => p.id === Number(id));
  if(!pro) return;

  const content = document.getElementById("profileContent");

  content.innerHTML = `
    <div class="profile-hero">
      <div class="profile-big-avatar">${pro.initials}</div>
      <div>
        <div class="demo-badge">DEMO PROFILE — NOT VERIFIED</div>
        <h2>${pro.name}</h2>
        <div class="prof-service">${pro.service} · ${pro.city}</div>
      </div>
    </div>

    <div class="profile-details">
      <div class="detail"><small>Rating</small><strong>★ ${pro.rating} / 5 (${pro.reviews} reviews)</strong></div>
      <div class="detail"><small>Price range</small><strong>${pro.price}</strong></div>
      <div class="detail"><small>Availability</small><strong>${pro.availability}</strong></div>
      <div class="detail"><small>Location</small><strong>${pro.city}, Morocco</strong></div>
    </div>

    <p class="profile-about">${pro.about}</p>

    <div class="prof-actions">
      <a class="btn btn-dark" href="${phoneLink(pro.phone)}">Call</a>
      <a class="btn btn-dark" href="${whatsappLink(pro.phone)}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  `;

  openModal("profileModal");
}

searchBtn.addEventListener("click", searchProfessionals);

serviceSearch.addEventListener("keydown", event => {
  if(event.key === "Enter") searchProfessionals();
});

citySearch.addEventListener("change", () => {
  if(serviceSearch.value.trim() || citySearch.value) searchProfessionals();
});

clearSearchBtn.addEventListener("click", clearSearch);

document.addEventListener("click", event => {
  const profileButton = event.target.closest(".view-profile");
  if(profileButton){
    showProfile(profileButton.dataset.id);
  }

  const serviceButton = event.target.closest(".service-card");
  if(serviceButton){
    serviceSearch.value = serviceButton.dataset.service;
    searchProfessionals();
  }

  const cityButton = event.target.closest(".city-card");
  if(cityButton){
    citySearch.value = cityButton.dataset.city;
    searchProfessionals();
  }

  const closeButton = event.target.closest("[data-close]");
  if(closeButton){
    closeModal(closeButton.dataset.close);
  }
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if(event.target === overlay) overlay.classList.remove("open");
  });
});

document.getElementById("openRequestBtn").addEventListener("click", () => {
  openModal("requestModal");
});

document.getElementById("mobileRequestBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.remove("open");
  openModal("requestModal");
});

document.getElementById("joinBtn").addEventListener("click", () => {
  openModal("requestModal");
  document.getElementById("requestService").value = "Web Developer";
});

document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.remove("open");
  });
});

document.getElementById("requestForm").addEventListener("submit", event => {
  event.preventDefault();

  const service = document.getElementById("requestService").value;
  const city = document.getElementById("requestCity").value;
  const description = document.getElementById("requestDescription").value.trim();
  const phone = document.getElementById("requestPhone").value.trim();

  localStorage.setItem("khedmaLastRequest", JSON.stringify({
    service, city, description, phone,
    createdAt:new Date().toISOString()
  }));

  document.getElementById("requestSuccess").classList.remove("hidden");
  document.getElementById("requestSuccess").innerHTML =
    `Request prepared successfully.<br><small>${service} · ${city}</small>`;

  event.target.reset();
});


/* =========================================================
   KHEDMA V5 — REAL MULTILINGUAL UI
   ========================================================= */

const LANG = {
  en:{
    title:"KHEDMA — Find. Compare. Contact.",
    nav:["Services","Professionals","Cities","How it works"],
    request:"Post a Request",
    eyebrow:"Morocco's local service network",
    heroTitle:"Find the right professional for your next job.",
    heroText:"Discover local professionals, compare their services and contact them directly.",
    placeholder:"What service do you need?",search:"Search",heroNote:"Find professionals near you",
    mapTitle:"KHEDMA MOROCCO",live:"LIVE",stats:["Cities","Services","Requests"],
    resultLabel:"SEARCH RESULTS",found:"professionals found",clear:"Clear search",
    resultAll:"Showing all demo professionals currently available in KHEDMA.",
    popular:"POPULAR SERVICES",servicesTitle:"Whatever you need, find someone who can do it.",
    servicesText:"Explore some of the most requested services on KHEDMA.",
    serviceNames:["Plumbing","Electricity","Painting","Air Conditioning","Carpentry","Mechanic","Cleaning","Web & Digital"],
    serviceSubs:["Plumbers & repairs","Electrical services","Interior & exterior","Installation & repair","Furniture & woodwork","Car repair & maintenance","Home & office cleaning","Websites & digital services"],
    how:"HOW IT WORKS",howTitle:"From problem to professional in a few simple steps.",
    steps:[
      ["Choose a service","Tell KHEDMA what kind of help you need."],
      ["Choose your city","Find professionals serving your area."],
      ["Compare profiles","Check services, ratings, prices and availability."],
      ["Contact directly","Call or WhatsApp the professional."]
    ],
    discover:"DISCOVER PROFESSIONALS",prosTitle:"People ready to help.",
    prosText:"Demo profiles for the current frontend. Real professionals will be connected later.",
    morocco:"MOROCCO",citiesTitle:"Start local. Grow nationwide.",citiesText:"KHEDMA is designed to expand across Moroccan cities.",
    forPros:"FOR PROFESSIONALS",joinTitle:"Turn your skills into more opportunities.",
    joinText:"Create your profile, show your work and let customers contact you directly.",join:"Join KHEDMA",
    footer:"Find. Compare. Contact.",demo:"Frontend demo.",
    requestLabel:"KHEDMA REQUEST",requestTitle:"Tell us what you need.",
    requestIntro:"Prepare your request now. Supabase will connect it to real professionals in the next stage.",
    serviceLabel:"Service",cityLabel:"City",descriptionLabel:"Describe the problem",phoneLabel:"Your phone / WhatsApp",
    chooseService:"Choose a service",chooseCity:"Choose a city",prepare:"Prepare Request",success:"Request prepared successfully.",
    call:"Call",view:"View profile",demoBadge:"DEMO PROFILE — NOT VERIFIED",noResults:"No demo professional matches this search yet. Try another service or city."
  },
  fr:{
    title:"KHEDMA — Trouvez. Comparez. Contactez.",
    nav:["Services","Professionnels","Villes","Comment ça marche"],
    request:"Publier une demande",
    eyebrow:"Le réseau de services locaux du Maroc",
    heroTitle:"Trouvez le bon professionnel pour votre prochain projet.",
    heroText:"Découvrez des professionnels locaux, comparez leurs services et contactez-les directement.",
    placeholder:"De quel service avez-vous besoin ?",search:"Rechercher",heroNote:"Trouvez des professionnels près de vous",
    mapTitle:"KHEDMA MAROC",live:"EN DIRECT",stats:["Villes","Services","Demandes"],
    resultLabel:"RÉSULTATS",found:"professionnels trouvés",clear:"Effacer",
    resultAll:"Tous les profils de démonstration actuellement disponibles sur KHEDMA.",
    popular:"SERVICES POPULAIRES",servicesTitle:"Quel que soit votre besoin, trouvez la bonne personne.",
    servicesText:"Découvrez les services les plus demandés sur KHEDMA.",
    serviceNames:["Plomberie","Électricité","Peinture","Climatisation","Menuiserie","Mécanique","Nettoyage","Web et digital"],
    serviceSubs:["Plombiers et réparations","Services électriques","Intérieur et extérieur","Installation et réparation","Meubles et bois","Réparation et entretien auto","Maison et bureaux","Sites web et services digitaux"],
    how:"COMMENT ÇA MARCHE",howTitle:"Du problème au professionnel en quelques étapes.",
    steps:[
      ["Choisissez un service","Indiquez le type d'aide dont vous avez besoin."],
      ["Choisissez votre ville","Trouvez les professionnels de votre région."],
      ["Comparez les profils","Consultez services, avis, prix et disponibilité."],
      ["Contactez directement","Appelez ou contactez le professionnel sur WhatsApp."]
    ],
    discover:"DÉCOUVRIR LES PROFESSIONNELS",prosTitle:"Des personnes prêtes à vous aider.",
    prosText:"Profils de démonstration pour cette version frontend. Les vrais professionnels seront connectés plus tard.",
    morocco:"MAROC",citiesTitle:"Commencez localement. Grandissons partout au Maroc.",citiesText:"KHEDMA est conçue pour s'étendre à toutes les villes marocaines.",
    forPros:"POUR LES PROFESSIONNELS",joinTitle:"Transformez vos compétences en nouvelles opportunités.",
    joinText:"Créez votre profil, présentez votre travail et laissez les clients vous contacter.",join:"Rejoindre KHEDMA",
    footer:"Trouvez. Comparez. Contactez.",demo:"Démo frontend.",
    requestLabel:"DEMANDE KHEDMA",requestTitle:"Dites-nous ce dont vous avez besoin.",
    requestIntro:"Préparez votre demande maintenant. Supabase la connectera aux vrais professionnels à l'étape suivante.",
    serviceLabel:"Service",cityLabel:"Ville",descriptionLabel:"Décrivez le problème",phoneLabel:"Votre téléphone / WhatsApp",
    chooseService:"Choisir un service",chooseCity:"Choisir une ville",prepare:"Préparer la demande",success:"Demande préparée avec succès.",
    call:"Appeler",view:"Voir le profil",demoBadge:"PROFIL DÉMO — NON VÉRIFIÉ",noResults:"Aucun professionnel de démonstration ne correspond."
  },
  ar:{
    title:"خِدْمَة — ابحث. قارن. تواصل.",
    nav:["الخدمات","المهنيون","المدن","كيف تعمل المنصة"],
    request:"أرسل طلبك",
    eyebrow:"شبكة الخدمات المحلية في المغرب",
    heroTitle:"لقِ المهني المناسب لمهمتك القادمة.",
    heroText:"اكتشف المهنيين القريبين منك، قارن بين خدماتهم وتواصل معهم مباشرة.",
    placeholder:"ما الخدمة التي تحتاجها؟",search:"بحث",heroNote:"اعثر على مهنيين بالقرب منك",
    mapTitle:"خِدْمَة المغرب",live:"مباشر",stats:["مدن","خدمات","طلبات"],
    resultLabel:"نتائج البحث",found:"مهنيين تم العثور عليهم",clear:"مسح البحث",
    resultAll:"هذه جميع الملفات التجريبية المتاحة حالياً على خِدْمَة.",
    popular:"الخدمات الأكثر طلباً",servicesTitle:"مهما كانت حاجتك، سنساعدك في العثور على الشخص المناسب.",
    servicesText:"اكتشف بعضاً من أكثر الخدمات طلباً على خِدْمَة.",
    serviceNames:["السباكة","الكهرباء","الطلاء","التكييف","النجارة","الميكانيك","التنظيف","الويب والرقمنة"],
    serviceSubs:["إصلاحات وتركيبات السباكة","الخدمات الكهربائية","الداخل والخارج","تركيب وإصلاح المكيفات","الأثاث والأعمال الخشبية","إصلاح وصيانة السيارات","تنظيف المنازل والمكاتب","المواقع والخدمات الرقمية"],
    how:"كيف تعمل المنصة",howTitle:"من المشكلة إلى المهني المناسب في خطوات بسيطة.",
    steps:[
      ["اختر الخدمة","أخبرنا بنوع المساعدة التي تحتاجها."],
      ["اختر مدينتك","اعثر على مهنيين يقدمون خدماتهم في منطقتك."],
      ["قارن الملفات","اطلع على الخدمات والتقييمات والأسعار والتوفر."],
      ["تواصل مباشرة","اتصل بالمهني أو تواصل معه عبر واتساب."]
    ],
    discover:"اكتشف المهنيين",prosTitle:"أشخاص جاهزون لمساعدتك.",
    prosText:"هذه ملفات تجريبية للواجهة الحالية. سيتم ربط المهنيين الحقيقيين لاحقاً.",
    morocco:"المغرب",citiesTitle:"ابدأ محلياً، ثم ننتشر في جميع أنحاء المغرب.",citiesText:"تم تصميم خِدْمَة للتوسع في مختلف المدن المغربية.",
    forPros:"للمهنيين",joinTitle:"حوّل مهاراتك إلى فرص عمل أكثر.",
    joinText:"أنشئ ملفك، اعرض أعمالك ودع الزبناء يتواصلون معك مباشرة.",join:"انضم إلى خِدْمَة",
    footer:"ابحث. قارن. تواصل.",demo:"نسخة تجريبية للواجهة.",
    requestLabel:"طلب خِدْمَة",requestTitle:"أخبرنا بما تحتاجه.",
    requestIntro:"جهّز طلبك الآن. في المرحلة القادمة سيربط Supabase طلبك بالمهنيين الحقيقيين.",
    serviceLabel:"الخدمة",cityLabel:"المدينة",descriptionLabel:"صف المشكلة",phoneLabel:"الهاتف / واتساب",
    chooseService:"اختر الخدمة",chooseCity:"اختر المدينة",prepare:"تجهيز الطلب",success:"تم تجهيز الطلب بنجاح.",
    call:"اتصال",view:"عرض الملف",demoBadge:"ملف تجريبي — غير موثّق",noResults:"لم نجد مهنياً تجريبياً مطابقاً. جرّب خدمة أو مدينة أخرى."
  }
};

let currentLang=localStorage.getItem("khedmaLanguage")||"en";
const L=()=>LANG[currentLang];

function setText(selector,text){const el=document.querySelector(selector);if(el)el.textContent=text}
function setTexts(selector,texts){document.querySelectorAll(selector).forEach((el,i)=>{if(texts[i]!=null)el.textContent=texts[i]})}

function applyLanguage(lang){
  currentLang=lang;
  localStorage.setItem("khedmaLanguage",lang);
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("rtl",lang==="ar");

  const l=L();

  setTexts(".nav-links a",l.nav);
  setText("#mobileMenu a:nth-child(1)",l.nav[0]);
  setText("#mobileMenu a:nth-child(2)",l.nav[1]);
  setText("#mobileMenu a:nth-child(3)",l.nav[2]);
  setText("#mobileMenu a:nth-child(4)",l.nav[3]);
  setText("#openRequestBtn",l.request); setText("#mobileRequestBtn",l.request);
  setText(".eyebrow",l.eyebrow); setText(".hero h1",l.heroTitle); setText(".hero-text",l.heroText);
  const input=document.getElementById("serviceSearch"); if(input)input.placeholder=l.placeholder;
  setText("#searchBtn",l.search); setText(".hero-note",l.heroNote);
  setText(".map-header>span:first-child",l.mapTitle); setText(".map-live",l.live);
  setTexts(".map-footer div span",l.stats);
  setText(".results-top .section-label",l.resultLabel); setText(".clear-search",l.clear);
  setText("#resultsDescription",l.resultAll);

  const sectionHeads=document.querySelectorAll(".section-heading .section-label");
  if(sectionHeads[0])sectionHeads[0].textContent=l.popular;
  if(sectionHeads[1])sectionHeads[1].textContent=l.discover;
  if(sectionHeads[2])sectionHeads[2].textContent=l.morocco;

  const headings=document.querySelectorAll(".section-heading h2");
  if(headings[0])headings[0].textContent=l.servicesTitle;
  if(headings[1])headings[1].textContent=l.prosTitle;
  if(headings[2])headings[2].textContent=l.citiesTitle;

  const sectionPs=document.querySelectorAll(".section-heading>p");
  if(sectionPs[0])sectionPs[0].textContent=l.servicesText;
  if(sectionPs[1])sectionPs[1].textContent=l.prosText;
  if(sectionPs[2])sectionPs[2].textContent=l.citiesText;

  setTexts(".service-card strong",l.serviceNames);
  setTexts(".service-card small",l.serviceSubs);
  setText("#how .section-label",l.how);
  setText("#how h2",l.howTitle);
  document.querySelectorAll(".step").forEach((step,i)=>{
    step.querySelector("h3").textContent=l.steps[i][0];
    step.querySelector("p").textContent=l.steps[i][1];
  });

  setText(".join-section .section-label",l.forPros);
  setText(".join-inner h2",l.joinTitle); setText(".join-inner p",l.joinText); setText("#joinBtn",l.join);
  setText(".footer p",l.footer); setText(".footer-note",`© 2026 KHEDMA. ${l.demo}`);

  setText("#requestModal .section-label",l.requestLabel);
  setText("#requestModal h2",l.requestTitle);
  setText("#requestModal .modal-intro",l.requestIntro);
  const labels=document.querySelectorAll("#requestForm label");
  if(labels[0])labels[0].firstChild.textContent=l.serviceLabel+" ";
  if(labels[1])labels[1].firstChild.textContent=l.cityLabel+" ";
  if(labels[2])labels[2].firstChild.textContent=l.descriptionLabel+" ";
  if(labels[3])labels[3].firstChild.textContent=l.phoneLabel+" ";
  const rs=document.querySelector("#requestService option"); if(rs)rs.textContent=l.chooseService;
  const rc=document.querySelector("#requestCity option"); if(rc)rc.textContent=l.chooseCity;
  const desc=document.querySelector("#requestDescription"); if(desc)desc.placeholder=currentLang==="ar"?"مثال: أحتاج إلى سباك لإصلاح تسرب في أنبوب المطبخ.":currentLang==="fr"?"Exemple : j'ai besoin d'un plombier pour réparer une fuite.":"Example: I need a plumber to fix a leaking kitchen pipe.";
  const phone=document.querySelector("#requestPhone"); if(phone)phone.placeholder="06 XX XX XX XX";
  const submit=document.querySelector("#requestForm button[type=submit]"); if(submit)submit.textContent=l.prepare;

  document.title=l.title;
  document.getElementById("languageSelect").value=lang;

  renderFeatured();
  if(!document.getElementById("resultsSection").classList.contains("hidden"))searchProfessionals(false);
}

function professionalCard(p){
  const l=L();
  return `<article class="prof-card">
    <div class="prof-top"><div class="prof-avatar">${p.initials}</div></div>
    <div class="prof-body">
      <div class="demo-badge">${l.demoBadge}</div>
      <h3 class="prof-name">${p.name}</h3>
      <div class="prof-service">${p.service}</div>
      <div class="prof-meta"><span>📍 ${p.city}</span><span class="rating">★ ${p.rating} (${p.reviews})</span><span>◷ ${p.availability}</span></div>
      <div class="prof-actions"><button class="btn-outline view-profile" data-id="${p.id}">${l.view}</button><a class="btn btn-dark" href="${whatsappLink(p.phone)}" target="_blank" rel="noopener">WhatsApp</a></div>
    </div>
  </article>`;
}

function renderFeatured(){featuredProfessionals.innerHTML=professionals.slice(0,6).map(professionalCard).join("")}

function searchProfessionals(scroll=true){
  const service=normalize(serviceSearch.value),city=normalize(citySearch.value);
  const results=professionals.filter(p=>(!service||normalize(p.service).includes(service)||normalize(p.category).includes(service))&&(!city||normalize(p.city)===city));
  resultsSection.classList.remove("hidden");
  resultsCount.textContent=results.length;
  resultsDescription.textContent=(service||city)?`${L().resultsFor||"Results"} ${[service?`"${serviceSearch.value.trim()}"`:"",city?citySearch.value:""].filter(Boolean).join(" · ")}`:L().resultAll;
  searchResults.innerHTML=results.length?results.map(professionalCard).join(""):`<div class="empty-state" style="grid-column:1/-1">${L().noResults}</div>`;
  if(scroll)resultsSection.scrollIntoView({behavior:"smooth",block:"start"});
}

function showProfile(id){
  const p=professionals.find(x=>x.id===Number(id));if(!p)return;
  const l=L();
  const rating=currentLang==="ar"?"التقييم":currentLang==="fr"?"Évaluation":"Rating";
  const price=currentLang==="ar"?"السعر التقريبي":currentLang==="fr"?"Prix":"Price range";
  const availability=currentLang==="ar"?"التوفر":currentLang==="fr"?"Disponibilité":"Availability";
  const location=currentLang==="ar"?"الموقع":currentLang==="fr"?"Localisation":"Location";
  document.getElementById("profileContent").innerHTML=`<div class="profile-hero"><div class="profile-big-avatar">${p.initials}</div><div><div class="demo-badge">${l.demoBadge}</div><h2>${p.name}</h2><div class="prof-service">${p.service} · ${p.city}</div></div></div>
  <div class="profile-details"><div class="detail"><small>${rating}</small><strong>★ ${p.rating} / 5 (${p.reviews})</strong></div><div class="detail"><small>${price}</small><strong>${p.price}</strong></div><div class="detail"><small>${availability}</small><strong>${p.availability}</strong></div><div class="detail"><small>${location}</small><strong>${p.city}, Morocco</strong></div></div>
  <p class="profile-about">${p.about}</p><div class="prof-actions"><a class="btn btn-dark" href="${phoneLink(p.phone)}">${l.call}</a><a class="btn btn-dark" href="${whatsappLink(p.phone)}" target="_blank" rel="noopener">WhatsApp</a></div>`;
  openModal("profileModal");
}

document.getElementById("languageSelect").addEventListener("change",e=>applyLanguage(e.target.value));

document.addEventListener("click",e=>{
  const pin=e.target.closest(".map-pin");
  if(pin){citySearch.value=pin.dataset.city;searchProfessionals();}
});

applyLanguage(currentLang);
