function applySmartphoneStyles() {
    const width = window.innerWidth;
    if (width <= 480) {
      addCssRule('@media only screen and (max-width: 480px) { #list-food-form, #food-list { width: 100%; height: auto; } }', 'style');
    } else {
      removeCssRule('#list-food-form, #food-list { width: 100%; height: auto; }', 'style');
    }
  }
  
  function addCssRule(rule, mediaRule) {
    const style = document.createElement('style');
    style.type = 'x.css';
    if (mediaRule) {
      style.media = mediaRule;
    }
    style.innerHTML = rule;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  
  function removeCssRule(selector, mediaRule) {
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const rules = styleSheets[i].cssRules;
      for (let j = 0; j < rules.length; j++) {
        if (rules[j].selectorText === selector && rules[j].media.mediaText === mediaRule) {
          styleSheets[i].deleteRule(j);
          break;
        }
      }
    }
  }
  
  // Call the function once when the page loads to set the initial layout
  applySmartphoneStyles();
  
  // Add the event listener for the window resize event
  window.addEventListener('resize', applySmartphoneStyles);
    
  async function createImageBlob(file) {
    const response = await fetch(URL.createObjectURL(file));
    const blob = await response.blob();
    return new Blob([new Uint8Array(await blob.arrayBuffer())], {type: file.type});
  }