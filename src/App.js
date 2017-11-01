import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, {value: this.state.term, isDone: false}]
    });
  };

  onComplete = (index) => {
    console.log(index);

    var newItems = this.state.items.map((item, idx)=>{
      if (idx === index) {
        return {value: item.value, isDone: true};
      }
      else {
        return item;
      }
    });
    this.setState({
      items: newItems
    });

  };


  render() {

    return (
      <div className="App">
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Submit</button>
        <TodoList items={this.state.items} onComplete={this.onComplete} />
      </div>
    );
  }

}




export default App;
