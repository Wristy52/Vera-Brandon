/* ==========================================================
   1. FRASES DINÁMICAS EN EL HERO
========================================================== */
const frases = [
    "Belleza natural sin químicos ✨",
    "EcoGlow: bienestar real 🌿",
    "Productos hechos a mano 🧼",
    "Cuida tu piel, cuida el planeta 🌎"
];

function cambiarFraseHero() {
    const heroTexto = document.getElementById("hero-frase");
    heroTexto.textContent = frases[Math.floor(Math.random() * frases.length)];
}

setInterval(cambiarFraseHero, 4500);



/* ==========================================================
   2. FORMULARIO DE CONTACTO
========================================================== */
const form = document.getElementById("contact-form");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        respuesta.style.color = "red";
        respuesta.textContent = "Por favor completa todos los campos.";
        return;
    }

    respuesta.style.color = "green";
    respuesta.textContent = "¡Gracias! EcoGlow recibió tu mensaje.";

    form.reset();

    setTimeout(() => respuesta.textContent = "", 5000);
});



/* ==========================================================
   3. ANIMACIÓN DE TARJETAS AL HACER SCROLL
========================================================== */
const cards = document.querySelectorAll(".product-card");

function aparecerTarjetas() {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", aparecerTarjetas);




/* ==========================================================
   4. BOTÓN “VOLVER ARRIBA”
========================================================== */
const btnArriba = document.createElement("button");
btnArriba.textContent = "▲";
btnArriba.id = "btnArriba";
document.body.appendChild(btnArriba);

window.addEventListener("scroll", () => {
    btnArriba.style.display = (window.scrollY > 300) ? "block" : "none";
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




/* ==========================================================
   5. CURSOR DINÁMICO (Jabón → Burbuja → Gota)
========================================================== */
const cursorClases = ["cursor-jabon", "cursor-burbuja", "cursor-gota"];
let cursorIndex = 0;

setInterval(() => {
    cursorIndex = (cursorIndex + 1) % cursorClases.length;

    document.body.classList.remove("cursor-jabon", "cursor-burbuja", "cursor-gota");
    document.body.classList.add(cursorClases[cursorIndex]);

}, 4000);




/* ==========================================================
   6. ESTELA DEL CURSOR (burbujas pequeñas)
========================================================== */
document.addEventListener("mousemove", (e) => {
    const burbuja = document.createElement("span");
    burbuja.classList.add("bubble-trail");
    burbuja.style.left = e.pageX + "px";
    burbuja.style.top = e.pageY + "px";

    document.body.appendChild(burbuja);

    setTimeout(() => burbuja.remove(), 600);
});




/* ==========================================================
   7. APARICIÓN DE SECCIONES AL HACER SCROLL
========================================================== */
const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.25 });

secciones.forEach(sec => observer.observe(sec));

/* ==========================================================
   FAQ - Comportamiento desplegable
=========================================================== */
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("activo");
    });
});
