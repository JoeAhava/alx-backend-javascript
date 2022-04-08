function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incY = `income-${getCurrentYear()}`;
  const gdpY = `gdp-${getCurrentYear()}`;
  const capitaY = `capita-${getCurrentYear()}`;
  const budget = {
    [incY]: income,
    [gdpY]: gdp,
    [capitaY]: capita,
  };

  return budget;
}
