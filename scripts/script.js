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

document.addEventListener("DOMContentLoaded", function() {
    const gearLogo = document.querySelector(".gear-logo");

    let rotation = 0;
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const delta = scrollTop - lastScrollTop;

        rotation += delta;
        gearLogo.style.transform = `rotate(${rotation}deg)`;

        lastScrollTop = scrollTop;
    });
});

/*imagen 3d*/
const pane = document.querySelector('.pane');

pane.addEventListener('mousemove', (e) => {
  const width = pane.offsetWidth;
  const height = pane.offsetHeight;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  const rotateY = ((mouseX / width) * 2 - 1) * 20; // Rango de -30 a 30 grados
  const rotateX = ((mouseY / height) * 2 - 1) * -20; // Rango de -30 a 30 grados

  pane.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

pane.addEventListener('mouseleave', () => {
  pane.style.transform = 'rotateY(0) rotateX(0)'; // Vuelve a la posición original cuando el mouse sale del panel
});
