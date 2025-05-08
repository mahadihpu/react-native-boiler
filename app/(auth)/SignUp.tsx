import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@/data/Colors";
import TextInputField from "@/components/shared/TextInputField";
import Button from "@/components/shared/Button";
import * as ImagePicker from "expo-image-picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import {upload} from "cloudinary-react-native"
import { cld, options } from "@/configs/CloudinaryConfig";
import axios from "axios"
import { useRouter } from "expo-router";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const auth = getAuth();
const db = getFirestore();


export default function SignUp() {
  const [profileImage, setProfileImage] = useState<string | undefined>("");
  const [fullName, setFullName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const router = useRouter()
  const onBtnPress = () => {
    if(!email || !password || !fullName){
      ToastAndroid.show("Please add all details", ToastAndroid.BOTTOM)
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCreds) => {
      console.log(userCreds)
      //upload profile image
      await upload(cld, {file: profileImage, options: options, callback: async (error: any, response: any) => {
        if(error){
          console.log(error)
        }
        if(response){
          router.push("/landing")
        }
    }})
      //save to database
    })
    .catch(error => {
      const errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.CENTER)
    })
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ paddingTop: 60, padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Create New Account
      </Text>
      <View style={{ display: "flex", alignItems: "center" }}>
        <View>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 99,
                marginTop: 20,
              }}
            />
          ) : (
            <TouchableOpacity onPress={() => pickImage()}>
              <Image
                source={require("../../assets/images/profile.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 99,
                  marginTop: 20,
                }}
              />
              <AntDesign
                name="camera"
                size={24}
                color={Colors.PRIMARY}
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TextInputField label="Full Name" onChangeText={(v) => setFullName(v)} />
      <TextInputField label="College Email" onChangeText={(v) => setEmail(v)} />
      <TextInputField
        label="Password"
        onChangeText={(v) => setPassword(v)}
        password={true}
      />
      <Button text="Create Account" onPress={() => onBtnPress()} />
    </View>
  );
}
