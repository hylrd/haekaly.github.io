function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
 
  var luaran = []

  for (var i=0; i<arrPenumpang.length; i++){
     var obj  = {}
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2]
    for (var j=0; j<rute.length; j++){
      if(arrPenumpang[i][1] == rute[j]){
         var naik = j
      }else if (arrPenumpang[i][2] == rute[j]){
        var turun = j
      }
    }
    var ongkos = (turun - naik) * 2000
  // console.log(naik)
  
  obj.bayar = ongkos
  luaran.push(obj) //agar supaya masing masing jadi object didalam array
  } 

  

  return luaran
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]