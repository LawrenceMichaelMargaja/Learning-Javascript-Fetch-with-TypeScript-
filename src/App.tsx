import {fetchDogImages} from "./learnings/fetch";
import React, { useState } from 'react';

function App() {

    const cardStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
    };


    /**
     * The code below is a local state that has an array of strings where we can store and update the list of dog images that will be displayed on the ui.
     */
    const [dogImages, setDogImages] = useState<string[]>([])

    /**
     * The function below is used to update the local state by adding the value of the callback onto a copy of the previous state, and then replacing that state as the new state.
     */
    const updateDogImages = (newDog: string) => {
        setDogImages((prevDogs): string[] => [...prevDogs, newDog])
    }

    /**
     * The button below has a callback, the function "updateDogImages". This means that we can use it on a different component. In this case, we use it in the function fetchDogImages.
     * What happens is that when data is received from the api call, the callback function updates the local state here in the App component.
     */
    return (
        <div className="App">
            <button onClick={() => fetchDogImages(updateDogImages)}>Fetch Data</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {dogImages.map((dog, index) => (
                    <div key={index} style={cardStyle}>
                        <img src={dog} alt="dog" style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
