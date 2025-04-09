import React from 'react'

function SuperApp() {
  const [count, setCount] = React.useState(5);
  return (
    <div>
      <h1>SuperApp</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <br />
        <button onClick={() => setCount(69)}>Set 69 as count</button>
        <br />
        <button onClick={() => setCount("Baral")}>Set baral as count</button>

        <br />

        <div>
          <p>With Functions</p>
          <button onClick={HandleInc }>Increase</button>
          <button onClick={HandleDec }>Decrease</button>
        </div>


        <div>
          <p>With Functions with parameter</p>
          <button onClick={() => HandleAction("inc")}>Increase</button>
          <button onClick={() => HandleAction("dec")}>Decrease</button>
        </div>
    </div>
  )
}


function HandleAction(type) {
  if(type === "inc") {
    setCount(count + 1);
  } else if (type === "dec") {
    setCount(count -1)
  } else {
    setCount(0);
  }
}

function HandleInc() {
    setCount(count + 1);
}
function HandleDec() {
    setCount(count - 1);
}



export default SuperApp