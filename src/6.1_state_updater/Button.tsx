import { useState } from "react";

export default function Counter() {
  const [index, setIndex] = useState(0);
  let localIndex = 0;
  console.log("render");
  return (
    <>
      {index} {localIndex}
      <button
        onClick={() => {
          localIndex + 3;
          setIndex(index + 1);
          setIndex(index + 1);
          setIndex(index + 1);
        }}
      >
        {/* <button
        onClick={() => {
          setIndex((n) => n + 1);
          setIndex((n) => n + 1);
          setIndex((n) => n + 1);
        }}
      > */}
        +3
      </button>
    </>
  );
}
