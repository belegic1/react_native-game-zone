import React from 'react'
import { View, TouchableOpacity, Text ,StyleSheet } from 'react-native'


const FlatButton = ({ text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
        paddingVertical: 14
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16
    }
})
export default FlatButton

