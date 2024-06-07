import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import EyeIcon from "react-native-vector-icons/FontAwesome";
import EmailIcon from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/AntDesign";
import { Link } from "expo-router";
import { useAuthStore } from "@/store";
import AppButton from "@/components/button/Button";
import { validationRules } from "@/utils";
import AppTextInput from "@/components/textinput/TextInput";

const SignUpScreen = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);
  const [otp, setOtp] = useState("");
  const otpRef = useRef(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const { name, email, password } = formData;
    setEmail(email);
    try {
      setLoading(true);
      setToken('123')
    } catch (err) {
      setLoading(false);
      console.log("Error during sign-up:", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-600">
      <ScrollView bounces={false} keyboardShouldPersistTaps="handled">
      <View className="w-[70%] mt-20 self-center items-center">
          <Text className="text-3xl text-center text-appText dark:text-bgWhite">
            Welcome to Template
          </Text>
        </View>
          <View>
            <View className="w-full items-center mt-2">
              <AppTextInput
                name="name"
                control={control}
                placeholder="Enter your name"
                placeholderTextColor={'black'}
                leftIcon={<Icon name={"user"} size={20} />}
                rules={{ required: "Name is required" }}
                error={errors.name?.message?.toString()}
              />

              <AppTextInput
                name="email"
                control={control}
                maxLength={30}
                placeholder="Enter your email"
                placeholderTextColor={'black'}
                autoCapitalize="none"
                keyboardType="email-address"
                rules={validationRules.email}
                error={errors.email?.message?.toString()}
                leftIcon={<EmailIcon name={"email"} size={20} />}
              />

              <AppTextInput
                name="password"
                control={control}
                placeholder="Enter your password"
                maxLength={26}
                placeholderTextColor={'black'}
                secureTextEntry={!passwordVisible}
                leftIcon={<Icon name={"lock"} size={20} />}
                rightIcon={
                  <EyeIcon
                    name={!passwordVisible ? "eye-slash" : "eye"}
                    size={20}
                  />
                }
                onRightIconPress={() => setPasswordVisible(!passwordVisible)}
                rules={validationRules.password}
                error={errors.password?.message?.toString()}
              />
            </View>
            <View className={"w-full self-center item-center "}>
              <AppButton
                title="Sign Up"
                buttonStyle={
                  "w-5/6 my-2 rounded-lg h-10 self-center dark:bg-appText"
                }
                textStyle={"text-sm font-bold"}
                onPress={handleSubmit(onSubmit)}
                loading={loading}
              />
            </View>
          </View>
      </ScrollView>
        <View className="flex-row items-center self-center justify-center mt-4 w-full mb-4">
          <Text className="text-gray-500 font-semibold dark:text-white text-md">
            Don't have an account?
          </Text>
          <Link href={"/login"} className="ml-2">
            <Text className="text-black text-lg font-semibold ml-4 dark:text-white">
              Login
            </Text>
          </Link>
        </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
