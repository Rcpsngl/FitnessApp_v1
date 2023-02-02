import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItem } from '../Context';

const FitScreen = () => {
    const route = useRoute();
    const [index,setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    const navigator = useNavigation();
    const {completed, setCompleted, workout, setWorkout, calories, setCalories, minutes, setMinutes} = useContext(FitnessItem);
    console.log(completed, "completed ");
    return (
    <View style={{marginTop:25}}>
      <Image style={styles.image} source={{uri:current.image}} />
      <Text style={styles.name}>{current.name}</Text>
      <Text style={styles.title}>x{current.sets}</Text>
      {index+1>= excersise.length ? (
      <Pressable style={styles.button}
            onPress={() => {
            navigator.navigate("Home")
            }}>
            <Text style={styles.button_text}>BİTTİ</Text>
        </Pressable>
        ) : (
        <Pressable style={styles.button}
            onPress={() => {
                navigator.navigate("Rest")
                setCompleted([...completed,current.name]);
                setWorkout(workout+1);
                setMinutes(minutes+2.5);
                setCalories(calories+15);
                    setTimeout(() =>{
                    setIndex(index+1)
                },2000)
            }}>
            <Text style={styles.button_text}>BİTTİ</Text>
        </Pressable>
    )}
      
      <Pressable style={styles.bottom_buttons}>
        <Pressable style={styles.bottom_button}
            disabled={index===0}
            onPress={() => {
               setIndex(index-1)
            }}>
            <Text style={styles.button_text}>ÖNCEKİ</Text>
            </Pressable>
            {index +1 >= excersise.length ? (
                <Pressable style={styles.bottom_button2}
                onPress={() => {
                    navigator.navigate("Home")
                    }}>
                    <Text style={styles.button_text}>ATLA</Text>
                </Pressable>
            ) : (
                <Pressable style={styles.bottom_button2}
                onPress={() => {
                    
                        setIndex(index+1)

                }}>
                    <Text style={styles.button_text}>ATLA</Text>
                </Pressable>
            )}
        
      </Pressable>
    </View>
  )
}

export default FitScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    name:{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:30,
        fontSize:30,
        fontWeight:"bold"
    },
    title:{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:10,
        fontSize:30,
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"#008CBA",
        padding:10,
        borderRadius:2,
        marginVertical:5,
        width:200,
        marginRight:"auto",
        marginLeft:"auto",
        marginTop:50
    },
    button_text:{
        textAlign:"center",
        color:"white",
        fontSize:15,
        fontWeight:"600"
    },
    bottom_buttons:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:10
    },
    bottom_button:{
        backgroundColor:"#555555",
        padding:10,
        borderRadius:2,
        marginHorizontal:20,
        width:150,
        marginTop:20,
        borderRadius:5
    },
    bottom_button2:{
        backgroundColor:"#4CAF50",
        padding:10,
        borderRadius:2,
        marginHorizontal:20,
        width:150,
        marginTop:20,
        borderRadius:5
    }

})