# 基础数据类型

## Function函数类型

function的属性，name返回函数的名字, length函数的参数的个数

``` 例子
function func (a, b) {
    func.name // func
    func.length // 2
}

```

### 参数arguments类数组，除了 length属性外，还有 callee 属性返回对应的原函数

### 立即执行函数 用圆括号

``` 立即执行函数

(function(){ /* code */ }());
// 分号必须保留，删除会报错

// 或者

(function(){ /* code */ })();
// 分号必须保留，删除会报错

```
