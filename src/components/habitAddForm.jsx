import React, { PureComponent } from 'react'

class HabitAddForm extends PureComponent {
  // react DOM요소 input 값에 접근하는 방법 - input에 ref로 연결해야됨
  formRef = React.createRef()
  inputRef = React.createRef()
  onSubmit = (event) => {
    //onSubmit의 디폴트 상태인 입력 후 refresh를 방지하게 해준다
    event.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    //this.inputRef.current.value = ''
    this.formRef.current.reset()
  }
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="itext"
          className="add-input"
          placeholder="Please enter your habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    )
  }
}

export default HabitAddForm
