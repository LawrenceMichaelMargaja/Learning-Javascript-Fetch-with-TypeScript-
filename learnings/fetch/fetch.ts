import {FilterProps} from "../../types";

export async function fetchCars() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => console.log("this is the data === ", data))
        .catch(e => console.log("this is the error === ", e));
}