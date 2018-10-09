function request (param) {
    return Promise.resolve()
        .then(function () {
            var xhr = new XMLHttpRequest();
 
            xhr.open('GET', 'http://google.co.kr/', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    return Promise.resolve(xhr.response);
                }
            };
            xhr.send(null);
        });
}
 
Promise.resolve()
    .then(request)
    .then(result => {
        console.log('ok');
        console.log(result);
    });

/*
위 코드는 http://google.co.kr에 GET 요청을 보낸 뒤 받아서 결과를 
텍스트로 출력하는 예제입니다. 

Promise 안에서 readyState와 status를 확인해서 
Promise.resolve()를 리턴하므로 얼핏 보면 돌아갈 것 같습니다만... 
제대로 동작하지 않습니다. 콘솔에 찍히는 result는 undefined 입니다.

request() 함수에서 xhr.send() 를 실행하면 
해당 컨텍스트에서의 작업은 끝나고 Promise 컨텍스트도 종료됩니다. 
xhr이 완료되었을 때 반환하는 객체를 받을 타이밍에는 이미 이전 함수가 끝나있기 때문이죠.

*/