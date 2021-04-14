function perimetro(){
    var raio = parseFloat(document.getElementById('raio').value)
    var perimetro = 2 * Math.PI * raio
    var area = Math.PI * (raio*raio)
    
    // document.getElementById('resultado').innerHTML = perimetro.toFixed(2)
    // document.getElementById('resultadoA').innerHTML = area.toFixed(2)
    // var raio = parseFloat(document.getElementById('raio').value = '')

    

    if (raio >= 0) {
        document.getElementById('resultado').innerHTML = perimetro.toFixed(2)
        document.getElementById('resultadoA').innerHTML = area.toFixed(2)
        var raio = parseFloat(document.getElementById('raio').value = '')
    }else{
        alert('Digite o valor do raio')
    }
}