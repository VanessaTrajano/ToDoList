import React, {Component} from 'react'
import './App.css'

export default class ToDo extends Component{
  
  state = {
    tarefa: "",
    lista: []
  }

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    })
  }

  add = () => {
    let {lista, tarefa} = this.state
    if(tarefa != 0 || null){
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }
  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item) => (
        item.id != id
      ))
    })
  }
  
  render(){
    let {handleChange, add, remove} = this
    let {tarefa, lista} = this.state
    return(
      <div className='container'>
        <h1>ToDo List</h1>
        <div className='box'>
          <input value={tarefa} onChange={handleChange}/>
          <button onClick={add}>ADD</button>
        </div>
        <div className='items'>
          {lista. map((item) => (
            <ul>
              <li>{item.tarefa}</li>
              <button onClick={() => remove(item.id)}>X</button>
            </ul>
          ))}
        </div>
      </div>
    )
  }
}