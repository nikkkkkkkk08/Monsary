// Floating Hearts & Anime Sparkles
const items = ['❤️', '✨', '💖', '🌸', '⭐', '🧸', '🍭'];
function createFloatingItem() {
    const container = document.getElementById('hearts-container');
    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.innerHTML = items[Math.floor(Math.random() * items.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 3 + 4) + 's';
    item.style.fontSize = (Math.random() * 15 + 15) + 'px';
    container.appendChild(item);
    setTimeout(() => item.remove(), 7000);
}
setInterval(createFloatingItem, 400);

// Date Lock Logic
function checkDate() {
    const input = document.getElementById('date-input').value.toLowerCase().trim();
    const errorMsg = document.getElementById('error-msg');
    
    if (input.includes("may 12") || input === "05/12" || input === "5/12") {
        document.getElementById('date-lock').classList.add('hidden');
        document.getElementById('opening').classList.remove('hidden');
        errorMsg.classList.add('hidden');
        for(let i=0; i<10; i++) setTimeout(createFloatingItem, i*100);
    } else {
        errorMsg.classList.remove('hidden');
        const inputField = document.getElementById('date-input');
        inputField.style.borderColor = "#ff4d6d";
        setTimeout(() => inputField.style.borderColor = "", 500);
    }
}

// Countdown Timer Logic
const startDate = new Date("May 12, 2026 00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("mins").innerText = m.toString().padStart(2, '0');
    document.getElementById("secs").innerText = s.toString().padStart(2, '0');
}
setInterval(updateTimer, 1000);

// Reasons Why
const reasons = [
    "Because you always remind me to eat. ❤️",
    "Because you're patient even when I'm annoying.",
    "Because you made me love anime! ✨",
    "The way you say 'babby' in chat. 😭",
    "Because you're my favorite part of every day.",
    "The way you care Kapag may sakit ako. 🧸",
    "Because you stay even when I'm clingy.",
    "Simply because you are YOU. ❤️",
    "The way we met through a chess live. ♟️",
    "Because you're my Lablabbb forever. ❤️",
    "Dahil kahit 2 AM na, pinapagalitan mo pa rin ako para matulog. 😂",
    "Dahil kahit ragebaiter ako, tinitiis mo pa rin ako. ❤️"
];

function showReason() {
    const display = document.getElementById('reason-display');
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = randomReason;
        display.style.opacity = 1;
    }, 200);
}

function openLetter() {
    document.getElementById('opening').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    updateTimer();

    const player = document.getElementById('spotify-player');
    const currentSrc = player.src;
    if (!currentSrc.includes('autoplay=1')) {
        player.src = currentSrc + "&autoplay=1";
    }
}

document.getElementById("date-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkDate();
    }
});

