import { SafeAreaView, StyleSheet, Text, View,Image,ScrollView, Pressable } from 'react-native'
import React, {useContext} from 'react'
import FitnessCard from '../components/FitnessCard'
import { FitnessItem } from '../Context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigator = useNavigation();
    const {workout, calories, minutes} = useContext(FitnessItem);
    return (
        <ScrollView style={{marginTop:25}}>
            <View style={styles.container}>
                <Text style={{ color: "white",fontWeight: 'bold',fontSize: 28,marginLeft:"auto",marginRight:"auto" }}>EGZERSİZLER</Text>    
                <View style={styles.card}>
                    <View>
                        <Text style={styles.counter}>{workout}</Text>
                        <Text style={styles.text}>EGZERSİZ</Text>
                    </View>
                    <View>
                        <Text style={styles.counter}>{calories}</Text>
                        <Text style={styles.text}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={styles.counter}>{minutes}</Text>
                        <Text style={styles.text}>SÜRE(dk)</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Pressable style={styles.button}
                    onPress={() => {
                        navigator.navigate("Profile")
                        }}>
                        <Feather name="home" size={34} color="black" />
                        <Text style={styles.button_text}>profil</Text>
                    </Pressable>
                </View> 
            </View>
            <FitnessCard/>                   
        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#808080", 
        padding: 10, 
        height: 180, 
        width: "100%",
        marginBottom:10
    },
    card:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    counter:{
        textAlign: "center", 
        color: "white", 
        fontWeight: "bold",
        fontSize:18 
    },
    text:{
        color:"#D0D0D0",
        fontSize:17,
        marginTop:5
    },
    button:{
        marginTop:20
    },
    button_text:{
        color:"#D0D0D0",
        fontSize:12,
        fontWeight:"600",
        marginLeft:3.5
    }
})