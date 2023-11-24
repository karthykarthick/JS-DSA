function recursion(n,sum){
   if(n<1){
    console.log(sum)
    return
   }
   recursion(n-1,n+sum)
}

function main(){
    recursion(3,0)
}
// main()

//recursion without parameters
function rec(n){
    if(n==0)return 0
    return n + rec(n-1)
}

console.log(rec(15))