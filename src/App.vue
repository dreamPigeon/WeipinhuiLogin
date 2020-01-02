<template>
 <div>
     <router-view></router-view>
 </div>  
</template>

<script>

  export default {
    components:{
     
    },
    async mounted () {
      this.$store.dispatch('autoLogin')
    },
}
</script>

<style scope lang="stylus" rel="stylesheet/stylus">

</style>