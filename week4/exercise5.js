function ubahHuruf(kata) {
  // you can only write your code here!
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var luaran = ''

      for (var i=0; i<kata.length; i++){
        for (var j=0; j<alpha.length; j++){
          if (kata[i] == alpha[j]){
            luaran += alpha[j+1]
          }
        }
      }

      return luaran;


}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu