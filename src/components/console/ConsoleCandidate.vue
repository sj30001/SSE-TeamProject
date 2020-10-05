<template>
  <div>
    <div style="background-color:#5B7B9E;padding:40px;margin-bottom:5px;"></div>
    <div>
      <el-button
          size="mini"
          @click="handleAdd()">Add</el-button>
      <el-table
          :data="tableData" style="width: 60%">
        <el-table-column
            label="Candidates party"
            width="180"
            prop="party">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.party }}</span>
          </template>
        </el-table-column>

        <el-table-column
            label="Candidates Name"
            width="180"
            prop="name">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.candidateName }}</span>
          </template>
        </el-table-column><el-table-column
          label="States"
          width="180"
          prop="States">
        <template slot-scope="scope">

          <span>{{ scope.row.state }}</span>
        </template>
      </el-table-column>
        <el-table-column label="Operation">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="add" :visible.sync="addDialogFormVisible">
        <el-form :model="form">
          <el-form-item label="State">
            <el-input v-model="AddObj.state" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input v-model="AddObj.candidateName" auto-complete="off"></el-input>
          </el-form-item>
          <el-select v-model="AddObj.party" placeholder="party">
            <el-option v-for="item in partyList "
                       :key="item.id"
                       :label="item.party"
                       :value="item.party"></el-option>
          </el-select>
        </el-form>
        <div sloy="footer" class="dialog-footer">
          <br>
          <br>
          <el-button @click="addDialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="addDO">Continue</el-button>
        </div>
      </el-dialog>
      <el-dialog title="edit" :visible.sync="editDialogFormVisible">
        <el-form :model="editObj">
          <el-form-item label="Name">
            <el-input v-model="editObj.candidateName" auto-complete="off" :disabled=true></el-input>
          </el-form-item>
          <el-form-item label="State">
          <el-input v-model="editObj.state" auto-complete="off" :disabled=true></el-input>
          </el-form-item>

          <el-form-item label="Current Party">
            <el-select v-model="editObj.party" :disabled=true placeholder="party">
              <el-option v-for="item in partyList "
                         :key="item.party"
                         :label="item.party"
                         :value="item.party"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="New Party">
            <el-select v-model="editObj.newParty" placeholder="party">
              <el-option v-for="item in partyList "
                         :key="item.party"
                         :label="item.party"
                         :value="item.party"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div sloy="footer" class="dialog-footer" >
          <br>
          <br>
          <el-button @click="editDialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editDo">Continue</el-button>
        </div>
      </el-dialog>
          </div>
        </div>
      </template>

      <script>
      const hc = require('@/utils/httpconnect')
      export default {
        name: 'ConsoleCandidate',
        data() {
          return {
            addDialogFormVisible:false,
            editDialogFormVisible:false,
            form: {
              name: '',
              state: '',
              party: '',
            },
            editObj: {
              candidateName: '',
              newParty: '',
              party: '',
            },AddObj: {
              candidateName: '',
              state: '',
              party: '',
              _csrf:""
            },
            tableData: [],
            partyList:[]
          }
        },

        async mounted() {

          //get candidates
          let response_2 = await hc.get("/api/candidates")
          for (let i=0; i < response_2.data.candidates.length;i++) {
            let temp = {
              party: response_2.data.candidates[i].party,
              candidateName:response_2.data.candidates[i].name,
              state: response_2.data.candidates[i].state
            }
            this.tableData.push(temp)
          }

          //get partyList
           let response = await hc.get('/api/party')
           for (let i=0; i < response.data.party.length;i++) {
             let temp = {
               id: response.data.party[i].id,
               party:response.data.party[i].partyName
             }
             this.partyList.push(temp)
           }
        },

        methods: {
          handleEdit(index, row) {
            this.editDialogFormVisible=true;
            this.editObj = row;
            const oldParty = this.editObj.party;

            this.editObj.party = oldParty;
          },
          handleAdd() {
            //this.editObj=index;
            this.addDialogFormVisible=true;

          },
          async addDO() {
            let CsrfResponse = await hc.get("/api/csrf");
            this.AddObj._csrf = CsrfResponse.data.csrfToken;
            let res = await hc.post('/api/candidates', this.AddObj);
            if(res.data.status === 'success'){
              // add success
              this.$message({
                type: 'success',
                message: 'Successfully!'
              });
              this.addDialogFormVisible = false;
              // refresh current page
              location.reload();
            }else {
              // add failed
              this.$message({
                type: 'error',
                message: res.data.msg
              });
            }
          },
          async editDo(){
            let CsrfResponse = await hc.get("/api/csrf");
            this.editObj._csrf = CsrfResponse.data.csrfToken;

            let res = await hc.put('/api/candidates', this.editObj);
            if(res.data.status === 'success'){
              // add success
              this.$message({
                type: 'success',
                message: 'Successfully!'
              });
              this.editDialogFormVisible = false;
              // refresh current page
              location.reload();
            }else {
              // add failed
              this.$message({
                type: 'error',
                message: res.data.msg
              });
            }
          },
          async handleDelete(index, row){
            let CsrfResponse = await hc.get("/api/csrf")
            let _csrf = CsrfResponse.data.csrfToken;
            let reqData = {
              candidateName: row.candidateName,
              party: row.party,
                _csrf: _csrf
            };

            this.$confirm('Are you sure to delete this item?', 'Notice', {
              confirmButtonText: 'Continue',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
              // send delete request
              hc.delete('/api/candidates/',reqData).then(() => {
                this.$message({
                  type: 'success',
                  message: 'Success!'
                });
                // reload page
                location.reload();
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: 'cancel'
              });
            });
          },

        }

      }
      </script>

      <style src="@/styles/ConsoleSidebar.css">

      </style>