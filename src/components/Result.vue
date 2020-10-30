<template>
  <div>

    <div>
      <el-table
          :data="tableData" style="width: 60%">
        <el-table-column
            label="Senator"
            width="180"
            prop="name">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.name }}</span>
          </template>
        </el-table-column><el-table-column
          label="States"
          width="180"
          prop="state">
        <template slot-scope="scope">

          <span>{{ scope.row.state }}</span>
        </template>
      </el-table-column>
        <el-table-column
            label="Party"
            width="180"
            prop="party">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.party }}</span>
          </template>
        </el-table-column>
        <el-table-column
            label="Order elected"
            width="180"
            prop="order">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.order }}</span>
          </template>
        </el-table-column>
      </el-table>
<!--      <el-dialog title="edit" :visible.sync="editDialogFormVisible">-->
<!--        <el-form :model="form">-->
<!--          <el-form-item label="password update">-->
<!--            <el-input v-model="editObj.password" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="Address update">-->
<!--            <el-input v-model="editObj.address" auto-complete="off"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-select v-model="userName" placeholder="party">-->
<!--            <el-option v-for="item in userList "-->
<!--                       :key="item.userName"-->
<!--                       :label="item.userName"-->
<!--                       :value="item.userName"></el-option>-->
<!--          </el-select>-->
<!--        </el-form>-->
<!--        <div sloy="footer" class="dialog-footer" >-->
<!--          <br>-->
<!--          <br>-->
<!--          <el-button @click="editDialogFormVisible = false">Cancel</el-button>-->
<!--          <el-button type="primary" @click="editDo">Continue</el-button>-->
<!--        </div>-->
<!--      </el-dialog>-->
    </div>
  </div>
</template>

<script>
const hc = require('@/utils/httpconnect')
export default {
name: "Result",

  data() {
    return {
      addDialogFormVisible:false,
      editDialogFormVisible:false,
      form: '',
      editObj: {
        name: '',
        state: '',
        party: '',
        order: '',

      },AddObj: {
        name: '',
        state: '',
        party: '',
        order: '',
        _csrf:""
      },
      tableData: [],
      partyList:[]
    }
},
  async mounted(){
  let response = await hc.get("/api/results")
    //sort the result base on the order of elected
    response.data.results.sort(compare('order_elected'))

    for(let i = 0; i < response.data.results.length; i++){
      let temp = {
        name: response.data.results[i].senator,
        state: response.data.results[i].state,
        party: response.data.results[i].party,
        order: response.data.results[i].order_elected
      }
      this.tableData.push(temp)
    }
    //functions handle sorting by specific property
    function compare(property){
      return function (obj1,obj2){
        return obj1[property]-obj2[property];
      }
    }

  },
  methods: {
     handleEdit(index, row) {
       this.tableDataIndex=row;
       this.editObj=index;
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