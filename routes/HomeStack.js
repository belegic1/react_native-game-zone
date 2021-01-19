import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import Header from '../shared/Header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({navigation})=> {
          return {
              headerTitle: () => <Header navigation ={navigation}
              title='Game Zone'
                />,
          }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            headerStyle: {
                backgroundColor: '#eee'
            }
        }
    } 

}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: '#eee',
            height: 60,
         }
    }
})

export default HomeStack