import React from 'react'
import { connect } from 'react-redux'

function CounterNumberList(props) {
    console.log(props.numList);
    return (
        <div className="counter__numberList">
            <ol>

    {props.numList.map(item => <li key={1+item}>{item}</li>)}
            </ol>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numList: state.nbrList.numberList
    }
}
export default connect(mapStateToProps, null)(CounterNumberList)
