function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log((str += "*"));
    }
    console.log((str += " \n"));
  }
}

function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log((str += "*"));
    }
    console.log((str += "\n"));
  }
}

function pattern3(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log((str += j));
    }
    console.log((str += "\n"));
  }
}

function pattern4(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log((str += i));
    }
    console.log((str += "\n"));
  }
}

function pattern5(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      console.log((str += "*"));
    }
    console.log((str += "\n"));
  }
}

function pattern6(n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      console.log((str += j));
    }
    console.log((str += "\n"));
  }
}

function pattern7(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 1; j <= n - i; j++) {
      console.log((str += " "));
    }
    //star  1,3,5,7,9 n-5, i - 01234
    for (let j = 1; j <= 2 * i + 1; j++) {
      console.log((str += "*"));
    }
    console.log((str += "\n"));
  }
}

function pattern8(n){
    let str = ''
    
}

pattern7(5);
