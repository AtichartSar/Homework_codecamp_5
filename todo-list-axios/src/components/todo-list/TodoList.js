import { Button, Col, Divider, Input, List, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState, useEffect } from 'react'
import axios from '../../config-base-url/axios'
import Todo from './Todo';

export default function Todolist() {

    const [todoList, setTodoList] = useState([]);
    const [inputField, setinputField] = useState("")

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list")
        setTodoList(httpResponse.data)
    }
    //component did mount 
    //fetch data when render this page
    useEffect(() => {
        fetchTodoList()
    }, [])

    const handleInput = (e) => {
        setinputField(e.target.value)
        console.log(e.target.value);
    }

    const handleAddTodoItem = async () => {

        await axios.post("/todo-list", { task: inputField })
        fetchTodoList();
        setinputField("")
    }
    const handleDeleteTodoItem = async (id) => {
        // const newTodoList = todoList.filter(item=>item!==id)
        // setTodoList(newTodoList)
        await axios.delete(`/todo-list/${id}`)
        fetchTodoList();
    }
    return (
        <div>
            <Row justify="center">
                <Col>
                    <Row justify="center">
                        <Text type="warning">กรุณาใส่ Todo ที่ต้องการ</Text>

                    </Row>
                    <Row justify="center">
                        <Col span={20}>
                            <Input value={inputField} onChange={handleInput} />
                        </Col>
                        <Col span={4}>
                            <Button style={{ width: '100%' }} onClick={handleAddTodoItem}>Add</Button>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <List
                            style={{ width: '450px' }}
                            header={<div>Todo List Page</div>}
                            bordered
                            dataSource={todoList}
                            renderItem={item => (
                                <List.Item>
                                    <Todo delete={handleDeleteTodoItem} todo={item} fetchTodoList={fetchTodoList}/>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Col>


            </Row>

        </div>
    )
}
