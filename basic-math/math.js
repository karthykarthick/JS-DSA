function digits(n){
    let count = 0
    while(n>0){
        last_num = n%10
        count++
        n = Math.floor(n/10)
    }
    return count
}

function rev(n){
    let rev = 0
    while(n>0){
        let last_num = n%10;
        rev = rev * 10 + last_num;
        n = Math.floor(n/10)
    }
    return rev
}

function pal(n){
    let num = n
    let rev = 0;
    while(n>0){
        let last_num = n%10
        rev = rev * 10 + last_num
        n = Math.floor(n/10)
    }

    if(rev == num){
       return "palindrome"
    }else {
        return "Not a palindrome"
    }
}
console.log(pal(121))