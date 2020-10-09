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
  width:100px;
  height:40px;
  position:absolute;
  top:10px;
  left:3%;
  float:left;
}
.line1{
  position:absolute;
  top:150px;
  width:100%
}
.line2{
  position:absolute;
  top:170px;
  width:100%
}
</style>