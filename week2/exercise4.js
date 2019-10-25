var tanggal = 24;
var bulan = 7;
var tahun = 1997;


if (tanggal > 31 || tanggal < 0){
  console.log("tanggal must less than 31 and more than 0");
}else if(bulan > 12 || bulan < 0){
console.log("bulan must less than 31 and more than 0");
}else if(tahun > 2200 || tahun < 1900){
console.log("tahun must less than 31 and more than 0");
}else{

switch(bulan){
  case 1:
    bulan = "januari"
  break;
  case 2:
      bulan = "februari"
    break;
  case 3:
     bulan = "maret"
    break;
  case 4:
     bulan = "april"
    break;
  case 5:
     bulan = "mei"
    break;
  case 6:
     bulan = "juni"
     break;
       case 7:
    bulan = "juli"
  break;
  case 8:
      bulan = "agustus"
    break;
  case 8:
     bulan = "september"
    break;
  case 10:
     bulan = "oktober"
    break;
  case 11:
     bulan = "november"
    break;
  case 12:
     bulan = "desember"
     break;
     
};
 console.log(tanggal+ " "+ bulan + " " + tahun);
}
 