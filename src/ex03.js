const { from } = require('rxjs');
const { map } = require('rxjs/operators')

const notas = [7.5, 6.8, 7.1, 1.8, 2.7, 8]

from(notas)
.pipe(
  map(nota => nota >= 6 ? 'Aprovado' : 'Reprovado'),
  map(status => status === "Aprovado" ? 'Boa' : null)
).subscribe(status => console.log(status));