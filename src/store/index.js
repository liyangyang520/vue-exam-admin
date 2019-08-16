import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '创建流程' // 文本内容
            },
            {
                text: '试卷库',
                type: 'st-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'msg',
                        text: '试卷列表'
                    },
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '创建试卷'
                    },
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '试卷分类'
                    }
                ]
            },
            {
                text: '试题库',
                type: 'st-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'msg',
                        text: '试题列表'
                    },
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '创建试题'
                    },
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '试题分类'
                    }
                ]
            },
            {
                text: '学生试卷',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'msg',
                        text: '试卷成绩'
                    },
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '统计分析'
                    }
                ]
            },
            {
                text: '用户管理',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'classmessage',
                        text: '班级管理'
                    },
                    {
                        type: 'ios-grid',
                        name: 'student',
                        text: '学生用户管理'
                    },
                ]
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    }
})

export default store