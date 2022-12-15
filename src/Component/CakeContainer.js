import React from 'react'
// import { buyCake } from '../Redux/index'
import { connect } from 'react-redux'
import buyCake from '../Redux/cakeActions'


function CakeContainer(props) {
    console.log("object")
    return (
        <div>
            <h1>Cake Shope - {props.numofCake}</h1>
            <button onClick={props.buyCake}>Buy</button>
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
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)
    (CakeContainer)
