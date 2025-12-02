// Scroll to element function
function scrollToElement(selector) {
    const el = document.querySelector(selector);
    const top = el.getBoundingClientRect().top + window.scrollY - 120; // offset for header 
    window.scrollTo({ top, behavior: "smooth" });
}