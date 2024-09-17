import React from "react";
import {ListGroup} from "react-bootstrap"

const TodoList = () => {
  return (
    <div>
      <h2 className="text-center text-danger">Todos</h2>
      <ListGroup.Item variant="info">Info</ListGroup.Item>
    </div>
  );
};

export default TodoList;
