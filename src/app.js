import { getSingle } from "@/singletonPattern/index1.js"
import apply from "@/this_call_apply/apply"
import call from "@/this_call_apply/call"
import bind from "@/this_call_apply/bind"

import Vue from '@/prototype/index'
apply()
call()
bind()
let fn = function () {
    return '单体模式'
}
let fn1 = function () {
    return '单体模式'
}
let single = getSingle(fn)
let single1 = getSingle(fn1)

Vue.prototype.init = function () {
    let vm = this
}

let vue  = new Vue ()

vue.init()