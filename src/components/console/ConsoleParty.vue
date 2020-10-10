<template>
  <div>

    <div>
      <el-button
          size="mini"
          @click="handleAdd()">Add</el-button>
      <el-table
          :data="partyList" style="width: 60%">
<!--        <el-table-column-->
<!--            label="Candidates party"-->
<!--            width="180"-->
<!--            prop="party">-->
<!--          <template slot-scope="scope">-->
<!--            <span><a href="javascript:;"></a>{{ scope.row.party }}</span>-->
<!--          </template>-->
<!--        </el-table-column>-->

        <el-table-column
            label="Party Name"
            width="180"
            prop="partyList.partyName">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.partyName }}</span>
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
          <el-form-item label="Party Name">
            <el-input v-model="AddObj.partyName" auto-complete="off"></el-input>
          </el-form-item>
<!--          <el-form-item label="Name">-->
<!--            <el-input v-model="AddObj.candidateName" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->

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

          <el-form-item label="New Party Name">
            <el-input v-model="editObj.newName" auto-complete="off"></el-input>
          </el-form-item >

          <el-form-item label="Current Party Name">
          <el-select v-model="editObj.partyName" :disabled=true placeholder="party">
            <el-option v-for="item in partyList "
                       :key="item.partyName"
                       :label="item.partyName"
                       :value="item.partyName"></el-option>
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

  data() {
    return {
      addDialogFormVisible:false,
      editDialogFormVisible:false,
      form: "",
      editObj: {
        partyName: "",
        newName: ""

      },AddObj: {
        partyName: "",
        _csrf:""
      },
      tableData: [],
      partyList:[]
    }
  },

  async mounted() {
    //get partyList
    let response = await hc.get('/api/party')
    for (let i=0; i < response.data.party.length;i++) {
      let temp = {
        partyName:response.data.party[i].partyName
      }
      this.partyList.push(temp)
    }
    console.log(response)
  },



  methods: {
    handleEdit(index, row) {
      this.editDialogFormVisible=true;
      this.editObj = row;
      const oldParty = this.editObj.partyName;
      this.editObj.partyName = oldParty;

    },
    handleAdd() {
      //this.editObj=index;
      this.addDialogFormVisible=true;

    },
    async addDO() {
      let CsrfResponse = await hc.get("/api/csrf");
      this.AddObj._csrf = CsrfResponse.data.csrfToken;
      let res = await hc.post('/api/party', this.AddObj);
      if(res.data.status === 'success'){
        // add success
        this.$message({
          type: 'success',
          message: 'Successfully!'
        });
        this.addDialogFormVisible = false;
        // refresh current page
        location.reload();
      }
      else {
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

      let res = await hc.put('/api/party', this.editObj);
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
        partyName: row.partyName,
        _csrf: _csrf
      };
     // console.log(index, row);
      this.$confirm('Are you sure to delete this item?', 'Notice', {
        confirmButtonText: 'Continue',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
      this.$confirm('Are you sure to delete this item?', 'Notice', {
        confirmButtonText: 'Continue',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // send delete request
        hc.delete('/api/party/',reqData).then(() => {
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
*{
  font-family:"Arial";

}
</style>