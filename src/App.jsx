import './App.css'
import Counter from './Count-3'
import Team from './Team-4'
import Users from './Users-5'
import Friends from './Friends-6'
import './Friends-6.css'
function App() {
  function handlClick1(){
    alert('Button One Click')
  }
  const handlClick2 = () =>{
    alert('Button Two Click')
  }
  const handlClick3 = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handlClick1}>Click Me1</button>
      <button onClick={handlClick2}>Click Me2</button>
      <button onClick={() => handlClick3(5)}>Click Me3</button>
      <button onClick={() => {alert('Button three Click')}}>Click Me4</button>
    </>
  )
}

export default App
