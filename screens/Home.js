import React , {useState} from 'react'
import { StyleSheet, View, Text , FlatList,
     TouchableOpacity, Modal,
     TouchableWithoutFeedback,
     Keyboard,
     Touchable
    } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import {globalStyles} from '../styles/global'
import Card from '../shared/Card'
import ReviewForm from './ReviewForm'


const Home = ({navigation}) => {

    const [modelOpen, setModelOpen] = useState(false)

    const[reviews, setReviews] = useState([
        {title: 'Zelda, Breath of freshAir', rating: 5, body: 'loremIpsum', key: '1'},
        {title: 'Gota catch them all, (again)', rating: 4, body: 'loremIpsum', key: '2'},
        {title: 'Not so "Final", Fantasy', rating: 3, body: 'loremIpsum', key: '3'},
    ])
    const addReview = (review)=>{
        review.key= Math.random().toString()
        setReviews((currentReviews)=>{
            return [review, ...currentReviews]
        })
        setModelOpen(false)
    }
    return (
        <View style={globalStyles.container}>
            <Modal visible={modelOpen}animationType='slide' >
               <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={24}
                            style={{ ...styles.modelToggle, ...styles.modelClose }}
                            onPress={() => setModelOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
               </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24}
            style={styles.modelToggle}
            onPress={()=> setModelOpen(true)}
             />
            <FlatList 
                data={reviews}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title} </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {

    },
    modelToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modelClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent:{
        flex: 1
    }
})

export default Home
