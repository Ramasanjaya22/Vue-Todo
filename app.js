Vue.createApp({
    data() {
        return {
            message: 'Hello Rama!',
            todo: '',
            listTodo: []
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

        markDoneTodo(index) {
            this.listTodo[index].isDone = !this.listTodo[index].isDone;
            window.localStorage.setItem('todo', JSON.stringify(this.listTodo));
        },
        deleteTodo(index) {
            this.listTodo.splice(index, 1);
            window.localStorage.setItem('todo', JSON.stringify(this.listTodo));
        },
    },
}).mount('#app')
