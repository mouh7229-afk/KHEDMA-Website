const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const translations={
en:{
navServices:"Services",navHow:"How it works",navPros:"Professionals",navCities:"Cities",navForPros:"For professionals",joinPro:"Join as a pro",
eyebrow:"LOCAL HELP, ONE CLICK AWAY",heroTitle:"Find the right <em>professional</em> for the job.",heroText:"Discover local professionals, compare their services and contact them directly. From a leaking tap to a broken AC — KHEDMA makes finding help simple.",
needLabel:"What do you need?",allServices:"All services",cityLabel:"City",allCities:"All Morocco",plumbing:"Plumbing",electricity:"Electricity",ac:"Air conditioning",appliance:"Appliance repair",mechanic:"Mechanic",cleaning:"Cleaning",painting:"Painting",moving:"Moving",search:"Find a professional",
trust1:"Direct contact",trust2:"Compare profiles",trust3:"Morocco-wide",availableNow:"Available now",topRated:"Top rated",available:"Available",stat1:"Choose a service",stat2:"Compare professionals",stat3:"Contact directly",stat4:"Get the job done",
popularKicker:"POPULAR SERVICES",servicesTitle:"Whatever the problem, find the right help.",viewAll:"View all →",
plumbingDesc:"Leaks, taps, pipes",electricityDesc:"Installation & repair",acDesc:"Service & installation",applianceDesc:"Home appliances",mechanicDesc:"Car diagnostics & repair",cleaningDesc:"Home & office",paintingDesc:"Interior & exterior",movingDesc:"Transport & moving",
requestKicker:"WHEN YOU DON'T KNOW WHO TO CALL",requestTitle:"Describe the problem. Let KHEDMA do the matching.",requestText:"A future request flow lets a customer explain the problem, add a city, urgency and photo, then receive relevant professionals. It turns KHEDMA from a directory into a real service marketplace.",postRequest:"Post a request",requestLabel:"YOUR REQUEST",problemPlaceholder:"My kitchen sink is leaking…",matchTitle:"Relevant professionals",matchText:"Matched by service + location",
howTitle:"Simple for customers. Powerful for professionals.",howNote:"One platform built around the two sides that matter.",step1Title:"Search",step1Text:"Tell us what you need and where you are.",step2Title:"Compare",step2Text:"See services, location, availability and profile details.",step3Title:"Contact",step3Text:"Call or message the professional directly.",step4Title:"Done",step4Text:"Get the job done and share your experience later.",
featuredKicker:"SAMPLE PROFILES",featuredTitle:"Built to make good professionals stand out.",nearby:"Try Agadir →",noResults:"No sample profile matches these filters yet.",
proKicker:"FOR PROFESSIONALS",joinTitle:"Turn your skills into a stronger local presence.",joinText:"KHEDMA is designed to help tradespeople and local service businesses show what they do, where they work and how customers can reach them.",createProfile:"Create my profile",freeStart:"Start free during the launch phase",
benefit1:"Showcase your work",benefit1Text:"Services, photos, area served and contact options in one profile.",benefit2:"Receive better leads",benefit2Text:"Customers can filter by service and city before contacting you.",benefit3:"Build trust over time",benefit3Text:"Reviews and verification can be added as the platform grows.",
citiesKicker:"DESIGNED FOR MOROCCO",citiesTitle:"Start local. Build nationwide.",faqTitle:"Questions, answered.",
faq1q:"Is KHEDMA free for customers?",faq1a:"Yes. Customers can search and contact professionals for free.",faq2q:"Which cities will KHEDMA cover?",faq2a:"The architecture is Morocco-wide. Initial real onboarding can start in Agadir, Taroudant and expand city by city.",faq3q:"Can I join as a professional?",faq3a:"Yes. The launch flow is being prepared for local professionals.",faq4q:"Are the profiles on this demo real?",faq4a:"No. The profiles currently shown are sample/demo profiles so the design can be tested before real providers are onboarded.",
ctaKicker:"KHEDMA",ctaTitle:"Find help. Get discovered. Grow locally.",ctaText:"A marketplace built around real local services — starting simple, then growing into a complete platform.",ctaCustomer:"Find a service",ctaPro:"Join as a professional",
footerText:"Find. Compare. Contact.",modalTitle:"Tell us what you need.",modalText:"This is a frontend demo for the future request system.",modalProblem:"Problem",modalCity:"City",modalUrgency:"Urgency",normal:"Normal",urgent:"Urgent",sendRequest:"Continue"
},
fr:{
navServices:"Services",navHow:"Comment ça marche",navPros:"Professionnels",navCities:"Villes",navForPros:"Pour les professionnels",joinPro:"Devenir pro",
eyebrow:"AIDE LOCALE, EN UN CLIC",heroTitle:"Trouvez le bon <em>professionnel</em> pour votre besoin.",heroText:"Découvrez des professionnels locaux, comparez leurs services et contactez-les directement. D'un robinet qui fuit à une climatisation en panne — KHEDMA simplifie la recherche.",
needLabel:"De quoi avez-vous besoin ?",allServices:"Tous les services",cityLabel:"Ville",allCities:"Tout le Maroc",plumbing:"Plomberie",electricity:"Électricité",ac:"Climatisation",appliance:"Réparation électroménager",mechanic:"Mécanicien",cleaning:"Nettoyage",painting:"Peinture",moving:"Déménagement",search:"Trouver un professionnel",
trust1:"Contact direct",trust2:"Comparer les profils",trust3:"Partout au Maroc",availableNow:"Disponible maintenant",topRated:"Très bien noté",available:"Disponible",stat1:"Choisir un service",stat2:"Comparer",stat3:"Contacter directement",stat4:"Faire le travail",
popularKicker:"SERVICES POPULAIRES",servicesTitle:"Quel que soit le problème, trouvez la bonne aide.",viewAll:"Voir tout →",
plumbingDesc:"Fuites, robinets, tuyaux",electricityDesc:"Installation & réparation",acDesc:"Entretien & installation",applianceDesc:"Appareils domestiques",mechanicDesc:"Diagnostic & réparation auto",cleaningDesc:"Maison & bureau",paintingDesc:"Intérieur & extérieur",movingDesc:"Transport & déménagement",
requestKicker:"QUAND VOUS NE SAVEZ PAS QUI APPELER",requestTitle:"Décrivez le problème. KHEDMA vous aide à trouver les bons profils.",requestText:"Le futur système de demande permettra d'ajouter le problème, la ville, l'urgence et une photo pour recevoir des professionnels pertinents. KHEDMA devient ainsi une vraie marketplace locale.",postRequest:"Publier une demande",requestLabel:"VOTRE DEMANDE",problemPlaceholder:"Mon évier de cuisine fuit…",matchTitle:"Professionnels pertinents",matchText:"Correspondance service + localisation",
howTitle:"Simple pour les clients. Puissant pour les professionnels.",howNote:"Une plateforme pensée pour les deux côtés.",step1Title:"Rechercher",step1Text:"Indiquez votre besoin et votre localisation.",step2Title:"Comparer",step2Text:"Consultez services, localisation, disponibilité et profil.",step3Title:"Contacter",step3Text:"Appelez ou écrivez directement.",step4Title:"Terminé",step4Text:"Faites réaliser le travail et partagez votre expérience.",
featuredKicker:"PROFILS EXEMPLE",featuredTitle:"Pensé pour mettre les bons professionnels en valeur.",nearby:"Tester Agadir →",noResults:"Aucun profil exemple ne correspond à ces filtres.",
proKicker:"POUR LES PROFESSIONNELS",joinTitle:"Transformez vos compétences en présence locale.",joinText:"KHEDMA aide les artisans et services locaux à présenter leurs services, leur zone d'activité et leurs moyens de contact.",createProfile:"Créer mon profil",freeStart:"Début gratuit pendant le lancement",
benefit1:"Présentez votre travail",benefit1Text:"Services, photos, zone desservie et contacts dans un seul profil.",benefit2:"Recevez de meilleurs prospects",benefit2Text:"Les clients filtrent par service et par ville avant de vous contacter.",benefit3:"Construisez la confiance",benefit3Text:"Les avis et la vérification pourront être ajoutés au fur et à mesure.",
citiesKicker:"PENSÉ POUR LE MAROC",citiesTitle:"Commencer local. Construire national.",faqTitle:"Questions fréquentes.",
faq1q:"KHEDMA est-elle gratuite pour les clients ?",faq1a:"Oui. La recherche et le contact des professionnels sont gratuits.",faq2q:"Quelles villes seront couvertes ?",faq2a:"L'architecture est pensée pour tout le Maroc. L'onboarding réel peut commencer à Agadir et Taroudant puis s'étendre.",faq3q:"Puis-je rejoindre KHEDMA comme professionnel ?",faq3a:"Oui. Le parcours de lancement est en préparation.",faq4q:"Les profils affichés sont-ils réels ?",faq4a:"Non. Ce sont des profils exemple pour tester le design avant l'arrivée de vrais professionnels.",
ctaKicker:"KHEDMA",ctaTitle:"Trouvez de l'aide. Soyez découvert. Développez votre activité.",ctaText:"Une marketplace de services locaux qui commence simplement et évolue vers une plateforme complète.",ctaCustomer:"Trouver un service",ctaPro:"Devenir professionnel",
footerText:"Trouvez. Comparez. Contactez.",modalTitle:"De quoi avez-vous besoin ?",modalText:"Ceci est une démonstration frontend du futur système de demande.",modalProblem:"Problème",modalCity:"Ville",modalUrgency:"Urgence",normal:"Normale",urgent:"Urgente",sendRequest:"Continuer"
},
ar:{
navServices:"الخدمات",navHow:"كيف تعمل",navPros:"المهنيون",navCities:"المدن",navForPros:"للمهنيين",joinPro:"انضم كمحترف",
eyebrow:"خدمة محلية، بضغطة واحدة",heroTitle:"اعثر على <em>المحترف المناسب</em> لمهمتك.",heroText:"اكتشف المهنيين القريبين منك، قارن الخدمات وتواصل مباشرة. من تسرب الماء إلى عطل التكييف — KHEDMA تجعل البحث عن المساعدة أسهل.",
needLabel:"ما الخدمة التي تحتاجها؟",allServices:"جميع الخدمات",cityLabel:"المدينة",allCities:"كل المغرب",plumbing:"السباكة",electricity:"الكهرباء",ac:"التكييف",appliance:"إصلاح الأجهزة",mechanic:"الميكانيكي",cleaning:"التنظيف",painting:"الصباغة",moving:"النقل",search:"اعثر على محترف",
trust1:"تواصل مباشر",trust2:"قارن الملفات",trust3:"في جميع أنحاء المغرب",availableNow:"متاح الآن",topRated:"تقييم ممتاز",available:"متاح",stat1:"اختر الخدمة",stat2:"قارن المهنيين",stat3:"تواصل مباشرة",stat4:"أنجز المهمة",
popularKicker:"الخدمات الأكثر طلباً",servicesTitle:"مهما كانت المشكلة، ستجد المساعدة المناسبة.",viewAll:"عرض الكل ←",
plumbingDesc:"التسربات والصنابير والأنابيب",electricityDesc:"التركيب والإصلاح",acDesc:"الصيانة والتركيب",applianceDesc:"الأجهزة المنزلية",mechanicDesc:"تشخيص وإصلاح السيارات",cleaningDesc:"المنازل والمكاتب",paintingDesc:"الداخل والخارج",movingDesc:"النقل ونقل الأثاث",
requestKicker:"عندما لا تعرف بمن تتصل",requestTitle:"صف المشكلة ودع KHEDMA تساعدك في الوصول إلى المهني المناسب.",requestText:"نظام الطلبات القادم سيسمح بإضافة المشكلة والمدينة ودرجة الاستعجال والصورة ثم اقتراح المهنيين المناسبين. هكذا تصبح KHEDMA منصة خدمات حقيقية.",postRequest:"أرسل طلباً",requestLabel:"طلبك",problemPlaceholder:"حوض المطبخ يتسرب منه الماء…",matchTitle:"مهنيون مناسبون",matchText:"مطابقة حسب الخدمة والموقع",
howTitle:"بسيطة للزبون. قوية للمهني.",howNote:"منصة مبنية لخدمة الطرفين.",step1Title:"ابحث",step1Text:"حدد الخدمة التي تحتاجها ومكانك.",step2Title:"قارن",step2Text:"شاهد الخدمات والموقع والتوفر والملف.",step3Title:"تواصل",step3Text:"اتصل أو أرسل رسالة مباشرة.",step4Title:"تم",step4Text:"أنجز المهمة وشارك تجربتك لاحقاً.",
featuredKicker:"ملفات تجريبية",featuredTitle:"مصممة لإبراز المهنيين الجيدين.",nearby:"جرب أكادير ←",noResults:"لا يوجد ملف تجريبي يطابق هذه الاختيارات.",
proKicker:"للمهنيين",joinTitle:"حوّل مهاراتك إلى حضور أقوى محلياً.",joinText:"KHEDMA مصممة لمساعدة الحرفيين وأصحاب الخدمات المحلية على عرض خدماتهم ومناطق عملهم وطرق التواصل معهم.",createProfile:"أنشئ ملفي",freeStart:"ابدأ مجاناً خلال مرحلة الإطلاق",
benefit1:"اعرض أعمالك",benefit1Text:"الخدمات والصور والمنطقة ووسائل التواصل في ملف واحد.",benefit2:"احصل على طلبات أفضل",benefit2Text:"الزبون يمكنه الاختيار حسب الخدمة والمدينة قبل التواصل.",benefit3:"ابنِ الثقة مع الوقت",benefit3Text:"يمكن إضافة التقييمات والتحقق مع نمو المنصة.",
citiesKicker:"مصممة للمغرب",citiesTitle:"نبدأ محلياً ونبني وطنياً.",faqTitle:"أسئلة وأجوبة",
faq1q:"هل KHEDMA مجانية للزبناء؟",faq1a:"نعم. البحث عن المهنيين والتواصل معهم مجاني.",faq2q:"ما هي المدن التي ستغطيها KHEDMA؟",faq2a:"البنية مصممة للمغرب كله. يمكن أن يبدأ إدخال المهنيين في أكادير وتارودانت ثم التوسع تدريجياً.",faq3q:"هل يمكنني الانضمام كمحترف؟",faq3a:"نعم. يتم إعداد نظام الإطلاق للمهنيين المحليين.",faq4q:"هل الملفات المعروضة حقيقية؟",faq4a:"لا. هذه ملفات تجريبية لاختبار التصميم قبل إدخال مهنيين حقيقيين.",
ctaKicker:"KHEDMA",ctaTitle:"اعثر على المساعدة. اكتشف مهاراتك. نمِ نشاطك محلياً.",ctaText:"منصة للخدمات المحلية تبدأ ببساطة وتتطور إلى نظام متكامل.",ctaCustomer:"ابحث عن خدمة",ctaPro:"انضم كمحترف",
footerText:"ابحث. قارن. تواصل.",modalTitle:"قل لنا ماذا تحتاج.",modalText:"هذه تجربة للواجهة الخاصة بنظام الطلبات القادم.",modalProblem:"المشكلة",modalCity:"المدينة",modalUrgency:"الاستعجال",normal:"عادي",urgent:"مستعجل",sendRequest:"متابعة"
}};

function applyLanguage(lang){
  const t=translations[lang]||translations.en;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  $$("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  $$("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(t[key]!==undefined) el.placeholder=t[key];
  });
  $("#languageSelect").value=lang;
  localStorage.setItem("khedmaLang",lang);
}

function showToast(message){
  const toast=$("#toast");
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove("show"),3200);
}

function filterPros(scroll=true){
  const service=$("#serviceSelect").value;
  const city=$("#citySelect").value;
  let visible=0;
  $$("#proGrid .profile-card").forEach(card=>{
    const ok=(service==="all"||card.dataset.service===service)&&(city==="all"||card.dataset.city===city);
    card.style.display=ok?"block":"none";
    if(ok) visible++;
  });
  $("#emptyState").hidden=visible!==0;
  if(scroll) $("#professionals").scrollIntoView({behavior:"smooth",block:"start"});
}

function openRequestModal(){
  $("#requestModal").classList.add("open");
  $("#requestModal").setAttribute("aria-hidden","false");
  setTimeout(()=>$("#problemInput").focus(),120);
}
function closeRequestModal(){
  $("#requestModal").classList.remove("open");
  $("#requestModal").setAttribute("aria-hidden","true");
}

$("#languageSelect").addEventListener("change",e=>applyLanguage(e.target.value));
$("#searchBtn").addEventListener("click",()=>filterPros(true));
$("#allServicesBtn").addEventListener("click",()=>{
  $("#serviceSelect").value="all";$("#citySelect").value="all";filterPros(true);
});
$("#nearbyBtn").addEventListener("click",()=>{
  $("#citySelect").value="Agadir";filterPros(true);
});
$$(".service-card").forEach(card=>card.addEventListener("click",()=>{
  $("#serviceSelect").value=card.dataset.service;filterPros(true);
}));
$$(".city-card").forEach(card=>card.addEventListener("click",()=>{
  $$(".city-card").forEach(c=>c.classList.remove("active"));
  card.classList.add("active");
  $("#citySelect").value=card.dataset.city;
  filterPros(true);
}));
$("#requestBtn").addEventListener("click",openRequestModal);
$("#joinBtn").addEventListener("click",()=>showToast("Professional onboarding demo — connect the real registration flow when the backend is ready."));
$("#closeModal").addEventListener("click",closeRequestModal);
$("#requestModal").addEventListener("click",e=>{if(e.target===e.currentTarget)closeRequestModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeRequestModal()});
$("#submitRequest").addEventListener("click",()=>{
  const text=$("#problemInput").value.trim();
  if(!text){showToast("Describe the problem first.");return}
  closeRequestModal();
  showToast("Request saved as a demo. Next step: connect it to Supabase.");
});
$$(".faq").forEach(f=>f.addEventListener("click",()=>f.classList.toggle("open")));

const mobileMenu=$("#mobileMenu"),mainNav=$("#mainNav");
mobileMenu.addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")));

const heroScene=$("#heroScene");
if(heroScene && matchMedia("(hover:hover) and (pointer:fine)").matches){
  heroScene.addEventListener("mousemove",e=>{
    const r=heroScene.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    heroScene.style.transform=`rotateY(${x*3}deg) rotateX(${-y*2.5}deg)`;
    heroScene.querySelectorAll("[data-depth]").forEach(el=>{
      const d=Number(el.dataset.depth)||1;
      el.style.translate=`${x*d*16}px ${y*d*10}px`;
    });
  });
  heroScene.addEventListener("mouseleave",()=>{
    heroScene.style.transform="";
    heroScene.querySelectorAll("[data-depth]").forEach(el=>el.style.translate="");
  });
}

$("#year").textContent=new Date().getFullYear();
applyLanguage(localStorage.getItem("khedmaLang")||"en");
