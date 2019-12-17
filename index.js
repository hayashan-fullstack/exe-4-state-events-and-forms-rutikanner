import React, { useState } from 'react'
import ReactDOM from "react-dom"

const Line=(props)=>{
  return(
      <div>
        <h3>name:{props.line.name}</h3>
        <h3>phone:{props.line.phone}</h3>
  </div>
  )
}

const Print=(props)=>{
  console.log("print"/*event.target*/)
  console.log(props.persons)
  return(
      props.persons.map(line=><Line line={line}/>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
  phone:'1234'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const addPerson=(event)=>{
    event.preventDefault()
    console.log("clicked")
    const personObject={
      name:newName,
      phone:newPhone
  }
    setPersons(persons.concat(personObject))
  }

  const handleName=(event)=>{
    setNewName(event.target.value)
    
  }
  const handlePhone=(event)=>{
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          <form onSubmit ={addPerson}>
            name:<input value={newName} onChange={handleName}/>
            phone:<input value={newPhone} onChange={handlePhone}/>
            <button type="submit">add</button>
          </form>
        </div>
      </form>
      <h2>The persons:</h2>
      <Print persons={persons}/>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"))
