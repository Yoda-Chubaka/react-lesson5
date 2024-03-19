// useRef()

// import { useRef } from "react";

// function App() {

//   const but1 = useRef();
//   // const but2 = useRef();
//   // const inp1 = useRef();
//   const check1 = useRef();

//   function buttonListener(event) {
//     // console.log(event.target);
//     // console.log(but1.current);
//     // console.log(but2.current);
//     // console.log(but1.current.innerHTML);
//     // but1.current.style.backgroundColor = "red";
//     // console.log(inp1.current.value);
//     // console.log(check1.current.checked);
//     // check1.current.checked = true;

//     console.log(check1.current);
//   }

//   return (
//     <>
//       <div className="App">
//         {/* <button ref={but1} onClick={buttonListener}>PUSH <p>abc</p></button>
//         <button ref={but2} onClick={buttonListener}>abc</button> */}
//         {/* <input ref={inp1} type="text" /> */}
//         <input id = "first" ref={ check1} type="checkbox"/>
//         <button ref={but1} onClick={buttonListener}>PUSH</button>
//       </div>
//     </>
//   );
// }



// RENDER

// import { useState } from "react";
// import Helper from "./Helper";

// function App() {

//   const [mystate, setMystate] = useState(1);
//   // console.log("call component App");

//   function change() {
//     setMystate(mystate + 10);
//   }

//   return (
//     <div className = "App">
//       {console.log("return component App")}
//       <p>My state is {mystate}</p>
//       <p>2345</p>
//       <button onClick={change}>CHANGE STATE</button>
//       <Helper/>
//     </div>
//   )
// }




// useEffect()

import { useState, useEffect } from "react";

function App() {
  const [mystate, setMystate] = useState(1);
  const [secondstate, setSecondstate] = useState(-100);
  const [users, setUsers] = useState([]);

  function change() {
    setMystate(mystate + 10);
  }

  function changeSecond() {
    setSecondstate(mystate - 100);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  return (
    <div className="App">
      {/* {console.log("render component App")} */}
      <p>My state is {mystate}</p>
      <button onClick={change}>CHANGE STATE</button>
      <button onClick={change}>CHANGE SECOND STATE</button>
      <ul>
        {users.map(e =><li key={e.id}>{e.name}</li>)}
      </ul>
    </div>
  )
}


export default App;
