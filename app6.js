// 이 코드는 new Promise()를 써서 이렇게 바뀌어야 합니다.


function request (param) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
 
        xhr.open('GET', 'http://google.co.kr/', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.response);
            }
        };
        xhr.send(null);
    })
}
 
Promise.resolve()
    .then(request)
    .then(result => {
        console.log('ok');
        console.log(result);
    });


/*

2번 라인에서 생성한 Promise 객체의 함수 실행 컨텍스트를 유지하기 위해 
Promise.resolve() 대신 new Promise()를 사용하고 

최종 콜백 지점인 11번 라인에서 resolve()를 실행해줍니다. 
기존의 callback 사용 방식과 비슷하다고 보면 간단합니다.




비슷하게 ajax 콜을 요청하거나 DB에서 데이터를 가져올 때와 같이 
async 함수를 감싸는 경우는 new Promise()를 사용하면 됩니다.

처음 Promise를 사용할 때는 왜 같은 흐름의 함수가 두 개로 제공될까 이상했는데, 
사용하다보니 return Promise.resolve()와 new Promise()는 사용 방법이 약간 다릅니다. 
return Promise.resolve()는 sync 로직 흐름에서, 
new Promise()는 sync는 물론, async 로직 흐름에서도 사용할 수 있습니다.



*/
    