function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    str += " \n";
  }
  console.log(str);
}

function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern3(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}

function pattern4(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  console.log(str);
}

function pattern5(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern6(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}

function pattern7(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    //star  1,3,5,7,9 n-5, i - 01234
    for (let j = 1; j <= 2 * i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern8(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    //star
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern9(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 1; j <= n - i - 1; j++) {
      str += " ";
    }
    //star  1,3,5,7,9 n-5, i - 01234
    for (let j = 1; j <= 2 * i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    //star
    for (let j = 1; j <= 2 * n - 2 * i - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}



function pattern10(n){
  let str = ''
  for(let i=0;i<n;i++){
    //1,2,3,4,5
    for(let j=0;j<=i;j++){
       str+="*"
    }
    str+='\n'
  }
  
  for(let i=n-1;i>0;i--){
    for(let j=0;j<i;j++){
      str+="*"
    }
    str+='\n'
  }
  return str
}

// console.log(pattern10(4))

function pattern11(n){
  let str = ''
  let num = 1
  for(let i=1;i<=n;i++){
    if(n%i==0) num = 1
    else num = 0
    for(let j=0;j<i;j++ ){
      str+=num
      num = 1 - num ;
    }
   str+='\n' 
  }
  console.log(str)
}

function pattern12(n){
  let spaces = 2*n-2
  let str = ''
  for(let i=1;i<=n;i++){
     //num
     for(let j=1;j<=i;j++){
      str+=j;
     }

     //spaces
     for(let j = 1;j<=spaces;j++){
       str+=' '
     }

     //rev num
     for(let j=i;j>=1;j--){
      str+=j
     }
    str+='\n'
    spaces -= 2
  }


  console.log(str)
} 

function pattern13(n){
  let str = ''
  let num = 1
  for(let i=0;i<=n;i++){
    for(let j=0;j<i;j++){
      str+= num 
      num = num + 1
    }
    str+='\n'
  }
  console.log(str)
}

function pattern14(n){
  let str = ''
  for(let i = 0;i<n;i++){
    for(let j=0; j<=i;j++){
      str+=String.fromCharCode(65+j)
    }
    str+='\n'
  }
  console.log(str)
}

function pattern15(n){
  let str = ''
  for(let i=0;i<=n;i++){
    for(let j=0;j<=n-i-1;j++){
      str += String.fromCharCode(65+j)
    }
    str+='\n'
  }
  console.log(str)
}


function pattern16(n){
  let str=''
  for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
      str+=String.fromCharCode(65 + i)
    }
    str+='\n'
  }
  console.log(str)
}

function pattern17(n){
  let str = ''
  let spaces = n-1
  for(let i = 0;i<n;i++){
    //spaces
    for(let j=0;j<n-i-1;j++){
      str+=' '
    }
    //char
    let char = 65
    for(let j=0;j<2*i+1;j++){
      str+=String.fromCharCode(char)
      if(j < i) char++
      else char--  
    }
    str+='\n'
  }
  return str
}

function pattern18(n){
  let str = ''
  for(let i = 1;i<=n;i++){
    let char = 'F'
    for(let j=0;j<i;j++){
      str+=char
      char = String.fromCharCode(char.charCodeAt(0)-1)
    }
    str+='\n'
  }
  return str
}

function pattern19(n){
  let str=''
  let space = 0;
  for(let i = 0;i<n;i++){
    //stat
    for(let j=0;j<=n-i-1;j++){
      str+='*'
    }
    //spaces
    for(let j=0;j<space;j++){
      str+=' '
    }
    ///star
    for(let j=0;j<=n-i-1;j++){
      str+='*'
    }
    space += 2;
    str+='\n'
  }
 
  let spaces = 2*n-2
  for(let i = 0;i<n;i++){
    //stat
    for(let j=0;j<=i;j++){
      str+='*'
    }
    //spaces
    for(let j=0;j<spaces;j++){
      str+=' '
    }
    ///star
    for(let j=0;j<=i;j++){
      str+='*'
    }
    spaces -= 2;
    str+='\n'
  }
  return str
}

function pattern20(n){
  let str = ''
  let space = 2*n-2
  for(let i=1;i<=n;i++){
    //num
    for(let j=1;j<=i;j++){
         str+='*'
    }
    //spaces
    for(let j=1;j<=space;j++){
      str+=' '
    }

    //num
    for(let j=1;j<=i;j++){
      str+='*'
    }
    str+='\n'
    space -= 2
  }
  
  let spaces = 2
  for(let i=0;i<=n-1;i++){
    //num
    for(let j=1;j<=n-i-1;j++){
      str+='*'
    }
   //  space
    for(let j=0;j<spaces;j++){
      str+=' '
    }
 
    for(let j=1;j<=n-i-1;j++){
      str+='*'
    }
    str+='\n'
    spaces +=2
  }
  console.log(str)
}


pattern20(5)

