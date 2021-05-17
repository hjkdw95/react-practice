import React, { Component } from 'react'

export default class Habit extends Component {
    handleIncreament = () => {
        // state object안에 있는 count를 증가시킨 뒤, state를 업데이트 해야 한다.
        // state를 업데이트 할 때는 꼭 react의 setState함수를 사용해야 업데이트가 된다.
        this.setState({count: this.state.count + 1})
    };

    handleDecreament = () => {
        // 감소 숫자가 마이너스로 안떨어지게 하기
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count})
    };

    handleDelete = () => {
        
    }

    render() {
        const {name, count} = this.props.habit;
        return(
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncreament}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecreament}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}
