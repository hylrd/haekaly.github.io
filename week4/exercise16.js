function graduates (students) {
  
  var obj = {};

  for (var i=0; i<students.length; i++){
    var kelas = students[i].class
    if (obj[kelas] === undefined && students[i].score > 75){
      obj[kelas] = []
      var temp = {}
      temp.name = students[i].name
      temp.score = students[i].score

      obj[kelas].push(temp)
      // console.log(temp)
      // arr.push(obj[kelas])
      // obj.push(students[i].score)
    }else if (students[i].score > 75) {
      // var kelasLagi = {};
      //  obj[kelas].name = students[i].name;
      // obj[kelas].score = students[i].score;
      var temp = {}
      temp.name = students[i].name
      temp.score = students[i].score

      obj[kelas].push(temp)
    }
  }

  return obj

}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}