const text = `Nos especializamos en la creación de software a medida.
Nuestro equipo de expertos trabaja continuamente para ofrecerte las mejores soluciones tecnológicas.`;
const typewriterElement = document.querySelector('.typewriter');

let i = 0;

function type() {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50); // Ajusta la velocidad de escritura aquí
    } else {
        typewriterElement.style.borderRight = 'none'; // Elimina el cursor al terminar
    }
}

type();

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
