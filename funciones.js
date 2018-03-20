function getData()
{
	var min = document.getElementById("menor").value;
	var max = document.getElementById("mayor").value;
	document.getElementById("resultado").value = aleatorio_intervalo(max,min); 
	//document.write(aleatorio_intervalo(max,min));
}

function aleatorio_intervalo(maximo, minimo)
{
  var numAleatorio = Math.random();
  numAleatorio = parseInt(numAleatorio*(maximo-minimo+1)+parseInt(minimo));
  return numAleatorio;
}
