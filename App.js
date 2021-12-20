
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import  Constants  from 'expo-constants';
import TopBar from './components/topBar';
import axios from 'axios';
import Swipes from './components/swipes';
import BottomBar from './components/bottomBar';
import Swap from './components/swap';


export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  async function fetchUsers(){
    try{
      const {data} = await axios.get('https://randomuser.me/api/?gender=female&results=200')
      setUsers(data.results)
      
    }catch(error) {
      console.log(error)
      Alert.alert('error getting users data', '',[{text:'Retry', onPress:() => fetchUsers()}])
    }
  }

  useEffect(()=> {
    fetchUsers()
  }, [])

  function handleLike(){
    console.log('Like')
    nextUser()
  }

  function nextUser(){
    const nextIndex = users.length - 2 == currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handlePass(){
    console.log('Pass')
    nextUser()
  }

  function handleLikePress(){


  }

  function handlePassPress(){


  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
      {users.length > 1 && users.map((u ,i) => currentIndex == i && (<Swap key={i} currentIndex={currentIndex} users={users} handleLike={handleLike} handlePass={handlePass}></Swap>)) }
      </View>
      <BottomBar  handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.StatusBarHeight
  },
  swipes:{
    flex:1,
    padding:10,
    paddingTop:8,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:3,
    },
    shadowOpacity:0.29,
    shadowRadius:4.65,
    elevation:7,
  },
});
