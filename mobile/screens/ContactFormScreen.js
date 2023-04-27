import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import CustomButton from "../components/CustomButton";

import ContactUs from "../public/images/contactUs.jpg";
export default function ContactFormScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({ field: "", message: "" });
  //
  const onSubmit = () => {
    let loginError = { field: "", message: "" };
    if (name === "") {
      loginError.field = "name";
      loginError.message = "required!";
      setError(loginError);
    } else if (email === "") {
      loginError.field = "email";
      loginError.message = "required!";
      setError(loginError);
    } else if (phone === "") {
      loginError.field = "phone";
      loginError.message = "required!";
      setError(loginError);
    } else {
      console.log("done");
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
      console.log("Email is Correct");
    }
    //
    const regPhone = /^[0]?[6789]\d{9}$/;
    if (regPhone.test(phone) === false && phone != "") {
      loginError.field = "phone";
      loginError.message = "Phone number is not valid";
      setError(loginError);
    } else {
      // setError(false);
      console.log("done phone");
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
            source={ContactUs}
            style={{
              marginTop: 5,
              width: 280,
              height: 280,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 23,
            fontWeight: "500",
            color: "#f56a4d",
            marginBottom: 25,
            alignSelf: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#f56a4d",
            letterSpacing:1,
          }}
        >
          QUICK CONTACT
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
            style={{ flex: 1, paddingVertical: 0, letterSpacing: 0.5 }}
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
            style={{ flex: 1, paddingVertical: 0, letterSpacing: 0.5 }}
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
            name="call-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ flex: 1, paddingVertical: 0, letterSpacing: 0.5 }}
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
        <TextInput
          placeholder="We are here for you.. "
          style={{
            height: 100,
            padding: 10,
            borderBottomColor: "#000000",
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 10,
            letterSpacing: 0.5,
          }}
        />
        <View style={{ marginBottom: 10, height: 120 }}>
          <CustomButton label={"Send"} onPress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
