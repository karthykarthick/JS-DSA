function digits(n){
    let count = 0
    while(n>0){
        last_num = n%10
        count++
        n = Math.floor(n/10)
    }
    return count
}

console.log(digits(12345))