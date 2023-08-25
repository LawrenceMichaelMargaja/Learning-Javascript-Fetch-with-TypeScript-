export async function fetchDogImages(callback: (data: string) => void) {

    /**
     * The fetch method below calls an api and returns a promise
     * The url "https://dog.ceo/api/breeds/image/random" is the API endpoint used.
     * In the first promise, it is resolved by parsing the response into JSON. This also returns a promise.
     * In the second promise, we can handle the data received but we must first know the properties of the response body to correctly handle it.
     * To check the structure of the response body by logging it onto the console.
     */

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        // .then(data => console.log("this is the data === ", data))
        .then(data => callback(data.message))
        .catch(e => console.log("this is the error === ", e));
}