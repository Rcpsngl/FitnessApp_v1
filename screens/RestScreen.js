import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react'

const RestScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft,setTimeLeft] = useState(10);
    const StartTime = () =>{
        setTimeout(() => {
            if(timeLeft<=0){
                navigation.goBack();
                clearTimeout(timer);
            }
            setTimeLeft(timeLeft-1)
        }, 1000);
    }
    useEffect(() => {
     StartTime();
     return () => clearTimeout(timer);
    },)
    
  return (
    <View style={{marginTop:25}}>
      <Image
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />
        <Text style={styles.text}>BİRAZ MOLA</Text>
        <Text style={styles.text}>{timeLeft}</Text>
    </View>
  )
}

export default RestScreen

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:"900",
        marginTop:50,
        textAlign:"center"
    }
})