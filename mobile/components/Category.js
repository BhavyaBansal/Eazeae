import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
function Category({ image, name, id }) {
  // const [borderBottom, setBorderBottom] = useState(false);
  // console.log(id);
  // console.log(typeof(imgSrc));
  const navigation = useNavigation();
  function setCategory() {
    // setBorderBottom(true);
    navigation.navigate(name, {
      categoryId: id,
    });
  }
  return (
    <Pressable
      onPress={setCategory}
      android_ripple={{ color: "#ccc" ,borderless:true,radius:40}}
      // style={{ borderBottomWidth: borderBottom == true ? 2 : 0 }}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </Pressable>
  );
}
export default Category;
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: 70,
    height: 70,
    alignItems: "center",
    marginHorizontal:7,
    // borderWidth: borderBottom == true ? 2 : 0,
  },
  image: {
    width: 35,
    height: 35,
    margin:5,
  },
  textStyle:{
    fontSize:12,
    letterSpacing:1
  }
});
