const categories = [
  { name: "All", icon: "bi-grid" },
  { name: "Music", icon: "bi-music-note-beamed" },
  { name: "Movies", icon: "bi-film" },
  { name: "Sports", icon: "bi-trophy" },
  { name: "Gaming", icon: "bi-controller" },
  { name: "Education", icon: "bi-mortarboard" },
  { name: "Technology", icon: "bi-cpu" }
];

const users = [
  { name: "Maya Chen", subscribers: "4.2M", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" },
  { name: "Orbit Studios", subscribers: "8.7M", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80" },
  { name: "FieldCast Live", subscribers: "925K", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" },
  { name: "Pixel Forge", subscribers: "2.1M", avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80" }
];

const videos = [
  {
    id: 1,
    title: "Neon Horizon: First Look",
    creator: "Orbit Studios",
    category: "Movies",
    views: "12.4M views",
    date: "2 days ago",
    duration: "18:42",
    thumbnail: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    description: "A behind-the-scenes look at StreamVibe's flagship future-noir series, from concept art to final color grade."
  },
  {
    id: 2,
    title: "Building a Minimal AI Desk Setup",
    creator: "Maya Chen",
    category: "Technology",
    views: "842K views",
    date: "5 hours ago",
    duration: "12:08",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description: "A practical guide to building a quiet, focused creator desk with modern tools and automation."
  },
  {
    id: 3,
    title: "Championship Final: Full Highlights",
    creator: "FieldCast Live",
    category: "Sports",
    views: "3.1M views",
    date: "1 day ago",
    duration: "09:54",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    description: "Every decisive play, comeback moment, and post-match reaction from the championship final."
  },
  {
    id: 4,
    title: "Speedrun Masters: City Circuit",
    creator: "Pixel Forge",
    category: "Gaming",
    views: "1.9M views",
    date: "3 days ago",
    duration: "22:16",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    description: "Elite players break down routing, inputs, and split-second decisions in a record-setting run."
  },
  {
    id: 5,
    title: "Lo-Fi Rooftop Sessions",
    creator: "Maya Chen",
    category: "Music",
    views: "6.6M views",
    date: "1 week ago",
    duration: "31:05",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "A warm rooftop set with mellow beats, live keys, and city ambience for deep focus."
  },
  {
    id: 6,
    title: "The Ocean Explained in 20 Minutes",
    creator: "Orbit Studios",
    category: "Education",
    views: "2.8M views",
    date: "4 days ago",
    duration: "20:01",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    description: "A visual science explainer covering currents, climate, marine life, and exploration."
  },
  {
    id: 7,
    title: "Prime-Time Action Trailer",
    creator: "Orbit Studios",
    category: "Movies",
    views: "7.2M views",
    date: "6 days ago",
    duration: "02:44",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    description: "A kinetic trailer for the summer's biggest heist thriller."
  },
  {
    id: 8,
    title: "Cloud Gaming Latency Test",
    creator: "Pixel Forge",
    category: "Technology",
    views: "732K views",
    date: "12 hours ago",
    duration: "14:37",
    thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=80",
    description: "A clear test of modern cloud gaming performance across devices and networks."
  },
  {
    id: 9,
    title: "World Percussion Live",
    creator: "FieldCast Live",
    category: "Music",
    views: "1.2M views",
    date: "2 weeks ago",
    duration: "45:20",
    thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
    description: "An electric global percussion show recorded live with immersive stage sound."
  },
  {
    id: 10,
    title: "Learn Cinematic Lighting",
    creator: "Maya Chen",
    category: "Education",
    views: "954K views",
    date: "8 days ago",
    duration: "16:33",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    description: "A practical lighting workshop for creators shooting premium video at home."
  },
  {
    id: 11,
    title: "Night Rally Documentary",
    creator: "FieldCast Live",
    category: "Sports",
    views: "2.4M views",
    date: "3 weeks ago",
    duration: "27:11",
    thumbnail: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    description: "A documentary following drivers and crews through one rain-soaked rally night."
  },
  {
    id: 12,
    title: "Designing Game Worlds",
    creator: "Pixel Forge",
    category: "Gaming",
    views: "1.5M views",
    date: "5 days ago",
    duration: "19:48",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    description: "How level designers build visual flow, challenge, pacing, and player delight."
  }
];

const comments = [
  { user: "Priya S.", text: "The production quality is unreal. This feels ready for a real streaming launch.", time: "8 min ago", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
  { user: "Jon Bell", text: "That color grading breakdown was exactly what I needed for my short film.", time: "31 min ago", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
  { user: "Nora", text: "Saved this to my weekend playlist. Great pacing and clean sound.", time: "1 hour ago", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" }
];

const playlists = [
  { title: "Weekend Cinema", videos: 18, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80" },
  { title: "Creator Toolkit", videos: 26, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80" },
  { title: "Focus Music", videos: 42, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80" }
];

const notifications = [
  "Neon Horizon premieres tonight.",
  "Maya Chen uploaded a new setup tour.",
  "Your playlist was updated successfully."
];

let activeCategory = "All";
let visibleCount = 8;
let currentVideo = videos[0];
let chartsRendered = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function installBootstrapFallbacks() {
  if (window.bootstrap) return;
  window.bootstrap = {
    Toast: {
      getOrCreateInstance(element) {
        return {
          show() {
            element.classList.add("show");
            clearTimeout(element.dataset.toastTimer);
            element.dataset.toastTimer = setTimeout(() => element.classList.remove("show"), 2600);
          }
        };
      }
    }
  };

  document.addEventListener("click", (event) => {
    const dropdownButton = event.target.closest("[data-bs-toggle='dropdown']");
    const modalButton = event.target.closest("[data-bs-toggle='modal']");
    const closeButton = event.target.closest("[data-bs-dismiss='modal']");
    const tabButton = event.target.closest("[data-bs-toggle='pill']");

    if (dropdownButton) {
      const menu = dropdownButton.parentElement.querySelector(".dropdown-menu");
      $$(".dropdown-menu.show").forEach((openMenu) => {
        if (openMenu !== menu) openMenu.classList.remove("show");
      });
      menu?.classList.toggle("show");
      dropdownButton.setAttribute("aria-expanded", String(menu?.classList.contains("show")));
      return;
    }

    if (!event.target.closest(".dropdown")) {
      $$(".dropdown-menu.show").forEach((menu) => menu.classList.remove("show"));
    }

    if (modalButton) {
      const modal = document.querySelector(modalButton.dataset.bsTarget);
      modal?.classList.add("show");
      modal?.removeAttribute("aria-hidden");
      modal?.querySelector("input")?.focus();
    }

    if (closeButton) {
      const modal = closeButton.closest(".modal");
      modal?.classList.remove("show");
      modal?.setAttribute("aria-hidden", "true");
    }

    if (tabButton) {
      const list = tabButton.closest("[role='tablist']");
      list?.querySelectorAll(".nav-link").forEach((button) => button.classList.remove("active"));
      tabButton.classList.add("active");
      const pane = document.querySelector(tabButton.dataset.bsTarget);
      pane?.parentElement.querySelectorAll(".tab-pane").forEach((item) => item.classList.remove("show", "active"));
      pane?.classList.add("show", "active");
    }
  });
}

function videoCard(video) {
  return `
    <article class="video-card">
      <a href="#watch" data-video-id="${video.id}" class="video-link" aria-label="Watch ${video.title}">
        <div class="thumb-wrap">
          <img src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy">
          <span class="duration-badge">${video.duration}</span>
        </div>
        <div class="video-body">
          <h3>${video.title}</h3>
          <p>${video.creator}</p>
          <span>${video.views} • ${video.date}</span>
        </div>
      </a>
    </article>
  `;
}

function relatedCard(video) {
  return `
    <a href="#watch" class="related-item video-link" data-video-id="${video.id}">
      <img src="${video.thumbnail}" alt="${video.title} thumbnail" loading="lazy">
      <div>
        <h3>${video.title}</h3>
        <p class="small text-secondary mb-0">${video.creator}</p>
        <p class="small text-secondary mb-0">${video.views}</p>
      </div>
    </a>
  `;
}

function getCreator(name) {
  return users.find((user) => user.name === name) || users[0];
}

function filteredVideos() {
  return activeCategory === "All" ? videos : videos.filter((video) => video.category === activeCategory);
}

function renderCategories() {
  $("#categoryFilters").innerHTML = categories.map((category) => `
    <button class="category-btn ${category.name === activeCategory ? "active" : ""}" type="button" data-category="${category.name}">
      <span><i class="bi ${category.icon} me-2"></i>${category.name}</span>
      <i class="bi bi-arrow-right"></i>
    </button>
  `).join("");
}

function renderHome() {
  const filtered = filteredVideos();
  $("#trendingGrid").innerHTML = videos.slice(0, 4).map(videoCard).join("");
  $("#recommendedGrid").innerHTML = filtered.slice(0, visibleCount).map(videoCard).join("");
  $("#resultCount").textContent = `${filtered.length} videos`;
  $("#loadMoreBtn").classList.toggle("d-none", visibleCount >= filtered.length);
}

function renderWatch(video = currentVideo) {
  currentVideo = video;
  const creator = getCreator(video.creator);
  $("#watchPoster").src = video.thumbnail;
  $("#watchPoster").alt = `${video.title} poster`;
  $("#watchTitle").textContent = video.title;
  $("#watchViews").textContent = `${video.views} • ${video.date}`;
  $("#watchDuration").textContent = video.duration;
  $("#creatorAvatar").src = creator.avatar;
  $("#creatorAvatar").alt = `${creator.name} avatar`;
  $("#creatorName").textContent = creator.name;
  $("#creatorStats").textContent = `${creator.subscribers} subscribers`;
  $("#watchDescription").textContent = video.description;
  $("#relatedList").innerHTML = videos.filter((item) => item.id !== video.id).slice(0, 7).map(relatedCard).join("");
}

function renderComments() {
  $("#commentsList").innerHTML = comments.map((comment) => `
    <article class="comment-card">
      <img src="${comment.avatar}" alt="${comment.user} avatar" loading="lazy">
      <div>
        <strong>${comment.user}</strong> <span class="small text-secondary">${comment.time}</span>
        <p class="mb-0">${comment.text}</p>
      </div>
    </article>
  `).join("");
}

function renderProfile() {
  $("#profileUploads").innerHTML = videos.filter((video) => video.creator === "Maya Chen").map(videoCard).join("");
  $("#historyGrid").innerHTML = videos.slice(2, 8).map(videoCard).join("");
  $("#playlistGrid").innerHTML = playlists.map((playlist) => `
    <article class="playlist-card">
      <img src="${playlist.image}" alt="${playlist.title} playlist cover" loading="lazy">
      <div>
        <h3 class="h5 mb-1">${playlist.title}</h3>
        <p class="text-secondary mb-0">${playlist.videos} videos</p>
      </div>
    </article>
  `).join("");
}

function renderDashboardTables() {
  $("#recentUploadsTable").innerHTML = videos.slice(0, 5).map((video) => `
    <tr>
      <td>${video.title}</td>
      <td>${video.views}</td>
      <td><span class="badge badge-soft">Published</span></td>
      <td>${video.date}</td>
    </tr>
  `).join("");
  $("#managementTable").innerHTML = videos.slice(0, 6).map((video) => `
    <tr>
      <td>${video.title}</td>
      <td>${video.category}</td>
      <td>Public</td>
      <td>
        <button class="btn btn-sm btn-outline-light me-1" type="button" aria-label="Edit ${video.title}"><i class="bi bi-pencil"></i></button>
        <button class="btn btn-sm btn-outline-danger" type="button" aria-label="Delete ${video.title}"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

function renderCharts() {
  if (chartsRendered) return;
  if (!window.Chart) {
    renderChartFallbacks();
    chartsRendered = true;
    return;
  }
  chartsRendered = true;
  const textColor = getComputedStyle(document.documentElement).getPropertyValue("--muted").trim();
  new Chart($("#viewsChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        { label: "Views", data: [2.1, 3.8, 4.4, 5.2, 6.6, 8.1], borderColor: "#e50922", backgroundColor: "rgba(229,9,34,.18)", tension: .4, fill: true },
        { label: "Subscribers", data: [0.4, 0.7, 1.1, 1.3, 1.6, 1.8], borderColor: "#35d0ff", tension: .4 }
      ]
    },
    options: { plugins: { legend: { labels: { color: textColor } } }, scales: { x: { ticks: { color: textColor } }, y: { ticks: { color: textColor } } } }
  });
  new Chart($("#categoryChart"), {
    type: "doughnut",
    data: {
      labels: ["Movies", "Tech", "Music", "Gaming"],
      datasets: [{ data: [38, 24, 21, 17], backgroundColor: ["#e50922", "#35d0ff", "#f8b84e", "#35d07f"] }]
    },
    options: { plugins: { legend: { labels: { color: textColor } } } }
  });
}

function renderChartFallbacks() {
  if (window.Chart || document.querySelector(".chart-fallback")) return;
  const viewsCanvas = $("#viewsChart");
  const categoryCanvas = $("#categoryChart");
  [viewsCanvas, categoryCanvas].forEach((canvas) => {
    if (!canvas) return;
    const fallback = document.createElement("div");
    fallback.className = "chart-fallback";
    fallback.innerHTML = `
      <div style="width:78%"></div>
      <div style="width:54%"></div>
      <div style="width:66%"></div>
      <p class="mb-0 text-secondary">Chart preview available when Chart.js loads.</p>
    `;
    canvas.replaceWith(fallback);
  });
}

function renderNotifications() {
  $("#notificationList").innerHTML = notifications.map((note) => `
    <div class="notification-item">
      <i class="bi bi-broadcast"></i>
      <span>${note}</span>
    </div>
  `).join("");
}

function authCard(type) {
  const isLogin = type === "login";
  const isRegister = type === "register";
  const title = isLogin ? "Welcome back" : isRegister ? "Create your account" : "Reset password";
  const subtitle = isLogin ? "Sign in to continue your stream." : isRegister ? "Join creators and fans on StreamVibe." : "Enter your email and we will send reset instructions.";
  return `
    <form class="auth-card needs-validation" novalidate>
      <h1 id="${type}Heading">${title}</h1>
      <p class="text-secondary">${subtitle}</p>
      ${isRegister ? '<div class="mb-3"><label class="form-label">Full name</label><input class="form-control" required></div>' : ""}
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input class="form-control" type="email" required>
        <div class="invalid-feedback">Enter a valid email address.</div>
      </div>
      ${type !== "forgot" ? `
        <div class="mb-3">
          <label class="form-label">Password</label>
          <div class="password-field">
            <input class="form-control password-input" type="password" minlength="8" required>
            <button class="btn icon-btn password-toggle" type="button" aria-label="Show password"><i class="bi bi-eye"></i></button>
          </div>
          <div class="invalid-feedback">Password must be at least 8 characters.</div>
        </div>
      ` : ""}
      ${isRegister ? `
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="termsCheck" required>
          <label class="form-check-label" for="termsCheck">I agree to the terms and privacy policy.</label>
        </div>
      ` : ""}
      <button class="btn btn-accent w-100" type="submit">${type === "forgot" ? "Send reset link" : isLogin ? "Login" : "Create account"}</button>
      ${type !== "forgot" ? `
        <div class="social-login mt-3">
          <button class="btn btn-outline-light" type="button"><i class="bi bi-google"></i> Google</button>
          <button class="btn btn-outline-light" type="button"><i class="bi bi-github"></i> GitHub</button>
        </div>
      ` : ""}
      <div class="d-flex justify-content-between mt-3 small">
        <a class="text-link" href="#login">Login</a>
        <a class="text-link" href="#register">Register</a>
        <a class="text-link" href="#forgot">Forgot?</a>
      </div>
    </form>
  `;
}

function renderAuth() {
  $("#loginPage").innerHTML = authCard("login");
  $("#registerPage").innerHTML = authCard("register");
  $("#forgotPage").innerHTML = authCard("forgot");
}

function showToast(message) {
  const toastEl = $("#appToast");
  toastEl.querySelector(".toast-body").textContent = message;
  bootstrap.Toast.getOrCreateInstance(toastEl).show();
}

function route() {
  const page = (location.hash || "#home").replace("#", "");
  $$(".page-view").forEach((view) => view.classList.remove("active"));
  const target = $(`#${page}Page`) || $("#homePage");
  target.classList.add("active");
  $$(".sidebar-link").forEach((link) => link.classList.toggle("active", link.dataset.route === page));
  $("#appSidebar").classList.remove("open");
  $("#sidebarBackdrop").classList.remove("show");
  if (page === "dashboard") {
    renderCharts();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function searchVideos(query) {
  const clean = query.trim().toLowerCase();
  if (!clean) return videos.slice(0, 5);
  return videos.filter((video) =>
    [video.title, video.creator, video.category, video.description].some((field) => field.toLowerCase().includes(clean))
  );
}

function renderSearchResults(query, container) {
  const results = searchVideos(query);
  container.innerHTML = results.slice(0, 6).map((video) => `
    <a href="#watch" class="search-result video-link" data-video-id="${video.id}">
      <img src="${video.thumbnail}" alt="${video.title} thumbnail">
      <span><strong>${video.title}</strong><br><small>${video.creator} • ${video.category}</small></span>
    </a>
  `).join("") || '<p class="text-secondary mb-0">No videos found.</p>';
}

function bindEvents() {
  $("#sidebarToggle").addEventListener("click", () => {
    $("#appSidebar").classList.add("open");
    $("#sidebarBackdrop").classList.add("show");
  });
  $("#sidebarBackdrop").addEventListener("click", () => {
    $("#appSidebar").classList.remove("open");
    $("#sidebarBackdrop").classList.remove("show");
  });
  $("#themeToggle").addEventListener("click", () => {
    const light = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = light ? "light" : "dark";
    $("#themeToggle i").className = light ? "bi bi-moon" : "bi bi-sun";
  });
  $("#categoryFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    visibleCount = 8;
    renderCategories();
    renderHome();
  });
  $("#loadMoreBtn").addEventListener("click", () => {
    visibleCount += 4;
    renderHome();
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest(".video-link");
    if (!link) return;
    const video = videos.find((item) => item.id === Number(link.dataset.videoId));
    if (video) renderWatch(video);
  });
  ["likeBtn", "dislikeBtn", "saveBtn", "shareBtn", "subscribeBtn"].forEach((id) => {
    $(`#${id}`).addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("btn-accent");
      const label = event.currentTarget.textContent.trim() || "Action";
      showToast(`${label} updated`);
    });
  });
  $("#commentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#commentInput");
    comments.unshift({ user: "Alex Morgan", text: input.value, time: "Just now", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" });
    input.value = "";
    renderComments();
    showToast("Comment posted");
  });
  $("#desktopSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("#desktopSearchInput").value;
    activeCategory = "All";
    visibleCount = videos.length;
    $("#recommendedGrid").innerHTML = searchVideos(query).map(videoCard).join("");
    $("#resultCount").textContent = `Search results for "${query}"`;
    location.hash = "#home";
  });
  $("#modalSearchInput").addEventListener("input", (event) => renderSearchResults(event.target.value, $("#modalSearchResults")));
  document.addEventListener("submit", (event) => {
    const form = event.target.closest(".needs-validation");
    if (!form) return;
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");
    if (form.checkValidity()) showToast("Form submitted successfully");
  });
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".password-toggle");
    if (!toggle) return;
    const input = toggle.closest(".password-field").querySelector(".password-input");
    const visible = input.type === "text";
    input.type = visible ? "password" : "text";
    toggle.querySelector("i").className = visible ? "bi bi-eye" : "bi bi-eye-slash";
  });
  window.addEventListener("hashchange", route);
  window.addEventListener("scroll", () => {
    if (location.hash && location.hash !== "#home") return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && visibleCount < filteredVideos().length) {
      visibleCount += 4;
      renderHome();
    }
  }, { passive: true });
}

function init() {
  installBootstrapFallbacks();
  renderCategories();
  renderHome();
  renderWatch(currentVideo);
  renderComments();
  renderProfile();
  renderDashboardTables();
  renderNotifications();
  renderAuth();
  bindEvents();
  renderSearchResults("", $("#modalSearchResults"));
  route();
}

document.addEventListener("DOMContentLoaded", init);
