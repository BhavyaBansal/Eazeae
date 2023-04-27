import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
const SideBar = (props) => {
  const navigation = useNavigation();
  function userLoginNav() {
    navigation.navigate("Login");
  }
  function userRegisterNav() {
    navigation.navigate("Register");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.imageView}>
          <Pressable
            onPress={props.onCancel}
            android_ripple={{ color: "#ccc", borderless: true }}
          >
            <Entypo name="cross" size={30} />
          </Pressable>
        </View>
        <View style={styles.links}>
          <Pressable
            android_ripple={{ color: "#ccc", borderless: true }}
            style={styles.inRow}
            onPressIn={userLoginNav}
            onPress={props.onCancel}
          >
            <FontAwesome name="sign-in" size={20} color={Colors.red100} />
            <Text style={styles.link}>User SignIn</Text>
          </Pressable>
          <Pressable
            android_ripple={{ color: "#ccc", borderless: true }}
            style={styles.inRow}
            onPressIn={userRegisterNav}
            onPress={props.onCancel}
          >
            <FontAwesome name="sign-out" size={20} color={Colors.red100} />
            <Text style={styles.link}>User SignUp</Text>
          </Pressable>
          <Pressable
            android_ripple={{ color: "#ccc", borderless: true }}
            style={styles.inRow}
          >
            <FontAwesome name="sign-in" size={20} color={Colors.red100} />
            <Text style={styles.link}>Admin SignUp</Text>
          </Pressable>
          <Pressable
            android_ripple={{ color: "#ccc", borderless: true }}
            style={styles.inRow}
          >
            <FontAwesome name="sign-out" size={20} color={Colors.red100} />
            <Text style={styles.link}>Admin SignUp</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SideBar;
const styles = StyleSheet.create({
  modal:{
    zIndex:-1,
  },
  inputContainer: {
    backgroundColor: Colors.pink100,
    flex: 1,
    flexDirection: "column",
    padding: 16,
    // backgroundColor: "#311b6b",
  },
  image: {
    width: 30,
    height: 30,
    padding: 15,
  },
  imageView: {
    alignItems: "flex-end",
  },
  links: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    letterSpacing: 1,
    padding: 5,
    textTransform: "uppercase",
    marginLeft: 5,
  },
  inRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
