import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Auth from './components/Auth';
import {db} from './config/firebase'
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const[movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async() => {
      try{
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        // console.log(filteredData);
        setMovieList(filteredData);
      }
      catch(err){
        console.log(err);
      }
    }
    getMovieList();
  }, []);

  return (
    <div className="App">
      <h1>Firebase Course</h1>
      <Auth />

      <div>
        {movieList.map((movie) =>{
          return (
            <div>
            <h1>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
