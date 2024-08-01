/* Letras */
document.addEventListener('DOMContentLoaded', function () {
    const text = "Software a medida especializado.... Expertos en soluciones tecnológicas.";
    let i = 0;
    const speed = 50; // velocidad de escritura

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


/* Intersection Observer */
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

/* Engrane */
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

/* Imagen 3D */
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
