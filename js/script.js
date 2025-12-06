// ==========================================
// NETFOX - Esempi JavaScript
// Script per funzionalità avanzate
// ==========================================

// ========================================
// 1. NAVBAR SCROLL EFFECT
// ========================================
// Cambia stile navbar durante lo scroll

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ========================================
// 2. SMOOTH SCROLL
// ========================================
// Scroll fluido verso le sezioni

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.getElementById('mainNav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ========================================
// NEWSLETTER FORM VALIDATION
// ========================================
// Validazione email con feedback visivo

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const emailError = document.getElementById('emailError');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset messaggi
            successMessage.classList.add('d-none');
            errorMessage.classList.add('d-none');
            emailInput.classList.remove('is-invalid');
            
            const email = emailInput.value.trim();
            
            // Validazione email regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                emailInput.classList.add('is-invalid');
                emailError.textContent = 'Inserisci un indirizzo email valido.';
                return;
            }
            
            // Simulazione invio (success)
            emailInput.value = '';
            successMessage.classList.remove('d-none');
            
            // Nascondi messaggio dopo 5 secondi
            setTimeout(() => {
                successMessage.classList.add('d-none');
            }, 5000);
        });
        
        // Rimuovi errore durante digitazione
        emailInput.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    }
});


// ========================================
// 3. ANIMAZIONI ON SCROLL
// ========================================
// Rivela elementi durante lo scroll

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Osserva tutti gli elementi con classe .animate-on-scroll
document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});


// ========================================
// 4. LAZY LOADING IMMAGINI
// ========================================
// Carica immagini solo quando visibili

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    // Usa: <img data-src="path/to/image.jpg" class="lazy">
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}


// ========================================
// 5. FORM NEWSLETTER VALIDATION
// ========================================
// Validazione avanzata form

const newsletterForm = document.querySelector('#newsletter form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('#email').value;
        
        // Validazione email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            // Simulazione invio (sostituire con chiamata API)
            showNotification('Iscrizione completata! 🎉', 'success');
            this.reset();
        } else {
            showNotification('Email non valida ❌', 'error');
        }
    });
}

// Funzione per mostrare notifiche
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


// ========================================
// 6. VIDEO CONTROLS
// ========================================
// Controlli personalizzati per video hero

const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
    // Play/Pause al click
    heroVideo.addEventListener('click', function() {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
    
    // Mute/Unmute con bottone
    const muteBtn = document.createElement('button');
    muteBtn.className = 'video-mute-btn';
    muteBtn.innerHTML = '🔇';
    muteBtn.setAttribute('aria-label', 'Toggle audio');
    
    document.querySelector('.hero-section').appendChild(muteBtn);
    
    muteBtn.addEventListener('click', function() {
        heroVideo.muted = !heroVideo.muted;
        this.innerHTML = heroVideo.muted ? '🔇' : '🔊';
    });
}


// ========================================
// 7. DARK MODE TOGGLE
// ========================================
// Cambio tema chiaro/scuro

const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    // Carica preferenza salvata
    const currentMode = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentMode);
    
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}


// ========================================
// 8. SEARCH FUNCTIONALITY
// ========================================
// Ricerca contenuti (mock)

const searchInput = document.getElementById('searchInput');

if (searchInput) {
    const contents = [
        { title: 'Tenet', type: 'film', section: '#Tenet' },
        { title: 'Oppenheimer', type: 'film', section: '#Oppenheimer' },
        { title: 'Peaky Blinders', type: 'serie', section: '#Peaky_blinders' },
        { title: 'Breaking Bad', type: 'serie', section: '#Breaking_bad' }
    ];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        const results = contents.filter(item => 
            item.title.toLowerCase().includes(query)
        );
        
        displaySearchResults(results);
    });
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) return;
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Nessun risultato trovato</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(item => `
        <div class="search-result-item">
            <a href="${item.section}">
                <h4>${item.title}</h4>
                <span class="badge">${item.type}</span>
            </a>
        </div>
    `).join('');
}


// ========================================
// 9. RATING SYSTEM
// ========================================
// Sistema di rating stelle

function createRating(containerId, maxStars = 5) {
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    let currentRating = 0;
    
    for (let i = 1; i <= maxStars; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '★';
        star.dataset.rating = i;
        
        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.rating);
            updateStars();
        });
        
        star.addEventListener('mouseenter', function() {
            highlightStars(parseInt(this.dataset.rating));
        });
        
        container.appendChild(star);
    }
    
    container.addEventListener('mouseleave', updateStars);
    
    function updateStars() {
        container.querySelectorAll('.star').forEach((star, index) => {
            star.classList.toggle('active', index < currentRating);
        });
    }
    
    function highlightStars(rating) {
        container.querySelectorAll('.star').forEach((star, index) => {
            star.classList.toggle('hover', index < rating);
        });
    }
}


// ========================================
// 10. PARALLAX EFFECT
// ========================================
// Effetto parallasse su hero section

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});


// ========================================
// 11. PRELOADER
// ========================================
// Loader durante caricamento pagina

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    }
});


// ========================================
// 12. COOKIE CONSENT
// ========================================
// Banner cookie compliance GDPR

function showCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Questo sito utilizza cookie per migliorare l'esperienza utente.</p>
                <div class="cookie-buttons">
                    <button id="acceptCookies" class="btn btn-primary">Accetta</button>
                    <button id="declineCookies" class="btn btn-outline-light">Rifiuta</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        document.getElementById('acceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            banner.remove();
        });
        
        document.getElementById('declineCookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'false');
            banner.remove();
        });
    }
}

// Mostra banner al caricamento
// showCookieConsent();


// ========================================
// 13. BACK TO TOP BUTTON
// ========================================
// Mostra/nascondi bottone torna su

const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}


// ========================================
// 14. MODAL VIDEO PLAYER
// ========================================
// Apri video in modal fullscreen

function createVideoModal(videoUrl) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <iframe src="${videoUrl}" allowfullscreen></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}


// ========================================
// 15. LOCAL STORAGE FAVORITES
// ========================================
// Salva film/serie preferiti

class Favorites {
    constructor() {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    }
    
    add(item) {
        if (!this.exists(item.id)) {
            this.favorites.push(item);
            this.save();
            return true;
        }
        return false;
    }
    
    remove(id) {
        this.favorites = this.favorites.filter(fav => fav.id !== id);
        this.save();
    }
    
    exists(id) {
        return this.favorites.some(fav => fav.id === id);
    }
    
    getAll() {
        return this.favorites;
    }
    
    save() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}

// Uso:
// const favorites = new Favorites();
// favorites.add({ id: 'tenet', title: 'Tenet', type: 'film' });


// ========================================
// INIZIALIZZAZIONE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 NETFOX caricato correttamente!');
    
    // Qui puoi inizializzare tutte le funzioni
    // createRating('movieRating');
    // showCookieConsent();
    
    // Log versione
    console.log('Versione: 2.0 - Bootstrap 5 Edition');
});
