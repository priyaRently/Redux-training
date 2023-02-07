import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/index'

const Counter = () => {
    
    const myState = useSelector((state)=> state.countNumber)
    const dispatch = useDispatch();
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Couter
            </Text>
            <Text style={styles.counter}>
                {myState}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={()=> dispatch(increment())}>
                    <Text style={styles.buttonText}>
                        Increment
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={()=> dispatch(decrement())}>
                    <Text style={styles.buttonText}>
                        Decrement
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#820000',
        height: '100%'
    },
    title:{
        marginTop: 10,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    counter:{
        marginTop: 10,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 16
    },
    button:{
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#434242',
        padding: 12,
        paddingHorizontal: 16
    },
    buttonText:{
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
})

// //Redux store passes state to component
// const mapStateToProps = (state) => {
//     return{

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
        
//     }
// }