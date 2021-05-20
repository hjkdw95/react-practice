import React, { Component } from 'react'
import './App.css'
import Habits from './components/habits'
import NavBar from './components/navBar'

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
    // 렌더 부담을 줄이는 방식
    const habits = this.state.habits.map((item) => {
      // 아이템 id 와 habit id가 같은 경우, habit obj를 copy하되, count부분만 바꿔라
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      }
      return item
    })
    this.setState({ habits })
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: count < 0 ? 0 : count }
      }
      return item
    })
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.setState({ habits })
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }]
    this.setState({ habits })
  }

  handleReset = () => {
    // habit의 count가 0이 아닐때만 reset하도록 설정 (render최소화 위해)
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }
      }
      return habit
    })
    this.setState({ habits })
  }

  render() {
    return (
      <>
        <NavBar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App
