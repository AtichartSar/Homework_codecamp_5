import React from 'react'
import { connect } from 'react-redux'
import Person from './Person';
import '../css/PersonList.css'
function PersonList(props) {
    return (
        <div className='personList'>
            {props.peList?.map((person, index) => {
                console.log("in", person.id);
                return (< Person
                    id={person.id}
                    indexxx={index}
                    name={person.name}
                    age={person.age} />)


            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        peList: state.perList.persionList
    }
};

export default connect(mapStateToProps, null)(PersonList)
