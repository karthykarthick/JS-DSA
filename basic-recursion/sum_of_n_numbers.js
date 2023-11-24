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
main()