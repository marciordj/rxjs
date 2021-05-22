const {Observable} = require('rxjs');
const axios = require('axios');

function httpGet(url) {
  return Observable.create(subscriber => {
    axios.get(url).then(response => subscriber.next(response.data)).then(() => subscriber.complete())
  })
}

httpGet('http://localhost:3001/films').subscribe(data => console.log(data));