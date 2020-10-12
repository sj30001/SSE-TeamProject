<template>
  <el-container>
<!--    top-->
    <el-header>
      <ConsoleTop/>
      <h2 style="position:absolute;right:15%;top:4%;font-size:30px;color:#eae7e7;">Home</h2>
    </el-header>

    <el-container>
<!--      sidebar-->
      <el-aside width="250px">
        <ConsoleSidebar/>
      </el-aside>

<!--      main-->
      <el-main>
<!--<el-row ><el-button class="start" type="danger" plain>Start</el-button></el-row>-->
        <div class="Start">
          <button style="background-color:#FB4E46;color:white;width:15%;height:10%;position:absolute;top:40%;left:25%;font-size:50px;border:none;border-radius: 10px; ">Start</button>
        </div>
        <div>
          <img src="@/assets/voting.png" alt="voting image" style="position:absolute;top:30%;right:12%;width:36.6%;height:auto">
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ConsoleTop from "@/components/console/ConsoleTop";
import ConsoleSidebar from "@/components/console/ConsoleSidebar";


export default {
  name: 'Console',
  components: { ConsoleSidebar, ConsoleTop},
  data() {
    return {}
  },
  methods: {}

}

</script>

<style>
.el-aside {
  background-color:white;
  color: #5B7B9E;

  line-height: 100%;
  z-index:1;
  position:absolute;
  left:10%;
  top:22%;
width:20%;
  height:100%;


}
.el-header {
  background-color: white;
  color: #333;
  /*text-align: center;*/
  width:100%;
  line-height: 200px;
}
/*.start{*/
/*  width:300px;*/
/*  height:150px;*/
/*  position:absolute;*/
/*  top:1000px;*/
/*  left:25%;*/
/*  z-index:10;*/
/*}*/
*{
  font-family:"Arial";

}

</style>