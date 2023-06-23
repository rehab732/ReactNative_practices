import {StyleSheet,View,Text, Pressable} from 'react-native';
function GoalItem(props)
{

    return(
      <Pressable onPress={props.ondelete.bind(this,props.id)}>
        <View style={styles.goalitem}>
        <Text style={styles.goaltext}>{props.text}</Text>
        </View>
      </Pressable>

    );
}
export default GoalItem;


const styles = StyleSheet.create({
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
