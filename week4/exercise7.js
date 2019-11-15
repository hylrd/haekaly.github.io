function urutkanAbjad(str) {
  // you can only write your code here!
var luaran = ''
var array = [];
var min = str[0]

//split
    for (var i=0; i<str.length; i++){
      array.push(str[i])
    }


//bubble sort
    var done = true;
  while (done) {
    done = false;//to stop the loop
    for (var i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        done = true;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  //join
  for (var j=0; j<array.length; j++){
    luaran += array[j]
  }


  return luaran


  // atau 
  // return str.split('').sort().join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'