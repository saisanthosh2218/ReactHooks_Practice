import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CallBack from "./CallBack";
import Memo from "./Memo";
import Reference from "./Reference";
// import LazyLoad from "./LazyLoad";
import SkeltonLoading from "./SkeltonLoading";
import Home from "./Home";
const LazyLoad = React.lazy(() => import("./LazyLoad"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/callback" Component={CallBack} />
          <Route path="/memo" Component={Memo} />
          <Route path="/reference" Component={Reference} />
          <Route path="/lazyload" element={<LazyLoad />} />
          <Route path="/skeltonload" Component={SkeltonLoading} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
