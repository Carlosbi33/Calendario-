
const passwordInput = document.getElementById('password');
const loginBox = document.getElementById('login');
const contentBox = document.getElementById('content');
const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupQuote = document.getElementById('popup-quote');
const correctPassword = "janlos";

// Frases del calendario
const quotes = [
    "Hoy es un buen día para amar y ser amado.",
    "Eres el sol que ilumina mi día.",
    "Contigo todo es mejor.",
    "Mi felicidad empieza contigo.",
    "El amor no es perfecto, pero tú lo haces hermoso.",
    "Te amo más de lo que puedo expresar."
];

// Mostrar/Ocultar contraseña
function togglePassword() {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// Validar contraseña
function checkPassword() {
    if (passwordInput.value === correctPassword) {
        loginBox.classList.add('hidden');
        contentBox.classList.remove('hidden');
        loadCalendar();
        startHearts();
    } else {
        alert("Contraseña incorrecta");
    }
}

// Cargar calendario
function loadCalendar() {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endDate = new Date(today.getFullYear(), 11, 23); // 23 de diciembre

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const day = document.createElement('div');
        const dayNumber = date.getDate();
        const isUnlocked = date <= today;

        day.classList.add('day');
        if (!isUnlocked) day.classList.add('locked');
        day.innerHTML = `<span>${dayNumber}</span>`;
        day.onclick = () => {
            if (isUnlocked) {
                showPopup(dayNumber, quotes[dayNumber % quotes.length]);
            }
        };

        calendar.appendChild(day);
    }
}

// Mostrar popup
function showPopup(day, quote) {
    popupTitle.textContent = `Día ${day}`;
    popupQuote.textContent = quote;
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Cerrar popup
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// Animar corazones triangulares
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        hearts.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 500);
}
