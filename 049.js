// pause 函数可以让一个函数暂停运行一段时间（ms）以后继续运行。例如：

async function run () {
    console.log('Hello')
    await pause(1000) // 续一秒
    console.log('World') // 一秒以后继续运行
}

const pause = async (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

run();