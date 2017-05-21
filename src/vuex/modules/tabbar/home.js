/**
 * 用来存储首页页面数据
 * @type {string}
 */




const state  = {
    // 本月业绩
	monthPerformance : {
		'value' : 1532763,
		'level' : 156
	},
	// 我的工作
	myWork : [
		{'name' : '销售任务', 'img' : 'work/销售任务.png', 'path' : '/aaa'},
		{'name' : '拜访管理', 'img' : 'work/拜访管理.png', 'path' : '/aaa'},
		{'name' : '信息协同', 'img' : 'work/信息协同.png', 'path' : '/aaa'},
		{'name' : '数据看板', 'img' : 'work/数据看板.png', 'path' : '/aaa'},
		{'name' : '信息录入', 'img' : 'work/信息录入.png', 'path' : '/aaa'},
		{'name' : '企业BPM',  'img' : 'work/企业BPM.png', 'path' : '/aaa'},
		{'name' : '企业邮箱', 'img' : 'work/企业邮箱.png', 'path' : '/aaa'},
		{'name' : '其他',     'img' : 'work/其他.png',     'path' : '/aaa'}
	],
	// 潜在客户值
	potential : 33,
	// 订单客户值
	order : 16,
	// 保有客户值
	retain : 24
};

// getters
// 只能获取state中的值，并且可以进行数据处理，但是不建议，因为view中需要获取最初始的state的状态
const getters = {

};

// actions
const actions = {

};

// mutations
// action会发送请求到此，在此对state的值做设置处理
const mutations = {

};

export default {
	state,
	getters,
	actions,
	mutations
};
