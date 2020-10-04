<template>
  <div>
    <div style="background-color:#5B7B9E;padding:40px;margin-bottom:5px;"></div>
    <div>
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
      <el-dialog title="edit" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="State">
          <el-input v-model="editObj.state" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Name">
           <el-input v-model="editObj.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="Party">-->
            <el-input v-model="editObj.party" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div sloy="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editDo">Continue</el-button>
        </div>
      </el-dialog>
          </div>
        </div>
      </template>

      <script>
      export default {
        data() {

          return {
            dialogFormVisible:false,
            form: '',
            editObj: {
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
            }]
          }
        },
        methods: {
          handleEdit(index, row) {
           this.tableDataIndex=row;
            this.editObj=index;
            this.dialogFormVisible=true;

          },
          editDo(){
            let index=this.tableDataIndex;
            //立即更改 若要交互 改成后台交互成功之后，再更新list
            this.tableData[index]=this.editObj;
            this.dialogFormVisible=false;
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