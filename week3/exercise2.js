function balikString(n){
  var reverse = "";
  for(var i=n.length-1; i>=0; i--){
    reverse += n[i]
  }
  return reverse;
  console.log(reverse);
}

console.log(balikString("hello world!"));