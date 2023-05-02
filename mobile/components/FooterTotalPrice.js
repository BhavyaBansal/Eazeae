import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import Colors from "../constants/colors";
function FooterTotalPrice({ totalPrice }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.navText}>
        Total Price: <Text style={styles.priceText}>₹{totalPrice}</Text>
      </Text>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonContainer]
            : styles.buttonContainer
        }
        android_ripple={{
          color: "#ccc",
          foreground: true,
          borderless: true,
          radius: 45,
        }}
      >
        <View>
          <Text style={styles.buttonText}>Pay Now</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default FooterTotalPrice;
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.pink100,
    width: Dimensions.get("window").width,
    height: 50,
    bottom: 0,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").width * 0.1,
    backgroundColor: Colors.red100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow:'hidden',
    elevation:2,
  },
  navText: {
    fontSize: 14,
    letterSpacing: 1,
  },
  priceText: {
    fontWeight: "bold",
  },
  buttonText: {
    color: Colors.white100,
    letterSpacing: 0.5,
    fontSize: 12,
  },
});
