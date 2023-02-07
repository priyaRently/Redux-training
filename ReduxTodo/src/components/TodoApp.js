import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addTodo, removeTodo, deleteTodo } from '../action/index'
import { useDispatch, useSelector } from 'react-redux';
const TodoApp = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch()
    const myState = useSelector((state) => state.todoReducer.list)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoApp</Text>
            <View style={styles.add}>
                <TextInput
                    multiline
                    style={styles.textInput}
                    onChangeText={(text) => setTask(text)}
                    value={task}
                    placeholder='✍️ Add Your List Here...'
                />
                <TouchableOpacity style={{ alignSelf: 'center' }}
                    onPress={() => dispatch(addTodo(task), setTask(''), Keyboard.dismiss())}>
                    <Icon style={styles.icon} name="add" size={26} color='black' />
                </TouchableOpacity>

            </View>
            <Text style={styles.title}>
                Your Todo List
            </Text>
            <ScrollView>
                    {
                        myState?.map((props) => {
                            return (
                                <View key={props.id}>
                                    <Text>{props.data}</Text>
                                    <Icon style={styles.delete} name="delete" size={26} color='black' />

                                </View>
                            )
                        })
                    }
            </ScrollView>
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#85586F',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 30,
        marginLeft: 20,
        alignSelf: 'center'
    },
    add: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 12,

    },
    textInput: {
        backgroundColor: 'azure',
        fontSize: 24,
        margin: 12,
        borderWidth: 2,
        width: 280,
        borderRadius: 12
    },
    icon:
    {
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#deffaa'
    }
})