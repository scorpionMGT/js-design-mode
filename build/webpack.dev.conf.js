const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ip = require("ip")
module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index") // index 为chunk 名称
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].bundle.js", // name 为chunk 名称
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, //不处理node_modules下面的js文件
                include: "/src/", //处理src下面的js文件
                loader: "babel-loader",
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'js设计模式',
            filename: 'index.html', //生成的文件名称
            template: "index.html", // 使用根路径下的index.html做模板
            meta: {
                viewport: ' user-scalable=no, maximum-scale=1, minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            favicon: path.resolve(__dirname, "../static/img/agree.png"),
            minify: {
                collapseWhitespace: true,
            },
            inject: "head" //引入的脚本放在head头部标签中
        })
    ],
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "src")],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 别名，这是一个正则的写法，表示以vue结尾的，如import Vue from 'vue' 表示 import Vue from 'vue/dist/vue.esm.js'
            '@': path.resolve('src'),// 这也是为懒人服务的,import HelloWorld from '@/components/HelloWorld'这里的@其实就是代表src这个目录 
            '#': path.resolve('src/components') //import Table from '#/table'
        },
        extensions: ['.js', '.vue', "json"],//扩展名为.js,.vue,.json的可以忽略，如 import App from './app'，先在当前目录中找app.js，没有再找app.vue，没找到，再找.json，如果还没找到，报错
    },
    devServer:{
        contentBase:"./dist",//网站的根目录为 根目录/dist，如果没有指定，使用process.cwd()函数取当前工作目录
        port: 8023,
        host: ip.address(),
        open: true,
    }
}