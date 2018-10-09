// 같은 내용을 Promise.resolve() 로 사용하면 아래와 같죠.

function func1 (param) {
    return Promise.resolve(param*2);
}
function func2 (param) {
    return Promise.resolve(param*3);
}
function func3 (param) {
    return Promise.resolve(param*4);
}
 
var start = 1;
func1(start)
    .then(func2)
    .then(func3)
    .then(result => {
        console.log(result); // 24
    });


/*
왠지 return new Promise() 보다 간결한 것 같습니다. 
new Promise 에서 받는 reject 를 처리하지 않는 경우에는 더욱 Promise.resolve() 패턴이 좋아 보입니다. 
그래서 저도 이런 식으로 사용을 대부분 하던 중에 문제가 생겼습니다.
*/