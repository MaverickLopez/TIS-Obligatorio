let sist = new Sistema();

limpiarStorage();
mostrarHeaderHome();
//ocultarTodo();

function ocultarTodo() {
  document.querySelector("#pResultado").innerHTML="";
  ocultar("home");
  ocultar("banner");
  ocultar("trabajos");
  ocultar("barberos");
  ocultar("servicios");
  ocultar("reservas");
  ocultar("mapacontacto");
  ocultar("login");
  ocultar("gestion");
  limpiar("txtNombreUsuarioIngresoSistema");
  limpiar("pswContraseniaIngresoSistema");
  limpiar("txtNombreReserva");
  limpiar("txtApellidoReserva");
  limpiar("txtCelularReserva");
  limpiar("txtCorreoReserva");
}

// EVENTOS CLICK HEADER
document.querySelector("#headerMostrarBarberos").addEventListener("click", mostrarHeaderBarberos);
document.querySelector("#headerMostrarServicios").addEventListener("click", mostrarHeaderServicios);
document.querySelector("#headerMostrarHome").addEventListener("click", mostrarHeaderHome);
document.querySelector("#headerCrearReserva").addEventListener("click", mostrarFormularioReserva);
document.querySelector("#headerMostrarContacto").addEventListener("click", mostrarHeaderContacto);

// Botones Banner 
document.querySelector("#btnMostrarSobreNosotros").addEventListener("click", mostrarSobreNosotros);
document.querySelector("#btnMostrarTrabajos").addEventListener("click", mostrarTrabajos);

// BTN CERRAR SESIÓN
document.querySelector("#btnCerrarSesion").addEventListener("click" , cerrarSesion)

// EVENTO CLICK FOOTER || LOGIN
document.querySelector("#footerMostrarLogin").addEventListener("click", mostrarFooterLogin);

// HEADER
function mostrarHeaderHome() {
  ocultarTodo();
  mostrar("banner");
  mostrar("home");
}
function mostrarHeaderBarberos() {
  ocultarTodo();
  mostrar("barberos");
  mostrarBarberos();
}
function mostrarHeaderServicios() {
  ocultarTodo();
  mostrar("servicios");
  mostrarServicios();
}
function mostrarFormularioReserva() {
  ocultarTodo();
  mostrar("reservas");
  cargarSelectServicios();
  cargarSelectBarberos();
  limitarDate();
}
function mostrarTrabajos() {
  ocultarTodo();
  mostrar("trabajos");
  setTimeout(() => {
    document.querySelector("#trabajos").scrollIntoView({ behavior: "smooth" });
  }, 100);
}
function mostrarSobreNosotros() {
  ocultarTodo();
  mostrar("home");
  setTimeout(() => {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }, 100);
}
function mostrarHeaderContacto() {
  ocultarTodo();
  mostrar("mapacontacto");
}
// FOOTER || LOGIN
function mostrarFooterLogin() {
  ocultarTodo();
  mostrar("login");
}
//FUNCION CERRAR SESIÓN
function cerrarSesion(){
  ocultarTodo();
  mostrar("banner");
  mostrar("home");
}

// FUNCIONES AUXILIARES
// Mostrar elemento (quita la clase d-none)
function mostrar(pId) {
  const elemento = document.querySelector("#" + pId);
  if (elemento) {
    elemento.classList.remove("d-none");
  }
}

// Ocultar elemento (agrega la clase d-none)
function ocultar(pId) {
  const elemento = document.querySelector("#" + pId);
  if (elemento) {
    elemento.classList.add("d-none");
  } else {
    console.log("Elemento no encontrado:", pId);
  }
}

function limpiar(pId) {
  document.querySelector("#" + pId).value = "";
}

function limpiarStorage() {
  localStorage.clear();
}

// CODIGO
function mostrarServicios() {
  document.querySelector("#SeccionServicios").innerHTML = "";
  let cuerpoTabla = "";
  for (let i = 0; i < sist.servicios.length; i++) {
    let servicioActual = sist.servicios[i];
    cuerpoTabla += `
      <article class="col  card-servicio">
        <div class="servicio-box p-4 text-center">
          <img src="${servicioActual.foto}" alt="Foto de ${servicioActual.nombre}" class="img-fluid mb-3 servicio-img" />
          <h3>${servicioActual.nombre}</h3>
          <p class="fw-bold">$${servicioActual.precio}</p>
          <p>${servicioActual.descripcion}</p>
        </div>
        </article>
      `;
  }
  document.querySelector("#SeccionServicios").innerHTML = cuerpoTabla;
}

function mostrarBarberos() {
  let cuerpoTabla = "";
  for (let i = 0; i < sist.barberos.length; i++) {
    let barberoActual = sist.barberos[i];
    cuerpoTabla += `
      <article class="col-md-6 col-lg-4 mb-4 card-barbero">
        <div class="barbero-box p-4 text-center">
          <img src="${barberoActual.foto}" alt="Foto de ${barberoActual.nombre}" class="img-fluid mb-3 rounded-circle" />
          <h3>${barberoActual.nombre} ${barberoActual.apellido}</h3>
          <p class="fw-bold text-muted">${barberoActual.lema}</p>
          <p>${barberoActual.descripcion}</p>
        </div>
      </article>`;
  }

  document.querySelector("#SeccionBarberos").innerHTML = cuerpoTabla;
}

// Formulario Reserva fch adimte de mañana en adelante
function limitarDate() {
  let hoy = new Date();
  hoy.setDate(hoy.getDate() + 1); // Establecer mínimo a "mañana"

  // Opcional: definir una hora mínima (por ejemplo, 08:00)
  hoy.setHours(8, 0, 0, 0); // 08:00:00.000

  // Obtener string en formato compatible con datetime-local (sin zona horaria)
  let isoString = hoy.toISOString();
  let minDateTime = isoString.substring(0, 16); // "YYYY-MM-DDTHH:MM"

  document.querySelector("#dteFecha").setAttribute("min", minDateTime);
}

function cargarSelectServicios() {
  let combo = "<option value=-1>Seleccione...</option>";
  for (let i = 0; i < sist.servicios.length; i++) {
    let servicioActual = sist.servicios[i];

    combo += `<option value=${servicioActual.id}>${servicioActual.nombre}</option>`;
  }

  document.querySelector("#slcServicio").innerHTML = combo;
}

function cargarSelectBarberos() {
  let combo = "<option value=-1>Seleccione...</option>";
  for (let i = 0; i < sist.barberos.length; i++) {
    let barberoActual = sist.barberos[i];

    combo += `<option value=${barberoActual.id}>${barberoActual.nombre + " " + barberoActual.apellido}</option>`;
  }

  document.querySelector("#slcBarbero").innerHTML = combo;
}

document.querySelector("#btnIngresoSistema").addEventListener("click", login);
function login() {
  let usuario = document.querySelector("#txtNombreUsuarioIngresoSistema").value;
  let contrasenia = document.querySelector("#pswContraseniaIngresoSistema").value;

  if (usuario === "" || contrasenia === "") {
    document.querySelector("#pResultado").innerHTML = "No puede haber campos vacios";
  } else {
    if (usuario == "administrador" && contrasenia == "administrador") {
      ocultarTodo();
      mostrarGestion();
    } else {
      document.querySelector("#pResultado").innerHTML = "Datos invalidos";
    }
  }
}

document.querySelector("#btnRegistrarReserva").addEventListener("click", registrarReserva);
function registrarReserva() {
  let nombre = document.querySelector("#txtNombreReserva").value;
  let apellido = document.querySelector("#txtApellidoReserva").value;
  let celular = document.querySelector("#txtCelularReserva").value;
  let correo = document.querySelector("#txtCorreoReserva").value;
  let barberoId = document.querySelector("#slcBarbero").value;
  let servicioId = document.querySelector("#slcServicio").value;
  let fecha = document.querySelector("#dteFecha").value;

  let vCliente = sist.validarCliente(nombre, apellido, celular, correo);
  let vBarbero = sist.validarBarbero(barberoId, fecha);

  if (vCliente == true && vBarbero == true) {
    sist.registrarReserva(nombre, apellido, celular, correo, barberoId, servicioId, fecha);

    document.querySelector("#pResultado").innerHTML = "Reserva realiada con exito";

    // sistema.servicios.push(s1, s2, s3, s4, s5, s6);
    // Convertir obj JSON
    let reservasJSON = JSON.stringify(sist.reservas);
    localStorage.setItem("reservas", reservasJSON);
    //localStorage.setItem("sistema", JSON.stringify(sist));
  } else {
    document.querySelector("#pResultado").innerHTML = "Datos invalidos";
  }
}

document.querySelector("#btnReservas").addEventListener("click", mostrarGestionTodas);
document.querySelector("#btnReservasHoy").addEventListener("click", mostrarGestion);

function mostrarGestion() {
  mostrar("gestion");
  let cuerpoTabla = "";
  let reservas = sist.getReservasHoy();
  for (let i = 0; i < reservas.length; i++) {
    let reservaActual = reservas[i];
    let barbero = sist.getBarberoPorId(reservaActual.barberoId);
    let servicio = sist.getServicioPorId(reservaActual.servicioId);
    cuerpoTabla += `
      <tr>
        <td>
          <p>${reservaActual.nombre + " " + reservaActual.apellido}</p>
        </td>
        <td>
          <p>${barbero.nombre + " " + barbero.apellido}</p>
        </td>
        <td>
          <p>${servicio.nombre}</p>
        </td>
        <td>
          <p>${reservaActual.fecha}</p>
        </td>
      </tr>`;
  }
  document.querySelector("#cuerpoReservas").innerHTML = cuerpoTabla;
}

function mostrarGestionTodas() {
  let cuerpoTabla = "";
  for (let i = 0; i < sist.reservas.length; i++) {
    let reservaActual = sist.reservas[i];
    let barbero = sist.getBarberoPorId(reservaActual.barberoId);
    let servicio = sist.getServicioPorId(reservaActual.servicioId);
    cuerpoTabla += `
      <tr>
        <td>
          <p>${reservaActual.nombre + " " + reservaActual.apellido}</p>
        </td>
        <td>
          <p>${barbero.nombre + " " + barbero.apellido}</p>
        </td>
        <td>
          <p>${servicio.nombre}</p>
        </td>
        <td>
          <p>${reservaActual.fecha}</p>
        </td>
      </tr>`;
  }
  document.querySelector("#cuerpoReservas").innerHTML = cuerpoTabla;
}