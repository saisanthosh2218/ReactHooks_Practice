import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CallBack from "./CallBack";
import Memo from "./Memo";
import Reference from "./Reference";
import LazyLoad from "./LazyLoad";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/callback" Component={CallBack} />
          <Route path="/memo" Component={Memo} />
          <Route path="/reference" Component={Reference} />
          <Route path="/lazyload" Component={LazyLoad} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
