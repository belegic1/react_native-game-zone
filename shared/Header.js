import React from 'react'
import { View , Text, StyleSheet, Image, ImageBackground} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({navigation, title}) => {
    const openMenu = ()=>{
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')}
         style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu}
            style={styles.icon}
             />
            <View style={styles.headerTitle}>
                <Image
                style={styles.headerImage}
                 source={require('../assets/heart_logo.png')}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold', 
        color: '#333',
        letterSpacing: 1,
        fontSize: 20
    },
    icon: {
        position: 'absolute',
        left: 6,
    },
    headerImage:{
        width:26,
        height: 26,
        marginHorizontal: 10

    },
    headerTitle:{
        flexDirection: 'row'
    }
})

export default Header
