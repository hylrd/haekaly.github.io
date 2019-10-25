

function konversiMenit(menit) {
    var jam
    var minute
    var minit;

    minute = menit % 60
    jam = (menit - minute)/ 60
    
    if(minute < 10){
       
       minit = "0"+ minute;
    }else{
        minit = minute;
    }



    return jam + ":" + minit;
}


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


