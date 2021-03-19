import React, { useState } from 'react'
import '../css/Person.css'
import {connect} from 'react-redux'
function Person({ name, age, id,onEdittt }) {
    const [index, setIndex] = useState(0);
    const [nameP, setName] = useState('');
    const [ageP, setAge] = useState('');
 console.log("id",id);
    const onSubmit = e=>{
        e.preventDefault();
        onEdittt({name:nameP,age:ageP,id})
        setIndex(0)
    }
    const content = (<>
        <div>
            <span>{name}</span>
            <span>{age}</span>
        </div>
    </>)

    const edit = <div onClick={() => setIndex(2)}>edit</div>

    const input = (<>
        <form onSubmit={onSubmit}> 
            <input type='text'
                placeholder='name'
                value={nameP}
                onChange={(e) => setName(e.target.value)}></input>
            <input type='age'
                placeholder='age'
                value={ageP}
                onChange={e => setAge(e.target.value)}></input>
            <button >edit</button>
        </form>
    </>
    )
    const tabComponent = [content, edit, input]
  
    return (
        <div className='person' key={id}
            onMouseEnter={() => setIndex(1)}
            onMouseLeave={() => setIndex(0)}
        >
            {tabComponent[index]}
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onEdittt:(payload)=>dispatch({type:'EDIT_PERSON',payload})
    }
}
export default connect(null,mapDispatchToProps)(Person)
