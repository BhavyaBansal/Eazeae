import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.red100,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
