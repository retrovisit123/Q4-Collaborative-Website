/*
This script adds dynamic components to any html file that contains this line of code inside the body:
<script src="scripts/components.js" defer></script>

Make sure that the script above is the first script of out all of them to avoid any issues!

To add custom components, just follow the process below using the template
component that I added in the comment block.
*/

const components = [
  {
    name: "footer",
    htmlPath: "/components/footer.html",
    cssPath: "/components/footer.css",
    position: "beforeend"
  },
  {
    name: "header",
    htmlPath: "/components/header.html",
    cssPath: "/components/header.css",
    position: "afterbegin"
  },

  /* This is an example component you can copy and paste, just change the html and css path
  {
    name: "template",
    htmlPath: "/components/example.html",
    cssPath: "/components/example.css",
    position: "afterbegin" // where to insert in body (e.g. "afterbegin",  "afterend",  "beforebegin", "beforeend")
  },
  */
]

// Track loaded CSS to avoid duplicates
const loadedCSS = new Set();

// Load a single component
async function loadComponent(component) {
  try {
    // Load HTML
    const res = await fetch(component.htmlPath);
    const html = await res.text();

    document.body.insertAdjacentHTML(
      component.position || "beforeend",
      html
    );

    // Load CSS if it exists
    if (component.cssPath && !loadedCSS.has(component.cssPath)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = component.cssPath;
      document.head.appendChild(link);

      loadedCSS.add(component.cssPath);
    }

  } catch (err) {
    console.error(`Error loading ${component.name}:`, err);
  }
}

// Load all components in order
async function loadComponents() {
  for (const component of components) {
    await loadComponent(component);
  }
}

// Run it
loadComponents();