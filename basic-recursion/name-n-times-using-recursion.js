function name1(start,n){
    if(start > n) return
   console.log("Luffy!")
   name1(start + 1,n)
}

function main(start,n){
   name1(start,n)
}

main(1,2)
