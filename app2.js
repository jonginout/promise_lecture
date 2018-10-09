var func1 = function(param, cb) { cb(param*2); }
var func2 = function(param, cb) { cb(param*3); }
var func3 = function(param, cb) { cb(param*4); }
 
var start = 1;
 
func1(start, result => {
    func2(result, result => {
        func3(result, result => {
            console.log(result); // 24
        });
    });
});


// func1(start, function(result){
//     func2(result, function(result){
//         func3(result, function(result){
//             console.log(result);
//         })
//     })
// })