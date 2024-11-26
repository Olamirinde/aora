import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.contentBox}>
          <Image style={styles.logoStyle} source={images.logo} />
          <Image style={styles.cardStyle} source={images.cards} />
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>
              Discover Endless Possibilities with{" "}
              <Text style={styles.inlineStyle}>Aora</Text>
            </Text>
            <Image style={styles.pathStyles} source={images.path} />
          </View>
          <Text style={styles.taglineStyles}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
          />{" "}
          {/* Corrected spelling */}
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161622",
  },
  contentBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80%",
    paddingVertical: 16,
  },
  logoStyle: {
    width: 130,
    height: 84,
    resizeMode: "contain",
  },
  cardStyle: {
    maxWidth: 380,
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  textContainer: {
    position: "relative",
    marginTop: 20,
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  inlineStyle: {
    color: "#FF8E01",
  },
  pathStyles: {
    width: 136,
    height: 15,
    position: "absolute",
    bottom: -8,
    right: -32,
    resizeMode: "contain",
  },
  taglineStyles: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#f7fafc",
    marginTop: 28,
    justifyContent: "center",
  },
});
