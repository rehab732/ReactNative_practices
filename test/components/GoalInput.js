import { StyleSheet,View,TextInput,Button, Modal } from "react-native";
import { useState } from "react";
function GoalInput(props)
{
  const [name, setName] = useState("");
  function takeName(text) {
    setName(text);
  }

  function execute()
    {
      props.onAddGoal(name);
      props.start();
      setName('');
    }
  return(
    <Modal animationType="slide" visible={props.visable}>
    <View style={styles.inputcontainer}>
    <TextInput
      placeholder="enter your name"
      style={styles.textinput}
      onChangeText={takeName}
      value={name}
    />
    <View style={styles.but}>
    <Button title="Add" onPress={execute}/>
    <Button title="calcel" onPress={props.cancel} />
    </View>

  </View>
    </Modal>
  );
}
export default GoalInput;


const styles = StyleSheet.create({
but:{
justifyContent:'space-between'
},
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "red",
    width: "80%",
    padding: 5,
  },
});
