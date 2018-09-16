function loading(src) {
    let promise = new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject("图片加载失败")
        }
        img.src = src
    })
    return promise
}
let src = "https://img4.mukewang.com/5b8f4702b0001e26c100010750.jpg";
let result = loading(src);

result.then((img) => {
    alert(`width: ${img.width}`)
    return img
}).then((img) => {
    alert(`height: ${img.height}`)
}).catch(error => {
    alert(`${error.message}`)
})