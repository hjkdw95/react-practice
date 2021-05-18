import React, { PureComponent } from 'react'

class NavBar extends PureComponent {
  render() {
    return (
      <nav className="navBar">
        <i className="navBar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="habit-count">{this.props.totalCount}</span>
      </nav>
    )
  }
}

export default NavBar
