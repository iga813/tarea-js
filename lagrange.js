const puntos = [
  {x: 1.0, y: 2.0},
  {x: 4.0, y: 3.0},
  {x: 5.0, y: 6.0},
  {x: 8.0, y: 7.0},
  {x: 9.0, y: 11.0}
];

const valoresX = [15, 2, 5, 7, 8.5];

function lagrange(x) {
  let resultado = 0;
  for (let i = 0; i < puntos.length; i++) {
    let termino = puntos[i].y;
    for (let j = 0; j < puntos.length; j++) {
      if (j !== i) {
        termino *= (x - puntos[j].x) / (puntos[i].x - puntos[j].x);
      }
    }
    resultado += termino;
  }
  return resultado;
}

const outputDiv = document.getElementById('output');
valoresX.forEach(x => {
  const y = lagrange(x);
  const p = document.createElement('p');
  p.textContent = `p(${x}) = ${y.toFixed(4)}`;
  outputDiv.appendChild(p);
});
