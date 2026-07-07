export function formatPrice(price) {
  if (price === null || price === undefined || isNaN(price)) return "—";

  const value = Number(price);

  if (value >= 1_000_000_000) {
    const v = value / 1_000_000_000;
    return `${Number.isInteger(v) ? v : v.toFixed(1)} میلیارد تومان`;
  }

  if (value >= 1_000_000) {
    const v = value / 1_000_000;
    return `${Number.isInteger(v) ? v : v.toFixed(1)} میلیون تومان`;
  }

  return value.toLocaleString("fa-IR") + " تومان";
}
