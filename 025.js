// 李雷向韩梅梅求婚，韩梅梅说过一段时间（20~50ms）再回复他。
//
// 完成 proposeToMissHan 函数，会传入一个布尔值参数 isOK，用来预先设定是否答应李雷的求婚。这个函数会返回一个 Promise，一段时间（20～50ms）以后，根据  isOK 参数，韩梅梅可能会说字符串 ok 答应李雷，也可能说字符串 no 来拒绝（reject）李雷。
//
// 你只需要完成 proposeToMissHan 函数的编写。

const proposeToMissHan = (isOK) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOK == 'ok') {
                resolve('yes');
            } else {
                reject('no');
            }
        }, randomTimer(Math.random() * 50))
    })
}

const randomTimer = (time) => {
    if(time < 20 || time > 50) {
        randomTimer(Math.random() * 50);
    }
    return time;
}

proposeToMissHan('ok')