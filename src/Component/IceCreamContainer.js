import React from 'react'
// import { buyCake } from '../Redux/index'
import { connect } from 'react-redux'
import buycream from '../IceCreams/CreamAction'


function CakeContainer(props) {
    console.log("object")
    return (
        <div>
            <h1>Cake Shope - {props.creams}</h1>
            <button onClick={props.buycream}>Buy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        creams: state.cream.creams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buycream: () => dispatch(buycream())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)
    (CakeContainer)
