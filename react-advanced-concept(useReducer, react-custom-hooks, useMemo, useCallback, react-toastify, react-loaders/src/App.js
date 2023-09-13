import './App.css';
import Header from './components/Header';
import { useReducer, useMemo } from 'react';
import { useState, useEffect, useCallback } from 'react';
import useFetch from './components/useFetch';
import Todos from './components/Todos';
import { TailSpin, Bars, ThreeCircles } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// useReducer Hook

// const reducer = (state, action) => {
//   // console.log("state: ", state);
//   // console.log("action: ", action);

//   if(action.type == "INC"){
//     return state + 2;
//   }
//   else if(action.type == "DEC"){
//     return state - 2;
//   }
//   else if(action.type == "MUL"){
//     return state * 2;
//   }
//   else{
//     return state;
//   }
// }

function App() {

  // const [state, dispatch] = useReducer(reducer, 0);

  // const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001");

  // USEMEMO HOOK

  // const[count, setCount] = useState(0);
  // const [name, setName] = useState('');

  // const expensiveCalculation = (num) => {
  //   console.log("calculating");
  //   for(let i=0; i<100000000000000; i++){
  //     return num;
  //   }
  // };

  // const calculation = useMemo(() =>expensiveCalculation(count)
  // ,[name])


  // USECALLBACK HOOK

  // const[count, setCount] = useState(0);
  // const[todos, setTodos] = useState([]);

  // const increment = () =>{
  //   setCount((c) => c + 1);
  // };

  // const addTodo = useCallback( () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // },[todos]);


  // REACT LOADERS AND TESTIFY

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true);
    async function getData(){
      const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001")

      const finalRes = await res.json();
      setData(finalRes);
      setLoading(false);
      toast.success("Successfully fecthced data");
    }

    getData();
  }, []);


  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <div className='spin'>
        { loading ? <TailSpin /> :
          data.map((e, i) =>{
            return (
              <p>{e.email}</p>
            )
          })
        }
      </div>
      
      {/* <h1>{state}</h1>
      <button onClick={() => dispatch({type: "INC"})}>Increment</button>
      <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
      <button onClick={() => dispatch({type: "MUL"})}>Multiply</button> */}

      {/* {
        data.map((e, i) => {
          return <h1 key={i}>{e.firstName}</h1>
        })
      } */}


      {/* <button onClick={() => setCount(count+1)}>Increment</button>
      <h1>Count: {count}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1> */}

      {/* <div>
        count: {count}
        <button onClick={increment}>+</button>
      </div>
      <hr />

      <Todos todos = {todos} addTodo={addTodo} /> */}
    </div>
  );
}

export default App;
