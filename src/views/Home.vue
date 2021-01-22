<template>
  <div class="home">
    <h1>This is Home page</h1>
    <todo />
  </div>
</template>

<script>
import Todo from '../components/Todo.vue'
export default {
  components: { Todo },
  name: 'Home',
}
</script>
