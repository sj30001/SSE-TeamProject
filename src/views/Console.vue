<template>
  <el-container>
<!--    top-->
    <el-header>
      <ConsoleTop/>
    </el-header>

    <el-container>
<!--      sidebar-->
      <el-aside width="200px">
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
import ConsoleTop from "@/components/console/ConsoleTop";
import ConsoleSidebar from "@/components/console/ConsoleSidebar";
import ConsoleCandidate from "@/components/console/ConsoleCandidate";

export default {
  name: 'Console',
  components: {ConsoleCandidate, ConsoleSidebar, ConsoleTop},
  data() {
    return {}
  },
  methods: {}

}

</script>

<style>
</style>