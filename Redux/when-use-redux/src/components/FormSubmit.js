import React, { useState } from 'react'
import '../css/FormSubmit.css'
import { connect } from 'react-redux'
import _ from 'lodash'
function FormSubmit(props) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const onSubmit =(e)=>{
        e.preventDefault()
        let id= _.uniqueId('id_')
        props.onSubmittt({name,age,id})
        setName('')
        setAge('')
    }
    return (
        <div className="formSubmit">
            <h1>Form Add Person</h1>
            {age}
            <form onSubmit={onSubmit}>
                <label for="fname">First name:</label>
                <input name='fname' id='fname' type="text" value={name}
                    onChange={event => setName(event.target.value)} />
                <label for="age">Age:</label>
                <input name='age' id='age' type="text" value={age}
                    onChange={event => setAge(event.target.value)} />
                <button>submit</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onSubmittt:(payload)=>dispatch({type:'ADD_PERSON',payload})
    }
}
export default connect(null,mapDispatchToProps)(FormSubmit)
