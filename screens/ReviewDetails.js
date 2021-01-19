import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Card from '../shared/Card'

import { globalStyles, images } from '../styles/global'
const ReviewDetails = ({navigation}) => {

    const rating = navigation.getParam('rating')
 
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')} </Text>
                <Text style={globalStyles.titleText}>{navigation.getParam('body')} </Text>
                <View style={styles.rating}>
                    <Text>Game Zone Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
        }
})

export default ReviewDetails
