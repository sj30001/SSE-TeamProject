<template>
  <div>
    <div class="logo" >
      <img src="@/assets/adelaide logo.png" alt="Adelaide logo" style="width:110px;height:auto;position:absolute;top:2%;left:2%">
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
      <el-menu-item style="text-align:center;width:20%;font-size:24px; " index="0"><router-link to="/">Home</router-link></el-menu-item>
      <el-menu-item style="text-align:center;width:20%;font-size:24px" index="1"><router-link to="/vote">Voting page</router-link></el-menu-item>
      <el-menu-item style="text-align:center;width:20%;font-size:24px" index="2"><router-link to="/vote">Candidate information</router-link></el-menu-item>
      <el-menu-item style="text-align:center;width:20%;font-size:24px" index="3"><router-link to="/vote">Voting rule</router-link></el-menu-item>
      <el-menu-item style="text-align:center;font-size:24px;width:20%" index="4"><router-link to="/result">Result page</router-link></el-menu-item>

    </el-menu>
    <div>
      <router-link to="/login"><el-button class="Signin" type="text">Sign in</el-button></router-link>
      <router-link to="/signup"><el-button class="Signup" type="text">Sign up</el-button></router-link>
    </div>

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
.logo{
  width:10px;
  height:auto;
}
/*.voting{*/
/*  font-size:24px;*/
/*  text-align:center*/
/*}*/
.el-menu{
  position:absolute;
  top:13%;
  width:100%;

}
.Signin{
  color:#5B7B9E;
  font-size:24px;
  position:absolute;
  top:7%;
  right:10%;
}
.Signup{
  color:#5B7B9E;
  font-size:24px;
  position:absolute;
  top:7%;
  right:4%;
}
*{
  font-family:"Arial";
text-decoration:none;
}
</style>
