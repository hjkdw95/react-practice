import React, { Component } from 'react'
import './app.css'
import Habits from './components/habits'

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Work out', count: 0 },
    ],
  }

  // 데이터 처리
  handleIncrement = (habit) => {
    // state는 직접 수정할 수 없다
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++
    this.setState({ habits })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const count = habits[index].count - 1
    // state를 직접 수정한 것으로 좋지 않은 코드
    habits[index].count = count < 0 ? 0 : count
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.setState({ habits })
  }

  render() {
    return (
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    )
  }
}

export default App
