<template>
  <div class="console" id="console">
    <ConsoleTop/>
    <ConsoleSidebar/>
    <ConsoleCandidate />
  </div>
</template>

<script>
import ConsoleTop from "@/components/console/ConsoleTop";
import ConsoleSidebar from "@/components/console/ConsoleSidebar";
import ConsoleCandidate from "@/components/console/ConsoleCandidate";

export default {
  name: 'Console',
  components: {ConsoleCandidate, ConsoleSidebar, ConsoleTop},
  data() {
    return {
    }
  },
  methods: {
  }

}

</script>
