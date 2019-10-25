/*var word= 'wow JavaScript is so cool';
var temp = "";
var arr = [];
for (i=0; i< word.length; i++){
  if(word[i] !== " "){
    temp += word[i];
    if(word[i] === word[word.length - 1]){
      arr.push(temp);
      temp = "";
    }
  }
  else if(word[i] === " "){
    arr.push(temp);
    temp = "";
  }
}

console.log(arr);
//



var word = 'wow JavaScript is so cool';

var temp = '';
var index = 0;

while (index < word.length){
  if (word[index] === ' '){
    console.log(temp);
    temp = ""
  } else{
    temp = temp + word[index];
  }

  if( index == word.length - 1){
    console.log(temp);
  } 

  index++
};

console.log(word.length)


