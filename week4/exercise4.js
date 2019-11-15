function cariModus(arr) {
  var modus =0;
  var muncul =0;
  var terbanyak = 0;

  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr.length; j++){
      if(arr[i] == arr[j] && i !==j){
        muncul++
        if(muncul > terbanyak){
          terbanyak = muncul
          modus =i
        }
      }
    }
  }

  if(modus == 0){
    return -1
  }
  // else if (muncul > arr.length){
    // return -1
  // }

  // console.log(muncul)


  var angkaSama = 0;
  for(var k = 0; k < arr.length; k ++) {
    angkaSama += arr[k];
    if(angkaSama/arr.length === arr[k]) {
      return -1;
    }
  }


  return arr[modus]


}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 1])); // -1