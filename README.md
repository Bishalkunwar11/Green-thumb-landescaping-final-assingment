# 🌿 Green Thumb Landscaping

A responsive, single-page marketing website for **Green Thumb Landscaping** — a licensed, insured, and bonded local neighbourhood landscaping service.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Enhancements & Accessibility](#enhancements--accessibility)
- [License](#license)

---

## Overview

This is a static HTML/CSS/JavaScript website built as a final assignment project. It showcases the services, pricing plans, customer testimonials, and contact form for a fictional landscaping company.

---

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation bar on scroll
- ✅ Smooth scroll-to-section links
- ✅ Scroll-triggered animations (Animate.css v4)
- ✅ Client-side contact form validation with success/error feedback
- ✅ Back-to-top button (appears after scrolling 300 px)
- ✅ Mobile hamburger navigation menu
- ✅ Parallax hero and testimonial background images
- ✅ Keyboard-accessible focus styles
- ✅ ARIA labels and roles for screen-reader compatibility

---

## File Structure

```
Green thumb landescaping/
└── GREEN thumb landescaping/
    ├── index.html                  # Main HTML page
    ├── resources/
    │   ├── css/
    │   │   ├── style.css           # Main stylesheet
    │   │   ├── queries.css         # Responsive / media-query styles
    │   │   └── images/
    │   │       ├── house.jpg       # Hero background image
    │   │       └── wet-grass.jpg   # Testimonial section background
    │   ├── js/
    │   │   └── script.js           # jQuery interactions & form validation
    │   └── img/
    │       ├── 30.jpg              # Customer photo – Carolyn Green
    │       ├── 47.jpg              # Customer photo – Alberto Duncan
    │       └── 81.jpg              # Customer photo – Eva Turner
    └── vendors/
        ├── css/
        │   ├── normalize.css       # CSS reset
        │   └── grid.css            # Lightweight float grid system
        └── js/
            └── jquery.waypoints.min.js  # Scroll waypoints library
```

---

## Getting Started

No build tools or package managers are required. This is a plain static website.

### Run locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bishalkunwar11/Green-thumb-landescaping-final-assingment.git
   ```

2. **Open the site**

   Navigate to the project folder and open `index.html` in any modern browser:

   ```
   Green thumb landescaping/GREEN thumb landescaping/index.html
   ```

   Or serve it with any local HTTP server, for example:

   ```bash
   cd "Green thumb landescaping/GREEN thumb landescaping"
   python3 -m http.server 8080
   # then visit http://localhost:8080
   ```

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantics |
| CSS3 | Styling, animations, responsive layout |
| [Normalize.css](https://necolas.github.io/normalize.css/) | Cross-browser CSS reset |
| [Google Fonts](https://fonts.google.com/) | Lato (body) & Libre Baskerville (logo) |
| [Animate.css v4](https://animate.style/) | Scroll-triggered element animations |
| [jQuery 3.6](https://jquery.com/) | DOM manipulation & smooth scrolling |
| [jQuery Waypoints](http://imakewebthings.com/waypoints/) | Scroll position triggers |
| [Ionicons 5](https://ionicons.com/) | Feature & pricing icons |
| [Font Awesome 5](https://fontawesome.com/) | Navigation & social icons |

---

## Sections

| Section | ID | Description |
|---|---|---|
| Header / Hero | *(top)* | Full-screen hero with call-to-action buttons |
| About Us | `#about-us` | Four feature columns with icons |
| Testimonials | *(no anchor)* | Three customer quotes over a parallax background |
| Services / Specials | `#specials` | Three pricing plan cards |
| Contact | `#form` | Validated contact form with phone number |
| Footer | *(bottom)* | Navigation links and social media icons |

---

## Enhancements & Accessibility

- **SEO** – Descriptive `<meta description>` and `<meta keywords>` tags.
- **Fonts** – Google Fonts loaded via `<link>` with `preconnect` hints for performance.
- **Animations** – Uses Animate.css v4 (`animate__animated` class prefix).
- **Form validation** – Name and e-mail are validated client-side; a personalised success message is shown on submission.
- **Accessibility** – `aria-label` on `<nav>`, `role="button"` and `aria-expanded` on the mobile menu toggle, `aria-hidden="true"` on decorative icons, `aria-label` on social links, and `*:focus-visible` keyboard focus styles.
- **Back-to-top** – Fixed circular button that fades in after scrolling 300 px.

---

## License

This project was created as a course assignment. All rights reserved by the author.
