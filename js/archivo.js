function procesar() {
     var nombre =document.getElementById('txtnombre').value 
     var apellido=document.getElementById('txtapellido').value 
     var correo=document.getElementById('txtemail').value 
     var celular=document.getElementById('txtcelular').value 
     var barrio=document.getElementById('txtbarrio').value 
     var comentario=document.getElementById('txtcomentario').value
     alert("nombre: "+nombre +" apellido: "+apellido+ "email: "+correo+"celular"+celular+ "comentario: "+comentario+" Por favor revisaremos su caso y nos contactaremos con usted lo mas pronto GRACIAS POR ELEGIRNOS!")
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

      

    var usuarios=[]
    usuarios.push({ id: '1', Nombre: 'Yeimar', Apellidos: 'Escorcia', Apellido2: 'Villa', Cargo: 'Tecnico en Soporte'});
    usuarios.push({ id: '2', Nombre: 'Norma', Apellidos: 'Escorcia', Apellido2: 'Villa', Cargo: 'Seceretaria'});
    usuarios.push({ id: '3', Nombre: 'Alfonso', Apellidos: 'Escorcia', Apellido2: 'Villa', Cargo: 'Supervisor'});

    usuariosjson=JSON.stringify(usuarios);
    listausuario=JSON.parse(usuariosjson)
    alert(listausuario[0].nombre + " "+listausuario[2].Cargo)
