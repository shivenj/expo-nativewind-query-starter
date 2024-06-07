import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import EyeIcon from "react-native-vector-icons/FontAwesome";
import EmailIcon from "react-native-vector-icons/Fontisto";
import LockIcon from "react-native-vector-icons/AntDesign";
import { Link } from "expo-router";
import { useAuthStore } from "@/store";
import AppButton from "@/components/button/Button";
import AppTextInput from "@/components/textinput/TextInput";
import { validationRules } from "@/utils";
import { useLogin } from "@/hooks";
const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);
  const methods = useForm();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const login = useLogin();

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const { email, password } = formData;
    try {
      login.mutate({email, password}, {
        onSuccess:((res) => {
          setToken(res?.token)
        }),
        onError: ((err) => {
          console.log({err})
        })
      })
      setLoading(true);
      setToken("123")
      setLoading(false);
      reset();
    } catch (err) {
      setLoading(false);
      console.log("Error during login:", err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-600">
      <ScrollView bounces={false} keyboardShouldPersistTaps={"handled"}>
        <View className="w-[70%] mt-20 self-center items-center">
          <Text className="text-3xl text-center text-appText dark:text-bgWhite">
            Welcome to the template
          </Text>
        </View>
          <FormProvider {...methods}>
            <View className="w-full items-center mt-20">
              <AppTextInput
                name="email"
                control={control}
                placeholder="Enter your email"
                placeholderTextColor={'black'}
                autoCapitalize="none"
                keyboardType="email-address"
                rules={validationRules.email}
                maxLength={30}
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
                leftIcon={<LockIcon name={"lock"} size={20} />}
                rightIcon={
                  <EyeIcon
                    name={!passwordVisible ? "eye-slash" : "eye"}
                    size={20}
                  />
                }
                onRightIconPress={() => setPasswordVisible(!passwordVisible)}
                rules={{ required: "Password is required" }}
                error={errors.password?.message?.toString()}
              />
            </View>
            <View className="w-full items-center">
              <AppButton
                title="Login"
                buttonStyle={
                  "w-[90%] my-2 rounded-lg h-10 self-center dark:bg-appText"
                }
                textStyle={"text-sm font-bold"}
                onPress={handleSubmit(onSubmit)}
                loading={loading}
              />
              <View className="w-3/4 items-center mt-6">
                <Link href={"/forgotPassword"}>
                  <Text className={"text-appText text-md mx-1 dark:text-white font-semibold"}>
                    Forgot password?
                  </Text>
                </Link>
              </View>
            </View>
          </FormProvider>
      </ScrollView>
        <View className="flex-row items-center self-center justify-center mt-4 w-full mb-4">
          <Text className="text-gray-500 font-semibold dark:text-white text-md">
            Don't have an account?
          </Text>
          <Link href={"/signup/"} className="ml-2">
            <Text className="text-black text-lg font-semibold ml-4 dark:text-white">
              Sign up
            </Text>
          </Link>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;