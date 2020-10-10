<template>
<div>
  <div class="logo">
    <img src="@/assets/adelaide logo.png" alt="Adelaide logo">
  </div>
  <div class="line1" >
    <hr width=100% size=3 color=#5B7B9E style="filter:alpha(opacity=100,finishopacity=0,style=2)">
  </div>
  <div class="line2" style="background-color:#5B7B9E;padding:40px;margin-bottom:0px;"></div>
</div>
</template>

<script>
export default {
name: "ConsoleTop"
}
</script>

<style >
.logo{
  width:5%;
  height:auto;
  position:absolute;
  top:1%;
  left:3%;
  float:left;
}
.line1{
  position:absolute;
  top:11%;
  width:100%
}
.line2{
  position:absolute;
  top:13%;
  width:100%
}
*{
  font-family:"Arial";

}
</style>