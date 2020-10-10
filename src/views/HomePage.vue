<template>
  <el-container>
    <!--    top-->
    <el-header>
      <HomeTop/>

    </el-header>

    <el-container>



      <!--      main-->
      <el-main>
        <div style="background-color:#C0CDDA;position:absolute;top:19%;left:3%;width:95%;height:43.5%">
          <h2 class="text_intro" style="color:#45688E;font-size:50px;position:absolute;left:15%;top:10%">
            What do you<br><br>
            need to do today?
          </h2>
          <div class="text2">
            <router-link to="/login"><el-button class="signin" type="text">Sign in ></el-button></router-link>
            <el-button class="voting" type="text">Voting ></el-button>
            <el-button class="result" type="text">Result ></el-button>
          </div>
          <div class="image">
            <img src="@/assets/voting.png"  alt="voting" >
          </div>
        </div>
<!--        news-->
        <div class="newsLeft">
          <h2 class="newsTitle">What's happening</h2>
          <h3 class="new1">2020 Torres Strait Regional Authority (TSRA) election</h3>
          <p style="padding-top:12%;padding-left:17%;">The 2020 TSRA election will be held on Saturday 28 November 2020. Information about the election – including postal vote applications, how to nominate, voting and COVID-19 measures to protect the local community.</p>
          <img src="@/assets/new1.png" style="width:70%;height:auto;padding-left:20%;" alt="new1">

          <h3 class="new2">Access to AEC services during COVID-19</h3>
          <p style="padding-top:12%;padding-left:17%;">Most electoral business outside of an electoral event, including checking your enrolment and submitting an enrolment transaction, can be completed with us online, and AEC offices across the country are also reopening to the public where possible under our COVID safety management plan. AEC offices in Victoria at this stage remain closed.

            <br><br>If you are feeling unwell we ask that you do not attend an AEC office. We appreciate your cooperation and patience.</p>

        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="newsRight">

          <h3 class="new3">Redistribution processes underway</h3>
          <p style="padding-top:6%;padding-left:55%;">Redistribution processes in Victoria and Western Australia have now formally commenced. This follows the earlier determination of entitlement to House of Representatives seats for each state and territory.</p>
          <img src="@/assets/new3.png" style="width:30%;height:auto;padding-left:60%;" alt="new3">
          <h3 class="new4">Non-voter letters for Eden‑Monaro</h3>
          <p style="padding-top:5%;padding-left:55%;">Following a federal by-election the AEC sends letters to people who appear to have failed to cast a vote. If you’ve received a letter, it outlines your option to either pay the $20 penalty or provide a valid reason.</p>

        </div>
        <el-row :gutter="12" class="notice">
          <el-col :span="8">
            <el-card shadow="always" width="100%" >
              Notice: The AEC's Online Enrolment System will be unavailable Thursday 1 October 2020 between 6pm and 10pm AEST due to an upgrade.
            </el-card>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeTop from "@/components/HomeTop";



export default {
  name: 'Console',
  components: { HomeTop},
  data() {
    return {}
  },
  methods: {}

}

</script>

<style>
.header {
  background-color: white;
  color: #333;
  /*text-align: center;*/
  width:95%;
  line-height: 20%;
  border:none;
}
.signin{
  color:#5B7B9E;
  font-size:30px;
  position:absolute;
top:52%;
  left:20%;
}
.voting{
  color:#5B7B9E;
  font-size:30px;
  position:absolute;
  top:62%;
  left:20%;
}
.result{
  color:#5B7B9E;
  font-size:30px;
  position:absolute;
  top:72%;
  left:19.7%;
}
*{
  font-family:"Arial";

}
.image{
  position:absolute;
  top:0%;
  width:30%;
  height:auto;
  right:15%

}
.newsLeft{
  position:absolute;
  width:47%;
  height:auto;
  top:60%;
  color:#45688E;

}
.newsTitle{
  font-size:38px;
  position:absolute;
  top:3%;
  left:15%
}
.new1{
  font-size:24px;
  position:absolute;
  top:12%;
  left:17%
}
.new2{
  font-size:24px;
  position:absolute;
  top:77%;
  left:17%
}
.el-divider{
  position:absolute;
  top:70%;
  left:51%;
  height:50%
}
.newsRight{
  position:absolute;
  width:94%;
  height:auto;
  top:60%;

  color:#45688E;
}
.new3{
  font-size:24px;
  position:absolute;
  top:12%;
  left:55%
}
.new4{
  font-size:24px;
  position:absolute;
  top:83%;
  left:55%
}
.el-card{
  background-color: #5B7B9E ;
  color:white;
  font-size:24px;
  width:100% !important;
}
.notice{
position: absolute;
  top:1700px;
  left:40%;

}



</style>