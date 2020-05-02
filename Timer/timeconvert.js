function convertir(secs) {
    var hours = (secs - secs % 3600)/3600;
    var minutes = (secs % 3600 - (secs%3600) % 60)/60;
    var seconds = (secs % 3600) % 60
    var result = `${hours} : ${minutes} : ${seconds}`; 
    return result;
}
