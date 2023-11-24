function reverse(str,i){
    if(i > str.length/2)return true
    if(str[i] !== str[str.length-i-1]) return false
    return reverse(str,i+1)
}



function main(){
    let str = "mom"
    return reverse(str,0)
}

console.log(main())