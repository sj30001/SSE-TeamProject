<template>
<!--  <div>-->

<!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 30px;position:absolute;width:200px">-->
<!--    <el-radio-button :label="false"><i class="el-icon-arrow-left"></i></el-radio-button>-->
<!--    <el-radio-button :label="true"><i class="el-icon-arrow-right"></i></el-radio-button>-->
<!--  </el-radio-group>-->
<!--  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
<!--    <el-submenu index="1">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-location"></i>-->
<!--        <span slot="title">Information Update</span>-->
<!--      </template>-->
<!--      <el-menu-item-group>-->
<!--        <span slot="title">Candidate & party</span>-->
<!--        <el-menu-item index="1-1">Candidates: add & update</el-menu-item>-->
<!--        <el-menu-item index="1-2">parties: add & update</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--    </el-submenu>-->

<!--    <el-menu-item index="2">-->
<!--      <i class="el-icon-menu"></i>-->
<!--      <span slot="title">Personal Information</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="3" >-->
<!--      <i class="el-icon-document"></i>-->
<!--      <span slot="title">User</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="4">-->
<!--      <i class="el-icon-setting"></i>-->
<!--      <span slot="title">Results</span>-->
<!--    </el-menu-item>-->
<!--  </el-menu>-->

<!--  </div>-->
  <div class="leftMenu" style="height:100%">
  <el-row class="sidebar" style="height:100%">
    <el-col :span="12" style="height:100%">

      <el-menu

          class="el-menu-vertical-demo"
background-color="#5B7B9E"
          text-color="white"
          style="height:100%"
          max-width="300px"
          width="300px"
      >
       <router-link to="/console" class="a"><el-menu-item index="1" >
          <i class="el-icon-menu"></i>
          <span slot="title">Home</span>
        </el-menu-item></router-link>
        <el-submenu index="2" >
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>Information Update</span>
          </template>
          <el-menu-item-group >

               <router-link to="/candidates" class="a"><el-menu-item index="1-1" >Candidate</el-menu-item></router-link>

              <router-link to="/party" class="a"><el-menu-item index="1-2">Party</el-menu-item></router-link>
          </el-menu-item-group>

        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">Personal information</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Result</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>

<script>

export default {
  name: "ConsoleSidebar",
  data() {
    return {
      isCollapse: true
    };
  },
  // methods: {
  //   handleOpen(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   handleClose(key, keyPath) {
  //     console.log(key, keyPath);
  //   }
  // }
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.a{
  text-decoration: none;
}
*{
  font-family:"Arial";

}
</style>