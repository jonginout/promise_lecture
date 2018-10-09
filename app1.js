var func1 = function(param){ return param*2; }
var func2 = function(param){ return param*3; }
var func3 = function(param){ return param*4; }
  
var start = 1;
console.log(func3(func2(func1(start)))); // 24

