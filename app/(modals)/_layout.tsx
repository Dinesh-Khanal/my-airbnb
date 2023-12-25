import { View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ModalLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: "Login/SignUp",
          presentation: "modal",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="booking"
        options={{
          title: "Booking",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
