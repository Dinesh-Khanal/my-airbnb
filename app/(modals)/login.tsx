import { View, Text, StyleSheet } from "react-native";
import { useWarmUpBrowser } from "@/hooks/use-warm-up-browser";
import React from "react";

const Page = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
});
