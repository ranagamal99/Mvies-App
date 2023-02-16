import { View, Text, StyleSheet,Button } from "react-native";
import { usePreventScreenCapture } from "expo-screen-capture";
export const Page1 = ({ navigation }) => {
  usePreventScreenCapture();
  return (
    <View>
      <Text style={{margin:15,textAlign:"center", color: '#660f1e', fontWeight: 'bold', fontSize: 20 }}> Profile</Text>
      <View style={styles.btn}>
      <Button
          title="Edit profile"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Edit profile");
        }}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
  alignSelf:"center",
    backgroundColor: "blue",
    width: 200,
    color: "white",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
});