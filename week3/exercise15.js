function groupAnimals(animals) {
var afirst =[];
var cfirst = [];
var kfirst = [];
var ufirst = [];
var zfirst = [];
var luaran = [];
var final = [];

  for(var i=0; i<animals.length; i++){
    switch (animals[i][0]) {
  case "a":
    afirst.push(animals[i])   
     break;
  case "c":
    cfirst.push(animals[i])  
    break;
  case "k":
    kfirst.push(animals[i])  
    break;
  case "u":
     ufirst.push(animals[i])  
    break;
  case "z":
    zfirst.push(animals[i]) 
    break;
  default:
  break;
}
  }

  luaran.push(afirst, cfirst, kfirst, ufirst, zfirst);
  
  for(var j =0; j<luaran.length; j++){
    if(luaran[j].length !== 0){
      final.push(luaran[j])
    }
  }
 return final;
  
  
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]