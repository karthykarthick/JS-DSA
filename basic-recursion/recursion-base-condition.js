let count = 1
function recursion(){
    if(count > 1 ){
        return
    }
    console.log("karthick")
    count++;
    recursion()
}
function main(){
    recursion()
}

main()