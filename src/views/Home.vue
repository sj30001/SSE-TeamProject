<template>
  <div class="home" id="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <el-button @click="demo"></el-button>
    {{ msg }}
  </div>
</template>

<script>
// import Vue from 'vue'
// @ is an alias to /src
const hc = require('@/utils/httpconnect')


// demo();

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      msg: {a:"123"}
    }
  },
  methods: {
    async demo() {
      let reqData = {
        "_csrf": "n06WnAGY-_s0HGQ3W5d9XdjjyR-VTM2QyRnY",
        "name": "Foo Bar",
        "birthday": "1992-01-01",
        "passport": "eh000000",
        "driverLicense": 123456,
        "address": "22 Tecoma",
        "password": "abc123",
        "email": "1234@123.com",
        "phoneNumber": 43281111
      }
      // let res = await hc.get('/api/users/21')
      reqData._csrf = await hc.get('/api/csrf')
      reqData._csrf = reqData._csrf.data.csrfToken
      try {
        let res = await hc.post('/api/users/', reqData)
        console.log(res)
        this.msg = res
      }catch(e){
        this.msg = e
      }
      // this.msg = 'abc';
      // res = res
    }
  }

}

</script>
