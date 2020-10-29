<template>
<div>
  <div >
    <img src="@/assets/adelaide logo.png" alt="Adelaide logo" class="logo">
  </div>
    <div class = "greetings">
      <span>Hi,{{ name }}</span>
      <el-button size="mini" type="text" plain @click="handleLogout">logout</el-button>
    </div>
  <div class="line1" >
    <hr width=100% size=3 color=#5B7B9E style="filter:alpha(opacity=100,finishopacity=0,style=2)">
  </div>
  <div class="line2" style="background-color:#5B7B9E;padding:40px;margin-bottom:0px;"></div>
</div>

</template>

<script>
const hc = require('@/utils/httpconnect');
export default {
name: "ConsoleTop",
  data() {
    return {
      name: ''
    };
  },async mounted() {
    let role = this.$cookies.get('role');
    //user
    if(role ==='user') {
      let user = await hc.get('api/users/'+this.$cookies.get('id'));
      this.name = user.data.user.name;
      return;
    }
    //admin
    if(role ==='admin') {
      this.name = 'Administrator';
      return;
    }

    //not login
    await this.$router.push({path: '/login'});
  },methods: {
    handleLogout(){
      this.$cookies.remove('role');
      this.$cookies.remove('id');
      location.reload();
    }
  }
}
</script>

<style>
.greetings{
  height: 10px;
  width: 500px;
  position:absolute;
  top:-30px;
  left:180px;
  z-index: 999;
}
.greetings *{
  /*width: 100px;*/
  margin: 10px;
}
.logo{
  width:6%;
  height:auto;
  position:absolute;
  top:1%;
  left:3%;
  float:left;
}
.line1{
  position:absolute;
  top:11%;
  width:100%
}
.line2{
  position:absolute;
  top:13%;
  width:100%
}
*{
  font-family:"Arial";

}
</style>