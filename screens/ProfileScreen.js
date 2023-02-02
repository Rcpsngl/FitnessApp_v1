import { View, Text, StyleSheet,Image, Pressable } from 'react-native'
import React, {useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FitnessItem } from '../Context';


const ProfileScreen = () => {
    const navigation = useNavigation();
    const {workout, calories, minutes} = useContext(FitnessItem);
  return (
    <View style={styles.frame}>
      <Text style={styles.text_1}>Profil</Text>
      <Image style={styles.image} source={{uri:'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg'}}/>
      <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.text}>Günük Yakmanız Gereken Kalori: 300 kcal</Text>
            <Text style={styles.text}>Yaktığınız Kalori: {calories} kcal </Text>
            <Text style={styles.text}>Kalan Kalori: {300-calories} kcal </Text>
            <Text style={styles.text}>Günük Harcanan Dakika: {minutes} dk</Text>
            <Text style={styles.text}>Harcamanız gereken dakika: {60-minutes} dk </Text>
            <Text style={styles.text_2}>Düzenli spor yapmak sağlığınızı korur </Text>
        </View>
      </View>
      <Pressable style={styles.button}
      onPress={() => navigation.goBack()}>
        <Text style={styles.button_text}>Geri Dön</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    frame:{
        marginTop:25,
    },
    main:{
        marginTop:1
    },
    text_1:{
        textAlign:'center',
        color:"#808080",
        fontSize:28,
        fontWeight:"600"
    },
    text_2:{
        textAlign:'center',
        color:"white",
        fontSize:28,
        fontWeight:"600",
        marginTop:50
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"600",
        marginTop:5,
        marginBottom:20
    },
    container:{
        backgroundColor: "#808080", 
        padding: 10, 
        height: 380, 
        width: "100%",
        
    },
    image:{
        marginTop:5,
        width:"100%",
        height:160,
        borderRadius:2
    },
    button:{
        backgroundColor:"#555555",
        padding:10,
        borderRadius:2,
        marginVertical:5,
        width:200,
        marginRight:"auto",
        marginLeft:"auto",
        marginTop:20
    },
    button_text:{
        textAlign:"center",
        color:"white",
        fontSize:15,
        fontWeight:"600"
    },

})
   