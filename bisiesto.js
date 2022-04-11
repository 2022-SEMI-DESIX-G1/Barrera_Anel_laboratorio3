function esBisiesto(annio){
    if (((annio % 4 == 0) && (annio % 100 != 0 )) || (annio % 400 == 0)) {
        return "El año es bisiesto";
    } else {
        return "El año " +`${ annio }` +" no es bisiesto";
    }

}



console.log(esBisiesto(2022));