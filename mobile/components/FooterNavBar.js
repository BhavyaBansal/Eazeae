import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import Colors from "../constants/colors";
import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SideBar from "./SideBar";
function FooterNavBar() {
  const navigation = useNavigation();
  const [sidebarIsVisible, setSideBarIsVisible] = useState(false);
  function endSideBar() {
    setSideBarIsVisible(false);
  }
  function showSidebar() {
    setSideBarIsVisible(true);
  }
  function homeNavigation(){
    navigation.navigate("All")
  }
  function contactNavigation(){
    navigation.navigate("Contact");
  }
  return (
    <View style={styles.rootContainer}>
      <Pressable android_ripple={{ color: "#ccc", borderless: true }}>
        <EvilIcons name="heart" size={36} color={Colors.black100} />
      </Pressable>
      <Pressable android_ripple={{ color: "#ccc", borderless: true }}>
        <EvilIcons name="comment" size={36} color={Colors.black100} />
      </Pressable>
      <Pressable
        android_ripple={{ color: "#ccc", borderless: true }}
        onPress={homeNavigation}
      >
        <AntDesign name="home" size={30} color={Colors.black100} />
      </Pressable>
      <Pressable android_ripple={{ color: "#ccc", borderless: true }} onPress={contactNavigation}>
        <Ionicons name="call-outline" size={28} color={Colors.black100} />
      </Pressable>
      <Pressable
        android_ripple={{ color: "#ccc", borderless: true }}
        onPress={showSidebar}
      >
        <EvilIcons name="user" size={36} color={Colors.black100} />
      </Pressable>
      <SideBar onCancel={endSideBar} visible={sidebarIsVisible} />
    </View>
  );
}
export default FooterNavBar;
const styles = StyleSheet.create({
  rootContainer: {
    bottom: 0,
    width: Dimensions.get("window").width,
    height: 50,
    backgroundColor: Colors.pink100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
