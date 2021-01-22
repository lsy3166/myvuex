var idNum = 10;

export default {
    namespaced: true,
    state: {
        todos: [
            { id: 1, text: "read a book", checked: false },
            { id: 2, text: "clean a room", checked: false },
            { id: 3, text: "do work", checked: false }
        ],
    },
    mutations: {
        mu_addTodo(state, todoText) {
            state.todos.push(
                {
                    id: idNum++,
                    text: todoText,
                    checked: false
                }
            )
        },
        mu_completeTodo(state, { todoId, event }) {
            const idx = state.todos.findIndex(todo => todo.id === todoId);
            state.todos[idx].checked = event.target.checked;
        },
        mu_deleteTodo(state, todoId) {
            const idx = state.todos.findIndex(todo => todo.id == todoId);
            state.todos.splice(idx, 1);
        },
    },
    actions: {
        ac_addTodo({ commit }, todoText) {
            commit('mu_addTodo', todoText);
        }
    },
    getters: {
        getCountTodo: state => state.todos.filter(todo => todo.checked).length
    },
    modules: {
    }
}