import React from 'react'
import { connect } from 'react-redux'
import ActionTypes from '../store/actionTypes'

function CouterSave(props) {
    return (
        <div className="countersave">
            {/* <button onClick={props.onClickSave}>Save</button> */}
            <button onClick={() => { props.onClickSave(props.numberfromNbr) }}>Save</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberfromNbr: state.nbr.number
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClickSave: (number) => dispatch({ type: ActionTypes.SAVE_NUMBER, value: number })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CouterSave)
