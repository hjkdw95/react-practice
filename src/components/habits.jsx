import React, { Component } from 'react'
import Habit from './habit'

// 여러가지의 습관들을 포함할 수 있도록 할 것이양
export default class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    }
    // 습관들의 관리 관련한 모든 로직을 한곳에 담아두기 위해 이곳으로 가져옴,,
    handleIncreament = (habit) => {
        // state를 직접 고치는 것은 안된다
        // 새로  변수를 만들어서 업데이트 하는 방식으로 진행
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        habits[index].count++
        // 새로운 오브젝트를 만들어줘야됨(state직접 고치면 안되니)
        // 아래와 같이 키/벨류 이름 같은 경우는 하나만 작성해도 됨
        //this.setState({habits})
        this.setState({ habits: habits })
    }

    handleDecreament = (habit) => {
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        const count = habits[index].count - 1
        // 직접적으로 state의 인덱스를 건드리는 것이여서..구린코드임
        habits[index].count = count < 0 ? 0 : count
        this.setState({ habits })
    }

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id)
        this.setState({ habits })
    }

    render() {
        return (
            <ul>
                {this.state.habits.map((habit) => (
                    // Habit component안의 habit은 habits오브젝트 요소 하나하나이다
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncreament}
                        onDecrement={this.handleDecreament}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        )
    }
}
