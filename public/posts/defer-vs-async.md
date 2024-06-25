---
title: Defer vs. Async in JavaScript for Optimal Performance
createdDate: 24/06/2024 
publish: true
---

In web development, understanding `defer` and `async` attributes for `<script>` tags is crucial for optimizing website performance, especially when using pure HTML, CSS, and JavaScript (outside of frameworks like React or Vue). This post provides a concise explanation and best practices, guiding you towards efficient script loading.

## Similarities

- They aim to prevent external scripts from blocking the browser's rendering of HTML, improving perceived page load speed.
- Both `defer` and `async` are attributes applied to the `<script>` tag to influence how external JavaScript files (those with a `src` attribute) are loaded and executed.

### Defer

> The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
 
- The browser continues parsing the HTML and building the DOM while the script loads in the background.
- Once the DOM is fully built (before the `DOMContentLoaded` event fires), the script is executed in the order the `<script>` tags appear in the HTML. This ensures scripts that rely on the DOM or have a specific execution order are run as expected.

### Async

> The `async` scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything. A fully independent script that runs when loaded
 
- The browser treats the script as fully independent. It loads the script in the background, without waiting for the DOM to finish parsing or other scripts to complete.
- When the script is ready, it executes regardless of DOM state or other script execution, potentially out of order compared to other scripts. This is ideal for non-critical, independent scripts like analytics trackers or advertisements.

## So when to use them?

Use `defer` when your scripts rely on a fully constructed DOM or need to run in a specific order relative to each other. This is common for scripts that interact with HTML elements or manipulate the DOM.

Use `async` for scripts that are completely independent and don't interact with the DOM or other scripts. These are often third-party scripts for analytics, social media widgets, or advertisements where order doesn't matter. Priortize loading the main content even if these scripts haven't finished yet.

