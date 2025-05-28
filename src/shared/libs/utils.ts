export const peopleFormater = new Intl.NumberFormat('ru', {
  maximumSignificantDigits: 3,
});

export const currencyFormater = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 2,
});
