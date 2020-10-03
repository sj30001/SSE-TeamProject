<template>
  <div class="home">

    <div class="logo">
      <img src="../assets/img/UA_LOGO.png" style="position: relative;top:-50px;left:30px;width:349px;height:111px; " alt="Adelaide">
    </div>
    <div class="right_topBox">
      <ul>
        <li><a href="#" target="_blank">Register</a></li>
        <li><a href="#" target="_blank">Login</a></li>
      </ul>
    </div>
    <div class="line1">
      <hr width=100% size=3 color=#5B7B9E style="filter:alpha(opacity=100,finishopacity=0,style=2)">
    </div>
    <div style="background-color:#5B7B9E;padding:40px;margin-bottom:5px;">
      <h2 class="text_intro" style="color:#45688E;font-size:50px">
        What do you<br><br>
        need to do today?
      </h2>
      <div class="text2">
        <ul>
          <li><a href="#" target="_blank">Login ></a></li>
          <br>
          <li><a href="#" target="_blank">Voting ></a></li>
          <br>
          <li><a href="#" target="_blank">Result ></a></li>
        </ul>
      </div>
      <div class="image">
        <img src="../assets/img/voting.png" style="width:1000px;height:650px; " alt="voting">
      </div>
    </div>
    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>Voting System</header>
      <ul>
        <li><a href="#"><i class=" fas fa-sliders-h"></i> Information</a></li>
        <li><a href="#"><i class=" fas fa-sliders-h"></i> Voting rules</a></li>
        <li><a href="#"><i class=" fas fa-sliders-h"></i> Voting page</a></li>
        <li><a href="#"><i class=" fas fa-sliders-h"></i> Result page</a></li>
        <li><a href="#"><i class=" fas fa-sliders-h"></i> Contact us</a></li>
      </ul>
    </div>

    <div class="newsBg" style="background-color:#C0CDDA;padding:340px;margin-bottom:5px;top:800px"></div>
    <div class="newsLeft">
      <h2 class="newsTitle">What's happening</h2>
      <h3 class="new1">2020 Torres Strait Regional Authority (TSRA) election</h3>
      <p style="padding-top:150px;padding-left:230px;">The 2020 TSRA election will be held on Saturday 28 November 2020.
        Information about the election – including postal vote applications, how to nominate, voting and COVID-19
        measures to protect the local community.</p>
      <img src="../assets/img/new1.png" style="width:1000px;height:350px;padding-left:240px;" alt="new1">
      <h3 class="new2">Access to AEC services during COVID-19</h3>
      <p style="padding-top:110px;padding-left:230px;">Most electoral business outside of an electoral event, including
        checking your enrolment and submitting an enrolment transaction, can be completed with us online, and AEC
        offices across the country are also reopening to the public where possible under our COVID safety management
        plan. AEC offices in Victoria at this stage remain closed.

        <br><br>If you are feeling unwell we ask that you do not attend an AEC office. We appreciate your cooperation
        and patience.</p>

    </div>
    <div class="line">
      <hr class="line2" width=1px size=1400 color=#D3D5D6 style="filter:alpha(opacity=100,finishopacity=0,style=2)">
    </div>
    <div class="newsRight">

      <h3 class="new3">Redistribution processes underway</h3>
      <p style="padding-top:70px;padding-left:1350px;">Redistribution processes in Victoria and Western Australia have
        now formally commenced. This follows the earlier determination of entitlement to House of Representatives seats
        for each state and territory.</p>
      <img src="../assets/img/new3.png" style="width:800px;height:550px;padding-left:1490px;" alt="new3">
      <h3 class="new4">Non-voter letters for Eden‑Monaro</h3>
      <p style="padding-top:110px;padding-left:1350px;">Following a federal by-election the AEC sends letters to people
        who appear to have failed to cast a vote. If you’ve received a letter, it outlines your option to either pay the
        $20 penalty or provide a valid reason.</p>

    </div>
    <div class="notice">
      <h2 class="Notice">Notice</h2>
      <hr class="line4" width=1px size=100 color=#FAEBA3 style="filter:alpha(opacity=100,finishopacity=0,style=2)">
      <hr class="line3" width=100% size=3 color=#FAEBA3 style="filter:alpha(opacity=100,finishopacity=0,style=2)">
      <p style="padding-top:350px;padding-left:550px;">The AEC's Online Enrolment System will be unavailable Thursday 1
        October 2020 between 6pm and 10pm AEST due to an upgrade.</p>
    </div>
    <div class="bottom">
      <hr class="line5" width=100% size=3 color=white style="filter:alpha(opacity=100,finishopacity=0,style=2)">
      <p style="padding-top:30px;padding-left:1190px;color:black">Online Voting System</p>
      <p style="padding-top:10px;padding-left:1110px;color:black">© Secure Software Engineering 2020</p>
      <p style="padding-top:10px;padding-left:1190px;color:black">Authorised by Group 11</p>>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style src="../styles/Home.css">

</style>