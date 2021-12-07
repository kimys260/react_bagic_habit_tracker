import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  handleReset = () => {
    this.setState({ name: '' });
    this.props.onReset();
  };

  render() {
    console.log('habits');
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        {/* <div className="habit-input-box">
          <input
            className="add-input"
            placeholder="Habit"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <button className="add-button" onClick={this.handleAdd}>
            Add
          </button>
        </div> */}
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="add-button" onClick={this.handleReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
