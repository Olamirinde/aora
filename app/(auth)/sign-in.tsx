import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <SafeAreaView style={styles.bigContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={images.logo}
            resizeMode="contain"
          />
          <Text style={styles.textStyles}>Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            style={{ marginTop: 24 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            style={{ marginTop: 24 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: "#161622",
    height: "100%",
  },
  container: {
    width: "100%",
    justifyContent: "center",
    height: "85%",
    paddingVertical: 16,
    marginHorizontal: 24,
  },
  imageStyle: {
    width: 115,
    height: 35,
  },
  textStyles: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    marginTop: 40,
  },
});
