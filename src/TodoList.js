import React, { Component } from 'react';


const TodoList = props => (
  <ul>
    {
      props.items.map((item, index) => {
        var style =
          {'textDecoration':''};

        if (item.isDone) {
          style = {'textDecoration':'line-through'};
        }
        return (
          <li key={index} style={style}>
            {item.value}
            <button onClick={props.onComplete.bind(this, index)}>Done</button>
          </li>
        )
      })
    }
  </ul>
);



export default TodoList;
