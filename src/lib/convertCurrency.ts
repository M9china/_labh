export function convertToSubcurency(price: number, factor = 100) {
  
  return Math.round(price * factor);
}
