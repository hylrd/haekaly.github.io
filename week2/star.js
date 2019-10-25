function stars(n){
    var str = '';
    for(var i=1; i<=n; i++){
        for(var k=1; k<=n-i; k++){
            str += " ";
    }
        for(var j=0; j<i; j++){
            str += "* ";

 }
        console.log(str);
        str = "";
    }
}
//stars(5);

function stars2 (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= (i - 1); j++) {
      row += ' ';
    }

    for (var j = 1; j <= (height - i + 1); j++) {
      row += '* ';
    }
        
    console.log(row);
  }
}

stars2(3);