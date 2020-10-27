<template>
  <div>

    <div>
<!--      <el-button-->
<!--          size="mini"-->
<!--          @click="handleAdd()">Add</el-button>-->
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
            label="User Name"
            width="180"
            prop="name">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.name }}</span>
          </template>
        </el-table-column><el-table-column
          label="Phone number"
          width="180"
          prop="phone">
        <template slot-scope="scope">

          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
        <el-table-column
            label="address"
            width="180"
            prop="address">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.address }}</span>
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
<!--      <el-dialog title="add" :visible.sync="addDialogFormVisible">-->
<!--        <el-form :model="form">-->
<!--          <el-form-item label="Password">-->
<!--            <el-input v-model="AddObj.password" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->
<!--                    <el-form-item label="Address">-->
<!--                      <el-input v-model="AddObj.address" auto-complete="off"></el-input>-->
<!--                    </el-form-item>-->
<!--          <el-form-item label="UserNa">-->
<!--            <el-input v-model="AddObj.address" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-select v-model="AddObj.address" placeholder="party">-->
<!--            <el-option v-for="item in partyList "-->
<!--                       :key="item.id"-->
<!--                       :label="item.userName"-->
<!--                       :value="item.userName"></el-option>-->
<!--          </el-select>-->
<!--        </el-form>-->
<!--        <div sloy="footer" class="dialog-footer">-->
<!--          <br>-->
<!--          <br>-->
<!--          <el-button @click="addDialogFormVisible = false">Cancel</el-button>-->
<!--          <el-button type="primary" @click="addDO">Continue</el-button>-->
<!--        </div>-->
<!--      </el-dialog>-->
      <el-dialog title="edit" :visible.sync="editDialogFormVisible">
        <el-form :model="form">
          <el-form-item label="password update">
            <el-input v-model="editObj.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Address update">
            <el-input v-model="editObj.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-select v-model="userName" placeholder="party">
            <el-option v-for="item in userList "
                       :key="item.userName"
                       :label="item.userName"
                       :value="item.userName"></el-option>
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
name: "ConsoleUser",
  data() {
    return {
      addDialogFormVisible:false,
      editDialogFormVisible:false,
      form: '',
      editObj: {
        password: '',
        address: '',

      },AddObj: {
        password: '',
        address: '',
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

<style scoped>

</style>