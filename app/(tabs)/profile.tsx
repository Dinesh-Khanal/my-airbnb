import { View, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";

const Page = () => {
  const { isSignedIn, signOut } = useAuth();
  return (
    <View>
      {isSignedIn && (
        <Button title="Log Out" onPress={() => signOut()} color={Colors.dark} />
      )}
      {!isSignedIn && (
        <Link href={"/login"} asChild>
          <Button title="Log In" color={Colors.dark} />
        </Link>
      )}
    </View>
  );
};

export default Page;
