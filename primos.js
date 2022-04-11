function sumarPrimos(num) {
    var r = 1;
    for(var i=1;i<=num;i++){
      if(esPrimo(i)) r+=i;
    }
    return r;
  }
  
  function esPrimo(n){
    if(n<=3) return n>1;
    if(n%2===0||n%3===0) return false;
    for(var  i = 5; i * i <= n; i += 6){
      if(n % i === 0 || n % (i + 2)=== 0){ return false; }
    }
    return true;
}

console.log(sumarPrimos(11));