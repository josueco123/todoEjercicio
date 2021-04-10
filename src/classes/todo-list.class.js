import { Todo } from './todo.class';

export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    //agrea un todo y lo guarda
    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    //borramos un todo
    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();
    }

    //poner marca de completado al todo
    marcarCompletado( id ) { 

        for( const todo of this.todos ) {

            if( todo.id == id ) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }


    }

    //borrar todo completados
    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    //guardar localmente un todo
    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        
    }

    //llamar a un todo cargado
    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];
        
        this.todos = this.todos.map( Todo.fromJson );
    }

}