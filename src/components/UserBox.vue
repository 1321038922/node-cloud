<template>
    <div class="right-box ">
        <div class="login-box" >
            <div class="item">
                <input type="text" placeholder="邮箱" v-model="usermsg.email">
            </div>
            <div class="item">
                <input type="password" placeholder="密码" v-model="usermsg.password">
            </div>
            <div class="item">
                <el-button type="primary" class="_el-btn"> 
                    登录
                </el-button>
            </div>
            <div class="item">
                <el-button class="_el-btn" @click="$router.push('/register')">
                    注册
                </el-button>
            </div>
        </div>
        <!-- <div class="user-box" v-else>
            <div class="user-box-item user-icon">
                <img src="">
            </div>
            <div class="name-item">
                萌新:  
            </div>
            <div class="email-item">
                email:  
            </div>
            <div>
                <el-button type="warning" style="width: 100%;margin-top: 10px;">
                    退出登陆
                </el-button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "UserBox",
  data() {
    return {
        email: "646617513@qq.com",
        password: "yjr1923521",
        usermsg: {
        username: "",
        email: "",
        avatar: ""
      }
    };
  }
};
</script>

<style scoped>
.right-box {
  box-sizing: border-box;
  width: 360px;
  background: #fff;
  border-radius: 4px;
  padding: 21px 30px;
}

.item {
  margin-top: 30px;
}

._el-btn {
    width: 100%;
}

input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 18px;
  color: #333;
  font-size: 14px;
  outline: none;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}
.user-box {
  padding-top: 30px;
}
.user-icon {
  text-align: center;
}
.user-icon img {
  width: 100px;
  height: 100px;
}

.name-item,
.email-item {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 36px;
}
</style>