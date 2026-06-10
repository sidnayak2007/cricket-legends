
// Smooth Loading Animation

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Animated Counters

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const targetText = counter.innerText;

    if (
        targetText.includes("+") ||
        targetText.includes("°") ||
        targetText.includes("Legend")
    ) {
        return;
    }

    const target = parseInt(targetText);

    let count = 0;

    const speed = target / 100;

    const updateCount = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(updateCount);

        } else {

            counter.innerText = target;
        }
    };

    updateCount();
};

// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".player-card, .stat-card, .achievement"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }
        });
    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

// Counter Observer

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                counterObserver.unobserve(entry.target);
            }
        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");
        }
    });

});

// Floating Hero Effect

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    hero.style.backgroundPosition =
        `${50 + x * 3}% ${50 + y * 3}%`;

});

