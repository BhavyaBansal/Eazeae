import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Colors from "../constants/colors";

function Reviews({ reviews }) {
  return (
    <View>
      <Text style={styles.textRev}>Reviews</Text>
      {reviews.map((review, index) => (
        <View style={styles.reviewContainer} key={index}>
          <Image source={{ uri: review.image }} style={styles.reviewImage} />
          <View style={styles.innerContainer}>
            <Text style={styles.reviewerName}>{review.name}</Text>
            <Text style={styles.review}>{review.review}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
export default Reviews;
const styles = StyleSheet.create({
  textRev: {
    marginLeft: 3,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  reviewImage: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").width * 0.25,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.pink100,
    margin: 5,
  },
  review: {
    width: Dimensions.get("window").width * 0.65,
    fontSize: 12,
    letterSpacing: 0.5,
    marginLeft: 5,
  },
  innerContainer: {
    flexDirection: "column",
  },
  reviewerName:{
    fontSize:14,
    letterSpacing:1,
    color:Colors.red100,
    marginLeft:4
  }
});
