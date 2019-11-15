function changeVocals (str) {
  //code di sini
  var voc = 'aiueo'
  var abjad = 'abcdefghijklmnopqrstuvwxyz'
  var luaran = '';

  for (var i=0; i<str.length; i++){
          

    if (str[i] == 'a' ){
      luaran += 'b'
    }else if( str[i] == 'A'){
      luaran += 'B'
    }else if(str[i] == 'i'){
      luaran += 'j'
    }else if(str[i] == 'u'){
      luaran += 'v'
    }else if(str[i] == 'e'){
      luaran += 'f'
    }else if(str[i] == 'o'){
      luaran += 'p'
    }else{
      luaran += str[i]
    }

    // luaran += str[i]    
    // for (var j=0; j<voc.length; j++){
    //   if (str[i] == voc[j]){
    //     for (var k=0; k<abjad.length; k++){
    //       if(str[i] == abjad[k]){
    //     // console.log(abjad[k])

    //         luaran += abjad[k+1];
    //       }
    //     }
    //   }

    // }
  }
  return luaran
}

function reverseWord (str) {
  //code di sini
  var luaran = ''
  for (var i=str.length-1; i>=0; i--){
    luaran += str[i]
  }
  return luaran
}

function setLowerUpperCase (str) {
  //code di sini
  var luaran = '';
  for (var i=0; i<str.length; i++){
    if(str[i] == str[i].toUpperCase()){
      luaran += str[i].toLowerCase()
    }else if (str[i] == str[i].toLowerCase()){
      luaran += str[i].toUpperCase()
    }
  }
  return luaran
}

function removeSpaces (str) {
  //code di sini
  var luaran = '';
  var temp = '';
  
  for (var i=0; i<=str.length; i++){
   
    if (str[i] == ' ' || i == str.length){
      luaran += temp;
      temp = '';
    }else{
       temp += str[i]
    }
  }
  return luaran
}

function passwordGenerator (name) {
  //code di sini
if (name.length < 5 ){
  return 'minimal 5 char'
}else{
  var result = changeVocals (name);
  // console.log(changeVocals(name))
  result = reverseWord(result)
  // console.log(reverseWord(result))

  result = setLowerUpperCase(result);
  // console.log(setLowerUpperCase(result))

  result = removeSpaces(result)
  // console.log(removeSpaces(result))
  }

  return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'