<template>
  <el-container>
    <el-header>
      <HomeTop/>
    </el-header>
    <el-main>
      <Result/>
    </el-main>
  </el-container>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import Result from "@/components/Result";
export default {
  name: 'Voting',
  components: { HomeTop,Result},

  data() {
    return {}
  },
  methods: {}

}

</script>

<style scoped>
.header {
  background-color: white;
  color: #333;
  /*text-align: center;*/
  width:100%;
  line-height: 20%;
  border:none;
}
*{
  font-family:"Arial";


}
.el-main{
  position:absolute;
  top:30%;
  left:30%;
  width:82%;
}
</style>