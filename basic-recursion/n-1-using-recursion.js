function recursion(end,n){
    if(end < 1) return
    console.log(end)
    recursion(end-1,n)
}

function main(end,n){
  recursion(end,n)
}

main(15,1)