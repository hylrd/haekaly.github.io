function dataHandling2 (input){

  input.splice(4,5,"Pria", "SMA Internasional Metro");
  console.log(input);

  var res = input[3].split("/");
  var bulan = [];
  bulan.push(res[1]);
  
  switch(bulan[0]){
  case '01':
    bulan = "januari"
  break;
  case '02':
      bulan = "februari"
    break;
  case '03':
     bulan = "maret"
    break;
  case '04':
     bulan = "april"
    break;
  case '05':
     bulan = "mei"
    break;
  case '06':
     bulan = "juni"
     break;
       case '07':
    bulan = "juli"
  break;
  case '08':
      bulan = "agustus"
    break;
  case '08':
     bulan = "september"
    break;
  case '10':
     bulan = "oktober"
    break;
  case '11':
     bulan = "november"
    break;
  case '12':
     bulan = "desember"
     break;
     }

  console.log(bulan)
 
  console.log(res.sort(function(a, b){return b-a}));

  console.log(res.join("-"));


  var nama = input[1].toString();

  console.log(nama.slice(0,14));
}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));
