function recursion(i,n){
    if(i>n)return
    recursion(i+1,n)
    console.log(i)
}

function main(){
    recursion(1,6)
}

main()