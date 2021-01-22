<template>
  <div>
      <h2>⊙ User List</h2>
      <!-- <span v-for="user in users" :key="user.data.id">{{user.data.name}}</span> -->
      <p v-for="user in users" :key="user.id">{{user.name}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created(){
        this.$store.commit('user/mu_setUsers')
    },
    computed: {
        ...mapState('user', ['users'])
    },
}
</script>

<style>

</style>