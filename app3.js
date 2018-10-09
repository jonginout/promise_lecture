// new Promise 패턴을 사용
// 함수 선언 코드가 좀 길어지긴 했지만 함수 사용이 더 명확


function func1 (param) {
    return new Promise(function(resolve, reject) {
        resolve(param*2);
    });
}
function func2 (param) {
    return new Promise(function(resolve, reject) {
        resolve(param*3);
    });
}
function func3 (param) {
    return new Promise(function(resolve, reject) {
        resolve(param*4);
    });
}
 
var start = 1;
func1(start)
    .then(func2)
    .then(func3)
    .then(result => {
        console.log(result); // 24
    });

