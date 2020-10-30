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
            label="Name"
            width="180"
            prop="tableData.userName">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.name }}</span>
          </template>
        </el-table-column><el-table-column
          label="Phone number"
          width="180"
          prop="tableData.phoneNumber">
        <template slot-scope="scope">

          <span>{{ scope.row.phoneNumber }}</span>
        </template>
      </el-table-column>
        <el-table-column
            label="address"
            width="180"
            prop="tableData.address">
          <template slot-scope="scope">
            <span><a href="javascript:;"></a>{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operation">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>

          </template>
        </el-table-column>
      </el-table>
<!--      <el-dialog title="add" :visible.sync="addDialogFormVisible" :modal-append-to-body='false'>-->
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
      <el-dialog title="edit" :visible.sync="editDialogFormVisible" :modal-append-to-body='false'>
        <el-form :model="form">
          <el-form-item label="password update">
            <el-input v-model="editObj.password" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="Address update">
            <el-input v-model="editObj.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="Phone Number update">
            <el-input v-model="editObj.phoneNumber" auto-complete="off"></el-input>
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
name: "ConsoleUser",
  data() {
    return {
      addDialogFormVisible:false,
      editDialogFormVisible:false,
      form: '',
      editObj: {
        password: '',
        address: '',
        phoneNumber: '',
        id: '',
        _csrf: '',
      },
      AddObj: {
        password: '',
        address: '',
        _csrf:""
      },
      tableData: [],

    }
  },

  async mounted() {

    let role = this.$cookies.get('role');
    if(role !== 'user')
      await this.$router.push({path: '/login'});

    //get partyList
    let response = await hc.get('/api/users/'+this.$cookies.get('id'));
    let temp = {
        name: response.data.user.name,
        phoneNumber: response.data.user.phoneNumber,
        address: response.data.user.address,
        id:response.data.user.id
    }
    this.tableData.push(temp)

  },



  methods: {
    handleEdit(index, row) {
      this.editDialogFormVisible=true;
      this.editObj = row;
      const oldAddress = this.editObj.address;
      this.editObj.address = oldAddress;
      const oldPhoneNumber = this.editObj.phoneNumber;
      this.editObj.phoneNumber = oldPhoneNumber;
      const oldId = this.tableData[0].id
      this.editObj.id = oldId;


    },

    async editDo(){
      let CsrfResponse = await hc.get("/api/csrf");
      this.editObj._csrf = CsrfResponse.data.csrfToken;

      let res = await hc.put('/api/users', this.editObj);
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
    }

  }
}
</script>

<style scoped>

</style>