var egresos = {
  Renta: 900,
  Ropa: 400
};

var ingresos = {
  Quincena: 9000,
  Venta: 400
};

const totalIngresos = () => {
  let totalIngreso = 0;

  for (let ingreso in ingresos) {
    totalIngreso += ingresos[ingreso];
  }

  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;

  for (let egreso in egresos) {
    totalEgreso += egresos[egreso];
  }

  return totalEgreso;
};

const formatoMoneda = valor => {
  return valor.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  });
};

const formatoPorcentaje = valor => {
  return valor.toLocaleString('es-MX', {
    style: 'percent',
    minimumFractionDigits: 2
  });
};

const cargarCabecero = () => {
  var presupuesto = totalIngresos() - totalEgresos();
  var porcentajeEgreso = totalEgresos() / totalIngresos();

  console.log(formatoMoneda(presupuesto));
  console.log(formatoPorcentaje(porcentajeEgreso));
  console.log(formatoMoneda(totalIngresos()));
  console.log(formatoMoneda(totalEgresos()));
};

cargarCabecero();