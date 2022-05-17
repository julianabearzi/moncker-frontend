const calTransaction = (arr) => {
  const sum = arr
    ?.map((inc) => inc?.amount)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return {
    sumTotal: sum,
  };
};

export default calTransaction;
