// 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
//
// 例如，输入 emoji.png，返回 .png。

const extname = (filename) => {
    if(!filename.includes('.') || filename.indexOf('.') == 0) {
        return '';
    }
    let len = filename.length;
    let index = filename.lastIndexOf('.');
    return filename.substring(index, len);
}

console.log(extname('abs.jpg'));