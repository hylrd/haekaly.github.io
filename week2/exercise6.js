/*1. Melakukan Looping Menggunakan While

var word1 = 'i love coding';
var word2 = 'i will become a fullstack developer';
var index = 0;

console.log('LOOPING PERTAMA')
while (index <= 20){
  index++;
  if(index % 2 === 0){
  
  console.log(index + " " + word1);}

};

console.log('LOOPING KEDUA')
while (index >= 0){
  index--;
  if(index % 2 === 0){
  
  console.log(index + " " + word2);}

};
*/

/*2. Melakukan Looping Menggunakan For

var word1 = 'i love coding';
var word2 = 'i will become a fullstack deeloper';
var index = 0;

console.log('LOOPING PERTAMA')
for(index = 0; index <= 20; index++){
  console.log(index + " " + word1);
};

console.log('LOOPING KEDUA')
for(index = index - 1; index >= 0; index--){
  console.log(index + " " + word2);
};
*/

3. Angka Ganjil dan Genap

console.log('LOOPING PERTAMA')
for(var i = 0; i <= 100; i++){
  if( i%2 === 0){
    console.log(i + " genap")
  }else{
    console.log(i + " ganjil")
  }
};

for(var i = 0; i<=100; i += 2){
 if( i === 0){
    
  }else if( i %3 === 0){
    console.log(i + " 3 kelipatan 3");
    }
};

for(var i = 0; i<=100; i += 5){
   if( i === 0){
    
  }else if( i %6 === 0){
    console.log(i + " 3 kelipatan 3");
    }
};

for(var i = 0; i<=100; i += 9){
  if( i === 0){
    
  }else if( i %10 === 0){
    console.log(i + " 3 kelipatan 3");
    }
};
