import React from 'react'
import { View, Button, TextInput, Text, StyleSheet } from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup'

import FlatButton  from '../shared/FlatButton'

import {globalStyles} from '../styles/global'
const ReviewSchema= yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(5),
    rating: yup.string().required().test(
        'isNum-1-to-5', 'Rating must be a number between 1 and 5',
        (val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        }
    )
})

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container} >
            <Formik
            initialValues={
                {
                    title: '',
                    body: '',
                    rating: ''
                }
            }
            validationSchema={ReviewSchema}
            onSubmit={(values, actions)=>{
                actions.resetForm()
                addReview(values)
            }}
            >
                {
                    (props)=>(
                        <View>
                            <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            name='title'
                            type='text'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                             />
                             <Text style={styles.errorText} >{
                              props.touched.title &&  
                             props.errors.title}</Text>
                            <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                                onBlur={props.handleBlur('body')}

                                value={props.values.body}
                             />
                            <Text style={styles.errorText} >{
                                props.touched.body &&  
                            props.errors.body}</Text>
                            <TextInput
                            style={globalStyles.input}
                            placeholder='Review Rating'
                            onChangeText={props.handleChange('rating')}
                                value={ props.values.rating}
                            keyboardType='numeric'
                                onBlur={props.handleBlur('rating')}

                             />
                            <Text style={styles.errorText} >{props.touched.rating &&  props.errors.rating}</Text>
                            <FlatButton onPress={props.handleSubmit}  
                            text='Submit' />
                        </View>
                    )
                }
            </Formik>
        </View>
    )
}

const styles= StyleSheet.create({
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})

export default ReviewForm
