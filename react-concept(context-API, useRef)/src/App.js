import './App.css';
// import Home from './components/Home';
import Header from './components/Header';
import { useState, createContext, useEffect , useRef} from 'react';
// import ComA from './components/ComA';


const AppState = createContext();
const NameContext = createContext();

function App() {

  const inputField = useRef();

  // const[input, setInput] = useState("");
  // const [counter, setCounter] = useState(0);

  // const counter = useRef(0);
  // const prevState = useRef("");

  // useEffect(() => {
  //   // console.log("re-rendered");
  //   // setCounter(counter + 1);
  //   // counter.current = counter.current + 1;

  //   prevState.current = input;
  // }, [input])

  // const formHandler = (e) => {
  //   setInput(e.target.value);
  // }

  const clickHandler = () =>{
    // inputField.current.focus();
    // inputField.current.value = "Pritam";
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red";
  }

  // const [data, setData] = useState("Pritam");

  // const [name, setName] = useState({name:'Pritam', age: 21});

  return (
    <div className="App">
    {/* <AppState.Provider value={{data}}>
    <NameContext.Provider value={name}>
      <Header />
      <ComA />
      <Home />
    </NameContext.Provider>
    </AppState.Provider> */}


    <Header/>
    {/* <input ref={inputField} value={input} onChange={formHandler} /> */}
    {/* <h4>Application has been rendered {counter.current} times</h4> */}
    {/* <h4>Previous state was {prevState.current}</h4> */}

    <input ref={inputField} />

    <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default App;
export {AppState}
export {NameContext}
