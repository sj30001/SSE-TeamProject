<template>
  <el-container>
    <!--    top-->
    <el-header>
      <ConsoleTop/>
    </el-header>
    <h2 style="position:absolute;right:15%;top:14%;font-size:30px;color:#eae7e7;">Candidate update</h2>

    <el-container>
      <!--      sidebar-->
      <el-aside width="300px">
        <ConsoleSidebar/>
      </el-aside>

      <!--      main-->
      <el-main>
        <ConsoleCandidate/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ConsoleCandidate from "@/components/console/ConsoleCandidate";
import ConsoleSidebar from "@/components/console/ConsoleSidebar";
import ConsoleTop from "@/components/console/ConsoleTop";

export default {
name: "Candidate",
  components: {ConsoleCandidate, ConsoleSidebar, ConsoleTop},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.el-header {
  background-color: white;
  color: #333;
  /*text-align: center;*/
  width:100%;
  line-height: 200px;
}
.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
  position:absolute;

  top:20%;
  width:60%;
  z-index:2;
left:40%

}
.el-aside {
  background-color:white;
  color: #5B7B9E;

  line-height: 100%;
  z-index:1;
position:absolute;
  left:10%;
  top:19.7%;
width:200px;
  height:100%;


}
</style>