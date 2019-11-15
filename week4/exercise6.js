function digitPerkalianMinimum(angka) {
  // you can only write your code here!
var f = [];
  for (var i=0; i<angka; i++){
    if (angka%i == 0){
      f.push(String(i)+String(angka/i))
    }
  }

  if(f.sort(function(a,b){return a-b})[0] === undefined){
   return 2;
  } else {
   return f.sort(function(a,b){return a-b})[0].length;
  }
  
  return f;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2 