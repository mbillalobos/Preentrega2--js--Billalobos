//Crear clases:

class Paciente {
    constructor(nombre, apellido, especialidad, obraSocial) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.obraSocial = obraSocial;
    }
}

//Crear array de prestadores:

const prestadores = [
    { nombre: "Analia Paredes", especialidad: "Clinico", obraSocial: "OSDE", },
    { nombre: "Alberto Corona", especialidad: "Cardiologo", obraSocial: "OSDE", },
    { nombre: "Isidro Estevez", especialidad: "Dentista", obraSocial: "OSDE", },
    { nombre: "Isaac Cabeza", especialidad: "Oculista", obraSocial: "OSDE", },
    { nombre: "Raúl Beltran", especialidad: "Clinico", obraSocial: "OSEP", },
    { nombre: "Trinidad Aviles", especialidad: "Cardiologo", obraSocial: "OSEP", },
    { nombre: "Maria Robledo", especialidad: "Dentista", obraSocial: "OSEP", },
    { nombre: "Eloisa Navarro", especialidad: "Oculista", obraSocial: "OSEP", },
]

//Crear un paciente nuevo:

let paciente1 = new Paciente(
    prompt("Ingrese su nombre:"),
    prompt("Ingrese su apellido:"),
    prompt("Ingrese la especialidad para la cual desea sacar turnos: \n - Clinico \n - Cardiologo \n - Dentista \n - Oculista").toLowerCase(),
    prompt("Ingrese la obra social con la que cuenta: \n - OSDE \n - OSEP").toUpperCase(),
)

//Bucle para validar que la especildad del paciente sea la que se atiende en la clínica:

while (paciente1.especialidad != "clinico" && paciente1.especialidad != "cardiologo" && paciente1.especialidad != "oculista" && paciente1.especialidad != "dentista") {
    alert("La especialidad indicada no es atendida en nuestra clinica. Por favor, ingrese una especialidad válida.");
    paciente1.especialidad = prompt("Ingrese la especialidad para la cual desea sacar turnos: \n - Clinico \n - Cardiologo \n - Dentista \n - Oculista").toLowerCase();
}

//Bucle para validar que la obra social del paciente sea la que se atiende en la clínica:

while (paciente1.obraSocial != "OSDE" && paciente1.obraSocial != "OSEP") {
    alert("La obra social indicada no es atendida en nuestra clinica. Por favor, ingrese una obra social válida.");
    paciente1.obraSocial = prompt("Ingrese la obra social con la que cuenta: \n - OSDE \n - OSEP").toUpperCase();
}

//Crear funciones para buscar prestadores:

function buscarClinicoOsde() {
    const busqueda = prestadores.find((el) => el.especialidad === "Clinico" && el.obraSocial === "OSDE");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarClinicoOsep() {
    const busqueda = prestadores.find((el) => el.especialidad === "Clinico" && el.obraSocial === "OSEP");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarCardiologoOsde() {
    const busqueda = prestadores.find((el) => el.especialidad === "Cardiologo" && el.obraSocial === "OSDE");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarCardiologoOsep() {
    const busqueda = prestadores.find((el) => el.especialidad === "Cardiologo" && el.obraSocial === "OSEP");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarDentistaOsde() {
    const busqueda = prestadores.find((el) => el.especialidad === "Dentista" && el.obraSocial === "OSDE");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarDentistaOsep() {
    const busqueda = prestadores.find((el) => el.especialidad === "Dentista" && el.obraSocial === "OSEP");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarOculistaOsde() {
    const busqueda = prestadores.find((el) => el.especialidad === "Oculista" && el.obraSocial === "OSDE");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

function buscarOculistaOsep() {
    const busqueda = prestadores.find((el) => el.especialidad === "Oculista" && el.obraSocial === "OSEP");
    return alert(paciente1.nombre + " " + paciente1.apellido + ", " + "su turno fue asignado con el/la especialista " + busqueda.nombre);
}

//Sentencia SWITCH para comparar entre los distintos casos:

switch (paciente1.especialidad) {
    case "clinico":
        if (paciente1.obraSocial === "OSDE") {
            buscarClinicoOsde();
        } else if (paciente1.obraSocial === "OSEP") {
            buscarClinicoOsep();
        } else {
            alert("La obra social indicada no la atendemos. Disculpe las molestias.");
        }
        break;
    case "cardiologo":
        if (paciente1.obraSocial === "OSDE") {
            buscarCardiologoOsde();
        } else if (paciente1.obraSocial === "OSEP") {
            buscarCardiologoOsep();
        } else {
            alert("La obra social indicada no la atendemos. Disculpe las molestias.");
        }
        break;
    case "dentista":
        if (paciente1.obraSocial === "OSDE") {
            buscarDentistaOsde();
        } else if (paciente1.obraSocial === "OSEP") {
            buscarDentistaOsep();
        } else {
            alert("La obra social indicada no la atendemos. Disculpe las molestias.");
        }
        break;
    case "oculista":
        if (paciente1.obraSocial === "OSDE") {
            buscarOculistaOsde();
        } else if (paciente1.obraSocial === "OSEP") {
            buscarOculistaOsep();
        } else {
            alert("La obra social indicada no la atendemos. Disculpe las molestias.");
        }
        break;
    default:
        alert("En este momento no hay prestadores para esa especialidad");
}





