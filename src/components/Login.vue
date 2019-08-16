
<template>
    <div class="login-vue" :style="bg">
        <div class="container">
            <h3 class="title">教师管理系统</h3>
            <div class="input-c">
                <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount"/>
                <p class="error">{{accountError}}</p>
            </div>
            <div class="input-c">
                <Input type="password" v-model="pwd" prefix="md-lock" placeholder="密码" clearable @on-blur="verifyPwd"/>
                <p class="error">{{pwdError}}</p>
            </div>
            <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登录</Button>
            <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            account: 'admin',
            pwd: 'admin',
            accountError: '',
            pwdError: '',
            isShowLoading: false,
            bg: {}
        }
    },
    
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        verifyAccount(e) {
            if (this.account !== 'admin') {
                this.accountError = '账号为admin'
            } else {
                this.accountError = ''
            }
        },
        verifyPwd(e) {
            if (this.pwd !== 'admin') {
                this.pwdError = '密码为admin'
            } else {
                this.pwdError = ''
            }
        },
        register() {
            console.log('注册账号')
        },
        forgetPwd() {
            console.log('忘记密码')
        },
        submit() {
            if (this.account === 'admin' && this.pwd === 'admin') {
                this.isShowLoading = true
                // 登陆成功 设置用户信息
                localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                localStorage.setItem('userName', '陈平')
                // 登陆成功 假设这里是后台返回的 token
                localStorage.setItem('token', 'i_am_token')
                this.$router.push({path: this.redirect || '/'})
            } else {
                if (this.account !== 'admin') {
                    this.accountError = '账号为admin'
                } 

                if (this.pwd !== 'admin') {
                    this.pwdError = '密码为admin'
                } 
            }
        }
    }
}
</script>

<style>
.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.login-vue .container {
   -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
.login-vue .ivu-input {
    background-color: transparent;
    color: #333;
    outline: #fff;
    border-color: #333;
}
.login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 200px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
 
    width: 250px;
}
.login-vue .account {
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
.login-vue .ivu-icon {
    color: #333;
}
.login-vue .ivu-icon-ios-close-circle {
    color: #777;
}
</style>


