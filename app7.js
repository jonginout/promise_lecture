var name = 'jongin'

var wakeUp = ()=>{
    return 'wake UP!'
}

var eat = (food)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(!food) reject('no food!')
            resolve('eat '+food)    // 값 결정
        }, 1000);
    })
}

var sleep = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('sleep..')
        }, 2000);
    })
}


Promise.all([
    // 배열내 모든 값이 결정(resolve)될 때까지 기다린다.
    // 실행 자체는 순차적으로 한다.
    name,
    wakeUp(),
    eat('apple'),
    sleep()
])
.then(value=>{
    // all 안에 있는 것들이 모두 resolve되어 전부 끝나면
    console.log(value);
})
.catch(err=>{
    // all 안에 있는 요소 중 어느하나라도 거절(reject)하면 즉시 거절
    console.log(err);
})
// [ 'jongin', 'wake UP!', 'eat apple', 'sleep..' ]