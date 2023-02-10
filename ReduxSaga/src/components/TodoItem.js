import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TodoItem = (props) => {
    const { className, imageSrc, userName, task, onRemoveClick } = props
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.removeButton}
        onPress={()=>{onRemoveClick()}} >
            <Text>X</Text>
        </TouchableOpacity>
        <Image source={imageSrc} alt={userName}/>
        <View>
            <Text>{userName}</Text>
            <Text>{task}</Text>
        </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        border: 1,
        padding: 2,
        position: relative,
        overflow: hidden,
        display: flex,
        alignItems: 'center',
    },
    removeButton: {
        position: absolute,
        top: 0,
        right: 0,
        width: 3,
        height: 3,
        display: flex,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight:'bold',
    },
    image:{
       width:20,
       height:20 
    }
})