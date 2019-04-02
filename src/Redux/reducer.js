const myStore = {
    title: 'Belajar Redux',
    info: 'Dari Redux',
    people: [],
    angka: 0
}

//digunakan di file me.js
const myReducer = (state = {...myStore}, action) => {

    switch (action.type) {
        case ('INCREMENT'):
            return ({
                ...state,
                angka: state.angka += action.payload //atau payload (parameter)
            })

        case ('DECREMENT'):
            return ({
                ...state,
                angka: state.angka -= action.payload, //atau payload (parameter)
            })

        case ('RESET'):
            return ({
                ...state,
                angka: 0, //atau payload (parameter)
            })
    
        default:
            return state;
    }

}

export default myReducer;