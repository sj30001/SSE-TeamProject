<template>
  <div>
    <div class="logo">
      <img src="@/assets/adelaide logo.png" alt="Adelaide logo">
    </div>
    <div class="line1" >
      <hr width=100% size=3 color=#5B7B9E style="filter:alpha(opacity=100,finishopacity=0,style=2)">
    </div>
<!--    <div class="line2" style="background-color:#5B7B9E;padding:40px;margin-bottom:0px;"></div>-->
<!--    top menu-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#5B7B9E"
    font-size="30px"
    text-color="white"
            >
      <el-menu-item style="text-align:center;width:16%;font-size:30px; " index="0">Home</el-menu-item>
      <el-menu-item style="text-align:center;width:17%;font-size:30px" index="1">User </el-menu-item>
      <el-menu-item style="text-align:center;width:16%;font-size:30px" index="2">Voting page</el-menu-item>
      <el-menu-item style="text-align:center;width:17%;font-size:30px" index="3">Candidate information</el-menu-item>
      <el-menu-item style="text-align:center;width:16%;font-size:30px" index="4">Voting rule</el-menu-item>
      <el-menu-item style="text-align:center;font-size:30px;width:18%" index="5">Result page</el-menu-item>

    </el-menu>
    <el-button class="Signin" type="text">Sign in</el-button>
    <el-button class="Signup" type="text">Sign up</el-button>
  </div>
</template>

<script>

export default {
name: "HomeTop"

}
</script>

<style scoped>

.el-menu-item{
  font-size:18px;



}
.voting{
  font-size:30px;
  text-align:center
}
.el-menu{
  position:absolute;
  top:13%;
  width:100%;

}
.Signin{
  color:#5B7B9E;
  font-size:30px;
  position:absolute;
  top:8%;
  right:10%;
}
.Signup{
  color:#5B7B9E;
  font-size:30px;
  position:absolute;
  top:8%;
  right:4%;
}
</style>
