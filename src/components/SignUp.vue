<template>
  <div id="signup">
    <div class="background">
      <img :src="imgSrc" width="10%" height="10%" alt="" />
    </div>
    <br />
    <br />
    <h1>Australian Senate Voting System </h1>
    <br />
    <h1>Please Sign Up</h1>
    <br />
    <input type="email" placeholder="Email" v-model="email">
    <br />
    <br />
    <input type="password" placeholder="Password" v-model="password">
    <br />
    <br />
    <button @click="signUp">Sign Up</button>
    <br />
    <br />
    <p>Have an account?
      <router-link to="/login">Login</router-link>
    </p>
    <div>
      {{ signUpData }}
    </div>
    <div>
      {{ response }}
    </div>
  </div>
</template>

<script>
const axios = require('axios');
let res = {response: null};
let sud = {
  name: "Foo Bar",
  birthday: "1992-01-01",
  passport: "eh003124",
  driverLicense: 733542,
  address: "22 Tecoma",
  password: "abc123",
  email: "121834@123.com",
  phoneNumber: 432811111
};
axios.get('http://localhost:3000/csrf')
    .then(function (resp) {
      res.response = {csrfToken: resp.data.csrfToken};
    })
    .catch(function (error) {
      alert(error);
    });

export default {
  name: "SignUp",
  data(){
    return{
      email:"",
      password:"",
      response: res,
      signUpData: sud,
      imgSrc:require('../assets/img/11.png')
    }
  },
  //methods handles login and register
  methods:{
    signUp: function(){
      axios.post('http://localhost:3000/users', sud)
          .then(function (response) {
            console.log(res);
            res.response = response.data;
          })
          .catch(function (error) {
            console.log(error.response);
          });
    }

  },
}
</script>

<style>
</style>