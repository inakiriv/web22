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
for (var r = 0; r < 100; r++) {
	if (r%1== 1){
		console.log(r)
	}
}
























                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              