function targetTerdekat(arr) {
  var postO = [];
  var postX = [];
  var hasil = 0;
  var arrJ = [];

  for (var i=0; i<arr.length; i++){
    if(arr[i] == "o"){
      postO.push(i);
    }else if(arr[i] == "x"){
      postX.push(i);
    }

  }
  if(postX == 0){
    return 0;
  }else{
  for(var j=0; j<postX.length; j++){
    if(postX[j] > postO[0]){
      arrJ.push(postX[j]-postO[0])

    }else if (postX[j]< postO[0]){
      arrJ.push(postO[0]-postX[j])
    }
  }
}

  var min = arrJ[0]
  for(var k=0; k<arrJ.length; k++){
    if(min > arrJ[k+1]){
     min ="";
      min += arrJ[k+1]
  
  }}
  

  return min;
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2