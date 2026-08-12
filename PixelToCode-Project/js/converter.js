/* ==========================================================================
   PixelToCode - CSS Unit Converter Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const inputVal = document.getElementById('inputValue');
  const sourceUnit = document.getElementById('sourceUnit');
  const destUnit = document.getElementById('destUnit');
  const basePxInput = document.getElementById('basePxInput');
  const convertBtn = document.getElementById('convertBtn');
  const resultCard = document.getElementById('resultCard');
  const resultValue = document.getElementById('resultValue');
  const calculationHint = document.getElementById('calculationHint');
  const presetsGrid = document.getElementById('presetsGrid');

  if (!inputVal || !resultValue) return;

  function performConversion() {
    let val = parseFloat(inputVal.value);
    if (isNaN(val)) val = 0;

    let from = sourceUnit.value;
    let to = destUnit.value;
    let basePx = parseFloat(basePxInput.value) || 16;
    let viewportWidth = window.innerWidth || 1280;
    let viewportHeight = window.innerHeight || 800;

    // First convert source value to absolute pixels (px)
    let pxValue = val;

    if (from === 'rem' || from === 'em') {
      pxValue = val * basePx;
    } else if (from === '%') {
      pxValue = (val / 100) * basePx;
    } else if (from === 'vw') {
      pxValue = (val / 100) * viewportWidth;
    } else if (from === 'vh') {
      pxValue = (val / 100) * viewportHeight;
    }

    // Now convert absolute pxValue to target unit
    let result = pxValue;

    if (to === 'rem' || to === 'em') {
      result = pxValue / basePx;
    } else if (to === '%') {
      result = (pxValue / basePx) * 100;
    } else if (to === 'vw') {
      result = (pxValue / viewportWidth) * 100;
    } else if (to === 'vh') {
      result = (pxValue / viewportHeight) * 100;
    }

    // Format output string cleanly
    let formattedResult = Number(result.toFixed(3)).toString();
    resultValue.innerHTML = `${formattedResult}<span class="unit">${to}</span>`;

    // Trigger pop scale animation
    resultValue.style.transform = 'scale(1.12)';
    setTimeout(() => {
      resultValue.style.transform = 'scale(1)';
    }, 150);

    // Update calculation details hint
    calculationHint.textContent = `Conversión de ${val}${from} a ${to} (Base Root: ${basePx}px)`;

    // Update quick presets relative text if basePx changes
    updatePresetSubtext(basePx);
  }

  function updatePresetSubtext(basePx) {
    if (!presetsGrid) return;
    const cards = presetsGrid.querySelectorAll('.snippet-card');
    cards.forEach(card => {
      const px = parseFloat(card.getAttribute('data-px'));
      const remVal = Number((px / basePx).toFixed(3));
      const sub = card.querySelector('.snippet-val-secondary');
      if (sub) {
        sub.textContent = `${remVal}rem`;
      }
    });
  }

  // Event Listeners
  if (convertBtn) {
    convertBtn.addEventListener('click', performConversion);
  }

  [inputVal, basePxInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          performConversion();
        }
      });
      elem.addEventListener('input', performConversion);
    }
  });

  [sourceUnit, destUnit].forEach(elem => {
    if (elem) {
      elem.addEventListener('change', performConversion);
    }
  });

  // Preset Card click handlers
  if (presetsGrid) {
    presetsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.snippet-card');
      if (card) {
        const px = card.getAttribute('data-px');
        inputVal.value = px;
        sourceUnit.value = 'px';
        destUnit.value = 'rem';
        performConversion();
      }
    });
  }

  // Copy result to clipboard on card click
  if (resultCard) {
    resultCard.addEventListener('click', () => {
      const textToCopy = resultValue.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (typeof showToast === 'function') {
          showToast(`Copiado: ${textToCopy}`);
        }
      }).catch(() => {
        if (typeof showToast === 'function') {
          showToast(`Resultado: ${textToCopy}`);
        }
      });
    });
  }

  // Initial calculation run
  performConversion();
});
