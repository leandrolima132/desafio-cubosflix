export const formatCurrency = (
  value: number,
  options?: {
    currencySymbol?: string; // Ex: "$", "US$", "R$", "€"
    locale?: string; // Ex: "pt-BR", "en-US"
    compact?: boolean; // Exibe como 1.2M, 3.5K, etc.
  }
): string => {
  const {
    currencySymbol = "US$",
    locale = "pt-BR",
    compact = true,
  } = options || {};

  if (value === 0) return `${currencySymbol} 0,00`;
  if (!Number.isFinite(value)) return `${currencySymbol} -`;

  const absValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (compact) {
    if (absValue >= 1_000_000_000) {
      const billions = absValue / 1_000_000_000;
      const formatted =
        billions % 1 === 0 ? billions.toFixed(0) : billions.toFixed(2);
      return `${sign}${currencySymbol} ${formatted}B`;
    }

    if (absValue >= 1_000_000) {
      const millions = absValue / 1_000_000;
      const formatted =
        millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(2);
      return `${sign}${currencySymbol} ${formatted}M`;
    }

    if (absValue >= 1_000) {
      const thousands = absValue / 1_000;
      const formatted =
        thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1);
      return `${sign}${currencySymbol} ${formatted}K`;
    }
  }

  return `${sign}${currencySymbol} ${absValue.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
