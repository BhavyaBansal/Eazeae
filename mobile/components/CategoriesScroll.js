import { ScrollView, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/placesData";
import Category from "./Category";
function CategoriesScroll() {
  return (
    <ScrollView
      style={styles.categoriesStyle}
      horizontal={true}
      alwaysBounceHorizontal={false}
      showsHorizontalScrollIndicator={false}
    >
      {CATEGORIES.map((category) => (
        <Category
          image={category.icon}
          name={category.name}
          id={category.id}
          key={category.id}
        />
      ))}
    </ScrollView>
  );
}
export default CategoriesScroll;
const styles = StyleSheet.create({
  categoriesStyle: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal:10,
  },
});
