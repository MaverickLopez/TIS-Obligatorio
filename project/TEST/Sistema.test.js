const Sistema = require("../JS/Sistema");
const Barbero = require("../JS/Barbero");
const Servicio = require("../JS/Sevicio");
const Reserva = require("../JS/Reserva");
let sist = new Sistema();

// VALIDACIONES DEL CLIENTE //

// Validacion OK
test("Validar cliente OK", () => {
  const resultado = sist.validarCliente("Lucas", "Morales", "098765432", "lucas@gmail.com");
  expect(resultado).toBeTruthy();
});

// Validacion nombre vacio
test("Validar cliente ERROR NOMBRE VACIO", () => {
  const resultado = sist.validarCliente("", "Morales", "098765432", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion apellido vacio
test("Validar cliente ERROR APELLIDO VACIO", () => {
  const resultado = sist.validarCliente("Lucas", "", "098765432", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion celular vacio
test("Validar cliente ERROR CELULAR VACIO", () => {
  const resultado = sist.validarCliente("Lucas", "Morales", "", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion correo vacio
test("Validar cliente ERROR CORREO VACIO", () => {
  const resultado = sist.validarCliente("Lucas", "Morales", "098765432", "");
  expect(resultado).toBeFalsy();
});

// Validacion nombre corto
test("Validar cliente ERROR NOMBRE CORTO", () => {
  const resultado = sist.validarCliente("Lu", "Morales", "098765432", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion apellido corto
test("Validar cliente ERROR APELLIDO CORTO", () => {
  const resultado = sist.validarCliente("Lucas", "Mo", "098765432", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion celular con formato invalido
test("Validar cliente ERROR CELULAR FORMATO INVALIDO", () => {
  const resultado = sist.validarCliente("Lucas", "Morales", "098765", "lucas@gmail.com");
  expect(resultado).toBeFalsy();
});

// Validacion correo corto
test("Validar cliente ERROR NOMBRE CORTO", () => {
  const resultado = sist.validarCliente("Lucas", "Morales", "098765432", "l@g.c");
  expect(resultado).toBeFalsy();
});

// VALIDACIONES DEL BARBERO //

// Validacion barbero libre
test("Validar barbero libre", () => {
  let fecha = new Date("2025-08-07T11:00:00");
  const resultado = sist.validarBarbero(3, fecha);
  expect(resultado).toBeTruthy();
});

// Validacion barbero ocupado
test("Validar barbero ocupado", () => {
  let fecha = new Date("2025-08-01T11:00:00");
  const resultado = sist.validarBarbero(1, fecha);
  expect(resultado).toBeFalsy();
});

// VALIDACIONES DEL REGISTRAR RESERVA //

// Validacion registrar reserva ok
test("Validar reserva ok", () => {
  sist.registrarReserva("Lucas", "Morales", "098765432", "lucas@gmail.com,", 2, 0, new Date());
  // Si es mayor a 19 significa que pusheo la reserva nueva
  expect(sist.reservas.length).toBeGreaterThan(19);
});

// VALIDACIONES DEL GET BARBERO POR ID //

// Validacion de get barbero por id ok
test("Validar get barbero por id ok", () => {
  const resultado = sist.getBarberoPorId(2);
  expect(resultado).toEqual(sist.barberos[2]);
});

// Validacion de get barbero por id, barbero id no existe
test("Validar get barbero por id, no existe el id", () => {
  const resultado = sist.getBarberoPorId(99);
  expect(resultado).toEqual(null);
});

// VALIDACIONES DEL GET SERVICIO POR ID //

// Validacion de get servicio por id ok
test("Validar get servicio por id ok", () => {
  const resultado = sist.getServicioPorId(2);
  expect(resultado).toEqual(sist.servicios[2]);
});

// Validacion de get servicio por id, servicio id no existe
test("Validar get servicio por id, no existe el id", () => {
  const resultado = sist.getServicioPorId(99);
  expect(resultado).toEqual(null);
});

// VALIDACIONES DEL GET RESERVAS HOY //

// Validacion de get reservas hoy
test("Validar get reservas de hoy", () => {
  const resultado = sist.getReservasHoy();
  expect(resultado.length).toBeTruthy();
});
