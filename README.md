# NETFOX - Sito Film e Serie TV

Un sito web moderno dedicato alla presentazione di film e serie TV, costruito con Bootstrap 5 e una palette di colori professionale.

## 🚀 Apertura Rapida

Doppio click su `index.html` per aprire il sito nel browser.

## 📁 Struttura Progetto

```
es8_cairone_giuseppe/
│
├── index.html              # Pagina principale
│
├── css/
│   ├── bootstrap.min.css   # Bootstrap 5.3.2
│   ├── style.css           # Stili personalizzati
│   └── palette-colori.css  # Documentazione palette
│
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap JS + Popper
│   └── script.js                # Funzioni JavaScript
│
├── font/
│   ├── Lato/                    # Font sans-serif
│   └── Libre_Baskerville/       # Font serif
│
├── img/
│   └── [loghi e immagini]       # 12 immagini
│
└── vid/
    └── Oppenheimer.mp4          # Video hero section
```

## 🎨 Palette Colori

Il sito utilizza una palette ispirata a Netflix:

- **Rosso Netflix** (`#E50914`) - Bottoni e CTA principali
- **Nero Profondo** (`#141414`) - Navbar e Footer
- **Cyan Elettrico** (`#00D4FF`) - Effetti hover speciali
- **Background Dark** (`#0F0F0F`) - Sfondo principale
- **Bianco** (`#FFFFFF`) - Testo principale
- **Grigio Chiaro** (`#B3B3B3`) - Testo secondario

Tutti i colori sono definiti come variabili CSS in `css/style.css`:

```css
:root {
    --primary-color: #E50914;
    --secondary-color: #141414;
    --accent-color: #00D4FF;
    /* ... */
}
```

Consulta `css/palette-colori.css` per la guida completa all'uso dei colori.

## 🎯 Funzionalità

### Componenti Principali

1. **Navbar Responsive**
   - Fixed-top con blur backdrop
   - Menu hamburger per mobile
   - Link con animazioni hover

2. **Hero Section**
   - Video background full-screen
   - Overlay gradient
   - Animazioni fade-in

3. **Sezioni Film/Serie**
   - **Tenet** - Trailer YouTube + descrizione
   - **Oppenheimer** - Immagine + descrizione
   - **Peaky Blinders** - Trailer YouTube + descrizione
   - **Breaking Bad** - Immagine + descrizione

4. **Piattaforme Streaming**
   - Loghi di 6 piattaforme (Netflix, Disney+, Prime Video, etc.)
   - Effetti hover animati

5. **Newsletter**
   - Form moderno con validazione
   - Design responsive

6. **Footer**
   - Link rapidi
   - Social media
   - Bottone "Torna Su"

### JavaScript (Opzionale)

Il file `js/script.js` contiene 15 funzioni pronte all'uso:

- Smooth scroll
- Animazioni on scroll
- Form validation avanzata
- Dark mode toggle
- Rating system
- Video controls
- Lazy loading immagini
- E molto altro...

Per attivarle, decommentale nel file `js/script.js`.

## 📱 Responsive Design

Il sito è completamente responsive e si adatta a:

- **Mobile** (< 576px) - Menu hamburger, layout verticale
- **Tablet** (576px - 991px) - Grid 2 colonne
- **Desktop** (> 991px) - Layout completo

## ♿ Accessibilità

- Contrasti colori WCAG AAA compliant
- Alt text su tutte le immagini
- Aria-labels implementati
- Navigazione da tastiera
- Screen reader friendly
- Support per `prefers-reduced-motion`

## 🔧 Personalizzazione

### Cambiare Colori

Modifica le variabili in `css/style.css`:

```css
:root {
    --primary-color: #TUO_COLORE;
    --secondary-color: #TUO_COLORE;
}
```

### Aggiungere una Sezione

Copia una sezione esistente in `index.html` e modifica il contenuto:

```html
<article id="NuovoFilm" class="content-section">
    <div class="container py-5">
        <div class="row align-items-center g-4">
            <!-- Il tuo contenuto -->
        </div>
    </div>
</article>
```

### Modificare Font

I font sono caricati da `font/Lato/` e `font/Libre_Baskerville/`.
Per cambiarli, modifica i `@font-face` in `css/style.css`.

## 🌐 Browser Support

- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📊 Tecnologie

- **HTML5** - Struttura semantica
- **CSS3** - Variabili CSS, Flexbox, Grid, Animazioni
- **Bootstrap 5.3.2** - Framework responsive (locale)
- **JavaScript** - Funzionalità interattive (opzionale)

## 💡 Note

- Tutti i file Bootstrap sono **locali** - non serve connessione internet
- Font personalizzati inclusi nella cartella `font/`
- Video hero ottimizzato per autoplay su tutti i dispositivi
- Scrollbar personalizzata per browser Webkit

## 📄 Licenza

© 2025 NETFOX. Tutti i diritti riservati.
Progetto educativo - Giuseppe Cairone

---

**Versione**: 2.0 - Bootstrap 5 Edition  
**Data**: 6 Dicembre 2025
