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