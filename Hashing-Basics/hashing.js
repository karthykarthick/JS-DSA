// count elements in an array using brute force method

function hashing(arr,num){
  let count = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==num) count++
  }
  return count
}

function main(){
    let arr = [1,2,1,3,2]
    
    console.log(hashing(arr,10))
}
main()