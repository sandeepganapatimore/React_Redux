import React, { useState } from 'react'
// import { buyCake } from '../Redux/index'
import { connect } from 'react-redux'
import buyCake from '../Redux/cakeActions'

function NewCakeContainer(props) {
    console.log("object")
    const [number, setnumber] = useState(1)
    return (
        <div>
            <h1>Cake Shope - {props.numofCake}</h1>
            <input type='text' value={number} onChange={(e) => setnumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numofCake: state.cake.numofCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)
    (NewCakeContainer)
