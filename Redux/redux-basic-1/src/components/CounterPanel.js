import React from 'react'

function CounterPanel(props) {
    return (
        <div  className='counterPanel' >

            <button onClick={props.change} >{props.label}</button>
            
        </div>
    )
}

export default CounterPanel
