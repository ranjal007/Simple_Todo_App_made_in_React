import React from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Text, View } from 'react-native';
const styles=StyleSheet.create({
  text:{
    color:"#ffffff",
    }
})
let id=0
const Todo = props =>(
  <li style={{margin:20}}>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onChecked}/>
    <button style={{marginLeft:50,backgroundColor:'#94311C', color:'#ffffff'}} onClick={props.onDelete}> Delete </button>
    <button style={{marginLeft:50,backgroundColor:'#176B11',color:'#ffffff'}} onClick={props.onEdit}> Edit Todo </button>
    <span style={{marginLeft:50,paddingLeft:10,paddingRight:10,paddingBottom:5,paddingTop:5,backgroundColor:'#dd99ff'}}>{props.todo.text}</span>
  </li>
)

class App extends React.Component{

  constructor(){
    super()
    this.state={
      todos:[],
    }
  }
  addTodo(){
    const text=prompt("Todo  text please!")
    this.setState({
      todos:[...this.state.todos,
        {id:id++,text:text,checked:false}],
    })
  }

 

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id!==id)
    })
  }

  editTodo(id){
      const updatetext=prompt("Update Todo  text please!")
      this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id!==id) return todo
        return {
          id: todo.id,
          text: updatetext,
          checked:todo.checked,
        }

      })
    })
  }
  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id!==id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked:!todo.checked,
        }

      })
    })
  }
  render(){
    return(
      <div >
        <div style={{marginLeft:190,marginTop:20, color:'red'}}>
        Todo Count : {this.state.todos.length}</div>
        <div style={{marginLeft:190,marginTop:20, color:'red'}}>
        Todo Left : {
          this.state.todos.filter(todo => !todo.checked).length
        }</div>
        <button style={{color:"#ffffff" ,backgroundColor:'#214252' ,marginLeft:200,marginTop:20}} onClick={()=>this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => 
          <Todo todo={todo}
          onDelete={()=>this.removeTodo(todo.id)}
          onChecked ={()=>this.toggleTodo(todo.id)}
          onEdit={()=>this.editTodo(todo.id)}
          />
          
          )}
        </ul>
      </div>
    )
  }
}



export default App;