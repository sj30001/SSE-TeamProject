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
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data(){
    return{
      email:"",
      password:"",
      imgSrc:require('@/assets/img/logo.png')
    }
  },
  //methods handles login and register
  methods:{
    signUp: function(){
      //log the user in
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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

<style>
</style>