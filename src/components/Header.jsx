import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { useState } from "react";
const Header = () => {
    const [task, setTask] = useState("")
  return (
    <div className='container text-center m-5 '>
    <h1>Todo App</h1>
    <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <Button id="basic-addon2"
        disabled={!task.trim()}
        >Add Todo</Button>
      </InputGroup>
    </div>
  )
}
export default Header







