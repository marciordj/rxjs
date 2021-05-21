const { interval } = require("rxjs");

const obs$ = interval(1000); //vai pegar um dado de acordo com o tempo que foi passado, no caso 2 segundos
// let timer = 0

const test = obs$.subscribe(num => {
  return console.log(`${num} segundo`)
})

setTimeout(() => test.unsubscribe(), 12000)