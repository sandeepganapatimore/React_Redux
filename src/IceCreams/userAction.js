import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"
import axios from "axios"
export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST

    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        // dispatch(fetchUserRequest)
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         const users = response.data
        //         console.log('users', users)
        //         dispatch(fetchUserSuccess(users))
        //     })
        //     .catch(error => {
        //         const errorMsg = error.message
        //         dispatch(fetchUserRequest(errorMsg))
        //     })

        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const data = res.json()
        // console.log('data', data)


        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log('data', data);
                dispatch(fetchUserSuccess(data))
                // setData(data)
            })
    }
}