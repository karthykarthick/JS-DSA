function rev(arr,start,end){
    if(start < end){
        swap(arr,start,end)
        rev(arr,start+1,end-1)
    }
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function print(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
function main(){
    let arr = [1,2,3,4,5]
    rev(arr,0,arr.length-1)
    print(arr)
}

main()