<template>
  <div>
      <span>
          Completed Todo Count : {{getCountTodo}}
      </span>
  </div>
</template>

<script>
export default {
    computed: {
        getCountTodo() {
            return this.$store.getters['todo/getCountTodo']
        }
    },
}
</script>

<style>

</style>