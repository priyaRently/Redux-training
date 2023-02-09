import {
    Keyboard,
    ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addTodo, removeTodo, deleteTodo } from '../action/index'
import { useDispatch, useSelector } from 'react-redux';

const TodoApp = () => {

    const [task, setTask] = useState('');
    const [isSelected, setSelection] = useState(false);
    const dispatch = useDispatch()
    const myState = useSelector((state) => state.todoReducer.list)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO APP</Text>
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
                    <Icon style={styles.iconAdd} name="add" size={30} color='black' />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>
                Your Todo List
            </Text>

            <ScrollView style={{ marginBottom: 6 }}>
                {
                    myState?.map((props) => {
                        return (
                            <View  style={styles.showTaskContainer}>
                                <View style={styles.index}>
                                    <CheckBox style={styles.checkbox}
                                        value={isSelected}
                                        onValueChange={(newValue) => { setSelection(newValue); }}
                                    />
                                </View>
                                <View key={props.id} style={styles.showTask}>
                                    <Text style={styles.taskText(isSelected)}>{props.data}</Text>
                                    <TouchableOpacity
                                        onPress={() => dispatch(deleteTodo(props.id))}>
                                        <Icon style={styles.delete} name="delete" size={24} color='black' />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    })
                }
            </ScrollView>
            <TouchableOpacity style={{ alignSelf: 'center' }}
                onPress={() => dispatch(removeTodo())}>
                <Text style={styles.clearAll}>Clear All</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F979B',
    },
    title: {
        color: '#F9F54B',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 20,
        alignSelf: 'center',
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
        width: '80%',
        borderRadius: 12
    },
    iconAdd: {
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#deffaa'
    },
    checkbox: {
        margin: 2,
    },
    showTaskContainer: {
        flexDirection: 'row',
        backgroundColor: '#DEFCF9',
        margin: 8,
        borderRadius: 12
    },
    index: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    showTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        alignItems: 'center'
    },
    taskText: (isSelected) => {
        const decoration = isSelected ? "line-through" : "none";
        return {
            color: 'black',
            fontSize: 24,
            margin: 12,
            width: '70%',
            textDecorationLine: decoration
        }
    },
    delete: {
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#deffaa'
    },
    clearAll:
    {
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 12,
        padding: 8,
        borderRadius: 18,
        backgroundColor: '#aaffaa',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
})