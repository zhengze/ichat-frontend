<template>
    <div>
        <mu-form class="registerForm" :model="ruleForm" ref="ruleForm">
            <mu-form-item label="用户名" prop="username" :rules="usernameRules">
                <mu-text-field v-model="ruleForm.username" prop="username"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="password" :rules="passwordRules">
                <mu-text-field type="password" v-model="ruleForm.password" prop="password"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="isAgree" :rules="agreeRules">
                <mu-checkbox label="同意用户协议" v-model="ruleForm.isAgree"></mu-checkbox>
            </mu-form-item>
            <mu-form-item>
                <mu-button full-width color="primary" @click="handleSubmit" class="submit">注册</mu-button>
            </mu-form-item>
        </mu-form>

        <mu-flex align-items="center">
            <mu-flex justify-content="center" fill>
                <div @click="goLogin" class="tip-user">已有账号，去登录</div>
            </mu-flex>
        </mu-flex>

    </div>

</template>

<script>
    import {requestRegister} from '../api/api'

    export default {
        name: 'Register',
        data() {
            return {
                ruleForm: {
                    username: "zhangsan",
                    password: "1234",
                    isAgree: true
                },
                usernameRules: [
                    {validate: (val) => !!val, message: '必须填写用户名'},
                    {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
                ],
                passwordRules: [
                    {validate: (val) => !!val, message: '必须填写密码'},
                    {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
                ],
                agreeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm.validate().then((valid) => {
                    if (valid) {
                        let registerParams = {username: this.ruleForm.username, password: this.ruleForm.password};
                        requestRegister(registerParams).then(data => {
                            this.$router.push({name: 'Login'})
                        }).catch(error => {
                            console.log(error)
                            this.$alert(error, '错误')
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            goLogin() {
                this.$router.push({'name': 'Login'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .registerForm {
        width: 100%;
        padding: 5% 10% 10%;
        margin: 10% 0 10%;
        text-align: center;

        .submit {
            border-radius: 20px;
        }
    }
</style>
