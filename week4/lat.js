// FUNCTION AKAN MENGEMBALIKAN OUTPUT KOTA TERBANYAK, PLATFORM TERBANYAK DAN LINK WEBSITE TERBANYAK (COBA GUNAKAN TEST CASE LAIN UNTUK MENDAPAT OUTPUT YANG BERBEDA)
function topVisitor(arrOfObject){
    // tulis kodemu disini
    var kt = [];
    var pl = [];
    var ln = [];
    var modus = '';
     
  var luar = []
  var result = []
  
    for (var i=0; i<arrOfObject.length; i++){
      kt.push(arrOfObject[i]['kota'])
      pl.push(arrOfObject[i].platform)
      ln.push(arrOfObject[i].link)
    }

    luar.push(kt, pl, ln)
    // console.log(luar)

    for (var h=0; h<luar.length; h++){
      var panjang = luar[h]
      
      var max = 0;// dikosongkan utk array berikutnya

      for (var j=0; j<panjang.length; j++){
        var muncul =0; //dikosongkan utk jumlah berikutna
        for(var k=0; k<panjang.length; k++){
          // console.log("panjang[j]: ", panjang[j], " j: ", j)
          // console.log("panjang[k]: ", panjang[k], "k: ", k)
          // console.log("=================")
          if(panjang[j] == panjang[k] && j !== k){
            // console.log("masuk if")
              muncul++
              if(muncul>max){
                max = muncul
                modus = panjang[j]
              } 
          }
          // console.log("selesai if")
       }
      }

      result.push(modus)
    }

    var luaran = {}
    luaran.kota = result[0]
    luaran.platform = result[1]
    luaran.lin = result[2]

    
    // console.log(result)

    return luaran
    
}
console.log(topVisitor([
    {
        kota: "jakarta",
        platform: "pc",
        link: "/article"
    },
    {
        kota: "bandung",
        platform: "android",
        link: "/home"
    },
    {
        kota: "jakarta",
        platform: "mac",
        link: "/home"
    },
    {
        kota: "surabaya",
        platform: "ios",
        link: "/contact"
    },
    {
        kota: "makassar",
        platform: "ios",
        link: "/article"
    },
    {
        kota: "aceh",
        platform: "pc",
        link: "/blog"
    },
    {
        kota: "jakarta",
        platform: "android",
        link: "/home"
    },
    {
        kota: "surabaya",
        platform: "pc",
        link: "/contact"
    },
]));

// {
//   jakarta: {
  
//   },
//   bandung: 1,
//   surabaya: 2,
//   makassar: 1,
//   aceh: 1
// }

/*
OUTPUT
{
    kota: "jakarta",
    platform: "pc",
    link: "/home"
}
*/