//1,2,3,4

function recursion(i,n){
      if(i<1)return
      recursion(i-1,n)
      console.log(i)
}

function main(){
    // recursion(1,6)
    recursion(6,1)
}

main()