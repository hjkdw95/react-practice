import React, { Component } from 'react'
import Habit from './habit'
import HabitAddform from './habitAddForm'

// 여러가지 습관을 표시한다
class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddform onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Habits
