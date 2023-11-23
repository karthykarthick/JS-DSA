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

function amstrong(n){
    let org = n
    let num = 0;
    while(n>0){
        let last_num = n%10;
        num += (last_num * last_num * last_num)
        n = Math.floor(n/10)
    }
    if(num == org){
        return "Amstrong number"
    }else{
        return "not a amstrong number"
    }
 
}

function div(n){
    for(let i =1;i<=n;i++){
        if(n%i==0){
            console.log(i)
        }
    }
}

function prime(n){
    for(let i = 2;i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true

}
let n = 12
let res = prime(n)
if(res==true && n!==1){
    console.log("prime number")
}else{
    console.log("not a prime number")
}

function gcd(a,b){
  while(a>0&&b>0){
    if(a>b) a =a%b
    else b=b%a
  }
  if(a==0)return b
  else a
}
console.log(gcd(52,10))