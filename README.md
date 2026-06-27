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
- [React 19](https://reactjs.org/) - JS library
- [Vite 8](https://vite.dev/) - Build tool
- [Fontsource](https://fontsource.org/) - Font loader

### What I learned

In this project, I learned how to manage shared state globally using React's Context API, handle global DOM events and element references using the `useRef` and `useEffect` hooks, and resolve advanced CSS layout and stacking context positioning challenges.

Here are the key takeaways:

- **State Management & Event Handling with Context API**
  Instead of "prop drilling" through intermediate layout components like `Header`, I utilized React's Context API to manage the mobile menu state globally. This allowed the `HamburgerMenu` button to update and consume the state for its ARIA attributes, the `Navbar` component to toggle its visibility via the `data-is-menu-open` attribute, while siblings like `<main>` and `<footer>` also listened to the state to apply accessibility attributes (`inert`).

  ```jsx
  // Creating Context
  export const MenuContext = createContext();

  export function MenuProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        {children}
      </MenuContext.Provider>
    );
  }
  ```

  ```jsx
  // Consuming Context & Event Handling
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  <button
    onClick={handleClick}
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={isMenuOpen}>
    ...
  </button>;
  ```

- **CSS Stacking Contexts and Sticky/Fixed Positioning**
  I learned that applying `filter` or `opacity` to an ancestor element (like `.root`) creates a new stacking context, which restricts and disables `position: sticky` and `position: fixed` on all its descendant elements. Moving the visual effects directly to the inactive sibling elements (`[inert]`) resolved this issue.

  ```css
  /* Pinned to the viewport safely without ancestor stacking conflicts */
  .header {
    position: sticky;
    inset-block-start: 0;
    z-index: 1;
  }

  [inert] {
    opacity: 80%;
    filter: blur(2px) grayscale(10%);
  }
  ```

- **Outside Click Detection with `useRef` and `useEffect`**
  I learned how to detect clicks outside of a component in React to automatically close the mobile navigation menu. This involves using `useRef` to target the navigation container and `useEffect` to attach a global event listener to the `document`.

  ```jsx
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);
  ```

### Continued development

In future projects, I plan to focus on the following areas to improve my frontend development skills:

- **Accessibility & Focus Management:** While using the `inert` attribute successfully disabled interactions outside the active menu, I want to implement programmatical focus management (e.g., keyboard focus trap) to ensure screen readers and keyboard users have a seamless navigation experience inside mobile menus and modals.
- **React Context Performance Optimization:** I want to dive deeper into how React handles context updates and learn techniques to optimize rendering, such as splitting contexts, memoization, or using state management libraries for larger-scale state sharing.
- **Smooth Entry/Exit Animations:** I plan to explore libraries like Framer Motion or modern native CSS tools to handle smooth transition animations for elements entering and leaving the DOM (like the mobile drawer menu).
- **TypeScript Integration:** I plan to adopt TypeScript in my React projects to catch type-related bugs early during development, leverage better autocompletion, and write cleaner, self-documenting code.

### Useful resources

- [TinyPNG](https://tinypng.com/) - Helped me compress and optimize the images in the project without losing quality, making the page load faster.
- [Cloudinary](https://cloudinary.com/) - Used to host the Open Graph and Twitter card images for social media sharing.
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjlophiddqccjgplachon0304v) - Chrome extension that allowed me to overlay the design mockup directly on my live page for pixel-perfect accuracy.
- [Fontsource](https://fontsource.org/) - This made self-hosting fonts incredibly easy. I simply installed the font package via npm and imported it directly into my JS file, eliminating the hassle of managing font files manually or relying on external CDNs.
- Josh W. Comeau's [Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - I used this as a foundation for my CSS reset to ensure a consistent and sensible baseline across browsers.

### AI Collaboration

I collaborated with Antigravity, an AI coding assistant developed by Google DeepMind. Antigravity acted as a supportive mentor, guiding me through debugging layout problems, calculating fluid typography values, implementing global state management, resolving complex CSS stacking context bugs, and explaining web concepts rather than providing copy-paste solutions.

**How I used it:**

- **Responsive Navbar:** Refactored the desktop layout to resolve vertical height alignment and horizontal overflow issues caused by mobile-first inherited styles
- **Discrete Transitions:** Fixed transition bugs with `@starting-style` and `allow-discrete` by separating layout properties from transitionable properties
- **Fluid Typography (CSS `clamp()`):** Calculated preferred values using slope and offset mathematical formulas to achieve smooth scaling across viewports, using a combination of `em`/`rem` and viewport inline (`vi`) units
- **State Management & Stacking Contexts:** Guided the implementation of the React Context API to manage global mobile menu state cleanly (avoiding prop-drilling) and debugged issues with stacking contexts where applying CSS filters to ancestor elements broke sticky and fixed positioning

Collaborating with the AI helped me better understand layout container structures, CSS specificity, modern transition mechanics, the mathematics of fluid typography, React context patterns, CSS stacking layers, and accessibility best practices.

## Author

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)
