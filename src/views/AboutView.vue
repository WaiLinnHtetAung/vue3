<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="my-3">I'm {{ this.$route.params.name }} and I'm {{this.$route.params.age}}</p>
    <button class="btn btn-primary me-2" @click="goHome()">Home</button>
    <button class="btn btn-info" @click="goAllList()">All List</button>
    <Single/>
  </div>
</template>


<script>
  import Single from './myShopList/SingleList.vue';

  export default {
    name : 'AboutView',
    components : {Single},
    data : () => ({
      
    }),
    methods : {
        goHome() {
          this.$router.push('/')
        }, 
        goAllList() {
          this.$router.push({name:'allList'})
        }
      }
  }
</script>
