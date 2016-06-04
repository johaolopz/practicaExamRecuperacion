var buque1 = {
	nombre:"Santa Maria", carga:"bananos", bandera:"ecuador", capitan:"John Smith", compania:"Salica", tipo:"panama"
};
var buque2 = {
	nombre:"Guayatuna", carga:"autos", bandera:"ecuador", capitan:"Isaac Newton", compania:"Nirsa", tipo:"post-panama"
};
var buque3 = {
	nombre:"Queen Isabel", carga:"bananos", bandera:"australia", capitan:"Brandon Malcolm", compania:"Salica", tipo:"post-panama"
};
var buque4 = {
	nombre:"Pacifictuna", carga:"autos", bandera:"australia", capitan:"Kevin Costner", compania:"Nirsa", tipo:"panama"
};
var buque5 = {
	nombre:"MarBravo", carga:"autos", bandera:"ecuador", capitan:"Julie McDonald", compania:"Salica", tipo:"post-panama"
};
var buques = [];
buques.push(buque1);buques.push(buque2);buques.push(buque3);buques.push(buque4);buques.push(buque5);

var opcion = "carga";
function cambioSelect ()
{
	opcion = document.getElementById('elemento').value;
}

var texto = "";
function copiar()
{
	texto = document.getElementById('text1').value;
}

$(".boton").append("<button>Buscar</button>");
$(".boton").click(function()
{
	busqueda();
});

function busqueda()
{
	var error = true;
	var mensaje = "<ul>";
	for (i=0; i < buques.length; i++)
	{
		if(( texto.toLowerCase() == buques[i].carga) && (opcion == "carga"))
		{
			mensaje += "<li>Nombre: "+buques[i].nombre+"</li><li>Carga: "+buques[i].carga+"</li><li>Bandera: "+buques[i].bandera+"</li><li>Capitan: "+buques[i].capitan+"</li><li>Compania: "+buques[i].compania+"</li><li>Tipo: "+buques[i].tipo+"</li><br>";

		} 
		else if(( texto.toLowerCase() == buques[i].bandera) && (opcion == "bandera"))
		{
			mensaje += "<li>Nombre: "+buques[i].nombre+"</li><li>Carga: "+buques[i].carga+"</li><li>Bandera: "+buques[i].bandera+"</li><li>Capitan: "+buques[i].capitan+"</li><li>Compania: "+buques[i].compania+"</li><li>Tipo: "+buques[i].tipo+"</li><br>";
		}
		else if(( texto.toLowerCase() == buques[i].nombre.toLowerCase()) && (opcion == "nombre"))
		{
			mensaje += "<li>Nombre: "+buques[i].nombre+"</li><li>Carga: "+buques[i].carga+"</li><li>Bandera: "+buques[i].bandera+"</li><li>Capitan: "+buques[i].capitan+"</li><li>Compania: "+buques[i].compania+"</li><li>Tipo: "+buques[i].tipo+"</li><br>";
		}
		else if ((mensaje == "<ul>") && (i==4))
		{
			alert("Ningun elemento encontrado, intente con otros cristerios");
		}
	}
	mensaje += "</ul>";
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
