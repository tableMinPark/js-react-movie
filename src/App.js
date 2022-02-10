import Detail from "./routes/Detail";
import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";     // npm install react-router-dom@5.3.0

function App() {
  // 페이지간 이동 경로를 정의 "/" 이 가장 마지막에 있어야한다. : path의 앞부분 부터 일치하는 것이 있으면 이동해버리기 때문에 "/" 이 가장 위에있으면 "/movie" 로 넘어갈수없다. `Route exact path="/"` 와 같이 완전일치 판정으로 바꾸면 순서가 상관이 없다.

  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
