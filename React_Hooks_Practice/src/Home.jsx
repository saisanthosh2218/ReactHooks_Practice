import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="links">
        <Link to={"/"}>Home Page</Link>
        <Link to={"/callback"}>Call Back</Link>
        <Link to={"/memo"}>Memo</Link>
        <Link to={"/lazyload"}>LazyLoad</Link>
        <Link to={"/reference"}>Reference</Link>
        <Link to={"/skeltonload"}>Skeleton Loading</Link>
      </div>
    </div>
  );
};

export default Home;
