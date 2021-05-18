// PureComponent를 function Component로 만들어보기
import React, { memo } from 'react'

// memo는 PureComponent처럼 props가 변경되지 않으면 내부의 함수가 호출되지 않는다
const HabitAddForm = memo((props) => {
  const formRef = React.createRef()
  const inputRef = React.createRef()

  const onSubmit = (event) => {
    event.preventDefault()
    const name = inputRef.current.value
    name && props.onAdd(name)
    formRef.current.reset()
  }

  return (
    // 함수니까 this 안쓰고 바로 접근 가능
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Please enter your habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  )
})

export default HabitAddForm
