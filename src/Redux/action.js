import axios from "axios";

export const increment = (payload = 1) => ({
    type: 'INCREMENT',
    payload
});

export const decrement = (payload) => ({
    type: 'DECREMENT',
    payload
})

export const reset = () => ({
    type: 'RESET'
})

export const getPeople = () => {
    return (dispatch) => {

        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                dispatch(dataPeople(response.data.results))
            });      
    }
}

const dataPeople = (userData) => ({
    type: 'GET_PEOPLE',
    payload: userData
})