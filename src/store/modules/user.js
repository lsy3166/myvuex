import axios from 'axios'
export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        mu_setUsers(state) {
            console.log("mu_setUsers");
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then(users => state.users = users.data);
        }
    },
    actions: {
    },
    getters: {
    },
    modules: {
    }
}