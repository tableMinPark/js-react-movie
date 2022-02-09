
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
    setToDos((currentArray) => [toDo, ...currentArray]);    // ["a", ...["b", "c"]] => ["a", "b", "c"] : ...["b", "c"] 는 배열을 Objcet가 아닌 배열안의 데이터를 가리킨다.
    setToDo("");
  }
  console.log(toDos);

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
    </div>
  );
}


export default App;
