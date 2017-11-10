function sumar(){
	var num1=parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);

	if (validar(num2,num2)){
		var res = num1+num2;
		alert("La suma es:" + res);

	}
	else{
		alert("No es el formatp de numero" + res);
	}

}

function restar(){
	var num1=parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);

	if (validar(num2,num2)){
		var res = num1-num2;
		alert("La resta es:" + res);

	}
	else{
		alert("No es el formatp de numero" + res);
	}

}


function multiplicar(){
	var num1=parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);

	if (validar(num2,num2)){
		var res = num1*num2;
		alert("La multiplicacion es:" + res);

	}
	else{
		alert("No es el formatp de numero" + res);
	}

}

function dividir(){
	var num1=parseFloat(document.getElementById("num1").value);
	var num2=parseFloat(document.getElementById("num2").value);

	if (validar(num2,num2)){
		var res = num1/num2;
		if (res==Infinity){
			alert("Divicion entre cero!");
			document.getElementById("res").value="";			
		}else{
			alert("La divicion es" + res);
		}	

	}
	else{
		alert("No es el formatp de numero" + res);
	}

}






function validar(num1,num2){
	if (isNaN(num1) || isNaN(num2)){
		return false;
	}else{

		return true;

	} 
}



function  hacerTabla(){
	var tabla="";
	var num=parseFloat(document.getElementById("num").value);
	if (isNaN(num)==false){
		tabla+='TABLA DEL'+num + '<br>';
		for (var i=0; i<=10; i ++){
			tabla+=num+'x'+i +'='+num * i + '<br>';
		}
		document.getElementById("tabla").innerHTML=tabla;
	} else{
		alert("Formato incorrecto de numero!!!");
	}
}