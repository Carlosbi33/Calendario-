
const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupQuote = document.getElementById('popup-quote');
const today = new Date();
const poems = [
    "En tus ojos, encuentro el cielo,\nSusurrando amor eterno,\nBrillando como el sol.",
    "Tus abrazos son mi refugio,\nDonde el tiempo se detiene,\nY el alma encuentra paz.",
    "Eres mi amanecer constante,\nEl latir de mi esperanza,\nMi amor sin final.",
    "Cada día, un nuevo suspiro,\nTu voz, mi melodía,\nEl amor es infinito.",
    "En tus manos, mi universo,\nTu risa, mi melodía,\nEres todo para mí.",
    "Tu amor, mi fuerza secreta,\nEl refugio de mis sueños,\nLa razón de mi vivir.",
    "Bajo la luna, tus caricias,\nSon estrellas en mi piel,\nEl amor hecho eterno.",
    "Tu sonrisa ilumina mi alma,\nEres la calma en mi tormenta,\nMi vida junto a ti.",
    "Cada instante, contigo sueño,\nEres mi paz, mi deseo,\nTe amo, mi único cielo.",
    "El tiempo se detiene contigo,\nCada beso, un poema eterno,\nEl amor vive en nosotros."
];

// Cargar calendario con restricciones
function loadCalendar() {
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endDate = new Date(today.getFullYear(), 11, 23); // Hasta el 23 de diciembre

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const day = document.createElement('div');
        const dayNumber = date.getDate();
        const isUnlocked = date <= today;

        day.classList.add('day');
        if (!isUnlocked) day.classList.add('locked');
        day.innerHTML = `<span>${dayNumber}</span>`;
        day.onclick = () => {
            if (isUnlocked) {
                showPopup(dayNumber, poems[(dayNumber - 1) % poems.length]);
            }
        };

        calendar.appendChild(day);
    }
}

// Mostrar popup
function showPopup(day, poem) {
    popupTitle.textContent = `Día ${day}`;
    popupQuote.textContent = poem.replace(/\\n/g, '<br>');
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Cerrar popup
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

loadCalendar();
