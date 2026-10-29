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
  demo_tag:"DEMO PROFILE — NOT VERIFIED",view_profile:"View profile",whatsapp:"WhatsApp",today:"Today",search_found:"Showing demo professionals for",request_ready:"Request prepared successfully. Supabase will connect this to real professionals in the next stage.",dashboard:"My dashboard",dashboard_label:"KHEDMA DASHBOARD",dashboard_title:"Manage your profile",dashboard_text:"Update your public information. Professional profiles appear publicly only after you publish them.",dash_overview:"Overview",dash_profile:"Profile",dash_work:"Work photos",dash_availability:"Availability",dash_requests:"Requests",dash_status_label:"PROFILE STATUS",dash_status_text:"Complete your profile to start using KHEDMA.",dash_photos:"Work photos",dash_incoming:"Incoming requests",dash_completion:"Profile complete",dash_complete:"Complete profile",dash_work_label:"YOUR WORK",dash_work_title:"Show what you do.",dash_work_text:"Upload a few real photos of your work. Customers will see them on your professional profile.",dash_add_photos:"Add work photos",dash_photo_hint:"JPG or PNG · up to 6 photos",dash_availability_label:"AVAILABILITY",dash_availability_title:"Tell customers when you are available.",dash_save_availability:"Save availability",dash_requests_label:"INCOMING LEADS",dash_requests_title:"Requests that match your profile.",dash_no_requests:"No incoming requests yet.",dash_request_city:"City",dash_request_service:"Service",dash_request_contact:"Contact customer",dash_request_status:"Mark as contacted",dash_open_profile:"Open profile",profile_full_name:"Full name",profile_phone:"Phone",profile_whatsapp:"WhatsApp",profile_city:"City",profile_service:"Service",profile_bio:"About you",profile_publish:"Publish my professional profile",save_profile:"Save profile",profile_saved:"Profile saved successfully.",avail_mon:"Monday",avail_tue:"Tuesday",avail_wed:"Wednesday",avail_thu:"Thursday",avail_fri:"Friday",avail_sat:"Saturday",avail_sun:"Sunday",avail_off:"Unavailable",avail_morning:"Morning",avail_afternoon:"Afternoon",avail_evening:"Evening",dash_photo_saved:"Photo uploaded.",dash_photo_error:"Could not upload this photo."
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
  demo_tag:"PROFIL DÉMO — NON VÉRIFIÉ",view_profile:"Voir le profil",whatsapp:"WhatsApp",today:"Aujourd'hui",search_found:"Professionnels démo pour",request_ready:"Demande préparée avec succès. Supabase la connectera aux vrais professionnels à l'étape suivante.",dashboard:"Mon tableau de bord",dashboard_label:"TABLEAU DE BORD KHEDMA",dashboard_title:"Gérez votre profil",dashboard_text:"Mettez à jour vos informations publiques. Les profils professionnels ne sont visibles qu’après publication.",dash_overview:"Aperçu",dash_profile:"Profil",dash_work:"Photos de travail",dash_availability:"Disponibilité",dash_requests:"Demandes",dash_status_label:"ÉTAT DU PROFIL",dash_status_text:"Complétez votre profil pour commencer sur KHEDMA.",dash_photos:"Photos de travail",dash_incoming:"Demandes reçues",dash_completion:"Profil complété",dash_complete:"Compléter le profil",dash_work_label:"VOTRE TRAVAIL",dash_work_title:"Montrez votre savoir-faire.",dash_work_text:"Ajoutez quelques vraies photos de votre travail. Elles apparaîtront sur votre profil professionnel.",dash_add_photos:"Ajouter des photos",dash_photo_hint:"JPG ou PNG · jusqu’à 6 photos",dash_availability_label:"DISPONIBILITÉ",dash_availability_title:"Indiquez quand vous êtes disponible.",dash_save_availability:"Enregistrer la disponibilité",dash_requests_label:"NOUVEAUX LEADS",dash_requests_title:"Demandes correspondant à votre profil.",dash_no_requests:"Aucune demande reçue pour le moment.",dash_request_city:"Ville",dash_request_service:"Service",dash_request_contact:"Contacter le client",dash_request_status:"Marquer comme contacté",dash_open_profile:"Ouvrir le profil",avail_mon:"Lundi",avail_tue:"Mardi",avail_wed:"Mercredi",avail_thu:"Jeudi",avail_fri:"Vendredi",avail_sat:"Samedi",avail_sun:"Dimanche",avail_off:"Indisponible",avail_morning:"Matin",avail_afternoon:"Après-midi",avail_evening:"Soir",dash_photo_saved:"Photo ajoutée.",dash_photo_error:"Impossible d’ajouter cette photo."
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
  demo_tag:"ملف تجريبي — غير موثّق",view_profile:"عرض الملف",whatsapp:"واتساب",today:"اليوم",search_found:"مهنيون تجريبيون لـ",request_ready:"تم تجهيز الطلب بنجاح. سيتم ربطه بالمهنيين الحقيقيين عبر Supabase في المرحلة القادمة.",dashboard:"لوحة التحكم",dashboard_label:"لوحة تحكم KHEDMA",dashboard_title:"إدارة ملفك",dashboard_text:"حدّث معلوماتك العامة. يظهر الملف المهني للناس بعد نشره.",profile_full_name:"الاسم الكامل",profile_phone:"الهاتف",profile_whatsapp:"واتساب",profile_city:"المدينة",profile_service:"الخدمة",profile_bio:"نبذة عنك",profile_publish:"نشر ملفي المهني",save_profile:"حفظ الملف",profile_saved:"تم حفظ الملف بنجاح.",avail_mon:"الاثنين",avail_tue:"الثلاثاء",avail_wed:"الأربعاء",avail_thu:"الخميس",avail_fri:"الجمعة",avail_sat:"السبت",avail_sun:"الأحد",avail_off:"غير متاح",avail_morning:"الصباح",avail_afternoon:"بعد الظهر",avail_evening:"المساء",dash_photo_saved:"تم رفع الصورة.",dash_photo_error:"تعذر رفع هذه الصورة."
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
async function loadRealProfessionals(){if(!supabaseClient)return;const {data,error}=await supabaseClient.from("profiles").select("id,full_name,role,city,rating,reviews_count,service_key,whatsapp,verified").eq("role","professional").eq("is_published",true).limit(12);if(error||!data?.length)return;profiles.splice(0,profiles.length,...data.map(p=>{const s=services.find(x=>x.key===p.service_key)||services[0];return{id:p.id,name:p.full_name||"KHEDMA Professional",role:{en:s.en,fr:s.fr,ar:s.ar},city:{en:p.city||"",fr:p.city||"",ar:p.city||""},rating:String(p.rating||0),reviews:String(p.reviews_count||0),service:s.icon,initials:(p.full_name||"KP").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase(),whatsapp:p.whatsapp||""}}));renderProfiles()}
async function saveRequest(){if(!supabaseClient||!currentUser)return false;const {error}=await supabaseClient.from("requests").insert({user_id:currentUser.id,service_key:$("#requestService").value,city:$("#requestCity").value,description:$("#requestDescription").value,phone:$("#requestPhone").value,status:"open"});if(error)throw error;return true}

const extraTranslations={
 en:{dash_my_requests:"My requests",dash_saved:"Saved",dash_saved_count:"Saved professionals",dash_reviews:"Reviews",dash_next_label:"NEXT STEP",dash_next_title:"Keep your account ready.",dash_next_text:"Complete your information, send requests and keep your trusted professionals in one place.",dash_requests_label:"MY ACTIVITY",dash_requests_title:"Your requests.",dash_no_my_requests:"You have no requests yet.",dash_saved_label:"SAVED",dash_saved_title:"Professionals you want to keep.",dash_no_saved:"You have not saved a professional yet.",dash_reviews_label:"YOUR REVIEWS",dash_reviews_title:"Share your experience.",review_professional:"Professional",review_rating:"Rating",review_comment:"Comment",review_submit:"Submit review",review_saved:"Review submitted successfully.",review_no_reviews:"You have not written a review yet.",save_professional:"Save",saved_professional:"Saved",unsave_professional:"Remove",request_status:"Status",request_date:"Date",request_description:"Request",customer_profile_title:"My account",customer_profile_text:"Keep your contact details ready so KHEDMA can connect you with the right professional."},
 fr:{dash_my_requests:"Mes demandes",dash_saved:"Enregistrés",dash_saved_count:"Professionnels enregistrés",dash_reviews:"Avis",dash_next_label:"PROCHAINE ÉTAPE",dash_next_title:"Gardez votre compte prêt.",dash_next_text:"Complétez vos informations, envoyez des demandes et gardez vos professionnels de confiance au même endroit.",dash_requests_label:"MON ACTIVITÉ",dash_requests_title:"Vos demandes.",dash_no_my_requests:"Vous n’avez pas encore de demande.",dash_saved_label:"ENREGISTRÉS",dash_saved_title:"Les professionnels à garder.",dash_no_saved:"Vous n’avez encore enregistré aucun professionnel.",dash_reviews_label:"VOS AVIS",dash_reviews_title:"Partagez votre expérience.",review_professional:"Professionnel",review_rating:"Note",review_comment:"Commentaire",review_submit:"Publier l’avis",review_saved:"Avis publié avec succès.",review_no_reviews:"Vous n’avez pas encore publié d’avis.",save_professional:"Enregistrer",saved_professional:"Enregistré",unsave_professional:"Retirer",request_status:"Statut",request_date:"Date",request_description:"Demande",customer_profile_title:"Mon compte",customer_profile_text:"Gardez vos coordonnées prêtes pour que KHEDMA puisse vous connecter au bon professionnel."},
 ar:{dash_my_requests:"طلباتي",dash_saved:"المحفوظات",dash_saved_count:"المهنيون المحفوظون",dash_reviews:"تقييماتي",dash_next_label:"الخطوة التالية",dash_next_title:"اجعل حسابك جاهزاً.",dash_next_text:"أكمل معلوماتك، أرسل طلباتك واحتفظ بالمهنيين الذين تثق بهم في مكان واحد.",dash_requests_label:"نشاطي",dash_requests_title:"طلباتي.",dash_no_my_requests:"لا توجد لديك طلبات بعد.",dash_saved_label:"المحفوظات",dash_saved_title:"مهنيون تريد الاحتفاظ بهم.",dash_no_saved:"لم تحفظ أي مهني بعد.",dash_reviews_label:"تقييماتك",dash_reviews_title:"شارك تجربتك.",review_professional:"المهني",review_rating:"التقييم",review_comment:"التعليق",review_submit:"إرسال التقييم",review_saved:"تم إرسال التقييم بنجاح.",review_no_reviews:"لم تكتب أي تقييم بعد.",save_professional:"حفظ",saved_professional:"محفوظ",unsave_professional:"إزالة",request_status:"الحالة",request_date:"التاريخ",request_description:"الطلب",customer_profile_title:"حسابي",customer_profile_text:"احتفظ بمعلومات التواصل جاهزة حتى تتمكن KHEDMA من ربطك بالمهني المناسب."}
};
function t(key){return extraTranslations[lang]?.[key] || translations[lang][key] || translations.en[key] || key}
function serviceName(s){return s[lang] || s.en}
function profileRole(p){return p.role?.[lang] || p.role?.en || p.role || ""}
function profileCity(p){return p.city?.[lang] || p.city?.en || p.city || ""}

function applyLanguage(){
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 $("#langCurrent").textContent=lang.toUpperCase();
 $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 $$("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 renderServices(); renderProfiles(); renderCities(); renderCityDiscovery(); fillSelects(); fillProfileForm(); updateAccountUI(); if(myProfileCache){updateDashboardOverview(myProfileCache);renderAvailability(myProfileCache.availability||{});} if(!$("dashboardModal")?.hidden){loadWorkPhotos();loadIncomingRequests();loadCustomerRequests();loadSavedProfessionals();loadReviewOptions();loadMyReviews();}
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
   <div class="profile-actions"><button type="button" data-profile="${i}">${t("view_profile")}</button>${p.id?`<button type="button" class="save-pro-button" data-save-pro="${p.id}">${t("save_professional")}</button>`:""}<a class="whatsapp" href="${p.whatsapp ? `https://wa.me/${p.whatsapp.replace(/\D/g,"")}?text=${whatsappText}` : `https://wa.me/?text=${whatsappText}`}" target="_blank" rel="noopener">${t("whatsapp")}</a></div>
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
 document.querySelector("#professionals").scrollIntoView({behavior:"smooth",block:"start"});
}
function openModal(id){const el=$("#"+id);el.hidden=false;document.body.classList.add("modal-open")}
function closeModal(id){const el=$("#"+id);el.hidden=true;if(!$$(".modal-overlay:not([hidden])").length)document.body.classList.remove("modal-open")}


const availabilityDays=["mon","tue","wed","thu","fri","sat","sun"];
const availabilityLabels={mon:"avail_mon",tue:"avail_tue",wed:"avail_wed",thu:"avail_thu",fri:"avail_fri",sat:"avail_sat",sun:"avail_sun"};
let myProfileCache=null;
function dashboardTab(name){
  $$('[data-dashboard-tab]').forEach(b=>b.classList.toggle('active',b.dataset.dashboardTab===name));
  $$('[data-dashboard-panel]').forEach(p=>p.classList.toggle('active',p.dataset.dashboardPanel===name));
}
function renderAvailability(value={}){
 const box=$("availabilityGrid"); if(!box)return;
 box.innerHTML=availabilityDays.map(day=>{
   const d=value[day]||{enabled:false,slot:"morning"};
   return `<label class="availability-row"><span><input type="checkbox" data-avail-day="${day}" ${d.enabled?'checked':''}> <b>${t(availabilityLabels[day])}</b></span><select data-avail-slot="${day}" ${d.enabled?'':'disabled'}><option value="morning" ${d.slot==='morning'?'selected':''}>${t('avail_morning')}</option><option value="afternoon" ${d.slot==='afternoon'?'selected':''}>${t('avail_afternoon')}</option><option value="evening" ${d.slot==='evening'?'selected':''}>${t('avail_evening')}</option></select></label>`;
 }).join('');
 box.querySelectorAll('[data-avail-day]').forEach(ch=>ch.addEventListener('change',()=>{const s=box.querySelector(`[data-avail-slot="${ch.dataset.availDay}"]`);s.disabled=!ch.checked;}));
}
function readAvailability(){
 const out={}; availabilityDays.forEach(day=>{const c=$(`[data-avail-day="${day}"]`),s=$(`[data-avail-slot="${day}"]`);out[day]={enabled:!!c?.checked,slot:s?.value||'morning'};}); return out;
}
function profileCompletion(p){
 const fields=p?.role==='professional'?[p.full_name,p.phone,p.whatsapp,p.city,p.service_key,p.bio]:[p.full_name,p.phone,p.city];
 return Math.round(fields.filter(Boolean).length/fields.length*100);
}
function updateDashboardOverview(p){
 const name=$("dashboardName"), avatar=$("dashboardAvatar"), comp=$("dashCompletion");
 if(name)name.textContent=p?.full_name||"KHEDMA";
 if(avatar)avatar.textContent=(p?.full_name||"K").split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
 if(comp)comp.textContent=`${profileCompletion(p||{})}%`;
 const status=$("dashboardStatusText"); if(status){if(p?.role==='professional') status.textContent=p?.is_published?(lang==='ar'?"ملفك المهني منشور الآن.":lang==='fr'?"Votre profil professionnel est publié.":"Your professional profile is live."):(lang==='ar'?"أكمل معلوماتك وانشر ملفك المهني.":lang==='fr'?"Complétez vos informations puis publiez votre profil.":"Complete your information, then publish your professional profile."); else status.textContent=lang==='ar'?"حسابك جاهز لإرسال الطلبات وحفظ المهنيين.":lang==='fr'?"Votre compte est prêt pour vos demandes et professionnels enregistrés.":"Your account is ready for requests and saved professionals.";}
}
async function loadWorkPhotos(){
 const grid=$("workPhotosGrid"); if(!grid||!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from('work_photos').select('*').eq('professional_id',currentUser.id).order('sort_order').order('created_at');
 if(error){grid.innerHTML=`<p class="dashboard-muted">${error.message}</p>`;return;}
 $("dashPhotoCount").textContent=data?.length||0;
 grid.innerHTML=(data||[]).map(photo=>`<article class="work-photo"><img src="${photo.image_url}" alt="${photo.caption||'KHEDMA work photo'}"><button type="button" data-delete-photo="${photo.id}" aria-label="Delete">×</button></article>`).join('')||`<p class="dashboard-muted">${t('dash_work_text')}</p>`;
}
async function uploadWorkPhotos(files){
 if(!supabaseClient||!currentUser)return;
 const status=$("photoStatus"); status.hidden=false; status.textContent='';
 const {data:existing}=await supabaseClient.from('work_photos').select('id').eq('professional_id',currentUser.id);
 let count=existing?.length||0;
 for(const file of [...files].slice(0,Math.max(0,6-count))){
   const ext=(file.name.split('.').pop()||'jpg').toLowerCase(); const path=`${currentUser.id}/${crypto.randomUUID()}.${ext}`;
   const up=await supabaseClient.storage.from('work-photos').upload(path,file,{upsert:false,contentType:file.type});
   if(up.error){status.textContent=up.error.message;continue;}
   const pub=supabaseClient.storage.from('work-photos').getPublicUrl(path).data.publicUrl;
   const ins=await supabaseClient.from('work_photos').insert({professional_id:currentUser.id,image_url:pub,storage_path:path,sort_order:count});
   if(ins.error){await supabaseClient.storage.from('work-photos').remove([path]);status.textContent=ins.error.message;continue;}
   count++;
 }
 if(!status.textContent)status.textContent=t('dash_photo_saved');
 await loadWorkPhotos();
}
async function deleteWorkPhoto(id){
 const {data}=await supabaseClient.from('work_photos').select('storage_path').eq('id',id).maybeSingle();
 if(data?.storage_path)await supabaseClient.storage.from('work-photos').remove([data.storage_path]);
 await supabaseClient.from('work_photos').delete().eq('id',id); await loadWorkPhotos();
}
async function loadIncomingRequests(){
 const box=$("professionalRequests"); if(!box||!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from('requests').select('*').eq('professional_id',currentUser.id).order('created_at',{ascending:false});
 if(error){box.innerHTML=`<p class="dashboard-muted">${error.message}</p>`;return;}
 $("dashRequestCount").textContent=data?.length||0;
 box.innerHTML=(data||[]).map(r=>`<article class="incoming-request"><div><span class="section-label">${r.status||'open'}</span><h4>${r.description||''}</h4><p>${t('dash_request_service')}: ${serviceName(services.find(s=>s.key===r.service_key)||services[0])} · ${t('dash_request_city')}: ${r.city}</p><small>${new Date(r.created_at).toLocaleDateString(lang==='ar'?'ar-MA':'en-MA')}</small></div><a class="btn btn-light" href="https://wa.me/${String(r.phone||'').replace(/\D/g,'')}" target="_blank" rel="noopener">${t('dash_request_contact')}</a></article>`).join('')||`<p class="dashboard-muted">${t('dash_no_requests')}</p>`;
}
async function loadCustomerRequests(){
 const box=$("customerRequests"); if(!box||!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from('requests').select('*').eq('user_id',currentUser.id).order('created_at',{ascending:false});
 if(error){box.innerHTML=`<p class="dashboard-muted">${error.message}</p>`;return;}
 $("dashRequestCount").textContent=data?.length||0;
 box.innerHTML=(data||[]).map(r=>`<article class="customer-request"><div><span class="request-status-pill ${r.status||'open'}">${r.status||'open'}</span><h4>${r.description||''}</h4><p>${t('dash_request_service')}: ${serviceName(services.find(s=>s.key===r.service_key)||services[0])} · ${t('dash_request_city')}: ${r.city}</p><small>${new Date(r.created_at).toLocaleDateString(lang==='ar'?'ar-MA':'en-MA')}</small></div><strong>${r.professional_id? (lang==='ar'?'تم إسناده لمهني':lang==='fr'?'Professionnel assigné':'Professional assigned') : (lang==='ar'?'في الانتظار':lang==='fr'?'En attente':'Waiting')}</strong></article>`).join('')||`<p class="dashboard-muted">${t('dash_no_my_requests')}</p>`;
}
async function loadSavedProfessionals(){
 const box=$("savedProfessionals"); if(!box||!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from('saved_professionals').select('id,professional_id,created_at,profiles:professional_id(id,full_name,city,service_key,rating,reviews_count,whatsapp,verified,is_published)').eq('customer_id',currentUser.id).order('created_at',{ascending:false});
 if(error){box.innerHTML=`<p class="dashboard-muted">${error.message}</p>`;return;}
 $("dashSavedCount").textContent=data?.length||0;
 box.innerHTML=(data||[]).map(row=>{const p=row.profiles; if(!p)return ''; const sv=services.find(x=>x.key===p.service_key)||services[0]; return `<article class="saved-pro-card"><div class="saved-pro-avatar">${(p.full_name||'KP').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase()}</div><div class="saved-pro-main"><strong>${p.full_name||'KHEDMA Professional'}</strong><span>${serviceName(sv)} · ${p.city||''}</span><small>★ ${p.rating||0} (${p.reviews_count||0})</small></div><div class="saved-pro-actions"><button type="button" class="btn btn-light" data-open-saved="${p.id}">${t('view_profile')}</button><a class="btn btn-primary" href="https://wa.me/${String(p.whatsapp||'').replace(/\D/g,'')}" target="_blank" rel="noopener">${t('whatsapp')}</a></div></article>`}).join('')||`<p class="dashboard-muted">${t('dash_no_saved')}</p>`;
}
async function loadReviewOptions(){
 const select=$("reviewProfessional"); if(!select||!supabaseClient||!currentUser)return;
 const {data}=await supabaseClient.from('profiles').select('id,full_name,city,service_key').eq('role','professional').eq('is_published',true).order('full_name').limit(100);
 select.innerHTML=`<option value="">${t('review_professional')}</option>`+(data||[]).map(p=>`<option value="${p.id}">${p.full_name} · ${p.city||''}</option>`).join('');
}
async function loadMyReviews(){
 const box=$("myReviews"); if(!box||!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from('reviews').select('id,rating,comment,created_at,professional:professional_id(full_name,city)').eq('customer_id',currentUser.id).order('created_at',{ascending:false});
 if(error){box.innerHTML=`<p class="dashboard-muted">${error.message}</p>`;return;}
 box.innerHTML=(data||[]).map(r=>`<article class="review-item"><strong>${r.professional?.full_name||'KHEDMA Professional'}</strong><span>${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span><p>${r.comment||''}</p><small>${new Date(r.created_at).toLocaleDateString(lang==='ar'?'ar-MA':'en-MA')}</small></article>`).join('')||`<p class="dashboard-muted">${t('review_no_reviews')}</p>`;
}
async function toggleSavedProfessional(professionalId,button){
 if(!supabaseClient||!currentUser){openModal('accountModal');return;}
 const {data:existing}=await supabaseClient.from('saved_professionals').select('id').eq('customer_id',currentUser.id).eq('professional_id',professionalId).maybeSingle();
 if(existing){await supabaseClient.from('saved_professionals').delete().eq('id',existing.id);if(button)button.textContent=t('save_professional');}
 else {const {error}=await supabaseClient.from('saved_professionals').insert({customer_id:currentUser.id,professional_id:professionalId});if(!error&&button)button.textContent=t('saved_professional');}
 await loadSavedProfessionals();
}
async function submitReview(e){
 e.preventDefault(); if(!supabaseClient||!currentUser)return;
 const status=$("reviewStatus"); status.hidden=false; status.textContent='';
 const payload={customer_id:currentUser.id,professional_id:$("reviewProfessional").value,rating:Number($("reviewRating").value),comment:$("reviewComment").value.trim()};
 if(!payload.professional_id){status.textContent=t('review_professional');return;}
 const {error}=await supabaseClient.from('reviews').upsert(payload,{onConflict:'professional_id,customer_id'});
 status.textContent=error?error.message:t('review_saved'); if(!error){$("reviewComment").value='';await loadMyReviews();await loadRealProfessionals();}
}

async function saveAvailabilityData(){
 if(!supabaseClient||!currentUser)return;
 const status=$("availabilityStatus"); const availability=readAvailability();
 const {error}=await supabaseClient.from('profiles').update({availability,updated_at:new Date().toISOString()}).eq('id',currentUser.id);
 status.hidden=false; status.textContent=error?error.message:(lang==='ar'?'تم حفظ التوفر.':lang==='fr'?'Disponibilité enregistrée.':'Availability saved.');
}
async function loadMyProfile(){
 if(!supabaseClient||!currentUser)return;
 const {data,error}=await supabaseClient.from("profiles").select("*").eq("id",currentUser.id).maybeSingle();
 if(error){$("#profileSaveStatus").hidden=false;$("#profileSaveStatus").textContent=error.message;return}
 const p=data||{}; myProfileCache=p;
 $("#profileName").value=p.full_name||currentUser.user_metadata?.full_name||"";
 $("#profilePhone").value=p.phone||"";
 $("#profileWhatsapp").value=p.whatsapp||"";
 $("#profileCity").value=p.city||"";
 $("#profileService").value=p.service_key||"";
 $("#profileBio").value=p.bio||"";
 $("#profilePublished").checked=!!p.is_published;
 const isPro=p.role==="professional" || currentUser.user_metadata?.role==="professional";
 const dashTitle=$("dashboardTitle"), dashText=$("dashboardText");
 if(dashTitle)dashTitle.textContent=isPro?t("dashboard_title"):t("customer_profile_title");
 if(dashText)dashText.textContent=isPro?t("dashboard_text"):t("customer_profile_text");
 updateDashboardOverview(p);
 renderAvailability(p.availability||{});
 $$(".pro-only").forEach(el=>{el.hidden=!isPro;});
 $$(".customer-only").forEach(el=>{el.hidden=isPro;});
 $("#publishRow").style.display=isPro?"flex":"none";
 $("#profileServiceRow").style.display=isPro?"grid":"none";
 if(isPro){await loadWorkPhotos();await loadIncomingRequests();}else{await loadCustomerRequests();await loadSavedProfessionals();await loadReviewOptions();await loadMyReviews();}
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
  bio:$("#profileBio").value.trim(),is_published:role==="professional"?$("#profilePublished").checked:false,availability:myProfileCache?.availability||{},
  updated_at:new Date().toISOString()
 };
 const {error}=await supabaseClient.from("profiles").upsert(payload,{onConflict:"id"});
 $("#profileSaveStatus").hidden=false;
 $("#profileSaveStatus").textContent=error?error.message:t("profile_saved");
 if(!error){myProfileCache={...(myProfileCache||{}),...payload};updateDashboardOverview(myProfileCache);await loadRealProfessionals();}
}

async function showProfile(index){
 const p=profiles[index];
 const waText=lang==="ar"?"مرحباً، وجدت ملفك على KHEDMA.":lang==="fr"?"Bonjour, j’ai trouvé votre profil sur KHEDMA.":"Hello, I found you on KHEDMA.";
 let photos=[];
 if(supabaseClient&&p.id){const q=await supabaseClient.from("work_photos").select("image_url,caption").eq("professional_id",p.id).order("sort_order").limit(6);photos=q.data||[];}
 const photosHtml=photos.length?`<div class="public-work-photos"><h3>${lang==="ar"?"أعمالي":lang==="fr"?"Réalisations":"Recent work"}</h3><div class="work-photos-grid">${photos.map(ph=>`<div class="work-photo"><img src="${ph.image_url}" alt="${ph.caption||"KHEDMA work photo"}"></div>`).join("")}</div></div>`:"";
 $("#profileModalContent").innerHTML=`<div class="profile-top" style="border-radius:20px;margin-bottom:20px"><div class="profile-avatar">${p.initials}</div><span class="profile-service"><span>${p.service}</span><b>${profileRole(p)}</b></span></div>
 <span class="demo-tag">${t("demo_tag")}</span><h2>${p.name}</h2><p><b>${profileRole(p)}</b> · ${profileCity(p)}</p><p>★ ${p.rating} (${p.reviews}) · ${t("today")}</p>${photosHtml}<a class="btn btn-primary full" href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener">${t("whatsapp")}</a>`;
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
$("#citySelect").addEventListener("change",e=>{selectDiscoverCity(e.target.value);});
$("#discoverButton").addEventListener("click",openDiscoverSearch);
$("#discoverNear").addEventListener("click",locateUser);
document.addEventListener("click",e=>{const b=e.target.closest("[data-discover-city]");if(b)selectDiscoverCity(b.dataset.discoverCity);});
const locateButton=$("#locateButton"); if(locateButton)locateButton.addEventListener("click",locateUser);
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
$$('[data-dashboard-tab]').forEach(b=>b.addEventListener('click',()=>dashboardTab(b.dataset.dashboardTab)));
$("workPhotoInput")?.addEventListener("change",e=>uploadWorkPhotos(e.target.files));
$("saveAvailability")?.addEventListener("click",saveAvailabilityData);
$("reviewForm")?.addEventListener("submit",submitReview);
document.addEventListener("click",async e=>{const b=e.target.closest("[data-save-pro]");if(b){e.preventDefault();toggleSavedProfessional(b.dataset.savePro,b);return;}const saved=e.target.closest("[data-open-saved]");if(saved){const idx=profiles.findIndex(p=>p.id===saved.dataset.openSaved);if(idx>=0){showProfile(idx);return;}if(supabaseClient){const q=await supabaseClient.from('profiles').select('id,full_name,role,city,rating,reviews_count,service_key,whatsapp,verified').eq('id',saved.dataset.openSaved).maybeSingle();if(q.data){const p=q.data,sv=services.find(x=>x.key===p.service_key)||services[0];profiles.push({id:p.id,name:p.full_name||'KHEDMA Professional',role:{en:sv.en,fr:sv.fr,ar:sv.ar},city:{en:p.city||'',fr:p.city||'',ar:p.city||''},rating:String(p.rating||0),reviews:String(p.reviews_count||0),service:sv.icon,initials:(p.full_name||'KP').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase(),whatsapp:p.whatsapp||''});showProfile(profiles.length-1);}}}});
$("#dashboardButton").addEventListener("click",async()=>{closeModal("accountModal");fillProfileForm();dashboardTab("overview");openModal("dashboardModal");await loadMyProfile()});
$("#profileForm").addEventListener("submit",saveMyProfile);
$("#authModeToggle").addEventListener("click",()=>{authMode=authMode==="signup"?"login":"signup";$("#authModeToggle").textContent=authMode==="signup"?t("auth_switch"):(lang==="ar"?"إنشاء حساب جديد":lang==="fr"?"Créer un compte":"Create a new account");updateAccountUI()});
$("#authLogout").addEventListener("click",async()=>{if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;updateAccountUI();authStatus(lang==="ar"?"تم تسجيل الخروج.":lang==="fr"?"Déconnexion réussie.":"You are signed out.")});
$("#authForm").addEventListener("submit",async e=>{e.preventDefault();if(!supabaseClient){authStatus(lang==="ar"?"أضف إعدادات Supabase أولاً.":lang==="fr"?"Ajoutez d’abord la configuration Supabase.":"Add your Supabase settings first.",false);return}try{const email=$("#authEmail").value.trim(),password=$("#authPassword").value,name=$("#authName").value.trim(),role=$("#authRole").value;if(authMode==="signup"){const {data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{full_name:name,role}}});if(error)throw error;currentUser=data.user||null;authStatus(lang==="ar"?"تم إنشاء الحساب.":lang==="fr"?"Compte créé.":"Account created.")}else{const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});if(error)throw error;currentUser=data.user;authStatus(lang==="ar"?"تم تسجيل الدخول.":lang==="fr"?"Connexion réussie.":"Signed in successfully.")}updateAccountUI()}catch(err){authStatus(err.message||"Authentication error",false)}});
window.addEventListener("load",async()=>{applyLanguage();observeReveals();await refreshAuth();await loadRealProfessionals()});
