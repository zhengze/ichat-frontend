<template>
    <div>
        <mu-form class="loginForm" :model="ruleForm" ref="ruleForm">
            <mu-form-item label="用户名" prop="username" :rules="usernameRules">
                <mu-text-field v-model="ruleForm.username" prop="username"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="ruleForm.password" prop="password"></mu-text-field>
            </mu-form-item>
            <mu-form-item>


                <mu-button full-width color="primary" @click="handleSubmit" class="submit">登录</mu-button>
            </mu-form-item>
        </mu-form>

        <mu-flex align-items="center">
            <mu-flex justify-content="center" fill>
                <div @click="goRegister" class="tip-user">去注册</div>
            </mu-flex>
            <mu-flex justify-content="center">|</mu-flex>
            <mu-flex justify-content="center" fill>
                <div class="tip-user">忘记密码</div>
            </mu-flex>
        </mu-flex>
    </div>

</template>

<script>
    import {requestLogin} from '../api/api'
    import {mapActions} from 'vuex'

    export default {
        name: 'Login',
        data() {
            return {
                ruleForm: {
                    username: "zhangsan",
                    password: "1234",
                },
                usernameRules: [
                    {validate: (val) => !!val, message: '必须填写用户名'},
                    {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    {validate: (val) => !!val, message: '必须填写密码'},
                    {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
            }
        },
        methods: {
            ...mapActions(['setUserName']),
            handleSubmit() {
                this.$refs.ruleForm.validate().then((valid) => {
                    if (valid) {
                        let loginParams = {username: this.ruleForm.username, password: this.ruleForm.password};
                        requestLogin(loginParams).then(data => {
                            localStorage.setItem('accessToken', data.accessToken);
                            this.setUserName(data.username);
                            this.$router.push({name: 'Home'})
                        }).catch(error => {
                            this.$alert(error, '错误')
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            goRegister() {
                this.$router.push({'name': 'Register'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .loginForm {
        width: 100%;
        padding: 5% 10% 10%;
        margin: 10% 0 10%;
        text-align: center;

        .submit {
            border-radius: 20px;
        }
    }
</style>
