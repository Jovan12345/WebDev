import ergast from '../apis/ergast'

export const fetchChamps = () => async dispatch => {
    const response = await ergast.get('/driverstandings/1.json?limit=14&offset=55')

    dispatch({ type: 'FETCH_CHAMPS', payload: response.data })
}

export const fetchChamp = (year) => async dispatch => {
    const response = await ergast.get(`/${year}/driverstandings/1.json`)

    dispatch({ type: 'FETCH_CHAMP', payload: response.data })
}

export const fetchWinners = (year) => async dispatch => {
    const response = await ergast.get(`/${year}/results/1.json`)

    dispatch({ type: 'FETCH_WINNERS', payload: response.data })
}