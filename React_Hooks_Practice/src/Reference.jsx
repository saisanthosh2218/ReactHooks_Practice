import { useEffect, useRef, useState } from "react";

const Reference = () => {
  const [count, setCount] = useState(0);

  const Countref = useRef(0);

  const inputRef = useRef();

  const handleCount = () => {
    setCount(count + 1);
    Countref.current++;

    console.log("Count State Update: ", count);
    console.log("Ref Stored Value: ", Countref.current);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      This is useRef Hook <br />
      <input ref={inputRef} type="text" placeholder="Enter Name" /> <br />
      {count} <br />
      <button onClick={handleCount}>Counter Plus</button>
    </div>
  );
};

export default Reference;
