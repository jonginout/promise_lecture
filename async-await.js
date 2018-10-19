var getJSON = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name : 'jongin',
                age : 10
            })        
        }, 1000)
    })
}
const makeRequest = ()=>{
    console.log(getJSON())
}
// const makeRequest = ()=>{
//     getJSON()
//     .then(data => {
//         console.log(data)
//     })
// }
makeRequest()
// 1초후 { name: 'jongin', age: 10 }

// const makeRequest1 = () => {
    // console.log(getJSON())
// }
// 이렇게 된다면 getJSON()이 끝나기도 전에 console.log()해 에러가 난다.

// 위 코드랑 같다
const makeRequest1 = async () => {
    console.log(await getJSON())
}
makeRequest1()
// .then(()=>{})

/*
1. 함수 앞에 async 라는 단어가 오게된다.
2. 오직 async로 정의된 함수 내부에서만 사용 가능 (await 자체를 독립적으로는 사용 불가능)
3. 모든 async함수는 암묵적으로 promise를 반환 (then, catch 사용가능)
4. await getJSON() 는 console.log 의 호출이 getJSON() promise가 resolve된 후에 일어나고, 그 후에 값을 출력할 것이라는 것을 의미한다.

*/