// / CARI NEIGHBOR TERDEKAT 1 STEP UNTUK MASING-MASING STRING YANG DITEMUKAN
function findNeighbors(arr){
    // TULIS KODEMU DISINI

    var str = [];
    var luaran = {};
    var temp = [];


  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
      temp = []
       if (typeof arr[i][j] == 'string'){
      // str.push(arr[i][j]);

      if(arr[i-1] !== undefined && arr[i-1][j-1] !== undefined){
        temp.push(arr[i-1][j-1]) //diagonal kiri atas
      }
       if (arr[i-1] !== undefined && arr[i-1][j] !== undefined){
       temp.push(arr[i-1][j])//atas
      }
     
      if(arr[i-1] !== undefined && arr[i-1][j+1] !== undefined){
        temp.push(arr[i-1][j+1])//diagonal kanan atas
      }
       if (arr[i][j-1] !== undefined){
        temp.push(arr[i][j-1])//kiri
      }
      if (arr[i][j+1] !== undefined){
       temp.push(arr[i][j+1])//kanan
      }

      if(arr[i+1] !== undefined && arr[i+1][j-1] !== undefined){
        temp.push(arr[i+1][j-1])//diagonal kiri bawah
      }

      if (arr[i+1] !== undefined && arr[i+1][j] !== undefined){
       temp.push(arr[i+1][j])//bawah
      }
     
      if(arr[i+1] !== undefined && arr[i+1][j+1] !== undefined){
        temp.push(arr[i+1][j+1])//diagonal kanan bawah
      }
   

      luaran[arr[i][j]] = temp
    }
    //can also be loop
    } 
  }


  return luaran
}

console.log(findNeighbors([
    [456, 871, 670, 122],
    [980, "A", 678, 231],
    [564, 671, 984, 776],
    [100, 203, "B", 156]
]));
/* OUTPUT:
{
    A: [456, 871, 670, 980, 678, 564, 671, 984],
    B: [671, 984, 776, 203, 156]
}
*/
console.log(findNeighbors([
    [456, 871, 670, "X"],
    [980, 564, 780, 231],
    ["Y", 671, "Z", 776],
    [100, 203, 122, 156]
]));
/* OUTPUT:
{
    X: [670, 780, 231],
    Y: [980, 564, 671, 100, 203],
    Z: [564, 780, 231, 671, 776, 203, 122, 156]
}
*/
console.log(findNeighbors([
    ["I", 871, 670, "J"],
    [980, 564, 780, 231],
    [456, 671, 980, 776],
    [100, 203, 122, "K"]
]));
/* OUTPUT:
{ 
    I: [ 871, 980, 564 ],
    J: [ 670, 780, 231 ],
    K: [ 980, 776, 122 ] 
}
*/