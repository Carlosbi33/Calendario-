const calendar = document.getElementById('calendar');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupQuote = document.getElementById('popup-quote');
const today = new Date();

const poems = [
    "Tus ojos son mi reflejo,\\nla luz que mi alma anhela,\\nen tu risa encuentro calma,\\ny en tus brazos mi frontera.",
    "Eres mi sol cada día,\\nmi luna en la noche fría,\\nel refugio de mi ser,\\nmi amor eterno, mi ayer.",
    "Tu sonrisa, dulce brillo,\\nmi camino, mi sencillo,\\nen tu voz yo quiero estar,\\ny por siempre suspirar.",
    "En tus pasos hay latidos,\\necos suaves y sentidos,\\nque me llaman a soñar,\\ny en tu amor siempre quedar.",
    "Eres flor de primavera,\\ntu caricia la quimera,\\ncada día junto a ti,\\nes un sueño que viví.",
    "Tus palabras son abrigo,\\ntu ternura va conmigo,\\nen tu mundo quiero estar,\\ny jamás dejar de amar.",
    "Cada día en tu mirada,\\nhallo paz, mi madrugada,\\ntus abrazos son calor,\\nmi refugio y mi fervor.",
    "En tu risa hay melodía,\\nel compás de mi alegría,\\ntu presencia es mi razón,\\nde este amor, mi devoción.",
    "Eres fuego en mi desvelo,\\ntu suspiro mi consuelo,\\ncada instante junto a ti,\\nes amor que descubrí.",
    "Tus abrazos son mi puerto,\\ntu dulzura, mi desierto,\\nen tus labios veo el sol,\\ny en tu amor mi corazón.",
    "Eres luz que no se apaga,\\nesperanza que me halaga,\\ntu cariño es mi motor,\\nmi destino, mi calor.",
    "En tus manos hay caricias,\\nen tu piel todas delicias,\\ntu pasión es mi verdad,\\nmi refugio y mi bondad.",
    "Tus promesas son estrellas,\\ntu mirada las más bellas,\\nmi universo gira en ti,\\ntu amor es lo que sentí.",
    "Tu sonrisa es mi alegría,\\ntu dulzura es mi poesía,\\nen tu amor encuentro paz,\\ny jamás quiero olvidar.",
    "Eres luna en mi sendero,\\ntu fulgor mi amor sincero,\\nmi latido es tu canción,\\ny tu amor mi inspiración.",
    "Cada noche te imagino,\\nesperando en mi camino,\\ncon tus brazos junto a mí,\\nes amor lo que viví.",
    "Tus palabras son abrigo,\\ntu mirada va conmigo,\\ncada paso hacia tu amor,\\nes mi vida y mi fervor.",
    "Eres faro en la tormenta,\\ntu calor mi alma alienta,\\ntu ternura es mi lugar,\\ndonde siempre quiero estar.",
    "Tu sonrisa es mi mañana,\\ntu susurro mi ventana,\\ncada instante en tu pasión,\\nes mi mundo, mi ilusión."
];

// Generar el calendario con días del 5 al 23
for (let i = 5; i <= 23; i++) {
    const day = document.createElement('div');
    day.textContent = `Día ${i}`;
    day.onclick = () => showPoem(i - 5);
    calendar.appendChild(day);
}

// Mostrar poema en el popup
function showPoem(index) {
    popupTitle.textContent = `Día ${index + 5}`;
    popupQuote.textContent = poems[index];
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Cerrar el popup
function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}