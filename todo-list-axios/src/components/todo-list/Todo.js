import { Button, Col, Input, Row } from 'antd'
import React, { useState } from 'react'
import axios from '../../config-base-url/axios'

export default function Todo(props) {
    const [changeInput, setChangeInput] = useState("")
    const [isEdit, setIsedit] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target
        setChangeInput(value)
        console.log(changeInput);
    }

    const handleUpddate = async (id) => {
        await axios.put(`/todo-list/${id}`, { task: changeInput })
        props.fetchTodoList()
        setIsedit(false)
        console.log(id)
    }
    
    const handleToggleEdit = () => {
        setIsedit(true)
        setChangeInput(props.todo.task)
    }

    const contentEdit = (
        <Row >
            <Col span={20}>
                <Input value={changeInput} onChange={handleChange} />
            </Col>
            <Col span={4}>
                <Button onClick={() => handleUpddate(props.todo.id)} type="primary">Update</Button>
            </Col>
        </Row>
    )

    const content = (
        <Row style={{ width: "100%" }} >
            <Col span={16}>
                <Row justify="start">
                    <div key={props.todo.id}>{props.todo.task}</div>
                </Row>
            </Col>
            <Col span={4}>
                <Button style={{ backgroundColor: 'orange' }} onClick={() => handleToggleEdit()}>Edit</Button>
            </Col>
            <Col span={4}>
                <Button type="danger" onClick={() => props.delete(props.todo.id)}>Delete</Button>
            </Col>
        </Row>
    )
    return (
        <div style={{ width: "100%" }}>
            {isEdit ? contentEdit : content}
        </div>
    )
}
