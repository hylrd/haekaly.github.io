function checkAB(num) {
  // you can only write your code here!
  var arr = num.split("");
  var arr2 = []

  for (var i=0; i<arr.length; i++){
    if (arr[i] !== " ")
    arr2.push(arr[i])
  };

  //opsi 1
  for (var j=0; j<arr.length; j++){
    if (arr2[j] == "a"){
      if (arr2[j+1] == "b" || arr2[j+2] == "b" || arr2[j+3] == "b"){
        return true
      }else {
        return false;
      }
    }
  }

  // //opsi 2
  // for(var a=0;a<arr2.length;a++){
  //       if(arr2[a]==='a'){
  //           for(var b=a;b<=(a+3);b++){
  //               if(arr2[b]==='b'){
  //                   return true
  //               }
  //           }
  //       }
  //   }
  //   return false;


}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false