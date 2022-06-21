function cant_helado() {
    var personas = document.getElementById('cant').value;
    var helado = personas * 0.25
    var entera = Math.floor(helado) // te calcula la parte entera
    var resto = (helado - entera) / 0.25
    console.log(resto)
    if (entera < 1) {
        var salida = "Debe comprar: " + resto + " cuartos "
    }
    if (resto == 1 && entera > 0) {
        var salida = "Debe comprar: " + entera + "KG y " + resto + " cuarto "
    }
    if (resto == 0 && entera > 0) {
        var salida = "Debe comprar: " + entera + "KG"
    }
    if (resto > 1 && entera > 0) {
        var salida = "Debe comprar: " + entera + "KG y " + resto + " cuartos "
    }
    alert(salida);
}