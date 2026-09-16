/* ===========================
   CHARACTERS DATA
   =========================== */
const characters = [
    {
        id: 1, name: "Rhaenyra Targaryen", title: "The Realm's Delight",
        faction: "black", house: "House Targaryen", emoji: "👑",
        image: "images/rhaenyra.jpg", dragon: "Syrax", actor: "Emma D'Arcy",
        description: "The eldest daughter of King Viserys I and the designated heir to the Iron Throne. As the rider of the dragon Syrax, Rhaenyra fights for her right to become the first Queen of Westeros, sparking a civil war known as the Dance of the Dragons.",
        status: "Claimant Queen (Blacks)"
    },
    {
        id: 2, name: "Daemon Targaryen", title: "The Rogue Prince",
        faction: "black", house: "House Targaryen", emoji: "⚔️",
        image: "images/daemon.jpg", dragon: "Caraxes", actor: "Matt Smith",
        description: "The younger brother of King Viserys I, a rebellious prince and the most dangerous dragonrider in Westeros. Daemon is Rhaenyra's foremost supporter and plays a crucial role in the war.",
        status: "Commander of Forces (Blacks)"
    },
    {
        id: 3, name: "Aegon II Targaryen", title: "The Usurper King",
        faction: "green", house: "House Targaryen", emoji: "👑",
        image: "images/aegon.jpg", dragon: "Sunfyre", actor: "Tom Glynn-Carney",
        description: "The son of King Viserys I and Alicent Hightower, crowned king by the Greens after his father's death. His claim to the throne stands in direct opposition to Rhaenyra, igniting the civil war.",
        status: "Claimant King (Greens)"
    },
    {
        id: 4, name: "Alicent Hightower", title: "The Green Queen",
        faction: "green", house: "House Hightower", emoji: "🟢",
        image: "images/alicent.jpg", dragon: "-", actor: "Olivia Cooke",
        description: "The second wife of King Viserys I and mother of Aegon II. An ambitious woman who believes the throne should pass to her son rather than Rhaenyra. She becomes the central figure of the Greens faction.",
        status: "Queen Regent (Greens)"
    },
    {
        id: 5, name: "Viserys I Targaryen", title: "The Peaceful King",
        faction: "black", house: "House Targaryen", emoji: "👑",
        image: "images/viserys.jpg", dragon: "Balerion (former)", actor: "Paddy Considine",
        description: "The fifth King of Westeros, a peaceful yet indecisive ruler. His decision to name Rhaenyra as heir while marrying Alicent would later create a conflict that tore the realm apart.",
        status: "King of Westeros (Deceased)"
    },
    {
        id: 6, name: "Aemond Targaryen", title: "The One-Eyed Prince",
        faction: "green", house: "House Targaryen", emoji: "🗡️",
        image: "images/aemond.jpg", dragon: "Vhagar", actor: "Ewan Mitchell",
        description: "The second son of Alicent and Viserys, a prince who lost an eye in a childhood dispute. As the rider of Vhagar, the largest living dragon, he becomes a lethal threat on the battlefield.",
        status: "Prince (Greens)"
    },
    {
        id: 7, name: "Rhaenys Targaryen", title: "The Queen Who Never Was",
        faction: "black", house: "House Velaryon", emoji: "🐉",
        image: "images/rhaenys.jpg", dragon: "Meleys", actor: "Eve Best",
        description: "The daughter of Prince Aemon, called 'The Queen Who Never Was' because her claim to the throne was passed over in favor of Viserys. Nevertheless, she sides with Rhaenyra and serves as a wise advisor.",
        status: "Princess (Blacks)"
    },
    {
        id: 8, name: "Otto Hightower", title: "The Hand of the King",
        faction: "green", house: "House Hightower", emoji: "✋",
        image: "images/otto.jpg", dragon: "-", actor: "Rhys Ifans",
        description: "The father of Alicent Hightower and Hand of the King under Viserys I. A cunning politician who manipulates events to place his grandson Aegon upon the Iron Throne.",
        status: "Hand of the King (Greens)"
    },
    {
        id: 9, name: "Jacaerys Velaryon", title: "Prince of Dragonstone",
        faction: "black", house: "House Velaryon", emoji: "⚔️",
        image: "images/jacaerys.jpg", dragon: "Vermax", actor: "Harry Collett",
        description: "The eldest son of Rhaenyra and second in line to the throne after his mother. Despite doubts about his parentage, Jace proves his loyalty as a young leader of the Blacks faction.",
        status: "Prince (Blacks)"
    },
    {
        id: 10, name: "Helaena Targaryen", title: "The Dreamer Queen",
        faction: "green", house: "House Targaryen", emoji: "🕷️",
        image: "images/helaena.jpg", dragon: "Dreamfyre", actor: "Phia Saban",
        description: "The daughter of Alicent and Viserys, wife and sister to Aegon II. A mysterious woman with the ability to glimpse the future in her dreams, yet haunted by her family's tragedy.",
        status: "Queen (Greens)"
    },
    {
        id: 11, name: "Corlys Velaryon", title: "The Sea Snake",
        faction: "black", house: "House Velaryon", emoji: "⚓",
        image: "images/corlys.jpg", dragon: "-", actor: "Steve Toussaint",
        description: "Lord of the Tides and head of House Velaryon, a legendary seafarer who commands the greatest fleet in Westeros. He becomes a key ally of Rhaenyra through his son's marriage to the queen.",
        status: "Lord of the Tides (Blacks)"
    },
    {
        id: 12, name: "Criston Cole", title: "The Kingmaker",
        faction: "green", house: "House Cole", emoji: "🛡️",
        image: "images/criston.jpg", dragon: "-", actor: "Fabien Frankel",
        description: "A Dornish knight who rose to become Lord Commander of the Kingsguard. A former lover of Rhaenyra who now sides with Alicent, wielding great influence in the crowning of Aegon II.",
        status: "Lord Commander (Greens)"
    }
];

/* ===========================
   HOUSES DATA
   =========================== */
const houses = [
    { name: "Targaryen", sigil: "🐉", image: "images/targaryen.jpg", words: "Fire and Blood" },
    { name: "Velaryon", sigil: "🌊", image: "images/velaryon.jpg", words: "The Old, the True, the Brave" },
    { name: "Hightower", sigil: "🗼", image: "images/hightower.jpg", words: "We Light the Way" },
    { name: "Stark", sigil: "🐺", image: "images/stark.jpg", words: "Winter is Coming" },
    { name: "Baratheon", sigil: "🦌", image: "images/baratheon.jpg", words: "Ours is the Fury" },
    { name: "Lannister", sigil: "🦁", image: "images/lannister.jpg", words: "Hear Me Roar!" }
];

/* ===========================
   DRAGONS DATA
   =========================== */
const dragons = [
    { name: "Syrax", rider: "Rhaenyra Targaryen", image: "images/syrax.jpg", desc: "A golden-yellow dragon, Rhaenyra's primary mount." },
    { name: "Caraxes", rider: "Daemon Targaryen", image: "images/caraxes.jpg", desc: "Known as the 'Blood Wyrm', a deadly red dragon." },
    { name: "Vhagar", rider: "Aemond Targaryen", image: "images/vhagar.jpg", desc: "The largest living dragon, as big as a castle." },
    { name: "Sunfyre", rider: "Aegon II Targaryen", image: "images/sunfyre.jpg", desc: "The most beautiful dragon ever seen in Westeros." },
    { name: "Meleys", rider: "Rhaenys Targaryen", image: "images/meleys.jpg", desc: "Called the 'Red Queen', the fastest dragon in Westeros." },
    { name: "Vermax", rider: "Jacaerys Velaryon", image: "images/vermax.jpg", desc: "The young dragon belonging to Rhaenyra's son." },
    { name: "Dreamfyre", rider: "Helaena Targaryen", image: "images/dreamfyre.jpg", desc: "A blue-silver dragon, one of the oldest alive." },
    { name: "Seasmoke", rider: "Laenor Velaryon", image: "images/seasmoke.jpg", desc: "A young silver dragon of House Velaryon." }
];

/* ===========================
   RENDER CHARACTERS
   =========================== */
function renderCharacters(filter = "all") {
    const grid = document.getElementById("charactersGrid");
    grid.innerHTML = "";

    const filtered = filter === "all" ? characters : characters.filter(c => c.faction === filter);

    filtered.forEach((char, index) => {
        const card = document.createElement("div");
        card.className = `character-card ${char.faction}`;
        card.style.animationDelay = `${index * 0.05}s`;

        const imageContent = char.image
            ? `<img src="${char.image}" alt="${char.name}" class="character-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">`
            : ``;
        const emojiFallback = `<span class="character-emoji" style="display: ${char.image ? 'none' : 'block'};">${char.emoji}</span>`;

        card.innerHTML = `
            <div class="character-image ${char.faction}">
                ${imageContent}
                ${emojiFallback}
                <div class="character-faction-badge ${char.faction}">
                    ${char.faction === "black" ? "Blacks" : "Greens"}
                </div>
            </div>
            <div class="character-info">
                <h3 class="character-name">${char.name}</h3>
                <p class="character-title">"${char.title}"</p>
                <p class="character-house">${char.house}</p>
            </div>
        `;
        card.addEventListener("click", () => openModal(char));
        grid.appendChild(card);
    });
}

/* ===========================
   RENDER HOUSES
   =========================== */
function renderHouses() {
    const grid = document.getElementById("housesGrid");
    grid.innerHTML = "";

    houses.forEach(house => {
        const card = document.createElement("div");
        card.className = "house-card";

        const sigilContent = house.image
            ? `<img src="${house.image}" alt="House ${house.name}" class="house-sigil-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               <div class="house-sigil" style="display:none;">${house.sigil}</div>`
            : `<div class="house-sigil">${house.sigil}</div>`;

        card.innerHTML = `
            <div class="house-sigil-container">${sigilContent}</div>
            <h3 class="house-name">House ${house.name}</h3>
            <p class="house-words">"${house.words}"</p>
        `;
        grid.appendChild(card);
    });
}

/* ===========================
   RENDER DRAGONS
   =========================== */
function renderDragons() {
    const grid = document.getElementById("dragonsGrid");
    grid.innerHTML = "";

    dragons.forEach(dragon => {
        const card = document.createElement("div");
        card.className = "dragon-card";
        card.innerHTML = `
            <div class="dragon-image">
                <img src="${dragon.image}" alt="${dragon.name}" class="dragon-photo" onerror="this.style.display='none';">
            </div>
            <div class="dragon-info">
                <h3 class="dragon-name">${dragon.name}</h3>
                <p class="dragon-rider">Rider: ${dragon.rider}</p>
                <p class="dragon-desc">${dragon.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ===========================
   MODAL
   =========================== */
function openModal(char) {
    const modal = document.getElementById("characterModal");
    const body = document.getElementById("modalBody");

    const headerImage = char.image
        ? `<img src="${char.image}" alt="${char.name}" class="modal-character-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
           <div class="modal-character-emoji" style="display:none;">${char.emoji}</div>`
        : `<div class="modal-character-emoji">${char.emoji}</div>`;

    body.innerHTML = `
        <div class="modal-character-header">
            ${headerImage}
            <h2 class="modal-character-name">${char.name}</h2>
            <p class="modal-character-title">"${char.title}"</p>
            <span class="modal-faction-tag ${char.faction}">
                ${char.faction === "black" ? "⚫ Blacks" : "🟢 Greens"}
            </span>
        </div>
        <p class="modal-description">${char.description}</p>
        <div class="modal-meta">
            <div class="modal-meta-item"><div class="modal-meta-label">House</div><div class="modal-meta-value">${char.house}</div></div>
            <div class="modal-meta-item"><div class="modal-meta-label">Dragon</div><div class="modal-meta-value">${char.dragon}</div></div>
            <div class="modal-meta-item"><div class="modal-meta-label">Actor</div><div class="modal-meta-value">${char.actor}</div></div>
            <div class="modal-meta-item"><div class="modal-meta-label">Status</div><div class="modal-meta-value">${char.status}</div></div>
        </div>
    `;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("characterModal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

/* ===========================
   INIT
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
    renderCharacters();
    renderHouses();
    renderDragons();

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCharacters(btn.dataset.faction);
        });
    });

    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("characterModal").addEventListener("click", (e) => {
        if (e.target.id === "characterModal") closeModal();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.style.boxShadow = window.scrollY > 50 ? "0 5px 20px rgba(0,0,0,0.5)" : "none";
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const offset = 70;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        });
    });
});