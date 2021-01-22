<template>
  <div>
      <complete-todo />
      <input type="text" @keyup.enter="addTodo">
      <hr>
      <todo-list />
      <hr>
      {{todos}}
      <hr>
      <user-list />
  </div>
</template>

<script>
import CompleteTodo from '../components/CompleteTodo.vue'
import TodoList from '../components/TodoList.vue'
import { mapState } from 'vuex';
import UserList from './UserList.vue';
export default {
    components: { TodoList, CompleteTodo, UserList },
    computed: {
        ...mapState('todo', ['todos'])
    },
    methods: {
        addTodo(e) {
            this.$store.dispatch('todo/ac_addTodo', e.target.value);
            e.target.value = "";
        }
    },
}
</script>

<style>

</style>