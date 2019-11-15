// URUTKAN ARRAY OF OBJECT BERDASARKAN value properties "id" dan ada berapa step pergantian posisi agar menjadi urut.
// Hanya boleh pakai built-in function .push()
// CATAT BERAPA MENIT WAKTU YANG DIPERLUKAN UNTUK MENGERJAKAN SOAL INI
function urutkanId(arrObj){
    // tulis kodemu disini
    var temp = {}
    var luaran = [];
    var step = 0;
    var a = arrObj




    var done = true;
    while (done) {
      done = false; //to stop the loop
      for (var i = 1; i < a.length; i++) {
        if (a[i - 1].id > a[i].id) {
          done = true;
          var tmp = a[i - 1].id;
          a[i - 1].id = a[i].id;
          a[i].id = tmp;
          step++
        }
      }
    }

    if (step == 0){
      return "sudah urut"
    }else{
    a.push("step: " + step)
    return a} 
}
console.log(urutkanId(
    [
        {id: 129, value: "Budi"},
        {id: 765, value: "Andi"},
        {id: 345, value: "Jaka"},
        {id: 12, value: "Doni"},
        {id: 98, value: "Gunawan"},
        {id: 1003, value: "Satrio"},
        {id: 40, value: "Odin"}
    ]
));
/* OUTPUT:
[ 
    { id: 12, value: 'Doni' },
    { id: 40, value: 'Odin' },
    { id: 98, value: 'Gunawan' },
    { id: 129, value: 'Budi' },
    { id: 345, value: 'Jaka' },
    { id: 765, value: 'Andi' },
    { id: 1003, value: 'Satrio' },
    "Step: 12"
]
*/
console.log(urutkanId(
    [
        {id: 12, value: "Doni"},
        {id: 98, value: "Gunawan"},
        {id: 40, value: "Odin"},
        {id: 129, value: "Budi"},
        {id: 345, value: "Jaka"},
        {id: 765, value: "Andi"},
        {id: 1003, value: "Satrio"}
    ]
));
/* OUTPUT:
[ 
    { id: 12, value: 'Doni' },
    { id: 40, value: 'Odin' },
    { id: 98, value: 'Gunawan' },
    { id: 129, value: 'Budi' },
    { id: 345, value: 'Jaka' },
    { id: 765, value: 'Andi' },
    { id: 1003, value: 'Satrio' },
    "Step: 1"
]
*/
console.log(urutkanId(
    [
        { id: 12, value: 'Doni' },
        { id: 40, value: 'Odin' },
        { id: 98, value: 'Gunawan' },
        { id: 129, value: 'Budi' },
        { id: 345, value: 'Jaka' },
        { id: 765, value: 'Andi' },
        { id: 1003, value: 'Satrio' }
    ]
));
/* OUTPUT:
"SUDAH URUT BRO.. GAK PERLU SORTING"
*/
// Collapse




