<template>
    <Tree :data="data4" show-checkbox multiple></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        title: '机械制图学生管理',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: '机械工程学院',
                                expand: true,
                                children: [
                                    {
                                        title: '机械工程学院1801班',
                                        disabled: true
                                    },
                                    {
                                        title: '机械工程学院1802班'
                                    }
                                ]
                            },
                            {
                                title: '材料科学与技术学院',
                                expand: true,
                                children: [
                                    {
                                        title: '材料科学与技术学院1803班',
                                        checked: true
                                    },
                                    {
                                        title: '材料科学与技术学院1804班'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>