import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Page = () => {
  return (
    <View style={{ paddingHorizontal: 18 }}>
      <Link href="/login">
        <Text>Login</Text>
      </Link>
      <Link href="/booking">
        <Text>Booking</Text>
      </Link>
    </View>
  );
};

export default Page;
