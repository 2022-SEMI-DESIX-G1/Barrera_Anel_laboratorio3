function cantidadCaracteres(cadena){
    const texto = cadena.trim().toLowerCase().split('');

    const repeticiones = {};
    texto.forEach( ( letra ) => {
        repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
      });
    
      for( let letra in repeticiones ) {
           
          console.log(`${ letra } = ${ repeticiones[ letra ] }`);  
         
      }  
       
}

console.log(cantidadCaracteres("panama"));