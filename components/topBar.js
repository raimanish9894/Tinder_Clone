import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

export default function TopBar(){
    return (
        <View style={styles.container}>
            <FontAwesome5 name="fire" size={27} color="#F06795" style={styles.logo} />
            <FontAwesome name="comments" size={27} color="#5c5c5c" style={styles.logo} />
            <FontAwesome name="user" size={27} color="#5c5c5c" style={styles.logo} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    
    height:90,
    backgroundColor:'white',
    padding:15,
    flexDirection:'row',
    justifyContent:'space-around',
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:0.12,
    shadowRadius:5.46,
    elevation:9,
    
    },
    logo:{
        top:25
    },
  });