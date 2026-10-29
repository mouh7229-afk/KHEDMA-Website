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
 {name:"Yassine Amrani",role:{en:"Plumber",fr:"Plombier",ar:"سبّاك"},city:{en:"Agadir",fr:"Agadir",ar:"أكادير"},rating:"4.9",reviews:"28",service:"🔧",initials:"YA"},
 {name:"Omar El Fassi",role:{en:"Electrician",fr:"Électricien",ar:"كهربائي"},city:{en:"Marrakech",fr:"Marrakech",ar:"مراكش"},rating:"4.8",reviews:"21",service:"⚡",initials:"OE"},
 {name:"Salma Benali",role:{en:"Painter",fr:"Peintre",ar:"دهّان"},city:{en:"Casablanca",fr:"Casablanca",ar:"الدار البيضاء"},rating:"4.9",reviews:"34",service:"🎨",initials:"SB"},
 {name:"Nabil Idrissi",role:{en:"AC Technician",fr:"Technicien climatisation",ar:"تقني تكييف"},city:{en:"Rabat",fr:"Rabat",ar:"الرباط"},rating:"4.7",reviews:"19",service:"❄️",initials:"NI"},
 {name:"Hamza Alaoui",role:{en:"Mechanic",fr:"Mécanicien",ar:"ميكانيكي"},city:{en:"Tangier",fr:"Tanger",ar:"طنجة"},rating:"4.8",reviews:"26",service:"🚗",initials:"HA"},
 {name:"Sara El Mansouri",role:{en:"Web Developer",fr:"Développeuse web",ar:"مطوّرة مواقع"},city:{en:"Fes",fr:"Fès",ar:"فاس"},rating:"4.9",reviews:"17",service:"💻",initials:"SE"}
];

const translations = {
 en:{
  account:"Account",account_label:"KHEDMA ACCOUNT",account_title:"Create your account",account_text:"Sign in to save requests and manage your professional profile.",auth_name:"Full name",auth_email:"Email",auth_password:"Password",auth_role:"I am",customer:"Customer",professional:"Professional",auth_continue:"Continue",auth_switch:"Already have an account? Sign in",logout:"Log out",
  nav_services:"Services",nav_professionals:"Professionals",nav_cities:"Cities",nav_how:"How it works",
  cta_request:"Post a request",eyebrow:"Morocco's local service network",
  hero_title:"Find the right professional for your next job.",hero_text:"Discover local professionals, compare their services and contact them directly.",
  service_label:"What service do you need?",service_placeholder:"Plumbing, electricity, painting…",city_label:"City",all_morocco:"All Morocco",search:"Search",
  nearby:"Find professionals near you",live:"LIVE",cities:"cities",map_title:"Explore Morocco by city",map_text:"Tap a city to focus the map and discover professionals there.",near_me:"Near me",map_note:"Interactive map · OpenStreetMap",coverage:"12 regions · nationwide coverage",core_services:"Core services",demo_profiles:"Demo profiles",discover_label:"DISCOVER BY CITY",discover_title:"Find help where you are.",discover_text:"Choose a city and KHEDMA will take you straight to professionals available for that area.",selected_city:"SELECTED CITY",city_focus_text:"Choose a city below to start finding local professionals.",discover_pros:"Find professionals →",popular_cities:"Popular cities",swipe_cities:"Swipe to explore",region_south:"South",region_center:"Center",region_north:"North",
  popular_services:"POPULAR SERVICES",services_title:"What do you need help with?",post_request:"Post a request →",
  simple_process:"SIMPLE PROCESS",how_title:"From problem to professional.",step1_title:"Choose a service",step1_text:"Tell KHEDMA what kind of professional you need.",step2_title:"Pick your city",step2_text:"Search across Morocco or focus on one city.",step3_title:"Compare & contact",step3_text:"Review profiles, then call or WhatsApp directly.",
  featured:"FEATURED",profiles_title:"Professionals who can help.",profiles_text:"Demo profiles for the current frontend. Real professionals will be connected in the next stage.",
  nationwide:"NATIONWIDE",cities_title:"Find help across Morocco.",for_pros:"FOR PROFESSIONALS",join_title:"Turn your skills into more opportunities.",join_text:"Create your profile, show your work and let customers contact you directly.",join_btn:"Join KHEDMA",
  footer_tag:"Find. Compare. Contact.",footer_demo:"Frontend demo",request_label:"KHEDMA REQUEST",request_title:"Tell us what you need.",request_text:"This frontend demo prepares your request locally. Real matching will be connected with Supabase next.",
  form_service:"Service",form_city:"City",form_description:"Describe the problem",form_description_ph:"Example: I need a plumber for a leaking kitchen pipe.",form_phone:"Phone / WhatsApp",prepare_request:"Prepare request",
  demo_tag:"DEMO PROFILE — NOT VERIFIED",view_profile:"View profile",whatsapp:"WhatsApp",today:"Today",search_found:"Showing demo professionals for",request_ready:"Request prepared successfully. Supabase will connect this to real professionals in the next stage.",dashboard:"My dashboard",dashboard_label:"KHEDMA DASHBOARD",dashboard_title:"Manage your profile",dashboard_text:"Update your public information. Professional profiles appear publicly only after you publish them.",profile_full_name:"Full name",profile_phone:"Phone",profile_whatsapp:"WhatsApp",profile_city:"City",profile_service:"Service",profile_bio:"About you",profile_publish:"Publish my professional profile",save_profile:"Save profile",profile_saved:"Profile saved successfully."
 },
 fr:{
  account:"Compte",account_label:"COMPTE KHEDMA",account_title:"Créez votre compte",account_text:"Connectez-vous pour enregistrer vos demandes et gérer votre profil professionnel.",auth_name:"Nom complet",auth_email:"Email",auth_password:"Mot de passe",auth_role:"Je suis",customer:"Client",professional:"Professionnel",auth_continue:"Continuer",auth_switch:"Vous avez déjà un compte ? Se connecter",logout:"Se déconnecter",
  nav_services:"Services",nav_professionals:"Professionnels",nav_cities:"Villes",nav_how:"Comment ça marche",
  cta_request:"Publier une demande",eyebrow:"Le réseau local de services au Maroc",
  hero_title:"Trouvez le bon professionnel pour votre prochain projet.",hero_text:"Découvrez les professionnels locaux, comparez leurs services et contactez-les directement.",
  service_label:"De quel service avez-vous besoin ?",service_placeholder:"Plomberie, électricité, peinture…",city_label:"Ville",all_morocco:"Tout le Maroc",search:"Rechercher",
  nearby:"Trouvez des professionnels près de vous",live:"EN DIRECT",cities:"villes",map_title:"Explorez le Maroc par ville",map_text:"Touchez une ville pour centrer la carte et trouver des professionnels.",near_me:"Près de moi",map_note:"Carte interactive · OpenStreetMap",coverage:"12 régions · couverture nationale",core_services:"Services principaux",demo_profiles:"Profils démo",discover_label:"DÉCOUVRIR PAR VILLE",discover_title:"Trouvez de l’aide près de vous.",discover_text:"Choisissez une ville et KHEDMA vous emmène directement vers les professionnels de cette zone.",selected_city:"VILLE SÉLECTIONNÉE",city_focus_text:"Choisissez une ville ci-dessous pour commencer.",discover_pros:"Trouver des professionnels →",popular_cities:"Villes populaires",swipe_cities:"Faites défiler",region_south:"Sud",region_center:"Centre",region_north:"Nord",
  popular_services:"SERVICES POPULAIRES",services_title:"De quelle aide avez-vous besoin ?",post_request:"Publier une demande →",
  simple_process:"PROCESSUS SIMPLE",how_title:"Du problème au professionnel.",step1_title:"Choisissez un service",step1_text:"Indiquez le type de professionnel dont vous avez besoin.",step2_title:"Choisissez votre ville",step2_text:"Recherchez partout au Maroc ou dans une ville précise.",step3_title:"Comparez et contactez",step3_text:"Consultez les profils puis appelez ou WhatsApp directement.",
  featured:"SÉLECTION",profiles_title:"Des professionnels qui peuvent vous aider.",profiles_text:"Profils de démonstration pour le frontend actuel. Les vrais professionnels seront connectés à l'étape suivante.",
  nationwide:"PARTOUT AU MAROC",cities_title:"Trouvez de l'aide partout au Maroc.",for_pros:"POUR LES PROFESSIONNELS",join_title:"Transformez vos compétences en opportunités.",join_text:"Créez votre profil, montrez votre travail et laissez les clients vous contacter.",join_btn:"Rejoindre KHEDMA",
  footer_tag:"Trouvez. Comparez. Contactez.",footer_demo:"Démo frontend",request_label:"DEMANDE KHEDMA",request_title:"Dites-nous ce dont vous avez besoin.",request_text:"Cette démo prépare votre demande localement. La mise en relation réelle sera connectée à Supabase ensuite.",
  form_service:"Service",form_city:"Ville",form_description:"Décrivez le problème",form_description_ph:"Exemple : j'ai besoin d'un plombier pour une fuite dans la cuisine.",form_phone:"Téléphone / WhatsApp",prepare_request:"Préparer la demande",
  demo_tag:"PROFIL DÉMO — NON VÉRIFIÉ",view_profile:"Voir le profil",whatsapp:"WhatsApp",today:"Aujourd'hui",search_found:"Professionnels démo pour",request_ready:"Demande préparée avec succès. Supabase la connectera aux vrais professionnels à l'étape suivante."
 },
 ar:{
  account:"الحساب",account_label:"حساب KHEDMA",account_title:"أنشئ حسابك",account_text:"سجّل الدخول لحفظ طلباتك وإدارة ملفك المهني.",auth_name:"الاسم الكامل",auth_email:"البريد الإلكتروني",auth_password:"كلمة المرور",auth_role:"أنا",customer:"زبون",professional:"مهني",auth_continue:"متابعة",auth_switch:"لديك حساب بالفعل؟ تسجيل الدخول",logout:"تسجيل الخروج",
  nav_services:"الخدمات",nav_professionals:"المهنيون",nav_cities:"المدن",nav_how:"كيف تعمل المنصة",
  cta_request:"نشر طلب",eyebrow:"شبكة الخدمات المحلية في المغرب",
  hero_title:"ابحث عن المهني المناسب لمهمتك القادمة.",hero_text:"اكتشف المهنيين القريبين منك، قارن خدماتهم وتواصل معهم مباشرة.",
  service_label:"ما الخدمة التي تحتاجها؟",service_placeholder:"السباكة، الكهرباء، الدهان…",city_label:"المدينة",all_morocco:"جميع مدن المغرب",search:"بحث",
  nearby:"اعثر على مهنيين بالقرب منك",live:"مباشر",cities:"مدينة",map_title:"اكتشف المغرب حسب المدينة",map_text:"اضغط على مدينة للتركيز على الخريطة والعثور على مهنيين فيها.",near_me:"بالقرب مني",map_note:"خريطة تفاعلية · OpenStreetMap",coverage:"12 جهة · تغطية وطنية",core_services:"خدمات أساسية",demo_profiles:"ملفات تجريبية",discover_label:"اكتشف حسب المدينة",discover_title:"اعثر على المساعدة بالقرب منك.",discover_text:"اختر مدينتك وسيوصلك KHEDMA مباشرة بالمهنيين الموجودين في منطقتك.",selected_city:"المدينة المختارة",city_focus_text:"اختر مدينة من الأسفل للبدء في العثور على المهنيين.",discover_pros:"اعثر على المهنيين ←",popular_cities:"المدن الأكثر طلباً",swipe_cities:"اسحب للاستكشاف",region_south:"الجنوب",region_center:"الوسط",region_north:"الشمال",
  popular_services:"الخدمات الأكثر طلباً",services_title:"في ماذا تحتاج إلى المساعدة؟",post_request:"انشر طلباً ←",
  simple_process:"طريقة بسيطة",how_title:"من المشكلة إلى المهني المناسب.",step1_title:"اختر الخدمة",step1_text:"أخبر KHEDMA بنوع المهني الذي تحتاج إليه.",step2_title:"اختر مدينتك",step2_text:"ابحث في جميع أنحاء المغرب أو ركّز على مدينة واحدة.",step3_title:"قارن وتواصل",step3_text:"اطلع على الملفات ثم اتصل أو تواصل عبر واتساب مباشرة.",
  featured:"مختارون",profiles_title:"مهنيون يمكنهم مساعدتك.",profiles_text:"هذه ملفات تجريبية للواجهة الحالية. سيتم ربط المهنيين الحقيقيين في المرحلة القادمة.",
  nationwide:"في جميع أنحاء المغرب",cities_title:"اعثر على المساعدة في مختلف مدن المغرب.",for_pros:"للمهنيين",join_title:"حوّل مهاراتك إلى فرص أكثر.",join_text:"أنشئ ملفك، اعرض أعمالك ودع الزبناء يتواصلون معك مباشرة.",join_btn:"انضم إلى KHEDMA",
  footer_tag:"ابحث. قارن. تواصل.",footer_demo:"نسخة تجريبية",request_label:"طلب KHEDMA",request_title:"أخبرنا بما تحتاج إليه.",request_text:"هذه نسخة تجريبية تجهّز طلبك محلياً. سيتم ربط الطلبات بالمهنيين الحقيقيين عبر Supabase لاحقاً.",
  form_service:"الخدمة",form_city:"المدينة",form_description:"صف المشكلة",form_description_ph:"مثال: أحتاج إلى سبّاك لإصلاح تسرب في المطبخ.",form_phone:"الهاتف / واتساب",prepare_request:"تجهيز الطلب",
  demo_tag:"ملف تجريبي — غير موثّق",view_profile:"عرض الملف",whatsapp:"واتساب",today:"اليوم",search_found:"مهنيون تجريبيون لـ",request_ready:"تم تجهيز الطلب بنجاح. سيتم ربطه بالمهنيين الحقيقيين عبر Supabase في المرحلة القادمة.",dashboard:"لوحة التحكم",dashboard_label:"لوحة تحكم KHEDMA",dashboard_title:"إدارة ملفك",dashboard_text:"حدّث معلوماتك العامة. يظهر الملف المهني للناس بعد نشره.",profile_full_name:"الاسم الكامل",profile_phone:"الهاتف",profile_whatsapp:"واتساب",profile_city:"المدينة",profile_service:"الخدمة",profile_bio:"نبذة عنك",profile_publish:"نشر ملفي المهني",save_profile:"حفظ الملف",profile_saved:"تم حفظ الملف بنجاح."
 }
};

let lang = localStorage.getItem("khedmaLanguage") || "en";
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];


let supabaseClient=null,currentUser=null,authMode="signup";
const sbConfig=window.KHEDMA_SUPABASE||{};
const sbReady=()=>window.supabase&&sbConfig.url&&sbConfig.anonKey&&sbConfig.url.startsWith("http")&&!sbConfig.anonKey.includes("YOUR_");
if(sbReady()) supabaseClient=window.supabase.createClient(sbConfig.url,sbConfig.anonKey);
function updateAccountUI(){const b=$("#accountButton");if(b)b.textContent=currentUser?(lang==="ar"?"حسابي":lang==="fr"?"Mon compte":"My account"):t("account");$("#authName").style.display=authMode==="signup"&&!currentUser?"block":"none";$("#authRole").parentElement.style.display=authMode==="signup"&&!currentUser?"grid":"none";$("#authModeToggle").hidden=!!currentUser;$("#authLogout").hidden=!currentUser;$("#dashboardButton").hidden=!currentUser;}
function authStatus(msg,ok=true){const e=$("#authStatus");e.hidden=false;e.textContent=msg;e.classList.toggle("error",!ok)}
async function refreshAuth(){if(!supabaseClient){updateAccountUI();return}const {data}=await supabaseClient.auth.getUser();currentUser=data?.user||null;updateAccountUI()}
async function loadRealProfessionals(){if(!supabaseClient)return;const {data,error}=await supabaseClient.from("profiles").select("id,full_name,role,city,rating,reviews_count,service_key,whatsapp,verified").eq("role","professional").eq("is_published",true).limit(12);if(error||!data?.length)return;profiles.splice(0,profiles.length,...data.map(p=>{const s=services.find(x=>x.key===p.service_key)||services[0];return{name:p.full_name||"KHEDMA Professional",role:{en:s.en,fr:s.fr,ar:s.ar},city:{en:p.city||"",fr:p.city||"",ar:p.city||""},rating:String(p.rating||0),reviews:String(p.reviews_count||0),service:s.icon,initials:(p.full_name||"KP").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase(),whatsapp:p.whatsapp||""}}));renderProfiles()}
async function saveRequest(){if(!supabaseClient||!currentUser)return false;const {error}=await supabaseClient.from("requests").insert({user_id:currentUser.id,service_key:$("#requestService").value,city:$("#requestCity").value,description:$("#requestDescription").value,phone:$("#requestPhone").value,status:"open"});if(error)throw error;return true}

function t(key){return translations[lang][key] || translations.en[key] || key}
function serviceName(s){return s[lang] || s.en}
function profileRole(p){return p.role?.[lang] || p.role?.en || p.role || ""}
function profileCity(p){return p.city?.[lang] || p.city?.en || p.city || ""}

function applyLanguage(){
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 $("#langCurrent").textContent=lang.toUpperCase();
 $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 $$("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 renderServices(); renderProfiles(); renderCities(); renderCityDiscovery(); fillSelects(); fillProfileForm(); initMap(); renderMapCities(); updateAccountUI();
 $("#serviceSearch").placeholder=t("service_placeholder");
}
function renderServices(){
 $("#servicesGrid").innerHTML=services.map(s=>`<article class="service-card reveal"><div class="service-icon">${s.icon}</div><div><h3>${serviceName(s)}</h3><p>${s.desc[lang]}</p></div></article>`).join("");
 observeReveals();
}
function renderProfiles(){
 const whatsappMessage=lang==="ar"?"مرحباً، وجدت ملفك على KHEDMA.":lang==="fr"?"Bonjour, j’ai trouvé votre profil sur KHEDMA.":"Hello, I found you on KHEDMA.";
 const whatsappText=encodeURIComponent(whatsappMessage);
 $("#profilesGrid").innerHTML=profiles.map((p,i)=>`<article class="profile-card reveal">
  <div class="profile-top"><div class="profile-avatar">${p.initials}</div><span class="profile-service"><span>${p.service}</span><b>${profileRole(p)}</b></span></div>
  <div class="profile-body">
   <span class="demo-tag">${t("demo_tag")}</span>
   <h3>${p.name}</h3><div class="profile-role">${profileRole(p)}</div>
   <div class="profile-meta"><span>📍 ${profileCity(p)}</span><span>★ ${p.rating} (${p.reviews})</span><span>◷ ${t("today")}</span></div>
   <div class="profile-actions"><button type="button" data-profile="${i}">${t("view_profile")}</button><a class="whatsapp" href="${p.whatsapp ? `https://wa.me/${p.whatsapp.replace(/\D/g,"")}?text=${whatsappText}` : `https://wa.me/?text=${whatsappText}`}" target="_blank" rel="noopener">${t("whatsapp")}</a></div>
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
const discoverCities=["Agadir","Marrakech","Casablanca","Rabat","Tangier","Fes","Taroudant","Dakhla","Oujda","Tetouan"];
let selectedDiscoverCity="Morocco";
const discoverAr={Agadir:"أكادير",Marrakech:"مراكش",Casablanca:"الدار البيضاء",Rabat:"الرباط",Tangier:"طنجة",Fes:"فاس",Taroudant:"تارودانت",Dakhla:"الداخلة",Oujda:"وجدة",Tetouan:"تطوان",Morocco:"المغرب"};
const discoverFr={Fes:"Fès",Tangier:"Tanger",Taroudant:"Taroudant",Tetouan:"Tétouan",Morocco:"Maroc"};
function discoverCityLabel(city){return lang==="ar"?(discoverAr[city]||city):lang==="fr"?(discoverFr[city]||city):city;}
function renderCityDiscovery(){
 const row=$("cityPicks"); if(!row)return;
 row.innerHTML=discoverCities.map(city=>`<button type="button" class="city-pick ${selectedDiscoverCity===city?'active':''}" data-discover-city="${city}"><span></span>${discoverCityLabel(city)}</button>`).join("");
 const name=$("selectedCityName"); if(name)name.textContent=discoverCityLabel(selectedDiscoverCity);
 const text=$("selectedCityText"); if(text)text.textContent=selectedDiscoverCity==="Morocco"?t("city_focus_text"):(lang==="ar"?`اكتشف المهنيين والخدمات في ${discoverCityLabel(selectedDiscoverCity)}.`:lang==="fr"?`Découvrez les professionnels et services à ${discoverCityLabel(selectedDiscoverCity)}.`:`Discover professionals and services in ${discoverCityLabel(selectedDiscoverCity)}.`);
}
function selectDiscoverCity(city){selectedDiscoverCity=city||"Morocco";const select=$("citySelect");if(select)select.value=selectedDiscoverCity;renderCityDiscovery();}
function openDiscoverSearch(){const city=selectedDiscoverCity||"Morocco";if(city!=="Morocco")runSearch(city);else document.querySelector("#professionals")?.scrollIntoView({behavior:"smooth",block:"start"});}
const mapCities={
  Agadir:[30.4278,-9.5981], Casablanca:[33.5731,-7.5898], Rabat:[34.0209,-6.8416], Marrakech:[31.6295,-7.9811], Fes:[34.0331,-5.0003], Tangier:[35.7595,-5.8340], Oujda:[34.6814,-1.9086], Meknes:[33.8935,-5.5473], Kenitra:[34.2610,-6.5802], Tetouan:[35.5889,-5.3626], Safi:[32.2994,-9.2372], Nador:[35.1740,-2.9287], BeniMellal:[32.3373,-6.3498], Errachidia:[31.9314,-4.4244], Ouarzazate:[30.9335,-6.9370], Dakhla:[23.6848,-15.9570], Laayoune:[27.1253,-13.1625], Taroudant:[30.4703,-8.8769]
};
const mapCityNames={Agadir:"Agadir",Casablanca:"Casablanca",Rabat:"Rabat",Marrakech:"Marrakech",Fes:"Fes",Tangier:"Tangier",Oujda:"Oujda",Meknes:"Meknes",Kenitra:"Kenitra",Tetouan:"Tetouan",Safi:"Safi",Nador:"Nador",BeniMellal:"Beni Mellal",Errachidia:"Errachidia",Ouarzazate:"Ouarzazate",Dakhla:"Dakhla",Laayoune:"Laayoune",Taroudant:"Taroudant"};
let mapSelectedCity="Morocco";
function mapLabel(city){
 const ar={Agadir:"أكادير",Casablanca:"الدار البيضاء",Rabat:"الرباط",Marrakech:"مراكش",Fes:"فاس",Tangier:"طنجة",Oujda:"وجدة",Meknes:"مكناس",Kenitra:"القنيطرة",Tetouan:"تطوان",Safi:"آسفي",Nador:"الناظور",BeniMellal:"بني ملال",Errachidia:"الرشيدية",Ouarzazate:"ورزازات",Dakhla:"الداخلة",Laayoune:"العيون",Taroudant:"تارودانت"};
 const fr={Fes:"Fès",Tangier:"Tanger",Kenitra:"Kénitra",Tetouan:"Tétouan",Nador:"Nador",BeniMellal:"Béni Mellal",Laayoune:"Laâyoune",Taroudant:"Taroudant"};
 return lang==="ar"?(ar[city]||city):lang==="fr"?(fr[city]||city):(mapCityNames[city]||city);
}
function mapPoint(lat,lon){
 const x=((lon+17.2)/16.7)*620+40;
 const y=((36.3-lat)/15.2)*480+20;
 return [Math.max(28,Math.min(672,x)),Math.max(24,Math.min(496,y))];
}
function initMap(){
 const el=$("moroccoMap"); if(!el)return;
 const pins=Object.entries(mapCities).map(([city,[lat,lon]])=>{
   const [x,y]=mapPoint(lat,lon);
   return `<button class="svg-map-pin ${mapSelectedCity===city?'active':''}" style="left:${(x/700)*100}%;top:${(y/520)*100}%" type="button" data-svg-city="${city}" aria-label="${mapLabel(city)}"><span></span><b>${mapLabel(city)}</b></button>`;
 }).join("");
 el.innerHTML=`<div class="svg-map-canvas">
   <svg viewBox="0 0 700 520" role="img" aria-label="Morocco city map" preserveAspectRatio="xMidYMid meet">
    <defs><linearGradient id="mapLand" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f2e7d1"/><stop offset="1" stop-color="#d9c39b"/></linearGradient><pattern id="mapGrid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#ffffff" stroke-opacity=".12"/></pattern></defs>
    <rect width="700" height="520" rx="24" fill="#d8e2dc"/>
    <rect width="700" height="520" rx="24" fill="url(#mapGrid)"/>
    <path d="M78 368 L94 333 L122 315 L153 296 L180 270 L217 260 L250 238 L287 221 L329 201 L371 184 L414 167 L456 150 L502 132 L545 116 L583 108 L608 122 L593 145 L570 166 L551 190 L535 220 L518 253 L504 287 L491 320 L480 354 L473 389 L466 425 L457 460 L442 488 L420 502 L401 483 L386 457 L368 430 L347 405 L326 383 L303 363 L278 345 L251 333 L224 324 L195 319 L166 323 L138 335 L112 353 Z" fill="url(#mapLand)" stroke="#ffffff" stroke-width="4"/>
    <path d="M125 350 C205 320 280 303 365 282 S505 218 575 150" fill="none" stroke="#c96547" stroke-opacity=".16" stroke-width="3"/>
    <path d="M180 300 C250 340 315 340 385 305 S490 235 540 185" fill="none" stroke="#0f493d" stroke-opacity=".12" stroke-width="3"/>
    <path d="M95 390 C210 370 285 392 360 420 S425 455 460 470" fill="none" stroke="#d8c16b" stroke-opacity=".28" stroke-width="5"/>
    <text x="48" y="62" fill="#0f493d" font-size="17" font-weight="700">KHEDMA</text>
    <text x="48" y="86" fill="#6d7b74" font-size="12">Morocco • local professionals</text>
   </svg>${pins}
   <div class="svg-map-caption"><span class="gold-dot"></span><strong>${lang==="ar"?"مدن مغربية قريبة منك":lang==="fr"?"Des villes marocaines près de vous":"Moroccan cities near you"}</strong></div>
 </div>`;
 el.querySelectorAll("[data-svg-city]").forEach(btn=>btn.addEventListener("click",()=>selectMapCity(btn.dataset.svgCity)));
}
function renderMapCities(){
 const row=$("mapCityRow"); if(!row)return;
 const popular=["Agadir","Marrakech","Casablanca","Rabat","Tangier","Fes","Taroudant","Dakhla"];
 row.innerHTML=popular.map(city=>`<button type="button" class="map-city-chip ${mapSelectedCity===city?'active':''}" data-map-city="${city}">${mapLabel(city)}</button>`).join("");
}
function selectMapCity(city){
 if(!mapCities[city])return;
 mapSelectedCity=city;
 const select=$("citySelect"); if(select)select.value=city;
 initMap(); renderMapCities();
 runSearch(city);
}
function setMapCity(city){
 mapSelectedCity=city||"Morocco";
 initMap(); renderMapCities();
}
function locateUser(){
 if(!navigator.geolocation)return;
 navigator.geolocation.getCurrentPosition(pos=>{
   const {latitude,longitude}=pos.coords;
   let nearest=null,best=Infinity;
   Object.entries(mapCities).forEach(([city,[lat,lon]])=>{const d=Math.hypot(lat-latitude,lon-longitude);if(d<best){best=d;nearest=city;}});
   if(nearest){selectMapCity(nearest);selectDiscoverCity(nearest);}
 },()=>{});
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

async function loadMyProfile(){
 if(!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from("profiles").select("*").eq("id",currentUser.id).maybeSingle();
 if(error){$("#profileSaveStatus").hidden=false;$("#profileSaveStatus").textContent=error.message;return}
 const p=data||{};
 $("#profileName").value=p.full_name||currentUser.user_metadata?.full_name||"";
 $("#profilePhone").value=p.phone||"";
 $("#profileWhatsapp").value=p.whatsapp||"";
 $("#profileCity").value=p.city||"";
 $("#profileService").value=p.service_key||"";
 $("#profileBio").value=p.bio||"";
 $("#profilePublished").checked=!!p.is_published;
 const isPro=p.role==="professional" || currentUser.user_metadata?.role==="professional";
 $("#publishRow").style.display=isPro?"flex":"none";
 $("#profileService").parentElement.style.display=isPro?"grid":"none";
}
function fillProfileForm(){
 $("#profileCity").innerHTML=`<option value="">${t("profile_city")}</option>`+cities.map(c=>`<option>${c}</option>`).join("");
 $("#profileService").innerHTML=`<option value="">${t("profile_service")}</option>`+services.map(s=>`<option value="${s.key}">${serviceName(s)}</option>`).join("");
}
async function saveMyProfile(e){
 e.preventDefault();
 if(!supabaseClient||!currentUser){$("#profileSaveStatus").hidden=false;$("#profileSaveStatus").textContent=t("account_text");return}
 const {data:existing}=await supabaseClient.from("profiles").select("role").eq("id",currentUser.id).maybeSingle();
 const role=existing?.role||currentUser.user_metadata?.role||"customer";
 const payload={
  id:currentUser.id,full_name:$("#profileName").value.trim(),role,
  phone:$("#profilePhone").value.trim(),whatsapp:$("#profileWhatsapp").value.trim(),
  city:$("#profileCity").value,service_key:role==="professional"?$("#profileService").value:null,
  bio:$("#profileBio").value.trim(),is_published:role==="professional"?$("#profilePublished").checked:false,
  updated_at:new Date().toISOString()
 };
 const {error}=await supabaseClient.from("profiles").upsert(payload,{onConflict:"id"});
 $("#profileSaveStatus").hidden=false;
 $("#profileSaveStatus").textContent=error?error.message:t("profile_saved");
 if(!error)await loadRealProfessionals();
}

function showProfile(index){
 const p=profiles[index];
 const waText=lang==="ar"?"مرحباً، وجدت ملفك على KHEDMA.":lang==="fr"?"Bonjour, j’ai trouvé votre profil sur KHEDMA.":"Hello, I found you on KHEDMA.";
 $("#profileModalContent").innerHTML=`<div class="profile-top" style="border-radius:20px;margin-bottom:20px"><div class="profile-avatar">${p.initials}</div><span class="profile-service"><span>${p.service}</span><b>${profileRole(p)}</b></span></div>
 <span class="demo-tag">${t("demo_tag")}</span><h2>${p.name}</h2><p><b>${profileRole(p)}</b> · ${profileCity(p)}</p><p>★ ${p.rating} (${p.reviews}) · ${t("today")}</p><a class="btn btn-primary full" href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener">${t("whatsapp")}</a>`;
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
$("#citySelect").addEventListener("change",e=>{setMapCity(e.target.value);selectDiscoverCity(e.target.value);});
$("#discoverButton").addEventListener("click",openDiscoverSearch);
$("#discoverNear").addEventListener("click",locateUser);
document.addEventListener("click",e=>{const b=e.target.closest("[data-discover-city]");if(b)selectDiscoverCity(b.dataset.discoverCity);});
$("#locateButton").addEventListener("click",locateUser);
document.addEventListener("click",e=>{const b=e.target.closest("[data-map-city]");if(b)selectMapCity(b.dataset.mapCity)});
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
$("#requestForm").addEventListener("submit",async e=>{e.preventDefault();$("#requestSuccess").hidden=false;try{if(supabaseClient&&currentUser){await saveRequest();$("#requestSuccess").textContent=lang==="ar"?"تم إرسال طلبك إلى KHEDMA.":lang==="fr"?"Votre demande a été envoyée à KHEDMA.":"Your request was sent to KHEDMA.";}else $("#requestSuccess").textContent=t("request_ready")}catch(err){$("#requestSuccess").textContent=err.message||"Could not save request."}});
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
$("#accountButton").addEventListener("click",()=>{refreshAuth();openModal("accountModal")});
$("#dashboardButton").addEventListener("click",async()=>{closeModal("accountModal");fillProfileForm();openModal("dashboardModal");await loadMyProfile()});
$("#profileForm").addEventListener("submit",saveMyProfile);
$("#authModeToggle").addEventListener("click",()=>{authMode=authMode==="signup"?"login":"signup";$("#authModeToggle").textContent=authMode==="signup"?t("auth_switch"):(lang==="ar"?"إنشاء حساب جديد":lang==="fr"?"Créer un compte":"Create a new account");updateAccountUI()});
$("#authLogout").addEventListener("click",async()=>{if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;updateAccountUI();authStatus(lang==="ar"?"تم تسجيل الخروج.":lang==="fr"?"Déconnexion réussie.":"You are signed out.")});
$("#authForm").addEventListener("submit",async e=>{e.preventDefault();if(!supabaseClient){authStatus(lang==="ar"?"أضف إعدادات Supabase أولاً.":lang==="fr"?"Ajoutez d’abord la configuration Supabase.":"Add your Supabase settings first.",false);return}try{const email=$("#authEmail").value.trim(),password=$("#authPassword").value,name=$("#authName").value.trim(),role=$("#authRole").value;if(authMode==="signup"){const {data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{full_name:name,role}}});if(error)throw error;currentUser=data.user||null;authStatus(lang==="ar"?"تم إنشاء الحساب.":lang==="fr"?"Compte créé.":"Account created.")}else{const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});if(error)throw error;currentUser=data.user;authStatus(lang==="ar"?"تم تسجيل الدخول.":lang==="fr"?"Connexion réussie.":"Signed in successfully.")}updateAccountUI()}catch(err){authStatus(err.message||"Authentication error",false)}});
window.addEventListener("load",async()=>{applyLanguage();observeReveals();initMap();await refreshAuth();await loadRealProfessionals()});
