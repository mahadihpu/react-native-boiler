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
      style={{ padding: 20, backgroundColor: Colors.PRIMARY, borderRadius: 10 }}
      className="mt-5"
    >
      <Text className="text-white text-[18px] text-center" style={{color: "white", fontSize: 18}}>{text}</Text>
    </TouchableOpacity>
  );
}
