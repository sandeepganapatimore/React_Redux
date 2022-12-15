import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchUserSuccess } from '../IceCreams/userAction'

function UserComponent({ }) {

    const userData = useSelector(state => state.user.users)
    console.log('userData', userData)

    const dispatch = useDispatch()


    // useEffect(() => {

    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log('data', data);
    //             dispatch(fetchUserSuccess(data))
    //             // setData(data)
    //         })
    // }, [])

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h3>{userData.error}</h3>
    ) : (
        <div>
            <h3>user List</h3>
            <div>
                {

                }
            </div>
        </div>
    )
}

export default UserComponent
