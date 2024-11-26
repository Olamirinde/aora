import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}) => {
  return (
    <View style={[styles.bigContainer, { marginTop: 24 }]}>
      <Text style={styles.textStyles}>{title}</Text>

      <View style={styles.formStyle}></View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  bigContainer: {
    marginTop: 8,
  },
  textStyles: {
    fontSize: 16,
    color: "#f7fafc",
  },
  formStyle: {
    borderColor: "black",
    width: "100%",
    borderRadius: 16,
    alignItems: "center",
  },
});
