import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
const Goalinput = (props) => {

   const [goal, setGoal] = useState('')

   const handleChange = (enteredText) => {
        setGoal(enteredText)
    }

    
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/splash.png')}
          />
          <TextInput style={styles.textInput} placeholder='your goal' value={goal} onChangeText={handleChange}/>
          <View style={styles.bottonContainer}>
            <View style={styles.button}>
              <Button title='Cancel' onPress={props.onCancle} color="#f31282"/>
            </View>
            <View style={styles.button}>
              <Button title='Add goal' onPress={()=>{props.onAddGoal(goal); setGoal('')}} color="#5e0acc"/>
            </View>
          </View>
      </View>
    </Modal>
  )
}

export default Goalinput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:24,

        backgroundColor: "#311b6b"
      },
      textInput:{
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        borderWidth:1,
        width:'100%',
        padding:16,
        color:'#120428',
        borderRadius:6
      },
      bottonContainer:{
        marginTop: 16,
        flexDirection:'row'
      },
      button:{
        width:100,
        marginHorizontal: 8
      },
      image:{
        width:200,
        height:200,
        margin:20
      }
})