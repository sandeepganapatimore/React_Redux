import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyCake from '../Redux/cakeActions'

function HookContainer() {

    const numofCake = useSelector(state => state.cake.numofCake)
    const dispatch = useDispatch()



    return (
        <div>
            <h1>Number of Cake- {numofCake}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy </button>
        </div>
    )
}

export default HookContainer
