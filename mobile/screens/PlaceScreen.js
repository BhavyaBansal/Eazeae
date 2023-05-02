import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { PLACES } from "../data/placesData";
import { useLayoutEffect } from "react";
import { useState } from "react";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import LocationCard from "../components/LocationCard";
import PriceButton from "../components/PriceButton";
import Reviews from "../components/Reviews";
import FooterTotalPrice from "../components/FooterTotalPrice";
const WIDTH = Dimensions.get("window").width;
function PlaceScreen({ route, navigation }) {
  const placeId = route.params.placeId;
  const selectedPlace = PLACES.find((place) => place.id === placeId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedPlace.name,
    });
  });
  const [active, setActive] = useState(0);
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  const [priceTotal, setPriceTotal] = useState(0);
  const [ctype, setCtype] = useState(0);
  const [atype, setAtype] = useState(0);
  const [ftype, setFtype] = useState(0);
  function getPriceAdd(count, type, price) {
    switch (type) {
      case "Child":
        setCtype(count * price);
        break;
      case "Adult":
        setAtype(count * price);
        break;
      case "Foreigner":
        setFtype(count * price);
        break;
    }
    setPriceTotal(ctype + atype + ftype + price);
  }
  function getPriceSub(count, type, price) {
    switch (type) {
      case "Child":
        setCtype(count * price);
        break;
      case "Adult":
        setAtype(count * price);
        break;
      case "Foreigner":
        setFtype(count * price);
        break;
    }
    setPriceTotal(ctype + atype + ftype - price);
  }
  function makePriceZero(type) {
    switch (type) {
      case "Child":
        setCtype(0);
        setPriceTotal(ctype + atype + ftype - ctype);
        break;
      case "Adult":
        setAtype(0);
        setPriceTotal(ctype + atype + ftype - atype);
        break;
      case "Foreigner":
        setFtype(0);
        setPriceTotal(ctype + atype + ftype - ftype);
        break;
    }
  }
  // console.log(priceTotal);
  return (
    <>
      <ScrollView
        style={styles.outerContainer}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled
            alwaysBounceHorizontal={false}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            onScroll={change}
          >
            {selectedPlace.images.map((image, index) => (
              <Image source={{ uri: image }} key={index} style={styles.image} />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {selectedPlace.images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == active ? styles.pagingActivetext : styles.pagingText
                }
              >
                ⬤
              </Text>
            ))}
          </View>
          <Text style={styles.countImages}>
            {active + 1}/{selectedPlace.images.length}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
          <View style={styles.inRow}>
            <Text style={styles.location}>
              {selectedPlace.country} | {selectedPlace.state} |{" "}
              {selectedPlace.city}
            </Text>
            <Text style={styles.rating}>
              <Ionicons name="star-sharp" />
              5.0{" "}
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              >
                Reviews
              </Text>
            </Text>
          </View>
          <Text style={styles.placeDescription}>
            {selectedPlace.description}
          </Text>
          {selectedPlace.details.map((detail, index) => (
            <Text key={index} style={styles.placeDescription}>
              ⬤ {detail}
            </Text>
          ))}
          <Text style={styles.time}>
            Opening Time: {selectedPlace.openingTime.toUpperCase()}
          </Text>
          <Text style={styles.time}>
            Closing Time: {selectedPlace.closingTime.toUpperCase()}
          </Text>
          <LocationCard
            latitude={selectedPlace.latitude}
            longitude={selectedPlace.longitude}
          />
          <View
            style={[styles.inRow, { marginHorizontal: 5, marginVertical: 10 }]}
          >
            <PriceButton
              price={selectedPlace.packsObjWithPrice.Child}
              type="Child"
              onChangeAdd={getPriceAdd}
              onChangeSub={getPriceSub}
              onDiscard={makePriceZero}
            />
            <PriceButton
              price={selectedPlace.packsObjWithPrice.Adult}
              type="Adult"
              onChangeAdd={getPriceAdd}
              onChangeSub={getPriceSub}
              onDiscard={makePriceZero}
            />
            <PriceButton
              price={selectedPlace.packsObjWithPrice.Foreigner}
              type="Foreigner"
              onChangeAdd={getPriceAdd}
              onChangeSub={getPriceSub}
              onDiscard={makePriceZero}
            />
          </View>
          <Reviews reviews={selectedPlace.reviews} />
        </View>
      </ScrollView>
      <FooterTotalPrice totalPrice={priceTotal} />
    </>
  );
}
export default PlaceScreen;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 0,
    width: "100%",
  },
  scroll: {
    width: WIDTH - 4,
    height: 210,
    margin: 2,
    elevation: 1,
  },
  image: {
    width: WIDTH - 4,
    height: 200,
    resizeMode: "cover",
    borderRadius: 2,
    // elevation:10,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 12,
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
  countImages: {
    position: "absolute",
    right: 10,
    bottom: 20,
    backgroundColor: Colors.black100,
    color: Colors.white100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    fontSize: 12,
    letterSpacing: 1,
    // fontWeight:'bold'
  },
  details: {
    margin: 10,
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 2,
  },
  placeDescription: {
    fontSize: 13,
    letterSpacing: 0.5,
    padding: 5,
  },
  location: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    backgroundColor: Colors.pink100,
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: Colors.red100,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 11,
    letterSpacing: 1,
    backgroundColor: Colors.pink100,
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: Colors.red100,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  time: {
    marginHorizontal: 5,
    fontSize: 12,
    letterSpacing: 1,
    marginVertical: 3,
    color: "#bbd",
  },
});
