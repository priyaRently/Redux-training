import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Screen = () => {
    const userNameRef = useRef(null)
    const [username, setUserName] = useState('')
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const { taskList, showError } = useSelector(({ Task }) => Task)

    const handleSubmit = () => {

    }
    const handleRemoveTask = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.todoContainer}>
                <Text style={styles.title}>Redux Saga Todo App</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={userNameRef}
                        value={username}
                        onChange={(ele) => setUserName(ele.target.value)}
                        placeholder="Github Username" />

                    <TextInput
                        value={task}
                        onChange={(ele) => setTask(ele.target.value)}
                        placeholder="Task" />
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text>Add Task +</Text>
                </TouchableOpacity>

                {!!showError && <Text style={styles.error}>User Not Found!</Text>}

                <View style={styles.todoListContainer}>
                    {
                        !taskList.length && (
                            <Text style={styles.emptyMsg}>No Task to Show</Text>
                        )
                    }
                    {
                        taskList.map((taskItem) => {
                            const { id, userName, task, name, avatar } = taskItem
                            const onRemove = () => handleRemoveTask(id)

                            return (
                                <TaskItem key={id} task={task} imageSrc={avatar}
                                    onRemoveClick={onRemove}
                                    userName={name || userName} />
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container:{},
    todoContainer:{},
    todoListContainer:{},
    title:{},
    inputContainer:{},
    addButton:{},
    error:{},
    emptyMsg:{},
    
})