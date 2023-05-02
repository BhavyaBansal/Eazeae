import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
  Dimensions,
} from "react-native";
import Colors from "../constants/colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
function PlaceCard({
  id,
  name,
  images,
  country,
  state,
  city,
  openingTime,
  closingTime,
  prices,
}) {
  // console.log(images);
  const navigation = useNavigation();
  function placeDetailHandler() {
    // console.log("Pressed");
    navigation.navigate("Place", {
      placeId: id,
    });
  }
  const [active, setActive] = useState(0);
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          alwaysBounceHorizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          onScroll={change}
        >
          {images.map((image, index) => (
            <Pressable
              key={index}
              android_ripple={{ color: "#ccc" }}
              onPress={placeDetailHandler}
            >
              <Image
                source={{
                  uri: image,
                }}
                style={styles.imageStyle}
              />
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k == active ? styles.pagingActivetext : styles.pagingText}
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.inRow}>
          <Text style={styles.textInRow}>
            {name.length > 20
              ? name.substring(0, 20).toUpperCase() + "..."
              : name.toUpperCase()}
          </Text>
          <Text style={styles.location}>
            <Ionicons name="time" color={Colors.red100} size={12} />
            {openingTime} to {closingTime}
          </Text>
        </View>
        <Text style={styles.location}>
          {state.toUpperCase()} | {city.toUpperCase()}
        </Text>
        <Text style={styles.location}>
          Children: {prices.Child} | Adult: {prices.Adult} | Foreigner:{" "}
          {prices.Foreigner}
        </Text>
      </View>
    </View>
  );
}
export default PlaceCard;
const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 15,
    padding: 5,
  },
  container: {
    marginHorizontal: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    borderRadius: 16,
    elevation: 4,
  },
  scroll: {
    elevation: 8,
    overflow: "hidden",
  },
  imageStyle: {
    width: Dimensions.get("window").width - 44,
    height: 250,
    resizeMode: "cover",
  },
  textContainer: {
    marginTop: 8,
    marginHorizontal: 10,
  },
  location: {
    justifyContent: "center",
    fontSize: 10,
    letterSpacing: 1,
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInRow: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
  },
  pagingText: {
    color: "#888",
    margin: 3,
  },
  pagingActivetext: {
    fontSize: 18,
    color: "#fff",
    margin: 3,
  },
});
