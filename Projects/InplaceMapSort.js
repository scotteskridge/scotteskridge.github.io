Function mapSort(arr){
var temp;
var i;
  while(i<arr.length){
    arr[arr[i]] = temp;
    arr[arr[i]] = arr[i];
    arr[i] = temp;
      if(arr[i] == i){
        i++
      }
  }



}

mapSort([2,3,5,1,4,0])
