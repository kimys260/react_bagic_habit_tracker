import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });

    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handelAdd = (name) => {
    const { habits } = this.state;
    const habitIds = habits.map((habit) => {
      return habit.id;
    });

    const findObj = habits.find((habit) => {
      return habit.name === name;
    });

    if (findObj) {
      alert('이미 같은 이름의 Habit이 있습니다.');
      return;
    }

    const addObj = {
      id: Math.max(...habitIds) + 1,
      name,
      count: 0,
    };

    habits.push(addObj);

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      }

      return item;
    });

    this.setState({ habits });
  };

  render() {
    console.log('App');
    return (
      <>
        <Navbar
          totalCount={this.state.habits.reduce((pre, cur) => {
            return pre + cur.count;
          }, 0)}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handelAdd}
        ></Habits>
      </>
    );
  }
}

export default App;
