function convertir(secs) {
    var horas = (secs - secs % 3600)/3600;
    var minutos = (secs % 3600 - (secs%3600) % 60)/60;
    var segundos = (secs % 3600) % 60
    var resultado = `${horas} : ${minutos} : ${segundos}`; 
    return resultado;
}
