const subtraction = (n1, n2) => {
  const sub = Number(n1) - Number(n2);
  const rounded = Math.round((sub + Number.EPSILON) * 100) / 100;
  return {
    subTotal: rounded,
  };
};

export default subtraction;
