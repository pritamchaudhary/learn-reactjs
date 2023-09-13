import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(2);
  // const [state2, setState2] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    // window.alert("useEffect called");

    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const res = await get.json();
      setData(res);
      console.log(res);
    }

    getData();

    document.title = `(${state}) Employees online`;
  }, [state]);

  return (
    <div>
      <button className="btn" onClick={() => setState(state + 2)}>
        Click Me {state}
      </button>

      {data.map((element, index) => {
        return (
          <Link to={`/app/${element.id}`}>
            <div className="data" key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
