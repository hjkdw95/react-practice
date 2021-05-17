import React, { Component } from 'react'
import Habit from './habit';

// 여러가지의 습관들을 포함할 수 있도록 할 것이양
export default class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: "Reading", count: 0},
            {id: 2, name: "Running", count: 0},
            {id: 3, name: "Coding", count: 0}
        ]
    };
    render() {
        return <ul>
        {
            this.state.habits.map(habit => (
            // Habit component안의 habit은 habits오브젝트 요소 하나하나이다
            <Habit key={habit.id} habit={habit}/>
        ))}
        </ul>
    }
}
