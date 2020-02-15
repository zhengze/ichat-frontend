<template>
    <div>
        <mu-appbar full-width color="primary">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>

        </mu-appbar>
        <mu-form class="form" :model="ruleForm" ref="ruleForm">
            <mu-form-item label="" prop="groupname" :rules="gnameRules">
                <mu-text-field v-model="ruleForm.groupname" full-width placeholder="群组名"></mu-text-field>
            </mu-form-item>
            <mu-form-item>

                <mu-button full-width color="primary" @click="handleSubmit" class="submit">创建</mu-button>
            </mu-form-item>
        </mu-form>

    </div>
</template>

<script>
    import {createGroup} from '../api/api'

    export default {
        name: 'CreateGroup',
        props: {},
        data() {
            return {
                ruleForm: {
                    groupname: ''
                },
                gnameRules: [
                    {validate: (val) => !!val, message: '必须填写群组名'},
                    {validate: (val) => val.length >= 2 && val.length <= 60, message: '用户名长度大于3或小于60'}
                ],
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm.validate().then((valid) => {
                    if (valid) {
                        let groupname = this.ruleForm.groupname;
                        let params = {groupname: groupname};
                        createGroup(params).then(res => {
                            this.$alert(res.message)
                            this.$router.go(-1)
                        }).catch(error => {
                            this.$alert(error)
                        })
                    } else {
                        console.log("出错了")

                    }

                })
            },
            goBack() {
                this.$router.go(-1)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form {
        width: 100%;
        padding: 5% 5% 10%;
        margin: 10% 0 10%;
        text-align: center;
    }
</style>
