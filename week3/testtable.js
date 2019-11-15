var max = 3
var result = '00000'
var member = 'abcdefghijklmnop'
// //build column
// for (var i = 0; i < max; i++) {
//     result += '| '+'col '+i
// }
// // console.log('\n')

// //build row
// for (var j = 0; j < max; j++) {
//     result += '\n'+'row '+j
// }


//build member
for (var i = 0; i < max; i++) {
    for (var j = 0; j < max; j++) {
        for (var k = 0; k < member.length; k++) {
            // if(3*i+j === k){
                result [i][j] += '*'
            // }
        }
    }
}

console.log(result);