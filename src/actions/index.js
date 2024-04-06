export const loadInitialContacts = () => {
    return (dispatch) => {
        fetch('http://127.0.0:3000/contact')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'INITIAL_FETCH', payload: data})
            })
            .catch(error => console.log(error))
    }
}
