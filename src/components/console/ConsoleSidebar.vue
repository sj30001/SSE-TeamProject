<template>
  <div>

  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false"><i class="el-icon-arrow-left"></i></el-radio-button>
    <el-radio-button :label="true"><i class="el-icon-arrow-right"></i></el-radio-button>
  </el-radio-group>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">Information Update</span>
      </template>
      <el-menu-item-group>
        <span slot="title">Candidate & party</span>
        <el-menu-item index="1-1">Candidates: add & update</el-menu-item>
        <el-menu-item index="1-2">parties: add & update</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">Personal Information</span>
    </el-menu-item>
    <el-menu-item index="3" >
      <i class="el-icon-document"></i>
      <span slot="title">User</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">Results</span>
    </el-menu-item>
  </el-menu>

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

<style src="@/styles/ConsoleSidebar.css">

</style>