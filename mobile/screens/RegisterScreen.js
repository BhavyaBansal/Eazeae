import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import RegistrationImg from "../public/images/registration.jpg";
import FacebookImg from "../public/images/facebook.jpg";
import TwitterImg from "../public/images/twitter.jpg";
import GoogleImg from "../public/images/google.jpg";
import Colors from "../constants/colors";
export default function RegisterScreen() {
  const navigation = useNavigation();
  function loginNav(){
    navigation.navigate("Login");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState({ field: "", message: "" });
  const [succes, setSucces] = useState({ field: "", message: "" });

  const onSubmit = () => {
    let loginError = { field: "", message: "" };
    let loginSucces = { field: "", message: "" };
    // if empty
    if (name === "") {
      loginError.field = "name";
      loginError.message = "name is required!";
      setError(loginError);
    } else if (email === "") {
      loginError.field = "email";
      loginError.message = "email is required!";
      setError(loginError);
    } else if (password === "") {
      loginError.field = "password";
      loginError.message = "password is required!";
      setError(loginError);
    } else if (confirmPass === "") {
      loginError.field = "confirmPass";
      loginError.message = "confirmPass is required!";
      setError(loginError);
    } else if (phone === "") {
      loginError.field = "phone";
      loginError.message = "password is required!";
      setError(loginError);
    } else {
      console.log("done");
      setError(false);
    }

    // extra validation

    if (password != confirmPass && password != "") {
      loginError.field = "confirmPass";
      loginError.message = "confirm Password is not matched";
      setError(loginError);
    }
    // // email extra
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false && email != "") {
      loginError.field = "email";
      loginError.message = "email is not valid";
      setError(loginError);
    } else {
      // this.setState({ email: text });
      console.log("Email is Correct");
    }
    // phone validation
    const regPhone = /^[0]?[6789]\d{9}$/;
    if (regPhone.test(phone) === false && phone != "") {
      loginError.field = "phone";
      loginError.message = "Phone number is not valid";
      setError(loginError);
    } else {
      // setError(false);
      console.log("done phone");
    }

    //pass length
    if (password.length < 8 && password != "") {
      loginError.field = "password";
      loginError.message = "length should more than 8";
      setError(loginError);
    } else {
      console.log("done");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 30 }}
      >
        <View style={{ alignItems: "center", marginTop: 0 }}>
          <Image
            source={RegistrationImg}
            style={{
              marginTop: 5,
              width: 250,

              height: 250,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "500",
            color: Colors.red100,
            marginBottom: 25,
            letterSpacing:1,
          }}
        >
          Register Now
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
          <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Full Name"
            style={{ flex: 1, paddingVertical: 0 }}
            value={name}
            onChangeText={(value) => setName(value)}
          />
          {error.field === "name" && (
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
          {succes.field === "email" && (
            <Text style={{ marginBottom: 5, color: "green" }}>
              {succes.message}
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
            placeholder="Confirm Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={confirmPass}
            onChangeText={(value) => setConfirmPass(value)}
          />
          {error.field === "confirmPass" && (
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
            name="call-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="decimal-pad"
            value={phone}
            onChangeText={(value) => setPhone(value)}
          />
          {error.field === "phone" && (
            <Text style={{ marginBottom: 5, color: "red" }}>
              {error.message}
            </Text>
          )}
        </View>

        <CustomButton label={"Register"} onPress={onSubmit} />
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 20,fontSize:13, letterSpacing:0.5 }}>
          Or, login via Social network...
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
          <Text>Already have an account ? </Text>
          <TouchableOpacity onPress={loginNav}>
            <Text style={{ color: Colors.purple100, fontWeight: "700",textDecorationLine:'underline' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
