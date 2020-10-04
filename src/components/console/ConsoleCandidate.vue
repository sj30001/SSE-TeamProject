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
            width="180">
          <template slot-scope="scope">

            <span style="margin-left: 10px"><a href="javascript:;"></a>{{ scope.row.party }}</span>
          </template>
        </el-table-column>

        <el-table-column
            label="Candidates Name" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>name: {{ scope.row.name }}</p>

              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column><el-table-column
          label="State"
          width="180">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{ scope.row.state }}</span>
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
            <el-input v-model="AddObj.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Party">-->
            <el-input v-model="AddObj.party" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div sloy="footer" class="dialog-footer">
          <el-button @click="addDialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editDo">Continue</el-button>
        </div>
      </el-dialog>
      <el-dialog title="edit" :visible.sync="editDialogFormVisible">
        <el-form :model="form">
          <el-form-item label="State">
          <el-input v-model="editObj.state" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Name">
           <el-input v-model="editObj.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-select v-model="partyList.partyName" placeholder="party">
            <el-option v-for="item in partyList "
                       :key="item.id"
                       :label="item.partyName"
                       :value="item.id"></el-option>
          </el-select>
        </el-form>
        <div sloy="footer" class="dialog-footer">
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
        data() {
          return {
            addDialogFormVisible:false,
            editDialogFormVisible:false,
            form: '',
            editObj: {
              state: '',
              name: '',
              party: '',
            },AddObj: {
              state: '',
              name: '',
              party: '',
            },
            tableData: [{
              state: 'SA',
              name: 'Q',
              party: 'asdf',
            }, {
              state: 'SA',
              name: 'W',
              party: 'asdf',
            }, {
              state: 'SA',
              name: 'E',
              party: 'asdf',
            }, {
              state: 'SA',
              name: 'R',
              party: 'asdf',
            }],
            partyList:[{
              partyName:"",
              id:""
            }]
          }
        },
        async mounted() {
           let response = await hc.get('/api/party')
           for (let i=0; i < response.data.party.length;i++) {
             let temp = {
               id: response.data.party[i].id,
               partyName:response.data.party[i].partyName
             }
             this.partyList.push(temp)
           }
        },
        methods: {
          handleEdit(index, row) {
           this.tableDataIndex=row;
            //this.editObj=index;
            this.editDialogFormVisible=true;

          },
          handleAdd() {
            //this.editObj=index;
            this.addDialogFormVisible=true;

          },
          editDo(){
            let index=this.tableDataIndex;
            //立即更改 若要交互 改成后台交互成功之后，再更新list
            this.tableData[index]=this.editObj;
            this.editDialogFormVisible=false;
          },
          handleDelete(index, row){
            console.log(index, row);
            this.$confirm('Are you sure to delete this item?', 'Notice', {
              confirmButtonText: 'Continue',
              cancelButtonText: 'Cancel',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: 'Successfully!'
              });
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