class Reserva {
    constructor(_id,_nombre,_apellido,_celular,_correo,_barberoId,_servicioId,_fecha){
        this.id=_id;
        this.nombre=_nombre;
        this.apellido=_apellido;
        this.celular=_celular;
        this.correo=_correo;
        this.barberoId=_barberoId;
        this.servicioId=_servicioId;
        this.fecha=_fecha;
    }
}

// COMENTAR ESTO SI QUERES QUE LA PAGINA ANDE
//module.exports = Reserva;