
import { useState, useEffect } from "react";

// useEffect(effect: [한번만 실행하고싶은 코드], deps?: [한번만 실행하고 싶은 코드를 실행할 트리거 state])

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // 실행시 한번만 실행된다.
  useEffect(() => {
    console.log("I run only once.")
  }, []);     
  
  // counter state가 변화할때만 실행된다.
  useEffect(() => {
    console.log("I run when 'counter' changes.");  
  }, [counter]);

  // keyword state가 변화할때만 실행된다.
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);    

  // counter, keyword state가 변화할때만 실행된다.
  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' changes.");
  }, [counter, keyword]);    

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

// state이 변경될 때 컴포넌트의 모든 코드가 실행된다. (counter의 값이 바뀔 때마다 새로고침된다.)
export default App;
