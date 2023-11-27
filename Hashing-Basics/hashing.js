// count elements in an array using brute force method

function hashing(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) count++;
  }
  return count;
}

function main() {
  let arr = [1, 2, 1, 3, 2];

  console.log(hashing(arr, 10));
}
main();

//  using hashing

function hash(arr) {
  let hash = {};

  for (const element of arr) {
    if (hash[element]) hash[element]++;
    else hash[element] = 1;
  }

  console.log(hash);
}

function start() {
  let arr = [1, 2, 2, 1, 4];
  hash(arr);
}

start();

// characters

function charhash(arr){

  let hash = {}
  for(let i=0;i<arr.length;i++){
    if(hash[arr[i]]) hash[arr[i]]++
    else hash[arr[i]]=1
  }
  console.log(hash)

  let minKey = null
  let maxKey = null

  for(let key in hash){
    if(minKey === null || hash[key] < hash[minKey]){
      minKey = key
    }
    if(maxKey === null || hash[key]>hash[maxKey]){
      maxKey = key
    }
  }
  console.log(maxKey,minKey)
}



function end(){
  let arr = [2,2,3,4,4,2]
  charhash(arr)
}

end()