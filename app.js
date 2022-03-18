Vue.createApp({
    data() {
        return {
            message: 'Hello Rama!',
            todo: '',

        }
    },

    mounted() {
        const todo = window.localStorage.getItem('todo');
        if (todo) {
            this.listTodo = JSON.parse(todo);
        }
    },
    methods: {
        addTodo() {
            if (this.todo === '') {
                alert("Todo kamu tidak boleh kosong");
            } else {
                this.listTodo.push({
                    name: this.todo,
                    isDone: false
                });
                window.localStorage.setItem('todo', JSON.stringify(this.listTodo))
                this.todo = '';
            }
        },

        markTodo(index) {
            this.listTodo[index].isDone = !this.listTodo[index].isDone;
        },
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
        },
    },
}).mount('#app')
