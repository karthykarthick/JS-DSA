function recursion(start,n){
  if(start > n) return
  console.log(start)
  recursion(start+1,n)
}

function main(start,n){
    recursion(start,n)
}
main(1,10)