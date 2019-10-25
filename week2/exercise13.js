function xo(str) {
    var jumlahX = 0;
    var jumalahO = 0;
  for(var i = 0; i<str.length; i++){
      if(str[i] === "x"){
        jumlahX ++
      }else  {
          jumalahO ++
      };
  };
 // console.log(jumlahX);
  //console.log(jumalahO);
  if(jumlahX === jumalahO){
      
      return true;
  }else{
      return false;
  };
  
};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true    

