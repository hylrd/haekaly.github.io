function kaliTerusRekursif(angka) {
  // you can only write your code here!
  // console.log(angka)
  angka = angka.toString();

  if (angka.length == 1){

      return Number(angka)

  }else{
    // console.log(angka.slice(0))
    var result = Number(angka[0]) * kaliTerusRekursif(Number(angka.slice(1)));
    return kaliTerusRekursif(result)


  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6