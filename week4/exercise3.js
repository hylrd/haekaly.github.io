function cariMedian(arr) {
  var luaran =0;

     if (arr.length%2 !== 0){
       luaran = arr[Math.floor(arr.length/2)]
     }else{
       luaran = (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2)-1]) /2
     }

  
  return luaran
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5