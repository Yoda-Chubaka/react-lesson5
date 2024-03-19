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

import { useState, useRef, useEffect } from "react";

function App() {
  const [mystate, setMystate] = useState(1);
  const [secondstate, setSecondstate] = useState(-100);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);


  const but1 = useRef();
  // const but2 = useRef();
  const inp1 = useRef([]);
  const inp2 = useRef([]);
  const inp3 = useRef([]);
  const check1 = useRef();

  function buttonListener(event) {
    // console.log(event.target);
    // console.log(but1.current);
    // console.log(but2.current);
    // console.log(but1.current.innerHTML);
    // but1.current.style.backgroundColor = "red";
    console.log(inp1.current.value);
    console.log(inp2.current.value);
    console.log(inp3.current.value);
    // console.log(check1.current.checked);
    // check1.current.checked = true;

    // console.log(check1.current);
  }

  function change() {
    setMystate(mystate + 10);
  }

  function changeSecond() {
    setSecondstate(mystate - 100);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => setComments(json))
  }, []);

  return (
    <div className="App">
          <input ref={inp1} type="text" />
         <input ref={inp2} type="text" />
      <input ref={inp3} type="text" />
         <button ref={but1} onClick={buttonListener}>PUSH</button>
      
      <p>My state is {mystate}</p>
      <button onClick={change}>CHANGE STATE</button>
      <button onClick={change}>CHANGE SECOND STATE</button>
      <ul>posts:
        {posts.map(e =><li key={e.id}>{e.title}</li>)}
      </ul>
      <ul>comments:
        {comments.map(e => <li key={e.id}>{e.name}<p>{e.body}</p></li>)}
      </ul>
    </div>
  )
}


export default App;
