export default function Button() {
  let index = 1;

  function handleClick() {
    index = index + 1;
  }

  return (
    <>
      wartość index: {index}
      <button onClick={handleClick}>+ 1</button>;
    </>
  );
}
