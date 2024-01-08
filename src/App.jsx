import { useState } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'


//1. 인풋창이있고 버튼이 있다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
//3. 아이템 삭제버튼을 누르면 삭제 가능하다.
//리엑트의 핵심은 재활용! 그렇기 때문에반복되는 것은 컴포넌트화 시키면 유지보수, 개발 쉬움

export default function App() {
  const [inputValue,setInputValue] = useState('')
  const [todoList,setTodoList] = useState([])
  
const addItem = () => {
  if (inputValue.trim() !== '') {
    setTodoList([...todoList, inputValue]);
    setInputValue('');
  }
};

const deleteItem = (index) => {
  const updatedList = [...todoList];
  updatedList.splice(index, 1);
  setTodoList(updatedList);
};

return (
  <main>
    <input
      value={inputValue}
      type='text'
      onChange={(event) => setInputValue(event.target.value)}
    />
    <button onClick={addItem}>추가</button>

    <TodoBoard todoList={todoList} onDelete={deleteItem} />
  </main>
);
}