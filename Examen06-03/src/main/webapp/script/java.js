//Es una funcion para dar de alta un alumno
function altaAlumno()
{
	//Solicitamos nombre apellido edad
    let nombre = prompt("Introduce el nombre","Alfonso");
   	let apellidos = prompt("Introduce el apellido","Fernandez Romera");
	let edad = prompt("Introduce el nombre",20);
	//Escribimos
	  document.write("<br>Nombre y apellidos: "+apellidos+", "+nombre+".<br>");
	  document.write("Edad: "+edad+" años.<br>");
	  document.write("Edad es un tipo: "+typeof(edad)+".");  
}
//Es una funcion gestionar fecha Madrid,Londres,Paris
function gestionfecha()
{
	//do para controlar si introduce bien la ciudad
	let ok;
	do
	{
		//Pedimos por pantalla y creamos una fecha
		ok=true;
	  	let ciudad = prompt("Introduce una Ciudad:Madrid, Paris, Londres","Madrid");
	  	let ahora = new Date();
		  switch(ciudad)
		  {
			  case "Madrid":
				  //No cambia con la ahora actual
				  	 ok=true;
				  break;
			  case "Paris":
				  //No cambia con la ahora actual
				   ok=true;
				  break;
			  case "Londres":
				  	//Restamos una hora
					  ahora.setHours(ahora.getHours()-1);
				  break;
				  default:
					  	//Controlamos si escibre bien 
					 document.write("Mis ciudades son Madrid, Paris, Londes."); 
					 ok=false;
		  }
		  	//Escribimos si ok es true
		 if(ok)
		 {
			 document.write("Ciudad: "+ciudad+"<br>");
		  	document.write("Fecha: "+ahora.getDate()+"-"+ahora.getMonth()+"-"+ahora.getFullYear()+"<br>");
		  	document.write("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds()); 
		 }
		 
     		
	
	}while(!ok);
}

