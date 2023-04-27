import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <Pressable android_ripple={{ color: "#ccc", radius: 11 }}>
        <Ionicons name="search" size={20} color={Colors.red100} />
      </Pressable>
      <TextInput placeholder="State? City?" style={styles.input} />
      <Pressable android_ripple={{ color: "#ccc", radius: 11 }}>
        <Ionicons name="settings-outline" size={20} color={Colors.red100} />
      </Pressable>
    </View>
  );
}
export default SearchBar;
const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: Colors.white100,
  },
  input: {
    width: "80%",
    marginHorizontal: 8,
  },
});
