interface IPersona{
	nombre:string;
	edad:number;
	otrosDatos:IOtrosDatos;
	mostrarDatos:()=>string;
	datosCard:()=>string;
}

interface IOtrosDatos{
	ocupacion:string;
	hobbies:string;
}

const persona: IPersona={
	nombre:'Marcos',
	edad: 27,
	otrosDatos:{
	ocupacion: 'Developer',
	hobbies:'Leer historia, Hacer musica'
	},

	mostrarDatos(){
		return  this.nombre + ', ' + this.edad + ', ' + this.otrosDatos.ocupacion + ', ' + this.otrosDatos.hobbies;
	},

	datosCard(){
		return this.nombre + ' ' + this.otrosDatos.ocupacion;
	}
};

console.log(persona.mostrarDatos())


const app = document.getElementById("app");
const h = document.createElement("h3");
h.textContent = persona.datosCard();
h.className="display-6";
app?.appendChild(h);