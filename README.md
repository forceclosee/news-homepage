# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<!-- isi screenshot -->

![](./screenshot.jpg)

### Links

- Solution URL: [solution URL](https://your-solution-url.com) <!-- ganti link -->
- Live Site URL: [live site URL](https://your-live-site-url.com) <!-- ganti link -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- BEM (Block Element Modifier) methodology
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vite.dev/) - Build tool
- [Fontsource](https://fontsource.org/) - Font loader

### What I learned

### Continued development

### Useful resources

- [TinyPNG](https://tinypng.com/) - Helped me compress and optimize the images in the project without losing quality, making the page load faster.
- [Cloudinary](https://cloudinary.com/) - Used to host the Open Graph and Twitter card images for social media sharing.
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjlophiddqccjgplachon0304v) - Chrome extension that allowed me to overlay the design mockup directly on my live page for pixel-perfect accuracy.
- [Fontsource](https://fontsource.org/) - This made self-hosting fonts incredibly easy. I simply installed the font package via npm and imported it directly into my JS file, eliminating the hassle of managing font files manually or relying on external CDNs.
- Josh W. Comeau's [Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - I used this as a foundation for my CSS reset to ensure a consistent and sensible baseline across browsers.

### AI Collaboration

I collaborated with Antigravity, an AI coding assistant developed by Google DeepMind. Antigravity acted as a supportive mentor, guiding me through debugging layout problems, calculating fluid typography values, and explaining layout concepts rather than providing copy-paste solutions.

**How I used it:**

- **Responsive Navbar:** Refactored the desktop layout to resolve vertical height alignment and horizontal overflow issues caused by mobile-first inherited styles
- **Discrete Transitions:** Fixed transition bugs with `@starting-style` and `allow-discrete` by separating layout properties from transitionable properties
- **Fluid Typography (CSS `clamp()`):** Calculated preferred values using slope and offset mathematical formulas to achieve smooth scaling across viewports, using a combination of `em`/`rem` and viewport inline (`vi`) units

Collaborating with the AI helped me better understand layout container structures, CSS specificity, modern transition mechanics, the mathematics of fluid typography, and accessibility best practices.

## Author

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)
