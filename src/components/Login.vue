<template>
  <div class="login-con">
    <div class="login-box">
       <!-- 登录标题 -->
      <div class="login-text">商城后台登录</div>
      <!-- 登录购物车图片 -->
      <div class="login_cart">
        <img src="../assets/login_cart.jpg">
      </div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="100px">
        <el-form-item prop="username">
          <!-- 用户登录框 -->
          <el-input prefix-icon="el-icon-user" clearable v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 密码框 -->
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item class="login-btn ">
          <el-button type="primary" @click="loginSubmit">登录</el-button>
          <el-button type="info" @click="resetLoginForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单数据绑定对象
      loginForm: {
        username: 'user',
        password: '123456'
      },
      // 登录表单验证规则对象
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度应在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度应在 5  到 15 个字符', trigger: 'blur' }
        ]
      }
      // 账号密码数据
      // loginInfo: {
      //   username: 'user',
      //   password: '123456'
      // }
    }
  },
  methods: {
    // 登录按钮处理事件
    loginSubmit() {
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(valid)
        if (valid) {
          console.log(this)
          if (this.loginForm.username === this.$store.state.loginInfo.username && this.loginForm.password === this.$store.state.loginInfo.password) {
            this.$message.success('登录成功')
            // 把从管家获取的token值保存到sessionStorage中，目的是为了守卫路由
            window.sessionStorage.setItem('token', this.$store.state.token)
            this.$router.push('/home')
          }else {
            this.$message.error('账号或密码错误，请重新输入')
          }
        }
      })
    },
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login-con {
  background-color: #14214D;
  height: 100%;
  position: relative;
  // 登录盒子
  .login-box {
  width: 600px;
  height: 350px;
  border-radius: 22px;
  background-color: #1b2d69;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  // 向左向上移动自身一半，才能居中
  transform: translate(-50%,-50%);
    // 登录框文字样式
    .login-text {
      padding-top: 10px;
      font-size: 26px;
      color: #fff;
      // 调整文字间距
      letter-spacing: 10px;
    }
    // 登录框内图片
    .login_cart img {
      position: absolute;
      left: 10px;
      bottom: 10px;
      width: 280px;
      height: 280px;
      border-radius: 8px;
    }
    .el-form {
      position: absolute;
      right: 10px;
      bottom: 30px;
      width: 380px;
    }
    .login-btn {
      display: flex;
      // flex右对齐
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
</style>
