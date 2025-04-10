import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/data/Colors";

type ButtonProps = {
text: String;
onPress: () => void;
}


export default function Button({text , onPress}: ButtonProps) {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{ padding: 20, backgroundColor: Colors.PRIMARY }}
      className="mt-5 rounded-lg"
    >
      <Text className="text-white text-[18px] text-center">{text}</Text>
    </TouchableOpacity>
  );
}
