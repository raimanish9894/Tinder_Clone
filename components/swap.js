import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Swipes from './swipes';

export default function Swap({users,currentIndex,handleLike,handlePass}){
    const [willLike, setWillLike] = useState(false)
    const [willPass, setWillPass] = useState(false)
    
    const renderLeftActions = () => {
        return(
            <RectButton style={styles.container}>
            <Swipes user={users[currentIndex + 1]}></Swipes>
        </RectButton>
        )
        
    }

    const renderRightActions = () => {
        return(
            <RectButton style={styles.container}>
            <Swipes user={users[currentIndex + 1]}></Swipes>
        </RectButton>
        )
    }

    return(
        <Swipeable
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={() => {
            setWillLike(false)
            handleLike()}}
        onSwipeableRightOpen={() => {
            setWillPass(false)
            handlePass()
        }}
        onSwipeableLeftWillOpen={()=> setWillLike(true)}
        onSwipeableRightWillOpen={()=> setWillPass(true)}
        >
            <Swipes user={users[currentIndex]} willLike={willLike} willPass={willPass}/>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})