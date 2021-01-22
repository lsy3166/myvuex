<template>
  <div>
      <div v-for="(todo, idx) in todos" :key="idx">
        {{todo.checked}}
        <input type="checkbox" :checked="todo.checked" @change="completeTodo(todo.id, $event)" >
        <span :style="todo.checked?'text-decoration:line-through;color:gray':''">{{todo.text}}</span>
        <button style="margin:7px" @click="deleteTodo(todo.id)">Delete</button>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('todo', ['todos']),
    },
    methods: {
        completeTodo(todoId, event) {
            this.$store.commit('todo/mu_completeTodo', {
                todoId, 
                event
            })
        },
        deleteTodo(todoId) {
            this.$store.commit('todo/mu_deleteTodo', todoId);
        }
    },
}
</script>

<style>

</style>