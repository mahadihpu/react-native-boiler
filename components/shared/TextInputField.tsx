import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/data/Colors";

type TextInputFieldProps = {
  label: string;
  onChangeText: (text: string) => void;
  password?: boolean;
};

export default function TextInputField({
  label,
  onChangeText,
  password = false,
}: TextInputFieldProps) {
  return (
    <View className="mt-5">
      <Text style={{ color: Colors.GRAY }}>{label}</Text>
      <TextInput
        placeholder={label}
        onChangeText={onChangeText}
        style={Styles.textInput}
        secureTextEntry={password}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 17,
  },
});
