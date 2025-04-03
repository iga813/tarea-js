function resolver() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  const resultado = document.getElementById('resultado');

  if (a === 0) {
    resultado.textContent = 'No es una ecuación cuadrática.';
    return;
  }

  const discriminante = b*b - 4*a*c;
  if (discriminante > 0) {
    const x1 = (-b + Math.sqrt(discriminante)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2*a);
    resultado.textContent = `Raíces reales: x1 = ${x1}, x2 = ${x2}`;
  } else if (discriminante === 0) {
    const x = -b / (2*a);
    resultado.textContent = `Raíz doble: x = ${x}`;
  } else {
    resultado.textContent = 'No tiene raíces reales.';
  }
}
