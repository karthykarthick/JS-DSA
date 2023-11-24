function fib(n){
    if(n <= 1){
      return n
    }
    return fib(n-1)+fib(n-2)
  

    
}

function main(){
   return fib(11)
}
console.log(main())