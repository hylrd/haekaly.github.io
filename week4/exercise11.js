function shoppingTime(memberId, money) {
  // you can only write your code here!
  item = [["Sepatu Stacattu", 1500000], ["baju zoro", 500000], ["Baju H&N", 250000], ["sweater uniklooh", 175000], ["casing handphone", 50000]]

  var uang = money;
  var luaran = {};

  if (memberId == '' || memberId == undefined){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }else if (money < 50000){
    return "Mohon maaf, uang tidak cukup"
  }else{
    luaran["memberId"] = memberId
      luaran.money = money
      luaran.listPurchased = []
    for (var i=0; i<item.length; i++){
      // console.log(item[i])
      if(uang >= item[i][1]){
        uang -= item[i][1]
        luaran.listPurchased.push(item[i][0])
      }
    }
  }
  luaran.changeMoney = uang;
  return luaran
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja