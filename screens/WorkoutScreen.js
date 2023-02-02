import { StyleSheet, Text, View, Image, Pressable ,ScrollView} from 'react-native'
import React, {useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItem } from '../Context';



const WorkoutScreen = () => {
    const route = useRoute();
    const navigation =useNavigation();
    const {completed, setCompleted} = useContext(FitnessItem);

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:25}}>
      <Image style={{width:"100%",height:170}} source={{uri:route.params.image}}/>
      <Ionicons style={{position:"absolute", left:15,top:10}} name="arrow-back-outline" size={28} color="white" onPress={() => navigation.goBack()}/>

      {
        route.params.excersises.map((item,key) => (
            <Pressable style={{margin:10,flexDirection:"row", alignItems:"center"}} key={key}>
                <Image style={{width:90,height:90}} source={{uri:item.image}}/>
                <View style={{marginLeft:10}}>
                  <Text style={{fontSize:17,fontWeight:"bold",width:170}}>{item.name}</Text>
                  <Text style={{marginTop:4,fontSize:16,color:"gray"}}>x{item.sets}</Text>
                </View>
                {completed.includes(item.name) ? (<AntDesign style={{marginLeft:70}} name="checkcircle" size={24} color="green" />) : (null)}
            </Pressable>
        ) )
      }
    </ScrollView>
    <Pressable style={{backgroundColor:"#005580",padding:10,borderRadius:2,marginVertical:5,width:200,marginRight:"auto",marginLeft:"auto"}} 
     onPress={ () =>{navigation.navigate("Fit",{
      excersises:route.params.excersises,
    })
    setCompleted([]);
    }}>
      <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"600"}} >BAŞLA</Text>
    </Pressable>
    </>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})