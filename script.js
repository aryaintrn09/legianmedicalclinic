// --- DATA MANAGEMENT (Simulated Database) ---
const contentData = {
    id: {
        navHome: "Home",
        navAbout: "Tentang Kami",
        navServices: "Layanan",
        navDoctors: "Dokter",
        navContact: "Kontak",
        navFaq: "FAQ",
        heroTitle: "Pelayanan Kesehatan Profesional & Terpercaya",
        heroSubtitle: "Kami berkomitmen untuk memberikan perawatan terbaik bagi Anda dan keluarga dengan standar medis tertinggi.",
        heroButton: "Buat Janji Temu",
        aboutTitle: "Tentang Kami",
        aboutSubtitle: "Mengenal lebih dekat Legian Medical Clinic.",
        aboutContent1: "Legian Medical Clinic adalah fasilitas kesehatan modern yang didedikasikan untuk menyediakan layanan medis komprehensif di jantung Legian, Bali. Sejak didirikan, kami telah menjadi mitra kesehatan terpercaya bagi masyarakat lokal dan wisatawan.",
        aboutContent2: "Visi kami adalah menjadi klinik pilihan utama dengan mengedepankan kualitas pelayanan, keselamatan pasien, dan teknologi medis terkini. Tim medis kami terdiri dari para profesional berpengalaman yang siap melayani dengan empati dan keahlian.",
        servicesTitle: "Layanan Kami",
        servicesSubtitle: "Kami menyediakan berbagai layanan medis untuk memenuhi kebutuhan kesehatan Anda.",
        doctorsTitle: "Tim Dokter Kami",
        doctorsSubtitle: "Dipercaya dan berpengalaman di bidangnya masing-masing.",
        contactTitle: "Hubungi Kami",
        contactSubtitle: "Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.",
        contactInfoTitle: "Informasi Kontak",
        contactAddress: "Jl. Raya Legian No. 123, Kuta, Bali, Indonesia 80361",
        contactHours: "Senin - Sabtu: 08:00 - 22:00<br>Minggu: 09:00 - 17:00",
        faqTitle: "Pertanyaan Umum (FAQ)",
        faqSubtitle: "Jawaban atas pertanyaan yang sering diajukan.",
        questionnaireTitle: "Selamat Datang di Legian Medical Clinic!",
        questionnaireSubtitle: "Untuk membantu Anda lebih cepat, informasi apa yang sedang Anda cari?",
        q1: "Kontak resmi Legian Medical Clinic",
        q2: "Lokasi Legian Medical Clinic",
        q3: "Informasi mengenai Legian Medical Clinic",
        q4: "Layanan yang diberikan oleh Legian Medical Clinic",
        skipButton: "Lewati & lihat semua",
        services: [
            { icon: 'fa-user-md', title: 'Konsultasi Dokter Umum', description: 'Layanan konsultasi untuk berbagai keluhan kesehatan umum.' },
            { icon: 'fa-heartbeat', title: 'Pemeriksaan Kesehatan Rutin', description: 'Paket medical check-up lengkap untuk deteksi dini penyakit.' },
            { icon: 'fa-tooth', title: 'Perawatan Gigi', description: 'Layanan kesehatan gigi dan mulut, mulai dari pembersihan hingga penambalan.' },
            { icon: 'fa-baby', title: 'Kesehatan Ibu & Anak', description: 'Pemeriksaan kehamilan dan tumbuh kembang anak oleh spesialis.' },
            { icon: 'fa-first-aid', title: 'Unit Gawat Darurat 24 Jam', description: 'Penanganan cepat dan tepat untuk kondisi medis darurat.' },
            { icon: 'fa-pills', title: 'Farmasi', description: 'Menyediakan berbagai jenis obat resep dan non-resep.' },
        ],
        doctors: [
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Andi', name: 'Dr. Andi Pratama', specialty: 'Dokter Umum' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Siti', name: 'Dr. Siti Aminah', specialty: 'Dokter Gigi' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Budi', name: 'Dr. Budi Santoso', specialty: 'Spesialis Anak' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Rina', name: 'Dr. Rina Wijaya', specialty: 'Spesialis Kandungan' },
        ],
        faqs: [
            { question: 'Apakah saya perlu membuat janji temu?', answer: 'Untuk kenyamanan Anda, kami sangat menyarankan untuk membuat janji temu terlebih dahulu. Namun, kami juga menerima pasien walk-in, terutama untuk kasus darurat.' },
            { question: 'Apakah klinik ini menerima asuransi?', answer: 'Ya, kami bekerja sama dengan berbagai perusahaan asuransi terkemuka. Silakan hubungi bagian administrasi kami untuk informasi lebih lanjut mengenai asuransi Anda.' },
            { question: 'Jam berapa saja klinik buka?', answer: 'Klinik kami buka setiap hari. Senin hingga Sabtu dari jam 08:00 - 22:00, dan hari Minggu dari jam 09:00 - 17:00. UGD kami siap melayani 24 jam.' },
        ]
    },
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navDoctors: "Doctors",
        navContact: "Contact",
        navFaq: "FAQ",
        heroTitle: "Professional & Trusted Health Services",
        heroSubtitle: "We are committed to providing the best care for you and your family with the highest medical standards.",
        heroButton: "Make an Appointment",
        aboutTitle: "About Us",
        aboutSubtitle: "Get to know Legian Medical Clinic better.",
        aboutContent1: "Legian Medical Clinic is a modern health facility dedicated to providing comprehensive medical services in the heart of Legian, Bali. Since our establishment, we have become a trusted health partner for the local community and tourists.",
        aboutContent2: "Our vision is to be the primary clinic of choice by prioritizing service quality, patient safety, and the latest medical technology. Our medical team consists of experienced professionals ready to serve with empathy and expertise.",
        servicesTitle: "Our Services",
        servicesSubtitle: "We provide a variety of medical services to meet your health needs.",
        doctorsTitle: "Our Doctor Team",
        doctorsSubtitle: "Trusted and experienced in their respective fields.",
        contactTitle: "Contact Us",
        contactSubtitle: "We are here to help you. Feel free to contact us.",
        contactInfoTitle: "Contact Information",
        contactAddress: "Jl. Raya Legian No. 123, Kuta, Bali, Indonesia 80361",
        contactHours: "Monday - Saturday: 08:00 AM - 10:00 PM<br>Sunday: 09:00 AM - 05:00 PM",
        faqTitle: "Frequently Asked Questions (FAQ)",
        faqSubtitle: "Answers to frequently asked questions.",
        questionnaireTitle: "Welcome to Legian Medical Clinic!",
        questionnaireSubtitle: "To help you faster, what information are you looking for?",
        q1: "Official contact of Legian Medical Clinic",
        q2: "Location of Legian Medical Clinic",
        q3: "Information about Legian Medical Clinic",
        q4: "Services provided by Legian Medical Clinic",
        skipButton: "Skip & see all",
        services: [
            { icon: 'fa-user-md', title: 'General Practitioner Consultation', description: 'Consultation services for various general health complaints.' },
            { icon: 'fa-heartbeat', title: 'Routine Health Check-up', description: 'Complete medical check-up packages for early disease detection.' },
            { icon: 'fa-tooth', title: 'Dental Care', description: 'Oral and dental health services, from cleaning to fillings.' },
            { icon: 'fa-baby', title: 'Maternal & Child Health', description: 'Pregnancy check-ups and child development monitoring by specialists.' },
            { icon: 'fa-first-aid', title: '24-Hour Emergency Unit', description: 'Fast and appropriate treatment for emergency medical conditions.' },
            { icon: 'fa-pills', title: 'Pharmacy', description: 'Provides a variety of prescription and over-the-counter drugs.' },
        ],
        doctors: [
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Andi', name: 'Dr. Andi Pratama', specialty: 'General Practitioner' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Siti', name: 'Dr. Siti Aminah', specialty: 'Dentist' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Budi', name: 'Dr. Budi Santoso', specialty: 'Pediatrician' },
            { img: 'https://placehold.co/300x300/a0aec0/ffffff?text=Dr.+Rina', name: 'Dr. Rina Wijaya', specialty: 'Obstetrician' },
        ],
        faqs: [
            { question: 'Do I need to make an appointment?', answer: 'For your convenience, we highly recommend making an appointment in advance. However, we also accept walk-in patients, especially for emergencies.' },
            { question: 'Does this clinic accept insurance?', answer: 'Yes, we partner with various leading insurance companies. Please contact our administration for more information regarding your insurance.' },
            { question: 'What are the clinic hours?', answer: 'Our clinic is open every day. Monday to Saturday from 08:00 AM - 10:00 PM, and Sunday from 09:00 AM - 05:00 PM. Our Emergency Unit is available 24/7.' },
        ]
    }
};

// --- UI & INTERACTIVITY ---

// Language Switchers
const mainLanguageSwitcher = document.getElementById('language-switcher');
const modalLanguageSwitcher = document.getElementById('modal-language-switcher');
let currentLang = 'id';

function updateContent(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const content = contentData[lang];

    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (content[key]) {
            element.innerHTML = content[key];
        }
    });
    
    // Populate dynamic content
    populateServices(content.services);
    populateDoctors(content.doctors);
    populateFaqs(content.faqs);
}

function handleLanguageChange(event) {
    const selectedLang = event.target.value;
    // Update both switchers to be in sync
    mainLanguageSwitcher.value = selectedLang;
    modalLanguageSwitcher.value = selectedLang;
    // Update the page content
    updateContent(selectedLang);
}

mainLanguageSwitcher.addEventListener('change', handleLanguageChange);
modalLanguageSwitcher.addEventListener('change', handleLanguageChange);

// Dynamic Content Population
function populateServices(services) {
    const serviceList = document.getElementById('service-list');
    serviceList.innerHTML = '';
    services.forEach(service => {
        const serviceItem = `
            <div class="col">
                <div class="card h-100 text-center border-0 shadow-sm service-card p-3">
                    <div class="card-body">
                        <div class="icon mb-3"><i class="fas ${service.icon}"></i></div>
                        <h5 class="card-title fw-bold">${service.title}</h5>
                        <p class="card-text text-muted">${service.description}</p>
                    </div>
                </div>
            </div>
        `;
        serviceList.innerHTML += serviceItem;
    });
}

function populateDoctors(doctors) {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = '';
    doctors.forEach(doctor => {
        const doctorItem = `
            <div class="col">
                <div class="doctor-card">
                    <img src="${doctor.img}" alt="${doctor.name}" class="rounded-circle shadow-lg mb-3">
                    <h5 class="fw-bold mb-0">${doctor.name}</h5>
                    <p class="text-muted">${doctor.specialty}</p>
                </div>
            </div>
        `;
        doctorList.innerHTML += doctorItem;
    });
}

function populateFaqs(faqs) {
    const faqAccordion = document.getElementById('faq-accordion');
    faqAccordion.innerHTML = '';
    faqs.forEach((faq, index) => {
        const faqItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="heading-${index}">
                    <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="${index === 0}" aria-controls="collapse-${index}">
                        ${faq.question}
                    </button>
                </h2>
                <div id="collapse-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading-${index}" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        ${faq.answer}
                    </div>
                </div>
            </div>
        `;
        faqAccordion.innerHTML += faqItem;
    });
}

// Modal, Reordering & Scrolling
const questionnaireModalEl = document.getElementById('questionnaireModal');
const questionnaireModal = new bootstrap.Modal(questionnaireModalEl);

function prioritizeAndScrollToSection(sectionId) {
    questionnaireModal.hide();

    const heroSection = document.getElementById('home');
    const targetSection = document.getElementById(sectionId);

    if (!heroSection || !targetSection) {
        console.error("Elemen hero atau section target tidak ditemukan.");
        return;
    }

    // Pindahkan section yang dituju agar berada TEPAT SETELAH hero section
    heroSection.insertAdjacentElement('afterend', targetSection);

    // Lakukan scroll ke section tersebut setelah modal tertutup
    questionnaireModalEl.addEventListener('hidden.bs.modal', () => {
        const header = document.querySelector('nav.navbar');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }, { once: true });
}

// --- SMOOTH SCROLL UNTUK NAVIGASI ---
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                const header = document.querySelector('nav.navbar');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan modal setelah jeda singkat untuk memastikan semua siap
    setTimeout(() => {
        questionnaireModal.show();
    }, 500);
    
    updateContent(currentLang);
    setupSmoothScroll(); // Panggil fungsi smooth scroll
});
