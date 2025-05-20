/**
 * Converts a HEX color string to an HSL string "H S% L%".
 * @param hex The HEX color string (e.g., "#RRGGBB" or "#RGB").
 * @returns The HSL color string.
 */
export function hexToHslString(hex: string): string {
  let r = 0, g = 0, b = 0;

  if (hex.length === 4) { // #RGB
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) { // #RRGGBB
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  } else {
    // Return a fallback or throw an error for invalid hex
    console.warn(`Invalid HEX color: ${hex}. Using black as fallback.`);
    return "0 0% 0%"; 
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  const H = Math.round(h * 360);
  const S = Math.round(s * 100);
  const L = Math.round(l * 100);

  return `${H} ${S}% ${L}%`;
}

/**
 * Converts a HEX color string to an HSL object {h, s, l}.
 * @param hex The HEX color string.
 * @returns An object with h, s, l properties.
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const hslString = hexToHslString(hex);
  const parts = hslString.split(" ");
  return {
    h: parseInt(parts[0]),
    s: parseInt(parts[1].replace("%", "")),
    l: parseInt(parts[2].replace("%", "")),
  };
}
