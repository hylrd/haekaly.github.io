function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  var stoksepatu = listBarang[0][2]
  var stokzoro = listBarang[1][2]
  var stokunik = listBarang[2][2]

  var belispt = []
  var belizoro = []
  var beliunik = []

  var arr = [];

  if(shoppers.length < 1){
    return "[]"
  }


  for (var i=0; i<shoppers.length; i++){
    if (shoppers[i].product === 'Sepatu Stacattu'){
      if(stoksepatu >= shoppers[i].amount){
      belispt.push(shoppers[i].name)
      stoksepatu -= shoppers[i].amount
      }
    }else if(shoppers[i].product === 'Baju Zoro'){
      if(stokzoro >= shoppers[i].amount){
         belizoro.push(shoppers[i].name)
      stokzoro -= shoppers[i].amount
      }
    }else if(shoppers[i].product === 'Sweater Uniklooh'){
      if (stokunik >= shoppers[i].amount){
         beliunik.push(shoppers[i].name)
      stokunik -= shoppers[i].amount
      }
    }
  }

  var pembeli;
  var sisa;
  var profit;

    for (var j=0; j<listBarang.length; j++){
      if(listBarang[j][0] === 'Sepatu Stacattu'){
        pembeli = belispt
        sisa = stoksepatu
        profit = (listBarang[j][2] - stoksepatu) * listBarang[j][1]
      }else if(listBarang[j][0] === 'Baju Zoro'){
        pembeli = belizoro
        sisa = stokzoro
        profit = (listBarang[j][2] - stokzoro) * listBarang[j][1]
      }if(listBarang[j][0] === 'Sweater Uniklooh'){
        pembeli = beliunik
        sisa = stokunik
        profit = (listBarang[j][2] - stokunik) * listBarang[j][1]
      }
    
    
    var obj = {}

    obj.product = listBarang[j][0]
    obj.shoppers = pembeli;
    obj.leftOver = sisa;
    obj.totalProfit = profit;
    arr.push(obj)

    }

  return arr

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]