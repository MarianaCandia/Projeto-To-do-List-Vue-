

// Objeto principal da aplicação
const todosApp = {
    // Propriedade/função que retorna os dados da aplicação
    data(){
        return {
            todos:[], 
            newTodo: {
                done: false
            }
        }
    },
    // Methods: semelhantes a funções, cada propriedade aqui é um método
    methods:{
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.todos))
            }
            else{
                alert('To-do text is required')
            }
        },
         
        created(){
            this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos
        },
        updated(){
            localStorage.setItem("todos", JSON.stringify(this.todos))
        }
    }
}
// Para inicializar o Vue com o objeto que está guardando a lógica da aplicação
Vue.createApp(todosApp).mount('#app')