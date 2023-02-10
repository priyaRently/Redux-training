import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { deleteTodo } from '../action';
import { useDispatch } from 'react-redux';
const TodoList = (props) => {
    const dispatch = useDispatch();
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView>
            <View  style={styles.showTaskContainer}>
                <View style={styles.index}>
                    <CheckBox style={styles.checkbox}
                        value={isSelected}
                        onValueChange={(newValue) => { setSelection(newValue); }}
                    />
                </View>
                <View style={styles.showTask}>
                    <Text style={styles.taskText(isSelected)}>{props.data}</Text>
                    <TouchableOpacity
                        onPress={() => dispatch(deleteTodo(props.id))}>
                        <Icon style={styles.delete} name="delete" size={24} color='black' />
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>

    )
}

export default TodoList

const styles = StyleSheet.create({
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