// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }

});


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

    });

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// HERO FADE ANIMATION
// ===============================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";

    setTimeout(() => {

        heroContent.style.transition = "all 1s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 300);

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 150;

        const updateCount = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText = target;

            }

        };

        updateCount();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100 && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});


// ===============================
// NAVBAR HIDE / SHOW
// ===============================

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {

        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transform = "translateY(0)";

    }

    lastScroll = currentScroll;

});
// Counter Animation

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 200;

        const updateCounter = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";
            }
        };

        updateCounter();

    });

};

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight - 100 && !started){

        startCounter();

        started = true;
    }

});

// Reveal Animation

const cards = document.querySelectorAll(".about-card");

const reveal = () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);
reveal();
const cards = document.querySelectorAll(".course-card");

const revealCards = () => {

    cards.forEach((card,index) => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            setTimeout(() => {

                card.classList.add("show");

            }, index * 100);

        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
    });

});

document.querySelectorAll(".course-card").forEach(card => {
    card.classList.add("show");
});
// ==========================
// FACILITY CARD ANIMATION
// ==========================

const facilityCards = document.querySelectorAll(".facility-card");

const revealFacilities = () => {

    facilityCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealFacilities);

revealFacilities();
// ==========================
// ADMISSION FORM
// ==========================

const admissionForm = document.querySelector(".admission-form form");

if(admissionForm){

    admissionForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Application Submitted Successfully!");

        admissionForm.reset();

    });

}
// ==========================
// GALLERY LIGHTBOX
// ==========================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});
// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}