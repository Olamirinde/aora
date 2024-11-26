import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyles,
        {
          backgroundColor: "#FF9C01",
          borderRadius: 16,
          minHeight: 62,
          justifyContent: "center",
          alignItems: "center",
        },
        isLoading && { opacity: 0.75 },
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  textStyle: {
    color: "#161622",
    fontWeight: "600",
    fontSize: 18,
  },
  buttonStyles: {
    width: "80%",
    marginTop: 20,
  },
});
