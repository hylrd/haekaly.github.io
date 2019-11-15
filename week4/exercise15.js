function highestScore (students) {
    // Code disini
    
  
    var kelasArr = [];
    var std = []
  
    var obj = {}
  
    //break to array
    for (var j=0; j<students.length; j++){
      var temp1 = []
      temp1.push(students[j].name);
      temp1.push(students[j].score);
      temp1.push(students[j].class);
      std.push(temp1)
    }
    
  
    //define each class in array and object(to pass value later)  
    for (var i=0; i<students.length; i++){
      var kelas = students[i].class

    // if (kelasArr.includes(students[i]) ){
    //   // obj[kelas].name = students[i].name;
    //   // obj[kelas].score = students[i].score;
    //   // console.log(kelasArr)
    // }else{
    //    kelasArr.push(students[i].class)
    //   // console.log(obj[kelas])
    //   obj[kelas] = {};
    // }
    //ATAU
     
      if (obj[kelas] === undefined ){
        kelasArr.push(students[i].class)
        // console.log(obj[kelas])
        obj[kelas] = {};
        
        // obj[kelas].name = students[i].name;
        // obj[kelas].score = students[i].score;
        // console.log(kelasArr)
      }
    }
  
  
    for (var i=0; i<kelasArr.length; i++){//loop to find the same class 
      var  kls = []
      // console.log(kelasArr);
      for (var j=0; j<std.length; j++){
        if (kelasArr[i] == std[j][2]){
          kls.push(std[j])
          var max = kls[0]
          for (var h=0; h<kls.length; h++){//loop to find highest score
            if (kls[h][1]>max[0][1]){
              max = kls[h]
            }
          }
        // console.log(kelas)
          
          for (var z=0; z<kelasArr.length; z++){ // pass highest score to the right class
            
           if (max[2] === kelasArr[z] ){
            //  console.log(max)
            obj[kelasArr[z]].name = max[0]
            obj[kelasArr[z]].score = max[1]
           }
          }
  
        }
  
         
      }
    }
  
    return obj
    
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));