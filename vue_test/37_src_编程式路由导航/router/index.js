// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 先把VueRouter类的push方法先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push方法
/**
 * 
 * @param {*} location 告诉原来的push方法，路由往哪里跳转（传递哪些参数）
 * @param {*} resolve 成功的回调
 * @param {*} reject 失败的回调
 * 
 */
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    /**
     * this:此处this的上下文指向是VueRuoter类；
     * origingPush()直接调用时，this指向为location,我们需要保证调用原来的push方法时其this上下文指向为VueRouter,所以此处需要改变origingPushdethis指向；
     * call||applay的区别
     * 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
     * 不同点：call传递参数用 , 号隔开，aoolay传递参数用数组
     */
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}

// 重写replace方法
/**
 * 
 * @param {*} location 告诉原来的push方法，路由往哪里跳转（传递哪些参数）
 * @param {*} resolve 成功的回调
 * @param {*} reject 失败的回调
 * 
 */
 VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    /**
     * this:此处this的上下文指向是VueRuoter类；
     * origingReplace()直接调用时，this指向为location,我们需要保证调用原来的push方法时其this上下文指向为VueRouter,所以此处需要改变origingPushdethis指向；
     * call||applay的区别
     * 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
     * 不同点：call传递参数用 , 号隔开，aoolay传递参数用数组
     */
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'detail/:id?/:title?',
							component:Detail,

							//props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
							// props:{a:1,b:'hello'}

							//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
							// props:true

							//props的第三种写法，值为函数
							props($route){
								return {
									id:$route.params.id,
									title:$route.params.title,
									a:1,
									b:'hello'
								}
							}

						}
					]
				}
			]
		}
	]
})
