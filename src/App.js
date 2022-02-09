import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

// js 파일마다 각각 css파일을 연결해주기 때문에 하나의 css파일로 광역적용을 시킬 필요가 없다.
// 클래스이름이 랜덤하게 적용되기 때문에 다른 css파일끼리 클래스명이 중복되어도 상관이 없다.

// 실행결과
// <h1 class="App_title__+IZYT">Welcome back!!!</h1>
// <button class="Button_btn__pba4O">Continue</button>

export default App;
