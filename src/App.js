
import { useState, useEffect } from "react";

function Hello(){

  // 컴포넌트가 생성될 때 실행될 함수
  // function hiFn(){
  //   console.log("created :)");
  //   return byFn;    // 컴포넌트가 사라질 때 실행될 함수를 지정함.
  // }

  // 컴포넌트가 사라질 때 실행될 함수
  // function byFn(){
  //   console.log("destroyed :(");
  // }

  // 현재는 dependency가 비어있으니 컴포넌트가 처음 생성될 때 함수가 호출된 후 다시 호출 되지 않음
  // 그래서 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면 useEffect함수(hiFn)가 새로운 함수(byFn)를 return해야 함

  // deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데 그 과정이 리렌더링으로 
  // useEffect함수가 실행되고 클린업하면서 이전에 있던 이펙트인 console.log("created :)")가 삭제되고 
  // 새로운 이펙트 함수인 return함수가 실행되기 때문이다.
  // 리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행
  // [참고블로그 : https://simsimjae.tistory.com/401]
  
  // useEffect(hiFn, []);

  // 위의 코드를 화살표함수로 간략화한 코드
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("by :(");
    }
  }, []);

  return (
    <h1>Hello</h1>
  );
}

function App() {
  // showing이 변할 때마다 App 컴포넌트가 리렌더링된다. : 클릭할때마다 Hello 컴포넌트를 지우고 새로 생성
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}


export default App;
