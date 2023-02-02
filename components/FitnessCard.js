import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { useNavigation } from '@react-navigation/native';

const FitnessCard = () => {
    const FitnessData= fitness;
    const navigation = useNavigation();
  return (
    <View>
        {FitnessData.map((item,key) =>(
            <Pressable style={styles.card} key={key} onPress={() => 
            navigation.navigate("Workout",{image:item.image,excersises: item.excersises,id:item.id})}>
                <Image style={styles.image}  source={{uri:item.image}}/>
                <Text style={styles.text}>{item.name}</Text>
            </Pressable>
        ))}
    </View>
  )
}

export default FitnessCard

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:140,
        borderRadius:7
    },
    card:{
        alignItems:"center",
        justifyContent:"center",
        margin:10
    },
    text:{
        position:"absolute",
        color:"white",
        fontWeight:"bold",
        fontSize:16,
        left:20,
        top:10
    }

})