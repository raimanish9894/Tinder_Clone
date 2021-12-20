import React from 'react';
import {View,Image, StyleSheet,Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Swipes({ user, willLike, willPass }){
    return(
        <View>
            <Image source={{ uri: user.picture.large }} style={styles.photo} />
            {willLike && (
                <View style={styles.likeBoxStyle}>
                    <Text style={{ ...styles.textName, color:'#64EDCC'}}>
                        LIKE
                    </Text>
                </View>
            )}

            {willPass && (
                <View style={styles.likeBoxStyle}>
                    <Text style={{ ...styles.textName, color:'red'}}>
                        PASS
                    </Text>
                </View>
            )}
            <View style={styles.textContainer}>
            <View style={styles.textRow}>
                <Text style={styles.textName}>{user.name.first}</Text>
                <Text style={styles.textAge}>{user.dob.age}</Text>
            </View>
            <View style={styles.textRow}>
                <FontAwesome name='map-marker' size={20} color='white'></FontAwesome>
            <Text style={styles.textAge}>{user.location.city}</Text>
            </View>
            </View>
        </View>
    )
}

const boxStyle = {
    position:'absolute',
    top:'50%',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10,
    borderWidth:3,

}

const styles = StyleSheet.create ({

    likeBoxStyle:{
        ...boxStyle,
        left:40,
        borderColor:'#64EDCC'
    },
    photo:{
        height:'100%',
        resizeMode:'cover',
        borderRadius:20,
    },
    textContainer:{
        position:'absolute',
        bottom:20,
        left:20,
    },
    textRow:{
        flexDirection:'row',
        alignItems:'center',

    },
    textName:{
        color:'white',
        fontSize:35,
        fontWeight:'700',
        
    },
    textAge:{
        color:'white',
        fontSize:25,
        marginLeft:10

    },
    textShadow:{
        textShadowColor:'rgba(0, 0, 0, 0.80)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
})