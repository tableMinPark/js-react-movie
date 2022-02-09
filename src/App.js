
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();             // 새로고침 방지
    if (toDo === ""){                   // toDo가 비어있으면 함수종료
      return;
    }
    // state에 함수를 보내서 함수의 첫번째 매개변수인 현재의 state를 수정하는 방식 (currentArray = toDos)
    // 현재의 배열 + 새로운값 = 새로운배열
    setToDos((currentArray) => [toDo, ...currentArray]);    // ["a", ...["b", "c"]] => ["a", "b", "c"] : ...["b", "c"] 는 배열을 Objcet가 아닌 배열안의 데이터를 가리킨다.
    
    // state에 직접적으로 접근해서 수정하는 방식
    setToDo("");
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo}
          type="text" 
          placeholder="Write your to Do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      { toDos.map((item, index) => (<li key={index}>{item}</li>)) }
    </div>
  );
}
// [].map(it) 은 []의 item을 돌면서 함수를 실행시키고 item을 수정한다. (5개의 item이 있으면 함수가 5번 실행된다. item : 5번 실행되면서 각각의 item이 it에 담긴다.)
// 리액트는 기본적으로 <li> 의 모든 item을 인식하기 때문에 key를 넣어서 고유한 item이 되도록 만들어야한다. (List의 index는 고유하기 때문에 <li> 의 key에 index를 넣음)
// 화살표함수 정리 : ```() => {return [returnValue]}``` === ```() => returnValue``` === ```() => (returnValue)```

export default App;
