function verificar() {
  const anio = parseInt(document.getElementById('anio').value);
  const respuesta = document.getElementById('respuesta');
  const esBisiesto = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0));
  respuesta.textContent = esBisiesto ? `${anio} es bisiesto.` : `${anio} no es bisiesto.`;
}
