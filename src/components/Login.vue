<template>
<div class="login">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="border-radius: 2px; background-color:white;padding: 30px;position:absolute;top:30%;left:40%;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" label-width="100px" class="demo-ruleForm">
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" show-password></el-input>
<!--      <el-input placeholder="Password" v-model="input" show-password></el-input>-->
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini" @click="submitForm('ruleForm')">Continue</el-button>
      <router-link to="/signup"><el-button size="mini" @click="resetForm('ruleForm')">SignUp</el-button></router-link>
    </el-form-item>
    </el-form>
</div>
</template>

<script>
const hc = require('@/utils/httpconnect');
export default {
name: "Login",
  data() {
    const checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('the email can not be empty'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('Please enter the correct email format'))
        }
      }, 100)
    }
    return {
        ruleForm: {
        email: '',
        password: '',

      },
      rules: {
        email: [
          { required: true, message: 'Please enter the email address',trigger: 'blur' },
          // {inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,message: 'Please enter the correct email format',trigger:'blur'}
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter the password', trigger: 'blur' }
        ]


      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async login(){
      let res = await hc.post('/api/login', this.ruleForm);
      console.log(res);
      if(res.data.status === 'success'){
        // login success
        //user
        let role = this.$cookies.get('role');
        console.log(role);
        if(role==='user')
          await this.$router.push({path: '/user'});
        else {
          //admin
          await this.$router.push({path: '/console'});
        }
      }else {
        // login failed
        this.$message({
          type: 'error',
          message: res.data.msg
        });
      }
    }
  }
}


</script>

<style scoped>
.login{
  width:20%;
  text-align: center;
  border-radius: 2px;

}
.el-button{
  margin-left:10px;

}
</style>