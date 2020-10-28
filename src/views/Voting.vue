<template>
  <el-container>
    <el-header>
      <HomeTop/>
    </el-header>
    <el-main>
      <VotingTable/>
    </el-main>
  </el-container>
</template>

<script>
import HomeTop from "@/components/HomeTop";
import VotingTable from "@/components/VotingTable";
export default {
name: 'Voting',
    components: { HomeTop,VotingTable},

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
.el-main{
  position:absolute;
  top:30%;
  left:15%;
  width:82%;

}
*{
  font-family:"Arial";


}
</style>