import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
function PriceButton({ price, type, onChangeAdd, onChangeSub, onDiscard }) {
  // let count = 0;
  // let totalPrice = 0;
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  let tp = parseInt(price.substring(4));
  function maintainPriceandCountHandler() {
    setCount(count + 1);
    setTotalPrice(tp * (count + 1));
    onChangeAdd(count + 1, type, tp);
  }
  function removePriceandCountHandler() {
    setCount(count - 1);
    setTotalPrice(tp * (count - 1));
    onChangeSub(count - 1, type, tp);
    if (count - 1 <= 0) {
      onDiscard(type);
      setColor(false);
    }
  }
  function fillColor() {
    if (color == false) {
      setColor(true);
      setTotalPrice(tp);
      setCount(1);
      onChangeAdd(1, type, tp);
    } else {
      setTotalPrice(0);
      setCount(0);
      setColor(false);
      onDiscard(type);
    }
  }
  colorval = color;
  return (
    <>
      <View>
        {/* <View><Text>Hello</Text></View> */}
        <Pressable
          style={[
            styles.buttonContainer,
            { backgroundColor: color == true ? Colors.pink100 : "white" },
          ]}
          onPress={fillColor}
        >
          <Text style={styles.textStyle}>{type}</Text>
          <Text style={styles.textStyle}>{price}</Text>
        </Pressable>
        <View style={[styles.outerContainer, { margin: 5 }]}>
          <Pressable
            style={{ display: color === true ? "flex" : "none" }}
            onPress={removePriceandCountHandler}
            android_ripple={{ color: "#ccc" }}
          >
            <Ionicons name="remove-circle-sharp" size={23} />
          </Pressable>
          <Pressable
            style={{ display: color === true ? "flex" : "none" }}
            onPress={maintainPriceandCountHandler}
            android_ripple={{ color: "#ccc" }}
          >
            <Ionicons name="add-circle-sharp" size={23} />
          </Pressable>
        </View>
        {color === true ? (
          <View
            style={[
              // { display: color === true ? "flex" : "none" },
              styles.showPrice,
            ]}
          >
            <Text style={styles.priceText}>
              {count} : ₹{totalPrice}
            </Text>
          </View>
        ) : (
          ""
        )}
      </View>
    </>
  );
}
export default PriceButton;
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    width: 80,
    height: 50,
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
    borderRadius: 30,
    borderColor: Colors.red100,
    elevation: 1,
  },
  textStyle: {
    color: Colors.red100,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  showPrice: {
    alignSelf: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.red100,
    padding: 5,
    borderRadius: 5,
  },
  priceText: {
    color: Colors.red100,
    letterSpacing: 0.5,
    fontSize: 14,
  },
  // makeVisible:{
  //     display:'none'
  // }
});
