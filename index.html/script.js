
const sectionOrder = ["about", "favorites", "memories", "hobbies", "dreams", "letters"];

const sectionContent = {
  about: {
    title: "About Me",
    eyebrow: "the little story behind these pages",
    body: `
      <p>Hi, lovely! ♡ This page is a little introduction to the person behind this scrapbook.</p>
      <h3>A little about me</h3>
      <p><strong>My name:</strong> Aicelle</p>
      <p><strong>My personality:</strong> I'm curious, determined, and a little perfectionist when it comes to things that matter to me. I may not understand everything right away, but I'm willing to learn, ask questions, and try again. I'm still discovering myself and growing into the person I want to become.</p>
      <p><strong>Things that matter to me:</strong> My dreams, my education, my personal growth, and the people who make my life meaningful. I value learning new things, expressing myself, and creating something I'm proud of. I believe that even small steps can bring me closer to my goals.</p>
      <p><strong>Something I'm learning:</strong> I'm learning to trust myself more, be patient with my progress, and understand that I don't have to be perfect to be enough. Every challenge teaches me something, and every experience helps me discover a little more about who I am. I'm still a work in progress, and that's a beautiful part of my story. ♡</p>
      </div>`
  },

  favorites: {
    title: "My Favorites",
    eyebrow: "little things that make me smile",
    body: `
      <p>These are some of the little things that make me happy and bring comfort to my everyday life. ♡</p>

      <h3>Favorite Colors</h3>
      <div class="favorite-colors">
        <span class="color-swatch pink-swatch">Pink</span>
        <span class="color-swatch grey-swatch">Grey</span>
      </div>

      <h3>Favorite Food</h3>
      <div class="favorite-photo-grid">
        <p> Shrimp </p>
        <p>Chicken</p>
        <p>Spaghetti</p>
        <p>Cake</p>
        <p>Ice cream</p>
      </div>

      <h3>Favorite Drink</h3>
      <div class="favorite-photo-grid single-favorite">
        <p>Matcha</p>
      </div>

      <h3>Favorite Music and Artists</h3>
      <p>My favorite song is <em>Couple Minutes</em> by Olivia Dean. I also enjoy listening to Olivia Dean and Sienna Spiro.</p>
      <h3>Favorite Movies and Series</h3>
      <div class="favorite-photo-grid">
        <p>K-drama</p>
        <p>Horror movie</p>
      </div>

      <h3>Favorite Flower</h3>
      <p>Sunflower</p>
      </div>

      <h3>Favorite Places</h3>
      <p>Mountain</p>
      <p>Falls</p>
      </div>

      <h3>My Comfort Things</h3>
      <p>Listening to music, hiking, talking to someone, and eating my favorite food are little things that help me feel better and enjoy life. ♡</p>`
  },

  hobbies: {
    title: "My Hobbies",
    eyebrow: "things that make me feel like me",
    body: `
      <p>These are the activities that bring happiness, comfort, and peace into my life.</p>

      <h3>Something I Enjoy</h3>
      <p>I enjoy listening to music, watching K-dramas and horror movies, and spending time in nature. Music helps me relax and express my feelings, while hiking and visiting beautiful places like mountains and waterfalls make me feel peaceful and refreshed.</p>

      <h3>Something I Want to Try</h3>
      <p>I want to explore more beautiful places, experience new adventures, and go on more nature trips. I hope to discover new things, create unforgettable memories, and enjoy more little moments that make life special.</p>

      <h3>Why These Things Matter to Me</h3>
      <p>These hobbies help me feel happy, calm, and more connected to myself. Whether I'm listening to my favorite artists, enjoying a good movie, eating my favorite food, or spending time with someone I care about, it's the little things that make me feel like me. ♡</p>`
  },

  dreams: {
    title: "My Dreams & Goals",
    eyebrow: "little steps toward a bigger future",
    body: `
      <p>A dream doesn't have to happen all at once. This is a soft place to remember what I'm working toward.</p>

    
      </div>

      <h3>A Dream I Carry</h3>
      <p>My dream is to finish my studies, build a successful future, and become someone who can make my family proud. I also dream of exploring beautiful places, experiencing new adventures, and creating a life filled with happiness, love, and peace.</p>

      <h3>Why It Matters</h3>
      <p>This dream matters to me because I want to give myself a better future and make all my hard work worth it. I want to look back someday and feel proud of how far I've come and all the challenges I've overcome.</p>

      <h3>The Person I Hope to Become</h3>
      <p>I hope to become a confident, independent, kind, and successful person who believes in herself even when life gets difficult. I want to grow into someone who appreciates the little things, values the people she loves, and never stops learning and improving.</p>

      <h3>One Small Next Step</h3>
      <p>I can start by focusing on my studies, believing in my abilities, and taking small steps toward my goals every day. I may not have everything figured out yet, but I trust that with patience, effort, and faith in myself, I'll get closer to the future I dream of. ♡</p>`
  }
};

const memories = {
  "memory-1": {
    title: "High School Cheerdance",
    date: "A high school memory 📣",
    story: "My high school cheerdance experience is a memory I want to keep close. It reminds me of teamwork, confidence, and the excitement of performing together. It was a special experience that gave me memories to look back on with a smile. ♡"
  },
  "memory-2": {
    title: "Kartzone Cebu",
    date: "A day full of excitement 🏎️",
    story: "My visit to Kartzone Cebu was filled with excitement, fun, laughter, and new experiences. It was one of those moments that made an ordinary day feel special. I'm happy to keep this memory as a reminder to enjoy life's little adventures. ♡"
  },
  "memory-3": {
    title: "Camotes Island with My Boyfriend",
    date: "A beautiful island getaway 🌊",
    story: "My trip to Camotes Island with my boyfriend was a beautiful experience filled with lovely moments and stunning views. Being able to enjoy the scenery and spend time together made the vacation meaningful. It's a memory I want to look back on with happiness. ♡"
  }
};

const affirmations = [
  "You deserve the same kindness you give to others. ♡",
  "You are allowed to grow at your own pace. 🌷",
  "You don't have to be perfect to be worthy of love. ♡",
  "Small steps still count. Be proud of yourself. 🎀",
  "You are becoming, even on the days you feel still. ✨",
  "Rest is allowed. You do not have to earn it. ♡",
  "You are enough while you are still learning. 💗",
  "Talk to yourself like someone you love. 🌸"
];

const cover = document.getElementById("cover");
const scrapbook = document.getElementById("scrapbook");
const sectionModal = document.getElementById("section-modal");
const modalTitle = document.getElementById("modal-title");
const modalEyebrow = document.getElementById("modal-eyebrow");
const modalContent = document.getElementById("modal-content");
const modalCount = document.getElementById("modal-count");
const backToTop = document.getElementById("back-to-top");
const toast = document.getElementById("toast");

let currentModalIndex = 0;
let previousFocus = null;
let toastTimeout;

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function enterScrapbook() {
  cover.hidden = true;
  scrapbook.hidden = false;
  document.getElementById("memories-page").hidden = true;
  document.getElementById("letters-page").hidden = true;

  window.scrollTo({
    top: 0,
    behavior: reducedMotion() ? "auto" : "smooth"
  });

  createSparkles(window.innerWidth * 0.5, 100, 9);
}

document.getElementById("enter-button").addEventListener("click", enterScrapbook);
document.getElementById("note-enter-button").addEventListener("click", () => {
  document.getElementById("cover-note").hidden = true;
  enterScrapbook();
});

document.getElementById("welcome-envelope").addEventListener("click", () => {
  document.getElementById("cover-note").hidden = false;
  document.querySelector("[data-close-note]").focus();
});

document.querySelector("[data-close-note]").addEventListener("click", () => {
  document.getElementById("cover-note").hidden = true;
  document.getElementById("welcome-envelope").focus();
});

function openSection(key) {
  if (key === "memories") {
    showSpecialPage("memories-page");
    return;
  }

  if (key === "letters") {
    showSpecialPage("letters-page");
    return;
  }

  if (!sectionContent[key]) return;

  currentModalIndex = sectionOrder.indexOf(key);
  previousFocus = document.activeElement;

  renderModal();
  sectionModal.hidden = false;
  document.body.classList.add("modal-open");
  document.getElementById("modal-close").focus();
}

function renderModal() {
  const key = sectionOrder[currentModalIndex];

  if (key === "memories" || key === "letters") {
    sectionModal.hidden = true;
    document.body.classList.remove("modal-open");
    showSpecialPage(key === "memories" ? "memories-page" : "letters-page");
    return;
  }

  const item = sectionContent[key];

  modalTitle.textContent = item.title;
  modalEyebrow.textContent = item.eyebrow;
  modalContent.innerHTML = item.body;
  modalCount.textContent = `${currentModalIndex + 1} / ${sectionOrder.length}`;

  // Images can be replaced with your own files in the images folder.
}

function closeModal() {
  sectionModal.hidden = true;
  document.body.classList.remove("modal-open");

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

document.querySelectorAll("[data-open-section]").forEach(element => {
  element.addEventListener("click", event => {
    event.preventDefault();

    if (scrapbook.hidden) {
      enterScrapbook();
    }

    openSection(element.dataset.openSection);
  });
});

document.getElementById("modal-close").addEventListener("click", closeModal);

sectionModal.addEventListener("click", event => {
  if (event.target === sectionModal) {
    closeModal();
  }
});

document.getElementById("modal-prev").addEventListener("click", () => {
  currentModalIndex =
    (currentModalIndex - 1 + sectionOrder.length) % sectionOrder.length;
  renderModal();
});

document.getElementById("modal-next").addEventListener("click", () => {
  currentModalIndex = (currentModalIndex + 1) % sectionOrder.length;
  renderModal();
});

function showSpecialPage(id) {
  scrapbook.hidden = true;
  sectionModal.hidden = true;
  document.body.classList.remove("modal-open");

  document.getElementById("memories-page").hidden = id !== "memories-page";
  document.getElementById("letters-page").hidden = id !== "letters-page";

  window.scrollTo({
    top: 0,
    behavior: reducedMotion() ? "auto" : "smooth"
  });
}

function showHome() {
  document.getElementById("memories-page").hidden = true;
  document.getElementById("letters-page").hidden = true;
  scrapbook.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: reducedMotion() ? "auto" : "smooth"
  });
}

document.querySelectorAll(".back-home").forEach(button => {
  button.addEventListener("click", showHome);
});

document.querySelectorAll("[data-memory]").forEach(button => {
  button.addEventListener("click", () => {
    const item = memories[button.dataset.memory];
    if (!item) return;

    document.getElementById("story-title").textContent = item.title;
    document.getElementById("story-date").textContent = item.date;
    document.getElementById("story-text").textContent = item.story;

    document.getElementById("memory-story").hidden = false;
    document.body.classList.add("modal-open");
    document.getElementById("story-close").focus();
  });
});

function closeStory() {
  document.getElementById("memory-story").hidden = true;
  document.body.classList.remove("modal-open");
}

document.getElementById("story-close").addEventListener("click", closeStory);
document.getElementById("story-close-bottom").addEventListener("click", closeStory);

document.getElementById("memory-story").addEventListener("click", event => {
  if (event.target.id === "memory-story") {
    closeStory();
  }
});

document.getElementById("secret-letter-button").addEventListener("click", () => {
  showToast(
    "A little reminder: you are enough, even while you're growing. Be gentle with yourself. ♡"
  );

  createSparkles(window.innerWidth * 0.5, window.innerHeight - 140, 10);
});

document.getElementById("surprise-button").addEventListener("click", () => {
  const current = document.getElementById("affirmation-text").textContent;
  const options = affirmations.filter(message => message !== current);
  const next = options[Math.floor(Math.random() * options.length)];

  document.getElementById("affirmation-text").textContent = next;
  createSparkles(window.innerWidth * 0.5, window.innerHeight - 150, 8);
});

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.hidden = true;
  }, 4500);
}

function createSparkles(x, y, count = 8) {
  if (reducedMotion()) return;

  const layer = document.querySelector(".sparkle-layer");

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = Math.random() > 0.45 ? "✦" : "♡";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty("--dx", `${Math.round(Math.random() * 150 - 75)}px`);
    sparkle.style.setProperty("--dy", `${Math.round(Math.random() * -130 - 15)}px`);

    layer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest("button");

  if (
    button &&
    (button.classList.contains("scrap-card") ||
      button.classList.contains("memory-polaroid"))
  ) {
    const rect = button.getBoundingClientRect();

    createSparkles(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      5
    );
  }
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle(
    "visible",
    window.scrollY > 380 && !cover.hidden
  );
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reducedMotion() ? "auto" : "smooth"
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!document.getElementById("cover-note").hidden) {
      document.getElementById("cover-note").hidden = true;
    }

    if (!sectionModal.hidden) {
      closeModal();
    }

    if (!document.getElementById("memory-story").hidden) {
      closeStory();
    }
  }
});

