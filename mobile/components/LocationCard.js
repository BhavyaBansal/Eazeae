import { View, Text,StyleSheet } from "react-native";

function LocationCard({ latitude, longitude }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textLoc}>Location</Text>
      <View style={styles.cardContainer}>
        <Text>{latitude}  {longitude}</Text>
      </View>
    </View>
  );
}
export default LocationCard;
const styles = StyleSheet.create({
    rootContainer:{
        marginVertical:10,
        padding:0,
    },
    cardContainer:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:10,
        width:"100%",
        height:200,
        // elevation:2,
    },
    textLoc:{
        marginLeft:3,
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:1,
    }
})
