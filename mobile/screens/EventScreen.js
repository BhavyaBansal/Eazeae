import { ScrollView, Text, StyleSheet, View, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import CategoriesScroll from "../components/CategoriesScroll";
import Colors from "../constants/colors";
import { PLACES } from "../data/placesData";
import PlaceCard from "../components/PlaceCard";
import FooterNavBar from "../components/FooterNavBar";
function EventScreen({ route }) {
  const catId = route.params.categoryId;
  const displayPlaces = PLACES.filter((place) => {
    return place.categoryIds.indexOf(catId) >= 0;
  });
  // console.log(catId);
  function renderPlaces(itemData) {
    const item = itemData.item;
    const placeProps = {
      id: item.id,
      name: item.name,
      images: item.images,
      country: item.country,
      state: item.state,
      city: item.city,
      openingTime: item.openingTime,
      closingTime: item.closingTime,
      prices: item.packsObjWithPrice,
    };
    return <PlaceCard {...placeProps} />;
  }
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer1}>
        <SearchBar />
        <CategoriesScroll />
      </View>
      <View style={styles.innerContainer2}>
        <FlatList
          data={displayPlaces}
          keyExtractor={(place) => place.id}
          renderItem={renderPlaces}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <Text>Event Screen</Text> */}
      <FooterNavBar/>
    </View>
  );
}
export default EventScreen;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "100%",
    padding: 2,
    // padding: 8,
  },
  innerContainer1: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.pink100,
    paddingVertical: 10,
    // elevation:4,
  },
  innerContainer2: {
    flex: 1,
    padding: 10,
    // elevation:4,
  },
});
