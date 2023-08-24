import './App.css';
import {useState} from "react";

function App() {

    const [dogs, setDogs] = useState([])

    const fetchCars = () => {

        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(res => res.json())
            .then(data => setDogs(data.message))
            .catch(e => console.log("this is the error === ", e));
    }

    return (
        <div className="App">
            <button onClick={fetchCars}>
                Fetch Data
            </button>
            <div>
                {
                  dogs.map((dog, index) => (
                      <img key={index} src={dog} alt="dog image"/>
                  ))
                }
            </div>
        </div>
    );
}

export default App;
