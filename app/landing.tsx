import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "@/data/Colors";
import Button from "@/components/shared/Button";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();
  const handleClick = () => {
    alert("pressed")
  };
  return (
    <View>
      <Image
        source={require("../assets/images/login.png")}
        style={{ width: "100%", height: 440 }}
      />
      <View style={{ padding: 20 }}>
        <Text className="text-4xl font-bold text-center">
          Welcome to College Campus Guru
        </Text>
        <Text className="text-[17px] pt-5" style={{ color: Colors.GRAY }}>
          Your college campus update in your pocket, Stay update, Book for event
          , Join Clubs and Many More
        </Text>
        <Button text="Get Started" onPress={() => router.push("/(auth)/SignUp")} />
        <Pressable onPress={() => router.push("/(auth)/SignIn")}>
        <Text className="text-center text-gray-500 mt-5 text-[16px]">
          Already have an account? Login Here
        </Text>
        </Pressable>
      </View>
    </View>
  );
}
