import React, {Component} from 'react'
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: plum;
  }
`

const Container = styled.form`
  background-color: indigo;
  color: plum;
  margin: 2.5vw 3vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
`

const Box = styled.div`
  margin-top: 6vh;
  display: flex;
}
`

const Input = styled.input`
  font-size: 3vh;
  height: 4vh;
  border: none;
  background-color: plum;
`

const AddButton = styled.button`
  border: none;
  background-color: plum;
  color: indigo;
  width: 3vw;

  &:hover{
    border: 2px solid indigo;
    font-weight: 700;
  }
`

const Items = styled.div`
  margin-top: 5vh;
  font-size: 1.5vw;
`

const List = styled.ul`
  margin-top: 2vh;
  display: flex;
  width: 60vw;
  justify-content: space-between;
  list-style: none;
`

const RemoveButton = styled.button`
  border: none;
  height: 4vh;
  background-color: plum;
  color: indigo;
  width: 2vw;
  
  &:hover{
    border: 2px solid indigo;
    font-weight: 700;
  }
`

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

  add = (e) => {
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
    e.preventDefault()
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
      <Container>
        <GlobalStyle/>
        <h1>ToDo List</h1>
        <Box>
          <Input value={tarefa} onChange={handleChange}/>
          <AddButton onClick={add}>ADD</AddButton>
        </Box>
        <Items>
          {lista.map((item) => (
            <List>
              <li>{item.tarefa}</li>
              <RemoveButton onClick={() => remove(item.id)}>X</RemoveButton>
            </List>
          ))}
        </Items>
      </Container>
    )
  }
}