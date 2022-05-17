import { Observable } from 'rxjs';


const obs = new Observable(message => {
  message.next('teste')
})


obs.subscribe(console.log)

