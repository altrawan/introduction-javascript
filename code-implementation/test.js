const test = (num) => {
  if (num % 1 === 0) {
    console.log("Integer");
  } else {
    console.log("Decimal");
  }

  if (Number.isInteger(num)) {
    console.log("Integer");
  } else {
    console.log("Decimal");
  }

  if (num === Math.floor(num)) {
    console.log("Integer");
  } else {
    console.log("Decimal");
  }
};
test(12.2746732648375);
test(12);
