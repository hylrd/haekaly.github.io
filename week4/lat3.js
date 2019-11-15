/*
​
 *  =======================
 *  RAZIA GANJIL GENAP
 *  =======================
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
 * yang tidak sama dengan aturan ganjil genap
 *
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 */



function kenaRazia(date, data) {
    //write your code here
    
    var luaran = []
    
    // var plat ='';
    var platnomer = ''
    var tanggal = '';
    var lokasi = [ 'Gajah Mada', 'Hayam Wuruk', 'Sisingamangaraja', 'Panglima Polim', 'Fatmawati', 'Tomang Raya']
    var arr = []


    if (date%2 !== 0 ){
       tanggal = 'ganjil'
     }else{
       tanggal = 'genap'
      }

    for (var i =0; i<data.length; i++){


      //if bukan motor

     var plate =  data[i].plat.split(" ")



      // console.log(plate[1][plate[1].length-1])
    //  arr.push(plate[1].length-1);
     
      if(plate[1][plate[1].length-1]%2 !== 0){
        platnomer = 'ganjil';
      }else{
        platnomer = 'genap';        
      }
      var tilang = 0;
      if (tanggal !== platnomer){
          for (var j=0; j<data[i].rute.length; j++){
            var luaranobj = {}
            
            
            for(var k=0; k<lokasi.length; k++)
            
            if (data[i].rute[j] == lokasi[k]){
              tilang++
              if (luaran.length > 0 && luaran[luaran.length - 1]['name'] === data[i]['name']) {
                luaran[luaran.length - 1]['tilang'] = tilang
              } else {
                luaranobj['name'] = data[i].name
                luaranobj['tilang'] = tilang
                luaran.push(luaranobj)
              }
            }
          }
      }


    }
    return luaran
  }
  
  console.log(kenaRazia(27, [{
    name: 'Denver',
    plat: 'B 2791 KDS',
    type: 'Mobil',
    rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
  },
  {
    name: 'Toni',
    plat: 'B 1212 JBB',
    type: 'Mobil',
    rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
  },
  {
    name: 'Stark',
    plat: 'B 444 XSX',
    type: 'Motor',
    rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
  },
  {
    name: 'Anna',
    plat: 'B 678 DD',
    type: 'Mobil',
    rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
  },
  ]))

  // [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]




