export const setActive = () => {
  document.getElementsByTagName('body')[0].setAttribute('ontouchstart', '')
  const touch =
    'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.maxTouchPoints > 0
  if (touch) {
    try {
      for (let si in document.styleSheets) {
        let styleSheet = document.styleSheets[si]
        if (!styleSheet.cssRules) continue

        const cssRules = styleSheet.cssRules
        for (let r = 0; r < cssRules.length; r++) {
          const rule = cssRules[r]
          if (!(rule instanceof CSSStyleRule)) {
            continue
          }
          if (rule.selectorText.match(':hover')) {
            //styleSheet.deleteRule(ri);
            rule.selectorText = rule.selectorText.replace(':hover', ':active')
          }
        }
      }
    } catch (e) {
      if (e.name !== 'SecurityError') {
        throw e // for Firefox
      }
    }
  }
}
