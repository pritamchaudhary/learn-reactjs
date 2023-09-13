import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [form, setForm] = useState({});

  const [data, setData] = useState([]);

  const addData = () => {
    // setData([...data, { name, email }]);
    // setName("");
    // setEmail("");

    setData([...data, form]);
    setForm(form);
  };

  // const handlePress = (event) =>{
  //   if(event.key == 'Enter'){
  //     addData();
  //   }
  //   console.log(key);
    
  // }

  const removeItem = (index) =>{
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />

      {/* Form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            // onKeyPress={(e) => handlePress(e)}
            // value={name}
            value={form.name}
            // onChange={(event) => setName(event.target.value)}
            onChange={(event) => setForm({...form, name: event.target.value})}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            // onKeyPress={(e) => handlePress(e)}
            // value={email}
            value={form.email}
            // onChange={(event) => setEmail(event.target.value)}
            onChange={(event) => setForm({...form, email: event.target.value})}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
