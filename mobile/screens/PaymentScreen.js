import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PaymentScreen({ route, navigation }) {
  const totalAmount = route.params.totalP;
  const placeDetails = route.params.placeDetails;
  const [selectedOption, setSelectedOption] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  if (totalAmount === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Total amount is not defined!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const paymentOptions = [
    { id: "creditCard", name: "Credit Card", icon: "credit-card" },
    { id: "paypal", name: "PayPal", icon: "paypal" },
    { id: "applePay", name: "Apple Pay", icon: "apple" },
  ];

  const handlePayment = () => {
    if (!selectedOption) {
      alert("Please select a payment option!");
      return;
    }
    if (
      selectedOption.id === "creditCard" &&
      (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)
    ) {
      alert("Please fill in all card details!");
      return;
    }
    // Implement payment processing logic here based on selectedOption
    alert(`Payment Processed Successfully using ${selectedOption.name}!`);
    navigation.navigate("PDS", {
      totalAmount: totalAmount,
      placeDetails: placeDetails,
    });
  };

  const handleInputChange = (field, value) => {
    setCardDetails({ ...cardDetails, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.amount}>Total Amount: ${totalAmount}</Text>

      <View style={styles.optionsContainer}>
        {paymentOptions.map((option) => (
          <View key={option.id}>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption?.id === option.id && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption(option)}
            >
              <Icon name={option.icon} size={30} color={Colors.black} />
              <Text style={styles.optionText}>{option.name}</Text>
            </TouchableOpacity>
            {selectedOption?.id === "creditCard" &&
              option.id === "creditCard" && (
                <View style={styles.cardDetailsContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    keyboardType="numeric"
                    onChangeText={(value) =>
                      handleInputChange("cardNumber", value)
                    }
                    value={cardDetails.cardNumber}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Expiry Date (MM/YY)"
                    keyboardType="numeric"
                    onChangeText={(value) =>
                      handleInputChange("expiryDate", value)
                    }
                    value={cardDetails.expiryDate}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    keyboardType="numeric"
                    secureTextEntry
                    onChangeText={(value) => handleInputChange("cvv", value)}
                    value={cardDetails.cvv}
                  />
                </View>
              )}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  errorText: {
    fontSize: 20,
    color: Colors.red,
    textAlign: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.black,
  },
  amount: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: Colors.red100,
  },
  optionsContainer: {
    marginVertical: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
    marginVertical: 10,
  },
  selectedOption: {
    borderColor: Colors.purple100,
    backgroundColor: Colors.lightPurple,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    color: Colors.black,
  },
  cardDetailsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  payButton: {
    backgroundColor: Colors.purple100,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  payButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
