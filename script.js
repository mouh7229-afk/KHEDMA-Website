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

const translations = {
  en:{
    title:"KHEDMA — Find. Compare. Contact.",
  },
  fr:{
    title:"KHEDMA — Trouvez. Comparez. Contactez."
  },
  ar:{
    title:"KHEDMA — ابحث. قارن. تواصل."
  }
};

document.getElementById("languageSelect").addEventListener("change", event => {
  const lang = event.target.value;
  localStorage.setItem("khedmaLanguage", lang);
  document.documentElement.lang = lang;

  if(lang === "ar"){
    document.body.dir = "rtl";
    document.querySelector(".nav-links").style.direction = "rtl";
  }else{
    document.body.dir = "ltr";
    document.querySelector(".nav-links").style.direction = "ltr";
  }

  document.title = translations[lang].title;
});

const savedLanguage = localStorage.getItem("khedmaLanguage") || "en";
document.getElementById("languageSelect").value = savedLanguage;
document.documentElement.lang = savedLanguage;

if(savedLanguage === "ar"){
  document.body.dir = "rtl";
}else{
  document.body.dir = "ltr";
}

renderFeatured();
