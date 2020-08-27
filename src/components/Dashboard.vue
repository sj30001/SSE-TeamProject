<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Voters</h4></li>
      <li v-for="voters in voters"
          v-bind:key="voters.id"
          class="collection-item">
            <div class="chip">{{voters.state}}</div>{{voters.voter_id}}:{{voters.name}}

        <router-link class="secondary-content" v-bind:to="{name : 'view-voter' , params : {voter_id: voters.voter_id}}">
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>

    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>

      </router-link>
    </div>

  </div>
</template>

<script>
import db from './firebaseinit'
export default {
  name: 'dashboard',
  data(){
    return{
      voters: []

    }
  },
  created() {
    db.collection('voters').orderBy('voter_id').get().then
    (querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'voter_id' : doc.data().voter_id,
          'name' : doc.data().name,
          'state' : doc.data().state,
          'role' : doc.data().role
        }
        this.voters.push(data)
      })
    })
  }
}
</script>
