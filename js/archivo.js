function procesar() {
    
 

}

function procesar1() {
var PrimerNumero =document.getElementById('txt1numero').value
var SegundoNumero=document.getElementById('txt2numero').value
var suma =parseInt(PrimerNumero)+parseInt(SegundoNumero) 
alert(" Numero 1: "+PrimerNumero+" Numero 2: "+SegundoNumero+"LA SUMA ES : "+suma)
console.log(" Numero 1 "+PrimerNumero+"Numero 2 "+SegundoNumero+"LA SUMA ES : "+suma)
document.getElementById("p2").innerHTML=" Numero 1: "+PrimerNumero+"  Numero 2: "+SegundoNumero+" LA SUMA ES : "+suma
}

function procesar2() {
    var PrimerNumero =document.getElementById('txt1numero').value
    var SegundoNumero=document.getElementById('txt2numero').value
    var  resta =parseInt(PrimerNumero)-parseInt(SegundoNumero) 
    alert("Numero 1 : "+PrimerNumero+"Numero 2 : "+SegundoNumero+" LA RESTA ES : "+resta)
    }

    function procesar3() {
        var PrimerNumero =document.getElementById('txt1numero').value
        var SegundoNumero=document.getElementById('txt2numero').value
        var multiplicar =parseInt(PrimerNumero)*parseInt(SegundoNumero) 
        alert("Numero 1 "+PrimerNumero+"Numero 2 "+SegundoNumero+"LA MULTIPLICACION ES : "+multiplicar)
        }

        function procesar4() {
            var PrimerNumero =document.getElementById('txt1numero').value
            var SegundoNumero=document.getElementById('txt2numero').value
            var division =parseInt(PrimerNumero)/parseInt(SegundoNumero) 
            alert("Numero 1 "+PrimerNumero+"Numero 2 "+SegundoNumero+"LA DIVISION ES : "+division)
            }