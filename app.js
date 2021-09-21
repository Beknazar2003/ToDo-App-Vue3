const app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Create TodoLis', done: false },
      { text: 'Create TodoItem', done: false },
      { text: 'Create AddTodo', done: false },
    ],
    title: 'Todos App',
    placeholder: 'Add New Todo',
    inputValue: '',
    done: false,
  },
  methods: {
    deleteTodo: function (id) {
      this.todos.splice(id, 1)
    },
    addTodo() {
      if (this.inputValue.trim() != '') {
        this.todos.push({ text: this.inputValue, done: false })
        this.inputValue = ''
      }
    },
  },
})
