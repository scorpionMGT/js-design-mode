
// 发布者
// 创建一个新的可观察的对象，有三个方法subscriberCustomer，deliver，unSubscriberCustomer
var Publisher = new Observable


// 订阅者订阅报纸
var Subscriber = function (news) {

}

//发布者登记订阅的用户，用一个订阅者作为回调函数参数
Publisher.subscriberCustomer(Subscriber)

//发布者派发
Publisher.deliver("extre extre read all about it")

// 发布者取消登记订阅的用户，用一个订阅者作为回调函数参数
Publisher.unSubscriberCustomer(Subscriber)


var NewYorkTimes = new Publisher

var AustinHerald = new Publisher

var Sfchronicle = new Publisher
