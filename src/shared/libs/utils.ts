export const peopleFormater = new Intl.NumberFormat('ru', {
  maximumSignificantDigits: 3,
});

export const currencyFormater = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 2,
});

const currencyMillionFormater = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0, // Без копеек
});

/**
 * Форматирует число в строку вида "X млн ₽"
 */
export const formatToMillions = (value: number): string => {
  const formattedValue = currencyMillionFormater.format(value);
  const number = parseInt(formattedValue.replace(/\D/g, ''), 10);

  if (number >= 1_000_000) {
    const millions = (number / 1_000_000).toFixed(0);
    return `${millions} млн ₽`;
  }

  return formattedValue;
};
