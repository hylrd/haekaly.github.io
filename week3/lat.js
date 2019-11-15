function baris(str, num){
    var newstr = "";
    var temp = "";
    var index= 0;

    for (var i=0; i<str.length; i++){
      if (str[i] !== " "){
        newstr += str[i]
      }
    };

    for(var j=0; j<newstr.length; j++){
      index++
      if(index === num){
        temp += newstr[j]
        temp += "\n"
        index=0;
      }else{
        temp += newstr[j]
      }
    }

  return temp;

}; 
console.log(baris("HALO HALO BANDUNG LAUTAN API", 3));
/*
HAL
OHA
LOB
AND
UNG
LAU
TAN
API
*/
console.log(baris("INDONESIA TANAH AIR KU TANAH TUMPAH DARAHKU", 7));
/*
INDONES
IATANAH
AIRKUTA
NAHTUMP
AHDARAH
KU
*/
console.log(baris("HTML CSS JAVASCRIPT", 10));
/*
HTMLCSSJAV
ASCRIPT
*/
console.log(baris("HTML CSS JAVASCRIPT", 1));
/*
H
T
M
L
C
S
S
J
A
V
A
S
C
R
I
P
T
*/
console.log(baris("HACKTIV 8", 0)); // false

//

// CARI ANGKA YANG SAMA ANTARA PARAMETER 1 dan 2
function sama(num1, num2) {
  var dupl = [];
    for(var i=0; i<num1.length; i++){
      for (var j=0; j<num2.length; j++){
          if(num1[i] == num2[j]){
            dupl.push(num1[i])
          }
      }
    }
    return dupl;
}
console.log(sama([1, 2, 3], [5, 2, 1, 4])); 
// [1,2]
console.log(sama([10, 21, 30], [21, 20, 45, 80, 90, 10])); 
// [10, 21]
console.log(sama([4, 3, 2, 1, 9, 10, 7, 8, 0], [23, 8, 22, 4, 2, 1])); 
// [4, 2, 1, 8] 
console.log(sama([80, 7, 75, 11, 78, 77, 16], [11, 7, 5, 8, 3])); 

// 


function soal_z(str, num){
  //tulis code disini
}
console.log(soal_z("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5));
/*
ABCDE
 F
G
H
IJKLM
 N
O
P
QRSTU
 V
W
X
YZ
*/
console.log(soal_z("LOREMIPSUMDOLORSITAMET", 4));
/*
LORE
M
I
PSUM
D
O
LORS
I
T
AMET
*/
console.log(soal_z("1234567890!@#$%^&*1234567890!@#$%^&*", 8));
/*
12345678
    9
   0
  !
 @
#
$
%^&*1234
    5
   6
  7
 8
9
0
!@#$%^&*
