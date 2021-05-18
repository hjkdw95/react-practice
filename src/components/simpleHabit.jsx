import React, { useCallback, useState, useRef, useEffect } from 'react'
import '../app.css'

// class component를 react hook으로 변경해보기
const SimpleHabit = () => {
  // useState를 사용하면 function안에서도 state를 사용할 수 있다
  // useState는 비즈니스로직이 변경되어도 데이터를 기억하고 있음
  // state = { count: 0 }
  const [count, setCount] = useState(0)
  // count: 실제 state값
  // setCount: count를 업데이트 할 수 있는 함수

  //createRef: 매번 호출할 때마다 새로운 레퍼런스 생성
  //useRef: 레퍼런스 생성 후 메모리에 저장 => 재사용 가능
  const spanRef = useRef()

  // useCallback을 사용하면 리액트가 함수를 자동적으로 캐시에 저장
  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  })

  useEffect(() => {
    console.log(`mounted and updated: ${count}`)
  }, [])

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span ref={spanRef} className="habit-count">
        {count}
      </span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  )
}

export default SimpleHabit

// class와의 차이점 : function은 props, state가 변경되면 함수 전체가 re-render된다
// 지역변수도 다 반복된다
