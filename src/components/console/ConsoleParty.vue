<template>
  <div>
    <div style="background-color:#5B7B9E;padding:40px;margin-bottom:5px;"></div>
    <div>
      <el-button
          size="mini"
          @click="handleAdd()">Add</el-button>
      <el-table
          :data="tableData" style="width: 60%">
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
            prop="name">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.name }}</span>
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
<!--          <el-form-item label="Name">-->
<!--            <el-input v-model="AddObj.candidateName" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->
          <el-select v-model="AddObj.party" placeholder="party">
            <el-option v-for="item in partyList "
                       :key="item.id"
                       :label="item.partyName"
                       :value="item.partyName"></el-option>
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
        <el-form :model="form">
          <el-form-item label="State">
            <el-input v-model="editObj.state" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input v-model="editObj.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-select v-model="partyName" placeholder="party">
            <el-option v-for="item in partyList "
                       :key="item.partyName"
                       :label="item.partyName"
                       :value="item.partyName"></el-option>
          </el-select>
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

export default {

  data() {
    return {
      addDialogFormVisible:false,
      editDialogFormVisible:false,
      form: '',
      editObj: {
        state: '',
        name: '',

      },AddObj: {
        state: '',
        party: '',
        _csrf:""
      },
      tableData: [],
      partyList:[]
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