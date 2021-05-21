const { Observable } = require('rxjs');

const obs$ = Observable.create(subscriber => {
  subscriber.next('RxJS')
  subscriber.complete()
})

obs$.subscribe(text => {
  console.log(text)
})