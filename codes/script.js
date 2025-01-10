// Menu Toggle for Navigation
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
  });
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// Modal Handling
function openModal(formId) {
    const modal = document.getElementById(formId);
    if (modal) modal.style.display = "flex";
}

function closeModal(formId) {
    const modal = document.getElementById(formId);
    if (modal) modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
});

// Open Service Modal
function openServiceModal(serviceName) {
    const modal = document.getElementById('form1');
    if (modal) {
        modal.style.display = "flex";

        const serviceDropdown = document.getElementById('service');
        if (serviceDropdown) {
            serviceDropdown.value = serviceName;
        }
    }
}

