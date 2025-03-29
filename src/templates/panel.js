/**
 * Accessibility Ludosweb Project
 * Author: Piccolo Ludovico
 * Organization: Ludosweb
 * Description: Template for the accessibility panel and related UI components.
 */

export const panelTemplate = `<div id="accessibility-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
      </svg>
  </div>

<div id="accessibility-panel">
<button id="reset-btn" onclick="resetAccessibility()">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
  </svg>
  <span data-i18n="resetBtn"></span>
</button>

<!-- Select per cambio lingua -->
<select id="languageSelect" style="margin-top: 0.5rem; width: 100%;">
    <option value="it">Italiano</option>
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="de">Deutsch</option>
    <option value="es">Español</option>
</select>


<h4 data-i18n="mod_contenuti_title"></h4>

<label class="label-tooltip">
<span data-i18n="scaleContents"></span>
  <input type="range" id="pageScale" min="90" max="110" step="5" value="100">
  <span class="tooltip-content" data-i18n="scaleContents_tooltip"></span>
</label>

<label class="label-tooltip">
  <span data-i18n="fontSize"></span>
  <input type="range" id="fontSize" min="90" max="300" step="10" value="100">
  <span class="tooltip-content" data-i18n="fontSize_tooltip"></span>
</label>

<label class="label-tooltip">
  <span data-i18n="letterSpacing"></span>
  <input type="range" id="letterSpacing" min="0" max="10" step="0.5" value="0">
  <span class="tooltip-content" data-i18n="letterSpacing_tooltip"></span>
</label>

<label class="label-tooltip">
  
  <span data-i18n="lineHeight"></span>
  <input type="range" id="lineHeight" min="1" max="3" step="0.1" value="1.5">
  <span class="tooltip-content" data-i18n="lineHeight_tooltip"></span>
</label>

<label class="label-tooltip">
  
  <span data-i18n="textAlign"></span>
  <select id="textAlign">
    <option value="" data-i18n="textAlignA"></option>
    <option value="left" data-i18n="textAlignleft"></option>
    <option value="center" data-i18n="textAligncenter"></option>
    <option value="right" data-i18n="textAlignright"></option>
  </select>
  <span class="tooltip-content" data-i18n="textAlign_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="readableFont"> <span data-i18n="readableFont"></span>
  <span class="tooltip-content" data-i18n="readableFont_tooltip"></span>
</label>

<h4 data-i18n="mod_col_title"></h4>

<label class="label-tooltip">
  <input type="checkbox" id="contrastHigh"> <span data-i18n="contrastHigh"></span>
  <span class="tooltip-content" data-i18n="contrastHighe_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="contrastLow"> <span data-i18n="contrastLow"></span>
  <span class="tooltip-content" data-i18n="contrastLow_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="monochrome"> <span data-i18n="monochrome"></span>
  <span class="tooltip-content" data-i18n="monochrome_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="sepiaTone"> <span data-i18n="sepiaTone"></span>
  <span class="tooltip-content" data-i18n="sepiaTone_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="nightMode"> <span data-i18n="nightMode"></span>
  <span class="tooltip-content" data-i18n="nightMode_tooltip"></span>
</label>

<h4 data-i18n="supp_title"></h4>

<label class="label-tooltip">
  <input type="checkbox" id="screenReader"> <span data-i18n="screenReader"></span>
  <span class="tooltip-content" data-i18n="screenReader_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="keyboardNav"> <span data-i18n="keyboardNav"></span>
  <span class="tooltip-content" data-i18n="keyboardNav_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="dynamicContentPause"> <span data-i18n="dynamicContentPause"></span>
  <span class="tooltip-content" data-i18n="dynamicContentPause_tooltip"></span>
</label>

<h4 data-i18n="orient_title"></h4>

<label class="label-tooltip">
  <input type="checkbox" id="highlightHover"> <span data-i18n="highlightHover"></span>
  <span class="tooltip-content" data-i18n="highlightHover_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="hideImages"> <span data-i18n="hideImages"></span>
  <span class="tooltip-content" data-i18n="hideImages_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="largeCursor"> <span data-i18n="largeCursor"></span>
  <span class="tooltip-content" data-i18n="largeCursor_tooltip"></span>
</label>

<label class="label-tooltip">
  <input type="checkbox" id="readingMask"> <span data-i18n="readingMask"></span>
  <span class="tooltip-content" data-i18n="readingMask_tooltip"></span>
</label>

<div id="accessibility-footer" style="margin-top: 2rem; text-align: center; font-size: 0.8rem;">
<p>Powered by <strong>Ludosweb</strong></p>
<button id="openCompliance" data-i18n="complianceBtn" style="margin-top: 0.5rem; padding: 6px 12px; font-size: 0.85rem; background: var(--primary-color); color: white; border: none; border-radius: 6px; cursor: pointer;">
</button>
</div>

</div>

<div id="complianceModal" style="
display: none;
position: fixed;
top: 0; left: 0;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.6);
z-index: 10000;
justify-content: center;
align-items: center;
">
<div style="
  background: white;
  width: 70%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
">
  <button onclick="document.getElementById('complianceModal').style.display='none'" style="
    position: absolute;
    top: 10px; right: 15px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  ">✕</button>

  <h1 data-i18n="complianceTitle" style="color: var(--primary-color); font-size: 1.4rem;"></h1>

  <p data-i18n="complianceStatus"></p>

  <div data-i18n="complianceDescription"></div>

 
</div>
</div>`;