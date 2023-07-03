
function myButton(){

    const temperature = document.getElementById('temperatureinput').value


if(temperature >=35 && temperature <= 35.9){
    result = ('Você precisa se cuidar, esta com hipotermia')
    document.getElementById('resulttext').style.color = 'red';
}else if (temperature >=36 && temperature <= 36.9){
    result =('Parabéns você esta saudável, continue se cuidando')
    document.getElementById('resulttext').style.color = 'green';
}else if (temperature >= 37 && temperature <= 40){
    result =('Você precisa se consultar, esta com febre')
    document.getElementById('resulttext').style.color = 'yellow';
}else{
    result =('"ATENÇÃO: Leitura de temperatura crítica!')
    document.getElementById('resulttext').style.color = 'red';
}

var resultfinal = 'Aqui esta o resultado:' + "<br>" + result;

document.getElementById('resulttext').innerHTML = resultfinal

}
