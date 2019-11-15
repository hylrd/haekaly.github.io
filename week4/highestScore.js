function highestScore (students) {
    var temp = [];
    for(var i = 0; i < students.length; i++){// break down to ['dimitri', 90, 'foxes']
        temp.push([]);
        temp[i].push(students[i].name);
        temp[i].push(students[i].score);
        temp[i].push(students[i].class);
    }
    
    var temp2 = [];
    var objScore = {};
    for(var i = 0; i < temp.length; i++){// breakdown to each classes
        if(temp2.length === 0){
            temp2.push(temp[i][2]);
        }
        else{
            if(! temp2.includes(temp[i][2])){
                temp2.push(temp[i][2]);
            }
        }  
    }
    console.log(temp2);
    
    for(var h = 0; h < temp2.length; h++){
        objScore[temp2[h]] = {};
        var temp3 = [];
        for(var l = 0; l <= temp.length - 1; l++){// max score
            if(temp2[h] === temp[l][2]){
                temp3.push([temp[l][0], temp[l][1]]);
            }
        }
        var temp5 = "";
        var temp6 = 0;
        var temp4 = temp3[0][1];
        for(var k = 0; k < temp3.length; k++){  
            if(temp3[k][1] >= temp4){
                temp4 = temp3[k][1];
                temp6 = k;  
            }
        }
        temp5 = temp3[temp6][0]
        objScore[temp2[h]].name = temp5;
        objScore[temp2[h]].score = temp4;
    }
    console.log(temp);
    console.log(temp2);
    console.log(temp3);
    console.log(temp4);
    console.log(temp5);
    console.log(temp6);
    // return objScore;
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
  
//   {
//     foxes: { name: 'Alexander', score: 100 },
//     wolves: { name: 'Alisa', score: 76 },
//     tigers: { name: 'Viktor', score: 80 }
//   }
  
  
console.log(highestScore([])); //{}
Collapse



