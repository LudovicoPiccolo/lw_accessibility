import './style.css';
import { panelTemplate } from './templates/panel';
import { initUI } from './js/ui';
import { applyAccessibility, resetAccessibility } from './js/accessibility';
import { loadSettings } from './js/settings';
import { i18n, userLang } from './js/i18n';

// HTML template injection
document.documentElement.insertAdjacentHTML('beforeend', panelTemplate);

// Initialize elements object
const elements = {
    fontSize: document.getElementById("fontSize"),
    letterSpacing: document.getElementById("letterSpacing"),
    lineHeight: document.getElementById("lineHeight"),
    textAlign: document.getElementById("textAlign"),
    readableFont: document.getElementById("readableFont"),
    contrastHigh: document.getElementById("contrastHigh"),
    contrastLow: document.getElementById("contrastLow"),
    monochrome: document.getElementById("monochrome"),
    sepiaTone: document.getElementById("sepiaTone"),
    nightMode: document.getElementById("nightMode"),
    highlightHover: document.getElementById("highlightHover"),
    hideImages: document.getElementById("hideImages"),
    largeCursor: document.getElementById("largeCursor"),
    readingMask: document.getElementById("readingMask"),
    screenReader: document.getElementById("screenReader"),
    keyboardNav: document.getElementById("keyboardNav"),
    dynamicContentPause: document.getElementById("dynamicContentPause"),
    pageScale: document.getElementById("pageScale"),
};

// Initialize UI components
const panel = document.getElementById("accessibility-panel");
const btn = document.getElementById("accessibility-btn");

// Event listeners
document.getElementById('reset-btn').addEventListener('click', () => resetAccessibility(elements));
document.getElementById('openCompliance').addEventListener('click', () => {
    document.getElementById('complianceModal').style.display = 'flex';
});

btn.addEventListener("click", () => {
    const isVisible = panel.style.display === "block";
    panel.style.display = isVisible ? "none" : "block";
});

Object.values(elements).forEach(el => {
    el.addEventListener("input", () => applyAccessibility(elements));
    el.addEventListener("change", () => applyAccessibility(elements));
});

// Outside click handler
document.addEventListener('click', function(e) {
    const isClickInsidePanel = panel.contains(e.target);
    const isClickOnButton = btn.contains(e.target);

    if (!isClickInsidePanel && !isClickOnButton && panel.style.display === 'block') {
        panel.style.display = 'none';
    }
});

// Escape key handler
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && panel.style.display === 'block') {
        panel.style.display = 'none';
    }
});

// Language change handler
document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLang = this.value;
    localStorage.setItem("accessibilitySettings_lang", selectedLang);
    
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        const langPack = window.i18nAccessibility[selectedLang] || window.i18nAccessibility['it'];
        const value = langPack[key] || window.i18nAccessibility['it'][key];

        if (value) {
            if (key === 'complianceDescription') {
                elem.innerHTML = value;
            } else {
                elem.textContent = value;
            }
            elem.style.display = '';
        } else {
            elem.style.display = 'none';
        }
    });
});

// Initialize the UI
initUI(elements);