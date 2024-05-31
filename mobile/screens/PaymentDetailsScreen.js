import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Colors from "../constants/colors";

export default function PaymentDetailsScreen({ route, navigation }) {
  const placeDetails = route.params.placeDetails;
  const amount = route.params.totalAmount;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name of Place:</Text>
        <Text style={styles.value}>{placeDetails.name}</Text>

        <Text style={styles.label}>State:</Text>
        <Text style={styles.value}>{placeDetails.state}</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{placeDetails.city}</Text>

        <Text style={styles.label}>Timings:</Text>
        <Text style={styles.value}>10:00 AM</Text>

        <Text style={styles.label}>Price:</Text>
        <Text style={styles.value}>${amount}</Text>
      </View>

      <View style={styles.qrCodeContainer}>
        <Text style={styles.qrCodeLabel}>QR Code:</Text>
        <QRCode
          value={`Place: ${placeDetails.name}, Price: ${amount}`}
          size={150}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.black,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.grey,
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: Colors.black,
  },
  qrCodeContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  qrCodeLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.grey,
    marginBottom: 10,
  },
});
