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
  StyleSheet,
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
  function loginNav() {
    navigation.navigate("Login");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({ field: "", message: "" });
  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    let loginError = { field: "", message: "" };

    // Validation checks
    if (name === "") {
      loginError.field = "name";
      loginError.message = "Name is required!";
      setError(loginError);
      return;
    } else if (email === "") {
      loginError.field = "email";
      loginError.message = "Email is required!";
      setError(loginError);
      return;
    } else if (password === "") {
      loginError.field = "password";
      loginError.message = "Password is required!";
      setError(loginError);
      return;
    } else if (confirmPass === "") {
      loginError.field = "confirmPass";
      loginError.message = "Confirm password is required!";
      setError(loginError);
      return;
    } else if (phone === "") {
      loginError.field = "phone";
      loginError.message = "Phone number is required!";
      setError(loginError);
      return;
    }

    if (password !== confirmPass) {
      loginError.field = "confirmPass";
      loginError.message = "Passwords do not match!";
      setError(loginError);
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      loginError.field = "email";
      loginError.message = "Email is not valid!";
      setError(loginError);
      return;
    }

    const regPhone = /^[0]?[6789]\d{9}$/;
    if (regPhone.test(phone) === false) {
      loginError.field = "phone";
      loginError.message = "Phone number is not valid!";
      setError(loginError);
      return;
    }

    if (password.length < 8) {
      loginError.field = "password";
      loginError.message = "Password should be at least 8 characters long!";
      setError(loginError);
      return;
    }

    // If validation passes
    setError({ field: "", message: "" });
    setSuccess(true);

    // Redirect after a short delay
    setTimeout(() => {
      setSuccess(false);
      navigation.navigate("All");
    }, 2000);
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
            letterSpacing: 1,
          }}
        >
          Register Now
        </Text>
        {success && (
          <Text style={{ color: "green", marginBottom: 20 }}>
            Registration Successful!
          </Text>
        )}
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
        </View>
        {error.field === "name" && (
          <Text style={{ marginBottom: 5, color: "red" }}>{error.message}</Text>
        )}
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
        </View>
        {error.field === "email" && (
          <Text style={{ marginBottom: 5, color: "red" }}>{error.message}</Text>
        )}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        {error.field === "password" && (
          <Text style={{ marginBottom: 5, color: "red" }}>{error.message}</Text>
        )}
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <TextInput
            placeholder="Confirm Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            value={confirmPass}
            onChangeText={(value) => setConfirmPass(value)}
          />
        </View>
        {error.field === "confirmPass" && (
          <Text style={{ marginBottom: 5, color: "red" }}>{error.message}</Text>
        )}
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
        </View>
        {error.field === "phone" && (
          <Text style={{ marginBottom: 5, color: "red" }}>{error.message}</Text>
        )}
        <CustomButton label={"Register"} onPress={onSubmit} />

        <Text
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 20,
            fontSize: 13,
            letterSpacing: 0.5,
          }}
        >
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
            <Text
              style={{
                color: Colors.purple100,
                fontWeight: "700",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
