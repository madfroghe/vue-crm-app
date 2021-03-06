import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 登录页面
const Login                = resolve => require(['../views/login'], resolve);

// 主架构页面
const Framework            = resolve => require(['../views/framework'], resolve);

// tabbar主页面
const Home                 = resolve => require(['../views/tabbar/home'], resolve);
const Visit                = resolve => require(['../views/tabbar/visit'], resolve);
const Performance          = resolve => require(['../views/tabbar/performance'], resolve);
const Task                 = resolve => require(['../views/tabbar/task'], resolve);

// 更多应用
const Applications         = resolve => require(['../views/home/applications'], resolve);
// 拜访详情
const VisitDetails         = resolve => require(['../views/visit/details'], resolve);


export default new Router({
    routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/f',
			name: '框架',
			component: Framework,
			children: [
				{
					meta: { id: 1 },
					path: 'home',
					name: '首页',
					component: Home
				},
				{
					meta: { id: 2 },
					path: 'visit',
					name: '拜访',
					component: Visit
				},
				{
					meta: { id: 3 },
					path: 'performance',
					name: '业绩',
					component: Performance
				},
				{
					meta: { id: 4 },
					path: 'task',
					name: '任务',
					component: Task
				}
			]
		},
		{

			path: '/applications',
			name: '更多应用',
			component: Applications,
		},
        {
            path: '/visitDetails/:detailsId',
            name: '拜访详情',
            component: VisitDetails,
        },
  ]
})
