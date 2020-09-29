<template>
  <div id="login">

    <div class="background">
      <img :src="imgSrc" width="10%" height="10%" alt="" />
    </div>
    <br />
    <br />
    <h1>Australian Senate Voting System </h1>
    <br />
    <h2>Please Login</h2>

    <br />
    <input style="position: center" type="email" placeholder="Email" v-model="email">
    <br />
    <br />
    <input type="password" placeholder="Password" v-model="password">
    <br />
    <br />
    <button @click="Login">Login</button>
    <br />
    <br />
    <p>Need an account?
      <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
name: "Login",
data(){
  return{
    email:"",
    password:"",
    imgSrc:require('D:\\vueProj\\votesystem\\src\\views\\img\\11.png')
  }
},
  //methods handles login and register
  methods:{
    login: function(){
      //log the user in
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          user =>{
            console.log(user.data)
          },
          err => {
            alert(err);
          }
      )
    }

  },
}
</script>

<style src="../styles/style.css">
</style>