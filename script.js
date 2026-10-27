const cities = [
"Agadir","Ait Melloul","Al Hoceima","Assa","Asilah","Azemmour","Azilal","Beni Mellal","Benslimane","Berkane","Berrechid","Biougra","Boujdour","Boulemane","Bouznika","Casablanca","Chefchaouen","Chichaoua","Dakhla","El Jadida","El Kelaa des Sraghna","Errachidia","Essaouira","Es-Semara","Fes","Figuig","Fnideq","Guelmim","Guercif","Ifrane","Inezgane","Imintanoute","Jemaa Shaim","Jerada","Kenitra","Khemisset","Khenifra","Khouribga","Ksar El Kebir","Laayoune","Larache","Marrakech","Martil","M'diq","Meknes","Midar","Midelt","Mohammedia","Nador","Ouarzazate","Ouezzane","Oujda","Rabat","Safi","Sale","Sefrou","Settat","Sidi Bennour","Sidi Ifni","Sidi Kacem","Sidi Slimane","Skhirat","Souk El Arbaa","Tafraoute","Tahanaout","Tan-Tan","Tangier","Taourirt","Taroudant","Tarfaya","Tata","Taza","Tetouan","Tinghir","Tiznit","Youssoufia","Zagora"
];

const services = [
 {key:"plumbing", icon:"🔧", en:"Plumbing", fr:"Plomberie", ar:"السباكة", desc:{en:"Plumbers & repairs",fr:"Plombiers et réparations",ar:"السباكة والإصلاحات"}},
 {key:"electricity", icon:"⚡", en:"Electricity", fr:"Électricité", ar:"الكهرباء", desc:{en:"Electrical services",fr:"Services électriques",ar:"الخدمات الكهربائية"}},
 {key:"painting", icon:"🎨", en:"Painting", fr:"Peinture", ar:"الطلاء", desc:{en:"Interior & exterior",fr:"Intérieur et extérieur",ar:"الدهان الداخلي والخارجي"}},
 {key:"ac", icon:"❄️", en:"Air Conditioning", fr:"Climatisation", ar:"التكييف", desc:{en:"Installation & repair",fr:"Installation et réparation",ar:"التركيب والإصلاح"}},
 {key:"carpentry", icon:"🪚", en:"Carpentry", fr:"Menuiserie", ar:"النجارة", desc:{en:"Furniture & woodwork",fr:"Meubles et bois",ar:"الأثاث والأعمال الخشبية"}},
 {key:"mechanic", icon:"🚗", en:"Car Mechanics", fr:"Mécanique auto", ar:"ميكانيك السيارات", desc:{en:"Repair & maintenance",fr:"Réparation et entretien",ar:"الإصلاح والصيانة"}},
 {key:"cleaning", icon:"🧹", en:"Cleaning", fr:"Nettoyage", ar:"التنظيف", desc:{en:"Home & office cleaning",fr:"Nettoyage maison et bureau",ar:"تنظيف المنازل والمكاتب"}},
 {key:"web", icon:"💻", en:"Web & Digital", fr:"Web et digital", ar:"الويب والخدمات الرقمية", desc:{en:"Websites & digital help",fr:"Sites web et aide digitale",ar:"المواقع والخدمات الرقمية"}}
];

const profiles = [
 {name:"Yassine Amrani",role:"Plumber",city:"Agadir",rating:"4.9",reviews:"28",service:"🔧",initials:"YA"},
 {name:"Omar El Fassi",role:"Electrician",city:"Marrakech",rating:"4.8",reviews:"21",service:"⚡",initials:"OE"},
 {name:"Salma Benali",role:"Painter",city:"Casablanca",rating:"4.9",reviews:"34",service:"🎨",initials:"SB"},
 {name:"Nabil Idrissi",role:"AC Technician",city:"Rabat",rating:"4.7",reviews:"19",service:"❄️",initials:"NI"},
 {name:"Hamza Alaoui",role:"Mechanic",city:"Tangier",rating:"4.8",reviews:"26",service:"🚗",initials:"HA"},
 {name:"Sara El Mansouri",role:"Web Developer",city:"Fes",rating:"4.9",reviews:"17",service:"💻",initials:"SE"}
];

const translations = {
 en:{
  nav_services:"Services",nav_professionals:"Professionals",nav_cities:"Cities",nav_how:"How it works",
  cta_request:"Post a request",eyebrow:"Morocco's local service network",
  hero_title:"Find the right professional for your next job.",hero_text:"Discover local professionals, compare their services and contact them directly.",
  service_label:"What service do you need?",service_placeholder:"Plumbing, electricity, painting…",city_label:"City",all_morocco:"All Morocco",search:"Search",
  nearby:"Find professionals near you",live:"LIVE",cities:"cities",map_note:"Real Morocco map · OpenStreetMap",coverage:"12 regions · nationwide coverage",core_services:"Core services",demo_profiles:"Demo profiles",
  popular_services:"POPULAR SERVICES",services_title:"What do you need help with?",post_request:"Post a request →",
  simple_process:"SIMPLE PROCESS",how_title:"From problem to professional.",step1_title:"Choose a service",step1_text:"Tell KHEDMA what kind of professional you need.",step2_title:"Pick your city",step2_text:"Search across Morocco or focus on one city.",step3_title:"Compare & contact",step3_text:"Review profiles, then call or WhatsApp directly.",
  featured:"FEATURED",profiles_title:"Professionals who can help.",profiles_text:"Demo profiles for the current frontend. Real professionals will be connected in the next stage.",
  nationwide:"NATIONWIDE",cities_title:"Find help across Morocco.",for_pros:"FOR PROFESSIONALS",join_title:"Turn your skills into more opportunities.",join_text:"Create your profile, show your work and let customers contact you directly.",join_btn:"Join KHEDMA",
  footer_tag:"Find. Compare. Contact.",footer_demo:"Frontend demo",request_label:"KHEDMA REQUEST",request_title:"Tell us what you need.",request_text:"This frontend demo prepares your request locally. Real matching will be connected with Supabase next.",
  form_service:"Service",form_city:"City",form_description:"Describe the problem",form_description_ph:"Example: I need a plumber for a leaking kitchen pipe.",form_phone:"Phone / WhatsApp",prepare_request:"Prepare request",
  demo_tag:"DEMO PROFILE — NOT VERIFIED",view_profile:"View profile",whatsapp:"WhatsApp",today:"Today",search_found:"Showing demo professionals for",request_ready:"Request prepared successfully. Supabase will connect this to real professionals in the next stage."
 },
 fr:{
  nav_services:"Services",nav_professionals:"Professionnels",nav_cities:"Villes",nav_how:"Comment ça marche",
  cta_request:"Publier une demande",eyebrow:"Le réseau local de services au Maroc",
  hero_title:"Trouvez le bon professionnel pour votre prochain projet.",hero_text:"Découvrez les professionnels locaux, comparez leurs services et contactez-les directement.",
  service_label:"De quel service avez-vous besoin ?",service_placeholder:"Plomberie, électricité, peinture…",city_label:"Ville",all_morocco:"Tout le Maroc",search:"Rechercher",
  nearby:"Trouvez des professionnels près de vous",live:"EN DIRECT",cities:"villes",map_note:"Vraie carte du Maroc · OpenStreetMap",coverage:"12 régions · couverture nationale",core_services:"Services principaux",demo_profiles:"Profils démo",
  popular_services:"SERVICES POPULAIRES",services_title:"De quelle aide avez-vous besoin ?",post_request:"Publier une demande →",
  simple_process:"PROCESSUS SIMPLE",how_title:"Du problème au professionnel.",step1_title:"Choisissez un service",step1_text:"Indiquez le type de professionnel dont vous avez besoin.",step2_title:"Choisissez votre ville",step2_text:"Recherchez partout au Maroc ou dans une ville précise.",step3_title:"Comparez et contactez",step3_text:"Consultez les profils puis appelez ou WhatsApp directement.",
  featured:"SÉLECTION",profiles_title:"Des professionnels qui peuvent vous aider.",profiles_text:"Profils de démonstration pour le frontend actuel. Les vrais professionnels seront connectés à l'étape suivante.",
  nationwide:"PARTOUT AU MAROC",cities_title:"Trouvez de l'aide partout au Maroc.",for_pros:"POUR LES PROFESSIONNELS",join_title:"Transformez vos compétences en opportunités.",join_text:"Créez votre profil, montrez votre travail et laissez les clients vous contacter.",join_btn:"Rejoindre KHEDMA",
  footer_tag:"Trouvez. Comparez. Contactez.",footer_demo:"Démo frontend",request_label:"DEMANDE KHEDMA",request_title:"Dites-nous ce dont vous avez besoin.",request_text:"Cette démo prépare votre demande localement. La mise en relation réelle sera connectée à Supabase ensuite.",
  form_service:"Service",form_city:"Ville",form_description:"Décrivez le problème",form_description_ph:"Exemple : j'ai besoin d'un plombier pour une fuite dans la cuisine.",form_phone:"Téléphone / WhatsApp",prepare_request:"Préparer la demande",
  demo_tag:"PROFIL DÉMO — NON VÉRIFIÉ",view_profile:"Voir le profil",whatsapp:"WhatsApp",today:"Aujourd'hui",search_found:"Professionnels démo pour",request_ready:"Demande préparée avec succès. Supabase la connectera aux vrais professionnels à l'étape suivante."
 },
 ar:{
  nav_services:"الخدمات",nav_professionals:"المهنيون",nav_cities:"المدن",nav_how:"كيف تعمل المنصة",
  cta_request:"نشر طلب",eyebrow:"شبكة الخدمات المحلية في المغرب",
  hero_title:"ابحث عن المهني المناسب لمهمتك القادمة.",hero_text:"اكتشف المهنيين القريبين منك، قارن خدماتهم وتواصل معهم مباشرة.",
  service_label:"ما الخدمة التي تحتاجها؟",service_placeholder:"السباكة، الكهرباء، الدهان…",city_label:"المدينة",all_morocco:"جميع مدن المغرب",search:"بحث",
  nearby:"اعثر على مهنيين بالقرب منك",live:"مباشر",cities:"مدينة",map_note:"خريطة حقيقية للمغرب · OpenStreetMap",coverage:"12 جهة · تغطية وطنية",core_services:"خدمات أساسية",demo_profiles:"ملفات تجريبية",
  popular_services:"الخدمات الأكثر طلباً",services_title:"في ماذا تحتاج إلى المساعدة؟",post_request:"انشر طلباً ←",
  simple_process:"طريقة بسيطة",how_title:"من المشكلة إلى المهني المناسب.",step1_title:"اختر الخدمة",step1_text:"أخبر KHEDMA بنوع المهني الذي تحتاج إليه.",step2_title:"اختر مدينتك",step2_text:"ابحث في جميع أنحاء المغرب أو ركّز على مدينة واحدة.",step3_title:"قارن وتواصل",step3_text:"اطلع على الملفات ثم اتصل أو تواصل عبر واتساب مباشرة.",
  featured:"مختارون",profiles_title:"مهنيون يمكنهم مساعدتك.",profiles_text:"هذه ملفات تجريبية للواجهة الحالية. سيتم ربط المهنيين الحقيقيين في المرحلة القادمة.",
  nationwide:"في جميع أنحاء المغرب",cities_title:"اعثر على المساعدة في مختلف مدن المغرب.",for_pros:"للمهنيين",join_title:"حوّل مهاراتك إلى فرص أكثر.",join_text:"أنشئ ملفك، اعرض أعمالك ودع الزبناء يتواصلون معك مباشرة.",join_btn:"انضم إلى KHEDMA",
  footer_tag:"ابحث. قارن. تواصل.",footer_demo:"نسخة تجريبية",request_label:"طلب KHEDMA",request_title:"أخبرنا بما تحتاج إليه.",request_text:"هذه نسخة تجريبية تجهّز طلبك محلياً. سيتم ربط الطلبات بالمهنيين الحقيقيين عبر Supabase لاحقاً.",
  form_service:"الخدمة",form_city:"المدينة",form_description:"صف المشكلة",form_description_ph:"مثال: أحتاج إلى سبّاك لإصلاح تسرب في المطبخ.",form_phone:"الهاتف / واتساب",prepare_request:"تجهيز الطلب",
  demo_tag:"ملف تجريبي — غير موثّق",view_profile:"عرض الملف",whatsapp:"واتساب",today:"اليوم",search_found:"مهنيون تجريبيون لـ",request_ready:"تم تجهيز الطلب بنجاح. سيتم ربطه بالمهنيين الحقيقيين عبر Supabase في المرحلة القادمة."
 }
};

let lang = localStorage.getItem("khedmaLanguage") || "en";
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

function t(key){return translations[lang][key] || translations.en[key] || key}
function serviceName(s){return s[lang] || s.en}

function applyLanguage(){
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 $("#langCurrent").textContent=lang.toUpperCase();
 $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 $$("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 renderServices(); renderProfiles(); renderCities(); fillSelects();
 $("#serviceSearch").placeholder=t("service_placeholder");
}
function renderServices(){
 $("#servicesGrid").innerHTML=services.map(s=>`<article class="service-card reveal"><div class="service-icon">${s.icon}</div><div><h3>${serviceName(s)}</h3><p>${s.desc[lang]}</p></div></article>`).join("");
 observeReveals();
}
function renderProfiles(){
 const whatsappText=encodeURIComponent("Hello, I found you on KHEDMA.");
 $("#profilesGrid").innerHTML=profiles.map((p,i)=>`<article class="profile-card reveal">
  <div class="profile-top"><div class="profile-avatar">${p.initials}</div><span class="profile-service">${p.service}</span></div>
  <div class="profile-body">
   <span class="demo-tag">${t("demo_tag")}</span>
   <h3>${p.name}</h3><div class="profile-role">${p.role}</div>
   <div class="profile-meta"><span>📍 ${p.city}</span><span>★ ${p.rating} (${p.reviews})</span><span>◷ ${t("today")}</span></div>
   <div class="profile-actions"><button type="button" data-profile="${i}">${t("view_profile")}</button><a class="whatsapp" href="https://wa.me/?text=${whatsappText}" target="_blank" rel="noopener">${t("whatsapp")}</a></div>
  </div></article>`).join("");
 observeReveals();
}
function renderCities(){
 $("#citiesGrid").innerHTML=cities.map(c=>`<button type="button" class="city-card" data-city="${c}"><span>${c}</span><span>↗</span></button>`).join("");
}
function fillSelects(){
 const cityOptions=`<option value="Morocco">${t("all_morocco")}</option>`+cities.map(c=>`<option value="${c}">${c}</option>`).join("");
 $("#citySelect").innerHTML=cityOptions;
 $("#requestCity").innerHTML=`<option value="">${t("city_label")}</option>`+cities.map(c=>`<option>${c}</option>`).join("");
 $("#requestService").innerHTML=`<option value="">${t("service_label")}</option>`+services.map(s=>`<option value="${s.key}">${serviceName(s)}</option>`).join("");
}
function setMapCity(city){
 const iframe=$("#moroccoMap");
 if(!iframe)return;
 if(!city || city==="Morocco"){
  iframe.src="https://www.openstreetmap.org/export/embed.html?bbox=-13.7%2C27.4%2C-0.7%2C36.2&layer=mapnik";
  return;
 }
 const coords={
  Agadir:[-9.598,30.427],Casablanca:[-7.5898,33.5731],Rabat:[-6.8498,34.0209],Marrakech:[-8.0083,31.6295],
  Fes:[-5.0078,34.0331],Tangier:[-5.8136,35.7595],Oujda:[-1.9093,34.6814],Meknes:[-5.5473,33.8935],
  Kenitra:[-6.5802,34.261],Tetouan:[-5.3684,35.5889],Safi:[-9.2372,32.2994],El_Jadida:[-8.5,33.23]
 };
 const p=coords[city.replaceAll(" ","_")];
 if(!p)return;
 const [lon,lat]=p, d=.65;
 iframe.src=`https://www.openstreetmap.org/export/embed.html?bbox=${lon-d}%2C${lat-d/2}%2C${lon+d}%2C${lat+d/2}&layer=mapnik&marker=${lat}%2C${lon}`;
}
function runSearch(cityOverride){
 const service=$("#serviceSearch").value.trim();
 const city=cityOverride || $("#citySelect").value;
 const label=service || (lang==="ar"?"الخدمات المحلية":lang==="fr"?"services locaux":"local services");
 $("#searchResult").style.display="block";
 $("#searchResult").textContent=`${t("search_found")} ${label}${city!=="Morocco"?" · "+city:""}.`;
 setMapCity(city);
 document.querySelector("#professionals").scrollIntoView({behavior:"smooth",block:"start"});
}
function openModal(id){const el=$("#"+id);el.hidden=false;document.body.classList.add("modal-open")}
function closeModal(id){const el=$("#"+id);el.hidden=true;if(!$$(".modal-overlay:not([hidden])").length)document.body.classList.remove("modal-open")}
function showProfile(index){
 const p=profiles[index];
 $("#profileModalContent").innerHTML=`<div class="profile-top" style="border-radius:20px;margin-bottom:20px"><div class="profile-avatar">${p.initials}</div><span class="profile-service">${p.service}</span></div>
 <span class="demo-tag">${t("demo_tag")}</span><h2>${p.name}</h2><p><b>${p.role}</b> · ${p.city}</p><p>★ ${p.rating} (${p.reviews}) · ${t("today")}</p><a class="btn btn-primary full" href="https://wa.me/?text=${encodeURIComponent("Hello, I found you on KHEDMA.")}" target="_blank" rel="noopener">${t("whatsapp")}</a>`;
 openModal("profileModal");
}
function observeReveals(){
 const items=$$(".reveal");
 if(!("IntersectionObserver" in window)){items.forEach(x=>x.classList.add("visible"));return}
 const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.08});
 items.forEach(x=>{if(!x.classList.contains("visible"))ob.observe(x)});
}

$("#langButton").addEventListener("click",()=>$("#langMenu").classList.toggle("open"));
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;localStorage.setItem("khedmaLanguage",lang);$("#langMenu").classList.remove("open");applyLanguage()}));
$("#menuButton").addEventListener("click",()=>{
 const m=$("#mobileMenu"),open=m.classList.toggle("open");
 $("#menuButton").setAttribute("aria-expanded",open);
 m.setAttribute("aria-hidden",!open);
});
$$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>$("#mobileMenu").classList.remove("open")));
$("#mobileRequest").addEventListener("click",()=>{ $("#mobileMenu").classList.remove("open");openModal("requestModal")});
$("#searchButton").addEventListener("click",()=>runSearch());
$("#citySelect").addEventListener("change",e=>setMapCity(e.target.value));
$("#requestTop").addEventListener("click",()=>openModal("requestModal"));
$("#joinButton").addEventListener("click",()=>openModal("requestModal"));
$("#backTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll",()=>$("#backTop").classList.toggle("show",scrollY>600));
document.addEventListener("click",e=>{
 const profile=e.target.closest("[data-profile]"); if(profile)showProfile(Number(profile.dataset.profile));
 const city=e.target.closest("[data-city]"); if(city){$("#citySelect").value=city.dataset.city;runSearch(city.dataset.city)}
 const close=e.target.closest("[data-close]"); if(close)closeModal(close.dataset.close);
 if(!e.target.closest(".language"))$("#langMenu").classList.remove("open");
});
$("#requestForm").addEventListener("submit",e=>{
 e.preventDefault();
 $("#requestSuccess").hidden=false;
 $("#requestSuccess").textContent=t("request_ready");
});
$("#serviceSearch").addEventListener("input",()=>{
 const q=$("#serviceSearch").value.toLowerCase().trim(), box=$("#serviceSuggestions");
 if(!q){box.style.display="none";return}
 const matches=services.filter(s=>[s.en,s.fr,s.ar,s.desc.en,s.desc.fr,s.desc.ar].join(" ").toLowerCase().includes(q)).slice(0,5);
 box.innerHTML=matches.map(s=>`<button type="button" data-service="${s.key}">${s.icon} ${serviceName(s)}</button>`).join("");
 box.style.display=matches.length?"block":"none";
});
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-service]");
 if(!b)return;
 const s=services.find(x=>x.key===b.dataset.service);
 $("#serviceSearch").value=serviceName(s);$("#serviceSuggestions").style.display="none";
});
window.addEventListener("load",()=>{applyLanguage();observeReveals()});
