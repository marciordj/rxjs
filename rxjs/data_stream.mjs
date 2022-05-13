function generateNumber() {
  let number = 0;

  setInterval(() => {
    console.log(number++)
  }, 1000)
}


generateNumber()