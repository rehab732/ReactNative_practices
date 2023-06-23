import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [course, setCource] = useState([]);
  const [modalIsvisable, setModal] = useState(true);
  function addName(name) {
    if (name == "") {
      console.log("sorry");
    } else {
      setCource((currentcourse) => [
        ...currentcourse,
        { text: name, id: Math.random().toString() },
      ]);
      setModal(false);
    }
  }
  function deleteItem(id) {
    setCource((currentcourse) => {
      return currentcourse.filter((goal) => goal.id !== id);
    });
  }
  function startModal() {
    setModal(true);
    console.log("start");
  }
  function endModal() {
    setModal(false);
  }
  return (
    <>
    <StatusBar style="auto"/>
    <View style={styles.appcontainer}>
      <Button title="Add New Goal" onPress={startModal} />
      <GoalInput
        onAddGoal={addName}
        visable={modalIsvisable}
        cancel={endModal}
        start={startModal}
      />
      <View style={styles.goalcontainer}>
        <FlatList
          data={course}
          renderItem={(item) => {
            return (
              <GoalItem
                text={item.item.text}
                ondelete={deleteItem}
                id={item.item.id}
              />
            );
          }}
        ></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    padding: 50,
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
  goalcontainer: {
    flex: 5,
    flexDirection: "column",
  },
  goalitem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goaltext: {
    color: "white",
  },
});
