import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { PLACES } from "../data/placesData";
function SearchBar() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [textt, setTextt] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  function getLonLat() {
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      let lat = location.coords.latitude;
      let lon = location.coords.longitude;
      console.log(lat, lon);
    }
    console.log(text);
  }
  function searchPlace() {
    const displayPlaces = PLACES.filter((place) => {
      return place.name.toLowerCase().includes(textt.toLowerCase());
    });
    navigation.navigate("All", { places: displayPlaces });
    // console.log(textt);
  }
  return (
    <View style={styles.searchContainer}>
      <Pressable
        android_ripple={{ color: "#ccc", radius: 11 }}
        onPress={searchPlace}
      >
        <Ionicons name="search" size={20} color={Colors.red100} />
      </Pressable>
      <TextInput
        placeholder="State? City?"
        style={styles.input}
        onChangeText={(searchText) => setTextt(searchText)}
      />
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
