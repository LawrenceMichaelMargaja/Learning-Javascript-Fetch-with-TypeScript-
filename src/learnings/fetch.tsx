import React, {useState} from "react";

const FetchDogImages = () => {

    /**
     * The code below is a local state that has an array of strings where we can store and update the list of dog images that will be displayed on the UI.
     */
    const [dogImages, setDogImages] = useState<string[]>([]);

    const getDogImagesFromApi = () => {
        /**
         * The fetch method below calls an api and returns a promise
         * The url "https://dog.ceo/api/breeds/image/random" is the API endpoint used.
         * In the first promise, it is resolved by parsing the response into JSON. This also returns a promise.
         * In the second promise, we can handle the data received but we must first know the properties of the response body to correctly handle it.
         * To check the structure of the response body by logging it onto the console.
         *
         * setDogImages is used to update the local state by adding the value onto a copy of the previous state, and then replacing that state as the new state.
         */

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setDogImages((prevDogs): string[] => [...prevDogs, data.message]))
            .catch(e => console.log("this is the error === ", e));
    }

    return (
        <div>
            <div style={{
                display: 'block'
            }}>
                <button className="fetch-button" onClick={() => getDogImagesFromApi()}>
                    Fetch Data
                </button>
            </div>
            <div className="dog-wrapper">
                {dogImages.map((dog, index) => (
                    <div key={index} className="dog-card">
                        <img src={dog} alt="dog" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchDogImages;