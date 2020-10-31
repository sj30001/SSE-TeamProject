<template>
  <el-container>
    <el-header>
      <ConsoleTop/>
    </el-header>

    <!--      sidebar-->
    <el-aside width="300px">
      <ConsoleSidebar/>
    </el-aside>
    <el-main>
      <VotingTable/>

    </el-main>
  </el-container>
</template>

<script>
import ConsoleTop from "@/components/console/ConsoleTop";
import VotingTable from "@/components/VotingTable";
import ConsoleSidebar from "@/components/console/ConsoleSidebar";
export default {
name: 'Voting',
    components: { ConsoleTop,VotingTable,ConsoleSidebar},

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
  top:25%;
  left:27%;
  width:82%;
  height:100%;



}
*{
  font-family:"Arial";


}
</style>