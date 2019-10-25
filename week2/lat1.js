
/*
1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
    Contoh:
        angka 1-15: 123456789012345
        angka 1-21: 123456789012345678901
 
3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
    Contoh:
        angka 1-12: 12345*78901*345
4. Penjelasan:
    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 6, maka angka tersebut diganti dengan asterisk.
*/
​
//var size = 19 // OUTPUT: 12345*78901*34567*9
  //write your code here


/*

function deret(angka){
    var series1 = "";
    var series2 = "";
    var puluhan = "";
    var luaran = "";
    
    if(angka >= 10){
      puluhan = angka - 10;
      for(i=0; i<=puluhan; i++){
        if (i % 2 === 0 && i>0) {
          series1 += "#"
        }else{
        series1 += i;
      }}
      for(j=0; j<(angka-puluhan); j++){
        if (j % 2 === 0 && j>0) {
          series2 += "#"
        }else{
        series2 += j;
      }}
    }else if(angka <= 10) {
     for(j=0; j<=(angka-puluhan); j++){
        series2 += j;
      }
    }
    console.log(series1, "====")
    console.log(series2);
    
    luaran = series2 + series1;
    
    
    
      return luaran
    }
    
    deret(12);
    
    // if(luaran[k]%2 === 0|| luaran[k]%3 === 0){
    //   luaran = luaran + '#'  
    // } else {
      
    // }

    //atau



function deret(n){
var angka = 0;
var limit = 9;
var luaran = "";

for(var i=0; i<=n; i++){
  if (angka < limit) {
    if (angka % 2 === 0 && angka > 0) {
      luaran += '#'
    } else {
      luaran += angka
    }
    angka++
  } else {
    luaran += angka;
    angka = 0
  }
}


return luaran;
}

console.log(deret(12));



2. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
var i = "";
  if(s.length%2===0){
   i = s.length/2
   return (s[i-1])+(s[i])
}else {
  i = Math.floor(s.length/2)
   return s[i]
}

}

console.log(getMiddle("test"));