// COMENTAR ESTO SI QUERES QUE LA PAGINA ANDE
/*
const Barbero = require("../JS/Barbero");
const Servicio = require("../JS/Sevicio");
const Reserva = require("../JS/Reserva");
*/

class Sistema {
  constructor() {
    // PRECARGA BARBEROS
    this.barberos = [
      new Barbero(
        0,
        "Lucas",
        "Pereira",
        "Especialista en cortes clásicos y fades",
        "Con más de 10 años de experiencia, Lucas domina los cortes tradicionales y los estilos modernos con una precisión impecable. Su lema: “Un buen corte comienza con una buena conversación",
        "IMG/Barberos/barbero0.png"
      ),
      new Barbero(
        1,
        "Mateo",
        "Silva",
        "Barbero urbano y estilista de barbas",
        "Apasionado por los detalles y las tendencias urbanas, Mateo es el indicado si buscás un look actual y bien definido. También es experto en perfilado de barbas y cuidados masculinos.",
        "IMG/Barberos/barbero1.png"
      ),
      new Barbero(
        2,
        "Franco",
        "Cabrera",
        "Técnico en grooming masculino",
        "Franco combina técnicas de barbería con asesoramiento en imagen. Siempre atento a la estética del cliente, ofrece una experiencia completa: corte, barba y estilo.",
        "IMG/Barberos/barbero2.png"
      ),
      new Barbero(
        3,
        "Joaquín",
        "Torres",
        "Maestro en cortes modernos y freestyle",
        "Creativo y detallista, Joaquín destaca por sus diseños personalizados y cortes con estilo. Si buscás algo único, él es tu barbero.",
        "IMG/Barberos/barbero3.png"
      ),
      new Barbero(
        4,
        "Diego",
        "Ramírez",
        "Clásico con un toque moderno",
        "Diego respeta las raíces de la barbería tradicional, pero con una mirada fresca. Su especialidad son los cortes ejecutivos y los afeitados al ras.",
        "IMG/Barberos/barbero4.png"
      ),
      new Barbero(
        5,
        "Bruno",
        "Álvarez",
        "Barbero joven con talento y actitud",
        "Aunque joven, Bruno ya se ha ganado la confianza de muchos clientes por su precisión, estilo y trato cercano. Siempre listo para renovar tu imagen.",
        "IMG/Barberos/barbero5.png"
      ),
    ];

    // PRECARGA SERVICIOS
    this.servicios = [
      new Servicio(
        0,
        "Corte de pelo",
        "600",
        "Servicio enfocado en estilizar y dar forma al cabello de hombres según sus preferencias y estilo. Puede incluir cortes clásicos, modernos o personalizados, adaptados al tipo de rostro, cabello y tendencias actuales. Ideal para mantener una imagen prolija y cuidada",
        "IMG/Servicios/servicio0.png"
      ),
      new Servicio(
        1,
        "Rasurado Barba",
        "350",
        "Servicio que consiste en afeitar completamente la barba utilizando técnicas tradicionales o modernas, con navaja o máquina, para lograr un acabado suave y limpio. Suele incluir preparación de la piel con toalla caliente y productos para evitar irritaciones, brindando una experiencia relajante y profesional",
        "IMG/Servicios/servicio1.png"
      ),
      new Servicio(
        2,
        "Colorimetría",
        "1200",
        "Técnica profesional que estudia y aplica la teoría del color para cambiar, corregir o realzar el tono del cabello. Incluye la selección de colores adecuados según el tipo de piel, el color natural del cabello y el resultado deseado. Es fundamental para lograr teñidos, mechas o reflejos armoniosos y personalizados",
        "IMG/Servicios/servicio2.png"
      ),
      new Servicio(
        3,
        "Servicio de lavado y acondicionamiento del cabello",
        "300",
        "Proceso de limpieza capilar que incluye el uso de shampoo y acondicionador adecuados al tipo de cabello del cliente. Suele ir acompañado de un masaje en el cuero cabelludo que estimula la circulación y brinda una sensación relajante. Es el paso inicial ideal antes de un corte, peinado o tratamiento",
        "IMG/Servicios/servicio3.png"
      ),
      new Servicio(
        4,
        "Servicio premium para fortalecer el cabello",
        "950",
        "Tratamiento capilar intensivo que nutre y repara la fibra capilar desde la raíz hasta las puntas. Utiliza productos de alta gama con ingredientes activos como queratina, colágeno o aceites naturales, que restauran la salud del cabello debilitado, previenen la caída y le devuelven fuerza, brillo y vitalidad",
        "IMG/Servicios/servicio4.png"
      ),
    ];
    this.idReserva = 20;
    this.reservas = [
      new Reserva(0, "Juan", "Pérez", "091234567", "juan.perez@gmail.com", 0, 4, "2025-08-07T10:00:00"),
      new Reserva(1, "Lucía", "Gómez", "092345678", "lucia.gomez@hotmail.com", 1, 2, "2025-08-04T11:00:00"),
      new Reserva(2, "Carlos", "Rodríguez", "093456789", "carlosr@gmail.com", 2, 0, "2025-08-06T12:00:00"),
      new Reserva(3, "María", "Fernández", "094567890", "maria.f@hotmail.com", 3, 3, "2025-08-07T13:00:00"),
      new Reserva(4, "Pedro", "López", "095678901", "pedro.lopez@gmail.com", 4, 4, "2025-08-09T14:00:00"),
      new Reserva(5, "Sofía", "Martínez", "096789012", "sofia.martinez@gmail.com", 5, 1, "2025-08-09T10:00:00"),
      new Reserva(6, "Diego", "Suárez", "097890123", "diego.suarez@hotmail.com", 0, 0, "2025-08-10T11:00:00"),
      new Reserva(7, "Valentina", "Ruiz", "098901234", "valen.ruiz@gmail.com", 1, 4, "2025-08-09T12:00:00"),
      new Reserva(8, "Andrés", "Torres", "099012345", "andres.torres@gmail.com", 2, 2, "2025-08-8T13:00:00"),
      new Reserva(9, "Camila", "Silva", "091122334", "camila.silva@gmail.com", 3, 1, "2025-08-07T14:00:00"),
      new Reserva(10, "Lucas", "Alonso", "092233445", "lucas.alonso@gmail.com", 4, 3, "2025-08-12T10:00:00"),
      new Reserva(11, "Julieta", "Castro", "093344556", "julieta.castro@gmail.com", 5, 0, "2025-08-11T11:00:00"),
      new Reserva(12, "Matías", "Domínguez", "094455667", "matias.d@gmail.com", 0, 3, "2025-08-07T12:00:00"),
      new Reserva(13, "Florencia", "Vega", "095566778", "flor.vega@gmail.com", 1, 1, "2025-08-06T13:00:00"),
      new Reserva(14, "Tomás", "Sosa", "096677889", "tomas.sosa@gmail.com", 2, 2, "2025-08-09T14:00:00"),
      new Reserva(15, "Agustina", "Ramos", "097788990", "agus.ramos@gmail.com", 3, 3, "2025-08-09T10:00:00"),
      new Reserva(16, "Franco", "Morales", "098899001", "franco.morales@gmail.com", 4, 3, "2025-08-11T11:00:00"),
      new Reserva(17, "Martina", "Acosta", "099900112", "martina.acosta@gmail.com", 5, 4, "2025-08-08T12:00:00"),
      new Reserva(18, "Gonzalo", "Méndez", "091011223", "gonza.mendez@gmail.com", 0, 0, "2025-08-10T13:00:00"),
      new Reserva(19, "Emma", "Navarro", "092122334", "emma.navarro@gmail.com", 1, 2, "2025-08-13T14:00:00"),
    ];
  }

  // VALIDAR RESERVA
  validarCliente(pNombre, pApellido, pCelular, pCorreo) {
    let ret = true;
    if (
      pNombre == "" ||
      pApellido == "" ||
      pCelular == "" ||
      pCorreo == "" ||
      pNombre.length < 3 ||
      pApellido.length < 3 ||
      pCelular.length != 9 ||
      pCorreo.length < 6
    ) {
      ret = false;
    }

    return ret;
  }

  validarBarbero(pBarberoId, pFecha) {
    let ret = true;

    // Duración de la reserva en minutos
    const duracion = 30;

    // Crear copia del rango nuevo
    const nuevaInicio = new Date(pFecha);
    const nuevaFin = new Date(pFecha);
    nuevaFin.setMinutes(nuevaFin.getMinutes() + duracion);

    for (let i = 0; i < this.reservas.length; i++) {
      let reservaActual = this.reservas[i];

      if (reservaActual.barberoId === pBarberoId) {
        // Crear copia del rango existente
        const actualInicio = new Date(reservaActual.fecha);
        const actualFin = new Date(reservaActual.fecha);
        actualFin.setMinutes(actualFin.getMinutes() + duracion);

        // Verificar si se superponen
        const hayConflicto = nuevaInicio < actualFin && nuevaFin > actualInicio;

        if (hayConflicto) {
          ret = false;
          break; //Corta el for en cuanto encuentra un conflicto
        }
      }
    }

    return ret;
  }

  registrarReserva(pNombre, pApellido, pCelular, pCorreo, pBarberoId, pServicioId, pFecha) {
    let res = new Reserva(this.idReserva, pNombre, pApellido, pCelular, pCorreo, pBarberoId, pServicioId, pFecha);

    this.reservas.push(res);
    this.idReserva++;
  }

  getBarberoPorId(barberoId) {
    let ret = null;

    for (let i = 0; i < this.barberos.length; i++) {
      let barberoActual = this.barberos[i];
      if (barberoActual.id == barberoId) {
        ret = barberoActual;
        break;
      }
    }
    return ret;
  }

  getServicioPorId(servicioId) {
    let ret = null;

    for (let i = 0; i < this.servicios.length; i++) {
      let servicioActual = this.servicios[i];
      if (servicioActual.id == servicioId) {
        ret = servicioActual;
        break;
      }
    }
    return ret;
  }

  getReservasHoy() {
    let ret = [];
    let reservas = this.reservas;
    const hoy = new Date();
    for (let i = 0; i < reservas.length; i++) {
      let reservaActual = reservas[i];
      let fecha = new Date(reservaActual.fecha);
      if (fecha.getDay() == hoy.getDay()) {
        ret.push(reservaActual);
      }
    }
    return ret;
  }
}

// COMENTAR PARA QUE LA PAGINA ANDE
//module.exports = Sistema;