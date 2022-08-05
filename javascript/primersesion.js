// const usuario= {
// 	name: "Iñaki" ,
// 	apellidoP: "Rivas" ,
// 	apellidoM: "Chavez" ,
// 	edad: 200
// }
// console.log(dic.edad)

// console.log (usuario)
// usuario.edad = 800;
// console.log (usuario)
// usuario.apellidoM= "Gonzalez"
// console.log (usuario)
// el console.log sirve para mandar a llamar lo que dice en la terminal 
// var iker= 
// 	{
// 		comoes: "enano"
// 	}

// console.log (iker.comoes)

// var ola= "I'm iñaki"
// console.log(ola);

// var nombreSaludo="hola me llamo: " + nombre
// var nombre = "iñaki"
// var apellido = "rivas"
// // var numString= "12345" ;
// // console.log (numString);
// // con un string
// console.log (`hola me llamo: ${nombre} ${apellido}`);
// // para hacer una variable con y el + sirve para juntar cadenas de texto
// var a = 10;
// var b = 100;
// console.log (`la multiplicacion de a + b es: ${a*b}`);
// // el signo de pesos es para unir las cadenas de texto y poder hacer operaciones
// var c = 8000
// var d = 100
// console.log (`la division de c/d es: ${c/d}`) ;
// // OPERADOR TYPEOF, tambien puedes mandar a llamar el buleano
// var conversion = `12345`
// // console.log(conversion);
// // console.log(typeof(conversion));
// var t = true;
// var f = false; 
// // console.log(`tipo de dato de la variable t ${typeof(t)}`);      

// conversion = String(conversion) ;
// console.log(typeof(conversion))

// var bool = true;
// bool = String(bool);

// var n = "ola";
// console.log(typeof(n));

// n = Number(n);
// console.log(n);

// console.log(+'123')


// t = Number(t)
// f = Number(f)
// console.log(t);
// console.log(typeof(t));
// console.log(f);
// console.log(typeof(f));

// var uno = 1;
// var cero = 0;

// // conversion booleana
// // console.log (typeof(boolean(uno)))
// console.log (`el tipo de dato de la variable uno despues de la conversion a booleano es:${typeof(Boolean(uno))}y su valor es:${Boolean(uno)}.`);
// para mandar a llamar un booleano y saber si es verdadero o falso ya que se definen con 0 y 1 

// var a = 5
// var b = 10
// var c = 15
// var d = 7

// console.log(a+b);
// console.log(b-a);
// console.log(a*c);
// console.log(c/a);
 
// console.log (`el residuo de dividir 7/5 es:${d%a}`) ;
// // el % sirve para sacar el residuo de la divsion el cual es cero y siempre que uno quede en cero sabremos que es par 

// a++ // A "a" se le aumenta uno 

// c-- // A "c" se le disminuye uno 

// console.log(a++)
// console.log(a++)

// el incremento y decremento es asi y uno por uno puedes agregarle uno poniendo mas a++ y a-- para restar 

// var a = 5
// var b = 10
// var c = 15
// var d = 7

// var resultado = (3+b)*c/a*2;
// var r2 = ((a+b*c)/5)*2;
// var r3 = b/a+2*c;
// var r4 = (a+b+c/c)*a;
// var r5 = ((3*a)/c)+a+b+c;
// var r6 = a-(b+c)*a/1;

// console.log(resultado);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);
// console.log(r6);
// operaciones por jerarquia

// EJERCICIO IF Y ELSE 

// var time = 30
// let greeting; 

//  if (time>24 || time<0) {
// 	greeting = "not can be possible"
// } else if (time <12){
// 	greeting = "Good morning";
// } else if (time<20) {
// 	greeting = "Good afternooon"
// } else if (time >=20) {
// 	greeting= "Good evening"
// }

// console.log(greeting)
// codigo para que dependiendo de la hora salga si sera alguna de esas 4 respuestas usando if y else 
// var time = 19
// let horario;

// if (time >= 9 && time<=18){
// 	horario = "bienvenido"
// }else{
// 	horario = "estamos cerrados"
// }

// console.log(horario)
// hicimos un horario que solo se pudiera de 9 a 18 usando &&
						// SWITCH
// const day = 50;
// let text;

// switch(day){
// 	case 0:
// 	text = "Domingo"
// 	break;
// 	case 1:
// 	text = "Lunes"
// 	break;
// 	case 2:
// 	text = "Martes"
// 	break;
// 	case 3:
// 	text = "Miercoles"
// 	break;
// 	case 4:
// 	text = "Jueves"
// 	break;
// 	case 5:
// 	text = "Viernes"
// 	break;
// 	case 6:
// 	text = "Sabado"
// 	break;
// 	default:
// 	text = "Escribe un numero,no seas imbecil"
// }

// 	console.log(text)
// usamos el switch con su estructura debida 

// 							OPERADOR TERNARIA

// const velocidad = 500;

// var mensaje = velocidad > 100 ? "vas muy rapido" : "Good Job"

// console.log(mensaje)

// var edad = 17

// var lo = edad < 18 ? "eres un tonto" : "ya creciste"

// console.log(lo)
// lo que usamos fue fue definir si pasaba esto o o si no pasara esto, condición ? expresión_true : expresión_false
						// CICLO FOR


// for (let i = 0; i<=2; i++){
// 	console.log ("holaaa");
// }

// for (let i = 2 ; i< 200; i++) {
// if (i%2 == 0){
// 	// console.log(i)
	// este es un for de mostrar todos los pares usando la condicional if y modulo que es el residuo de las divisiones
// }
// }
// for (let a= 5 ; a< 100; a++) {
// if (a%5== 0) {
// 	console.log(a)
// }
// }
// todos los multiplos de 5 usando if y modulo 
// for (let l= 5 ; l< 100; l++) {
// if (l%10== 0) {
// 	console.log(l)
// }
// }
// todos los multiplos de 10 usando for, if y modulo 
// for (var r = 0; r < 100; r++) {
// 	if (r%1== 1){
// 		console.log(r)
// 	}
// }
// trate de hacer el for de los numeros primos pero no me salio :(

// LENGTH para mostrar cuantos elementos hay
// const hola = ["1" , "2" , "3", "4", "5"];

// console.log(hola[hola.length-1]);

var n1 = [1,2,3,4,5]
// console.log(n1) ;
// console.log(n1.length)

// agregar un elemento al final 
n1.push(7)
// console.log(n1)
// console.log(n1.length)

// pop para eliminar al final
n1.pop();
// console.log(n1)
// console.log(n1.length);
// SHIFT para eliminar 
// UNSHIFT para agregar al inicio 

						// ITERAR UN ARREGLO
// for (let i = 0; i < n1.length; i++){
// console.log(n1[i]);
// }
// con esto iteramos el arreglo de n1 1-5 con for e imprimiendolo con conseole.log
// var nuevoA = [];
// console.log(nuevoA.length)

// for (var i = 0; i <= 20; i++) {
// 	nuevoA.push(i)
// }
// console.log(nuevoA)

// var nuevoC = []
// var nuevoB = [10,405,248,278,90]
// console.log(nuevoB.length)
// for (var i = 0; i <nuevoB.length; i++) {
// 	nuevoC [i] = nuevoB[i]*2;
// }
// console.log(nuevoC)
// ITERAR UNA LISTA 
// usamos for usando la variable llena con los digitos, y una vacia la cual queriamos que apareciera el doble de la primera, y lo hicimos usando for pero en ves de hacerlo uno por uno como se be primero, lo hicimos con i = 0 < z.length;
// q [1] = z[i]*2;
// var q = []
// var z = [8,6,3,4]
// q[0] = z [0]*2;
// q[1] = z [1]*2;
// q[2] = z [2]*2;
// q[3] = z [3]*2;
// for (var i = 0; i <z.length; i++) {
// 	q[i] = z[i]*2;
// }
// console.log(q)

					// PROMEDIO
// sumamos los elementos de la lista para despues poder sacar el promedio de los tres el cual pudimos haber hecho uno por uno pero lo resumimos con for  
// var a = [80, 100, 1000]					
// var nElemento = a.length
// var suma = 0;
// let promedio;
// for (var i = 0; i < nElemento; i++) {
// 			suma = suma + a[i];
// }
// console.log(suma)


// promedio= suma / nElemento;

// console.log(promedio)

var gandalf = [10, 11, 13, 30, 22, 11, 10, 33, 22, 22]
var saruman = [23, 66, 12, 43, 12, 10, 44, 23, 12, 17]

var ganadasG = 0
var ganadasS = 0
var empate = 0

for (var i = 0; i < gandalf.length; i++) 
	if (gandalf[i]>saruman [i]) {
		ganadasG++}
	 else if (gandalf[i]<saruman[i]){
	    ganadasS++}
   else (gandalf[i]==saruman[i]) 

console.log(ganadasG)
























                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              