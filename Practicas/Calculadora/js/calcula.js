window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.
m=0; mr=0;


//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) {	// inicializar un número, 
            pantalla.innerHTML+=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
         }
function operar(s) {
         igualar(); //si hay operaciones pendientes se realizan primero
         pantalla.innerHTML+=s;
         ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }	
function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número	
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }
function raizc() {
         x=Math.sqrt(x) //resolver raíz cuadrada.
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla 
         }
function porcent() { 
         x=x/100 //dividir por 100 el número
         pantalla.innerHTML=x; //mostrar en pantalla
         igualar() //resolver y mostrar operaciones pendientes
         xi=1 //reiniciar la pantalla
         }
function opuest() { 
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x; //mostrar en pantalla.
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);		 
         pantalla.innerHTML=x;
         xi=1; //reiniciar pantalla al pulsar otro número.
         }

function retro(){ //Borrar sólo el último número escrito.
         cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras) //describir último caracter
         x=x.substr(0,cifras-1) //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
         pantalla.innerHTML=x; //mostrar resultado en pantalla	 
         }
function borradoParcial() {
        pantalla.innerHTML=0; //Borrado de pantalla;
        x=0; //Borrado indicador número pantalla.
        coma=0;	//reiniciamos también la coma				
        }
function borradoTotal() {
         pantalla.innerHTML=null; //poner pantalla a 0
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal 
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
         }

function root() {
    var r = prompt("Introduce el numero de raiz");
    resu=Math.pow(x, 1/r);
    pantalla.innerHTML=resu; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function LogNat() {
    ln=Math.log(x);
    pantalla.innerHTML=ln; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Log() {
    lg=Math.log10(x);
    pantalla.innerHTML=lg; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Tan() {
    tan=Math.tan(x);
    pantalla.innerHTML=tan; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function aTan() {
    atan=Math.atan(x);
    pantalla.innerHTML=atan; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function cuadrado() {
    var cuadra=x*x;
    pantalla.innerHTML=cuadra; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function xy() {
    var xy = prompt("Introduce el numero exponente");
    var res=x**xy;
    pantalla.innerHTML=res; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function e() {
    exp=Math.exp(x);
    pantalla.innerHTML=exp; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function diezx() {
    var res=10**x;
    pantalla.innerHTML=res; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Cos() {
    cos=Math.cos(x);
    pantalla.innerHTML=cos; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function aCos() {
    acos=Math.acos(x);
    pantalla.innerHTML=acos; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function factorial() {
    var total = 1; 
	for (i=1; i<=x; i++) {
		total = total * i; 
	}
    pantalla.innerHTML=total; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Pi() {
    var pi = Math.PI;
    numero(pi);
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Sen() {
    sen=Math.sin(x);
    pantalla.innerHTML=sen; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function aSen() {
    asen=Math.asin(x);
    pantalla.innerHTML=asen; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function PPM() {
    ppm=x/1000000;
    pantalla.innerHTML=ppm; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function Mmas(){
    mr = x;
    pantalla.innerHTML=mr; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function MR(){
    numero(mr);
    igualar();
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}

function MC(){
    mr = 0;
    pantalla.innerHTML=mr;
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}






function binario(){
    var binario = "";
    while(x > 0){
        binario = x%2 + binario;
        x = Math.floor(x/2);
    }
    pantalla.innerHTML=binario; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}
function hexadecimal(){
    var hexa=[], i;
    var numHexa="";
        for(i=x; i>0; i=parseInt(i/16)){
            hexa.push(i%16);
        }

        for(i=0; i<hexa.length; i++){
            switch(hexa[i]){
                case 10: hexa[i] = "A";
                            break;
                case 11: hexa[i] = "B";
                            break;
                case 12: hexa[i] = "C";
                            break;
                case 13: hexa[i] = "D";
                            break;
                case 14: hexa[i] = "E";
                            break;
                case 15: hexa[i] = "F";
                            break;
            }
        }
        numHexa=hexa.reverse().join("");
    pantalla.innerHTML=numHexa; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}
function octal(){
    var num, temp, rem, i=1, sum=0;
    num=Number(x);
    temp = num;
    while(temp!=0){
        rem = temp%8;
        sum = sum+i*rem;
        i = i*10;
        temp=parseInt(temp/8);
    }
    pantalla.innerHTML=sum; //mostrar en pantalla resultado
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla 
}


function cientifica(){
    window.open('cientifica.html','','toolbar=no, status=no, resizable');
}

function normal(){
    window.close();
}
