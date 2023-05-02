import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CustomButton from "../components/CustomButton";

import LoginImg from "../public/images/signup.jpg";
import FacebookImg from "../public/images/facebook.jpg";
import TwitterImg from "../public/images/twitter.jpg";
import GoogleImg from "../public/images/google.jpg";
import { ScrollView } from "react-native";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
export default function LoginScreen() {
  const navigation = useNavigation();
  function registerNav(){
    navigation.navigate("Register");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ field: "", message: "" });
  const onSubmit = () => {
    let loginError = { field: "", message: "" };
    if (email === "") {
      loginError.field = "email";
      loginError.message = "email is required!";
      setError(loginError);
    } else if (password === "") {
      loginError.field = "password";
      loginError.message = "password is required!";
      setError(loginError);
    } else {
      // console.log("done");
      setError(false);
    }
    // email
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false && email != "") {
      loginError.field = "email";
      loginError.message = "email is not valid";
      setError(loginError);
    } else {
      // this.setState({ email: text });
      // console.log("Email is Correct");
    }

    // pass
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{ paddingHorizontal: 30 }}
      >
        <View style={{ paddingHorizontal: 30 }}>
          <View style={{ alignItems: "center", marginTop: 5 }}>
            <Image
              source={LoginImg}
              style={{
                marginTop: 15,
                width: 300,

                height: 300,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              color: Colors.red100,
              marginBottom: 30,
              letterSpacing:1,
            }}
          >
            Login
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Email ID"
              style={{ flex: 1, paddingVertical: 0 }}
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            {error.field === "email" && (
              <Text style={{ marginBottom: 5, color: "red" }}>
                {error.message}
              </Text>
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 0 }}
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            {error.field === "password" && (
              <Text style={{ marginBottom: 5, color: "red" }}>
                {error.message}
              </Text>
            )}
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: Colors.purple100, fontWeight: "700" }}>
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton label={"Login"} onPress={onSubmit} />
          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 30 }}
          >
            or login via Social network...
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: 10,
            }}
          >
            {/*Social media */}
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 30,
                paddingHorizontal: 10,
                paddingVertical: 8,
              }}
            >
              <Image
                source={GoogleImg}
                style={{
                  width: 35,
                  height: 35,
                  padding: 0,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 30,
                paddingHorizontal: 9,
                paddingVertical: 10,
              }}
            >
              <Image
                source={FacebookImg}
                style={{
                  width: 35,
                  height: 35,
                  padding: 0,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 30,
                paddingHorizontal: 11,
                paddingVertical: 10,
              }}
            >
              <Image
                source={TwitterImg}
                style={{
                  width: 35,
                  height: 35,
                  padding: 0,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Text>New to the app? </Text>
            <TouchableOpacity onPress={registerNav}>
              <Text style={{ color: Colors.purple100, fontWeight: "700",textDecorationLine:'underline' }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
