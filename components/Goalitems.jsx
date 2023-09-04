import { Pressable, StyleSheet,Text, View } from "react-native"

const Goalitems = (props) => {
  return (
      <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color:"#210644"}} 
          onPress={props.onDelete.bind(this, props.id)}
          // style = {({pressed})=> pressed && styles.pressItem} this function does thesame as andriod ripple but for iphone
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  )
}

export default Goalitems

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
      },
      goalText:{
        color:'white',
        padding:8
      },
      pressItem:{
        opacity: 0.5
      }
})