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

console.log(pattern10(4))