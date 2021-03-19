import React from 'react'
import CounterDisplay from '../components/CounterDisplay'
import { connect } from 'react-redux'
import CounterPanel from '../components/CounterPanel'
import CouterSave from '../components/CouterSave'
import CounterNumberList from '../components/CounterNumberList'
import ActionTypes from '../store/actionTypes'
function Counter(props) {

    return (
        <div className="counter">
            <CounterDisplay number={props.nbr} />
            <div className="counter__content">
                <CounterPanel label="Increase" change={props.Increase} />
                <CounterPanel label="decrease" change={props.decrease} />
                <CounterPanel label="plus" change={props.plus} />
                <CouterSave />
                <CounterNumberList />
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        nbr: state.nbr.number
    }
}
const mapDisPatchToProps = (dispatch) => {
    return {
        Increase: () => dispatch({ type: ActionTypes.INCREASE }),
        decrease: () => dispatch({ type: ActionTypes.DECREASE }),
        plus: () => dispatch({ type: ActionTypes.PLUS }),
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(Counter)
