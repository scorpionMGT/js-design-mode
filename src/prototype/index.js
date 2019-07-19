// 多态 一般适合解决多个if的情况

export const GoogleMap = {
    show () { // 对象方法第一种写法
        console.log('this.show.GoogleMap')
    }
}

export const BaiduMap = {
    show () { // 对象方法第二种写法
        console.log('this.show.BaiduMap')
    }
}


export const renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show()
    }
}

// renderMap(BaiduMap)
// renderMap(GoogleMap)