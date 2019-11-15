function sorting(arrNumber) {
  // code di sini
 
    var step = 0;
    var a = arrNumber;


    var done = true;
    while (done) {
      done = false; //to stop the loop
      for (var i = 1; i < a.length; i++) {
        if (a[i - 1] < a[i]) {
          done = true;
          var tmp = a[i - 1];
          a[i - 1] = a[i];
          a[i] = tmp;
          step++
        }
      }
    }
          // console.log(arrNumber)

  return a
}

function getTotal(arrNumber) {
  // code di sini
   var arr = arrNumber;
    var modus =0;
    var terbanyak = 0;
    var hn = arr[0];

    for (var i=0; i<arr.length; i++){
      if (arr[i] == hn){
        terbanyak++
      }
    }
    console.log(terbanyak);

  return 'angka paling besar adalah '+ hn +' dan jumlah kemunculan sebanyak ' +terbanyak+ ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  console.log(countHighest)

  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''