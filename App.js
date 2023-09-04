import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import Goalitems from './components/Goalitems'
import Goalinput from './components/Goalinput'

export default function App() {

  const [goals, setGoals] = useState([])
  const [modal, setModal] = useState(false)

  const addGoal = (goal) => {
    setGoals(prev=>([...prev, {text:goal, id:Math.random().toString()}]))
    setModal(false)
  }

  const modalHandler = () =>{
    setModal(true)
  }


  const deleteGoal = (id) =>{
    setGoals(current => {
      return(
        current.filter((value)=>(value.id !== id))
      )
    })
  }


  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='add new goal' color='#5e0acc' onPress={modalHandler}/>
        <Goalinput onAddGoal={addGoal} visible={modal} onCancle = {()=>setModal(false)}/>
      <View style={styles.goals}>
        <FlatList data={goals} renderItem={itemData =>{
          return(
            <Goalitems text = {itemData.item.text} id = {itemData.item.id} onDelete={deleteGoal} />
          )
        }} keyExtractor={(item, index)=>(item.id)}/>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  goals:{
    flex:5
  }
});
