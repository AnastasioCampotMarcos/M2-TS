var persona = {
    nombre: 'Marcos',
    edad: 27,
    otrosDatos: {
        ocupacion: 'Developer',
        hobbies: 'Leer historia, Hacer musica'
    },
    mostrarDatos: function () {
        return this.nombre + ', ' + this.edad + ', ' + this.otrosDatos.ocupacion + ', ' + this.otrosDatos.hobbies;
    },
    datosCard: function () {
        return this.nombre + ' ' + this.otrosDatos.ocupacion;
    }
};
console.log(persona.mostrarDatos());
var app = document.getElementById("app");
var h = document.createElement("h3");
h.className="display-6";
h.textContent = persona.datosCard();
app === null || app === void 0 ? void 0 : app.appendChild(h);
