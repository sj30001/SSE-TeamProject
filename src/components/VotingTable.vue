<template>
  <div>
<div class="TopTable" style="width:100% !important">
  <el-row :gutter="20">
    <el-col :span="3"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%;"><h2 style="font-size:18px;padding:1%"> You may<br> vote in one of<br> two ways</h2>
      <h2>Either ></h2>
      <h2 style="font-size:14px;">Above the line</h2>
      <p style="font-size:10px;">
        By numbering at least 6
        of these boxes in the order
        of your choice (with number
        1 as your first choice)</p>
      </div>
    </div>
    </el-col>

    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>A</h2>

      <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value1" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
            </el-option>
          </el-select>

<h2 style="font-size:18px;">MIST PARTY</h2>
        </div>
    </div></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>B</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value2" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value2"
                :label="item.label"
                :value="item.value2">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">RAIN PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>C</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value3" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value3"
                :label="item.label"
                :value="item.value3">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">FOG/SUN PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>D</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value4" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value4"
                :label="item.label"
                :value="item.value4">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">HUMID PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>E</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value5" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value5"
                :label="item.label"
                :value="item.value5">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">BREEZE PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>F</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value6" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value6"
                :label="item.label"
                :value="item.value6">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">CLOUD PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>G</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value7" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value7"
                :label="item.label"
                :value="item.value7">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">HAHA PARTY</h2>
        </div>
      </div>
    </div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple" style="height:250px">
      <div style="padding:1%"><h2>H</h2>

        <div style="font-size:50px"><i class="el-icon-picture-outline" style="text-align: center" ></i></div>
        <div>
          <br>
          <el-select v-model="value8" placeholder=" " style="width:60px">
            <el-option
                v-for="item in options"
                :key="item.value8"
                :label="item.label"
                :value="item.value8">
            </el-option>
          </el-select>

          <h2 style="font-size:18px;">ADE PARTY</h2>
        </div>
      </div>
    </div></el-col>
  </el-row>
</div>
    <div class="line" style="position:absolute;top:42%;width:75%;background-color: #5B7B9E;left:2%;height:1%"></div>
<!--    BottomTable-->
    <div class="BottomTable">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%;">
            <h2>Or ></h2>
            <h2 style="font-size:14px;">Below the line</h2>
            <p style="font-size:10px;">
              By numbering at least 12
              of these boxes in the order
              of your choice (with number
              1 as your first choice).</p>
          </div>
        </div>
        </el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>MIST PARTY</h3>
            <div><p>Surname<br>Given name<br>Mist Party</p>
            </div>
            <div>
              <el-select v-model="value1_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value1_1"
                    :label="item.label"
                    :value="item.value1_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Mist Party</p>
                <div>
                  <el-select v-model="value1_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value1_2"
                        :label="item.label"
                        :value="item.value1_2">
                    </el-option>
                  </el-select>
            </div>
          </div>
            </div>
          </div>
        </div>
        </el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>RAIN PARTY</h3>
            <div><p>Surname<br>Given name<br>Rain Party</p>
            </div>
            <div>
              <el-select v-model="value2_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value2_1"
                    :label="item.label"
                    :value="item.value2_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Rain Party</p>
                <div>
                  <el-select v-model="value2_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value2_2"
                        :label="item.label"
                        :value="item.value2_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>FOG/SUN PARTY</h3>
            <div><p>Surname<br>Given name<br>Fog/Sun Party</p>
            </div>
            <div>
              <el-select v-model="value3_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value3_1"
                    :label="item.label"
                    :value="item.value3_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Fog/Sun Party</p>
                <div>
                  <el-select v-model="value3_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value3_2"
                        :label="item.label"
                        :value="item.value3_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>HUMID PARTY</h3>
            <div><p>Surname<br>Given name<br>Humid Party</p>
            </div>
            <div>
              <el-select v-model="value4_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value4_1"
                    :label="item.label"
                    :value="item.value4_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Humid Party</p>
                <div>
                  <el-select v-model="value4_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value4_2"
                        :label="item.label"
                        :value="item.value4_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>BREEZE PARTY</h3>
            <div><p>Surname<br>Given name<br>Breeze Party</p>
            </div>
            <div>
              <el-select v-model="value5_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value5_1"
                    :label="item.label"
                    :value="item.value5_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Breeze Party</p>
                <div>
                  <el-select v-model="value5_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value5_2"
                        :label="item.label"
                        :value="item.value5_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>CLOUD PARTY</h3>
            <div><p>Surname<br>Given name<br>Cloud Party</p>
            </div>
            <div>
              <el-select v-model="value6_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value6_1"
                    :label="item.label"
                    :value="item.value6_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Fog/Sun Party</p>
                <div>
                  <el-select v-model="value6_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value6_2"
                        :label="item.label"
                        :value="item.value6_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>HAHA PARTY</h3>
            <div><p>Surname<br>Given name<br>Haha Party</p>
            </div>
            <div>
              <el-select v-model="value7_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value7_1"
                    :label="item.label"
                    :value="item.value7_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Haha Party</p>
                <div>
                  <el-select v-model="value7_2" placeholder=" " style="width:63px">
                    <el-option
                        v-for="item in options"
                        :key="item.value7_2"
                        :label="item.label"
                        :value="item.value7_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple" style="height:330px">
          <div style="padding:1%"><h3>ADE PARTY</h3>
            <div><p>Surname<br>Given name<br>Ade Party</p>
            </div>
            <div>
              <el-select v-model="value8_1" placeholder=" " style="width:63px">
                <el-option
                    v-for="item in options"
                    :key="item.value8_1"
                    :label="item.label"
                    :value="item.value8_1">
                </el-option>
              </el-select>
              <div><p>Surname<br>Given name<br>Fog/Sun Party</p>
                <div>
                  <el-select v-model="value8_2" placeholder=" " style="width:60px">
                    <el-option
                        v-for="item in options"
                        :key="item.value8_2"
                        :label="item.label"
                        :value="item.value8_2">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
name: "voting table",
  data() {
    return {
      options: [{
        value1: '1',
        value2: '1',
        value3: '1',
        value4: '1',
        value5: '1',
        value6: '1',
        value7: '1',
        value8: '1',
        value1_1:'1',
        value1_2:'1',
        value2_1:'1',
        value2_2:'1',
        value3_1:'1',
        value3_2:'1',
        value4_1:'1',
        value4_2:'1',
        value5_1:'1',
        value5_2:'1',
        value6_1:'1',
        value6_2:'1',
        value7_1:'1',
        value7_2:'1',
        value8_1:'1',
        value8_2:'1',

        label:'1'
      }, {
        value1: '2',
        value2: '2',
        value3: '2',
        value4: '2',
        value5: '2',
        value6: '2',
        value7: '2',
        value8: '2',
        value1_1:'2',
        value1_2:'2',
        value2_1:'2',
        value2_2:'2',
        value3_1:'2',
        value3_2:'2',
        value4_1:'2',
        value4_2:'2',
        value5_1:'2',
        value5_2:'2',
        value6_1:'2',
        value6_2:'2',
        value7_1:'2',
        value7_2:'2',
        value8_1:'2',
        value8_2:'2',
        label: '2'
      }, {
        value1: '3',
        value2: '3',
        value3: '3',
        value4: '3',
        value5: '3',
        value6: '3',
        value7: '3',
        value8: '3',
        value1_1:'3',
        value1_2:'3',
        value2_1:'3',
        value2_2:'3',
        value3_1:'3',
        value3_2:'3',
        value4_1:'3',
        value4_2:'3',
        value5_1:'3',
        value5_2:'3',
        value6_1:'3',
        value6_2:'3',
        value7_1:'3',
        value7_2:'3',
        value8_1:'3',
        value8_2:'3',
        label: '3'
      }, {
        value1: '4',
        value2: '4',
        value3: '4',
        value4: '4',
        value5: '4',
        value6: '4',
        value7: '4',
        value8: '4',
        value1_1:'4',
        value1_2:'4',
        value2_1:'4',
        value2_2:'4',
        value3_1:'4',
        value3_2:'4',
        value4_1:'4',
        value4_2:'4',
        value5_1:'4',
        value5_2:'4',
        value6_1:'4',
        value6_2:'4',
        value7_1:'4',
        value7_2:'4',
        value8_1:'4',
        value8_2:'4',
        label: '4'
      }, {
        value1: '5',
        value2: '5',
        value3: '5',
        value4: '5',
        value5: '5',
        value6: '5',
        value7: '5',
        value8: '5',
        value1_1:'5',
        value1_2:'5',
        value2_1:'5',
        value2_2:'5',
        value3_1:'5',
        value3_2:'5',
        value4_1:'5',
        value4_2:'5',
        value5_1:'5',
        value5_2:'5',
        value6_1:'5',
        value6_2:'5',
        value7_1:'5',
        value7_2:'5',
        value8_1:'5',
        value8_2:'5',
        label: '5'
      },{
        value1: '6',
        value2: '6',
        value3: '6',
        value4: '6',
        value5: '6',
        value6: '6',
        value7: '6',
        value8: '6',
        value1_1:'6',
        value1_2:'6',
        value2_1:'6',
        value2_2:'6',
        value3_1:'6',
        value3_2:'6',
        value4_1:'6',
        value4_2:'6',
        value5_1:'6',
        value5_2:'6',
        value6_1:'6',
        value6_2:'6',
        value7_1:'6',
        value7_2:'6',
        value8_1:'6',
        value8_2:'6',
        label: '6'
      },{
        value1: '7',
        value2: '7',
        value3: '7',
        value4: '7',
        value5: '7',
        value6: '7',
        value7: '7',
        value8: '7',
        value1_1:'7',
        value1_2:'7',
        value2_1:'7',
        value2_2:'7',
        value3_1:'7',
        value3_2:'7',
        value4_1:'7',
        value4_2:'7',
        value5_1:'7',
        value5_2:'7',
        value6_1:'7',
        value6_2:'7',
        value7_1:'7',
        value7_2:'7',
        value8_1:'7',
        value8_2:'7',
        label: '7'
      },{
        value1: '8',
        value2: '8',
        value3: '8',
        value4: '8',
        value5: '8',
        value6: '8',
        value7: '8',
        value8: '8',
        value1_1:'8',
        value1_2:'8',
        value2_1:'8',
        value2_2:'8',
        value3_1:'8',
        value3_2:'8',
        value4_1:'8',
        value4_2:'8',
        value5_1:'8',
        value5_2:'8',
        value6_1:'8',
        value6_2:'8',
        value7_1:'8',
        value7_2:'8',
        value8_1:'8',
        value8_2:'8',
        label: '8'
      },{
        value1: '9',
        value2: '9',
        value3: '9',
        value4: '9',
        value5: '9',
        value6: '9',
        value7: '9',
        value8: '9',
        value1_1:'9',
        value1_2:'9',
        value2_1:'9',
        value2_2:'9',
        value3_1:'9',
        value3_2:'9',
        value4_1:'9',
        value4_2:'9',
        value5_1:'9',
        value5_2:'9',
        value6_1:'9',
        value6_2:'9',
        value7_1:'9',
        value7_2:'9',
        value8_1:'9',
        value8_2:'9',
        label: '9'
      },{

        value1_1:'10',
        value1_2:'10',
        value2_1:'10',
        value2_2:'10',
        value3_1:'10',
        value3_2:'10',
        value4_1:'10',
        value4_2:'10',
        value5_1:'10',
        value5_2:'10',
        value6_1:'10',
        value6_2:'10',
        value7_1:'10',
        value7_2:'10',
        value8_1:'10',
        value8_2:'10',
        label: '10'
      },{
        value1: '11',
        value2: '11',
        value3: '11',
        value4: '11',
        value5: '11',
        value6: '11',
        value7: '11',
        value8: '11',
        value1_1:'11',
        value1_2:'11',
        value2_1:'11',
        value2_2:'11',
        value3_1:'11',
        value3_2:'11',
        value4_1:'11',
        value4_2:'11',
        value5_1:'11',
        value5_2:'11',
        value6_1:'11',
        value6_2:'11',
        value7_1:'11',
        value7_2:'11',
        value8_1:'11',
        value8_2:'11',
        label: '11'
      },{
        value1: '12',
        value2: '12',
        value3: '12',
        value4: '12',
        value5: '12',
        value6: '12',
        value7: '12',
        value8: '12',
        value1_1:'12',
        value1_2:'12',
        value2_1:'12',
        value2_2:'12',
        value3_1:'12',
        value3_2:'12',
        value4_1:'12',
        value4_2:'12',
        value5_1:'12',
        value5_2:'12',
        value6_1:'12',
        value6_2:'12',
        value7_1:'12',
        value7_2:'12',
        value8_1:'12',
        value8_2:'12',
        label: '12'
      },{
        value1: '13',
        value2: '13',
        value3: '13',
        value4: '13',
        value5: '13',
        value6: '13',
        value7: '13',
        value8: '13',
        value1_1:'13',
        value1_2:'13',
        value2_1:'13',
        value2_2:'13',
        value3_1:'13',
        value3_2:'13',
        value4_1:'13',
        value4_2:'13',
        value5_1:'13',
        value5_2:'13',
        value6_1:'13',
        value6_2:'13',
        value7_1:'13',
        value7_2:'13',
        value8_1:'13',
        value8_2:'13',
        label: '13'
      },{
        value1: '14',
        value2: '14',
        value3: '14',
        value4: '14',
        value5: '14',
        value6: '14',
        value7: '14',
        value8: '14',
        value1_1:'14',
        value1_2:'14',
        value2_1:'14',
        value2_2:'14',
        value3_1:'14',
        value3_2:'14',
        value4_1:'14',
        value4_2:'14',
        value5_1:'14',
        value5_2:'14',
        value6_1:'14',
        value6_2:'14',
        value7_1:'14',
        value7_2:'14',
        value8_1:'14',
        value8_2:'14',
        label: '14'
      },{
        value1: '15',
        value2: '15',
        value3: '15',
        value4: '15',
        value5: '15',
        value6: '15',
        value7: '15',
        value8: '15',
        value1_1:'15',
        value1_2:'15',
        value2_1:'15',
        value2_2:'15',
        value3_1:'15',
        value3_2:'15',
        value4_1:'15',
        value4_2:'15',
        value5_1:'15',
        value5_2:'15',
        value6_1:'15',
        value6_2:'15',
        value7_1:'15',
        value7_2:'15',
        value8_1:'15',
        value8_2:'15',
        label: '15'
      },{
        value1: '16',
        value2: '16',
        value3: '16',
        value4: '16',
        value5: '16',
        value6: '16',
        value7: '16',
        value8: '16',
        value1_1:'16',
        value1_2:'16',
        value2_1:'16',
        value2_2:'16',
        value3_1:'16',
        value3_2:'16',
        value4_1:'16',
        value4_2:'16',
        value5_1:'16',
        value5_2:'16',
        value6_1:'16',
        value6_2:'16',
        value7_1:'16',
        value7_2:'16',
        value8_1:'16',
        value8_2:'16',
        label: '16'
      }],
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value1_1:'',
      value1_2:'',
      value2_1:'',
      value2_2:'',
      value3_1:'',
      value3_2:'',
      value4_1:'',
      value4_2:'',
      value5_1:'',
      value5_2:'',
      value6_1:'',
      value6_2:'',
      value7_1:'',
      value7_2:'',
      value8_1:'',
      value8_2:''
    }
  }

}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
/*&:last-child {margin-bottom: 0;}*/
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>