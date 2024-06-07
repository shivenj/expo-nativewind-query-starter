import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputProps,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import Animated, {
  BounceInLeft,
  BounceOutLeft,
} from "react-native-reanimated";

interface CustomTextInputProps extends TextInputProps {
  name: string;
  control?: Control<FieldValues>;
  placeholder?: string;
  placeholderTextColor?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  rules?: object;
  error?: string;
}

const AppTextInput: React.FC<CustomTextInputProps> = ({
  name,
  control,
  placeholder,
  placeholderTextColor,
  rightIcon,
  onRightIconPress,
  rules,
  leftIcon,
  error,
  ...textInputProps
}) => {
  return (
    <>
      <View className="flex-row items-center border border-gray-300 rounded-lg mb-5 w-[90%]">
        {leftIcon && (
          <View className="w-[14%] bg-gray-300 items-center justify-center h-11 rounded-l-lg">
            {leftIcon}
          </View>
        )}
        <View className="w-[85%] items-center justify-center h-11">
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                className="flex-1 h-10 w-full ml-5 text-black dark:text-white"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                {...textInputProps}
              />
            )}
          />
          {rightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              className="absolute right-2"
            >
              {rightIcon}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error ? (
        <Animated.View
          entering={BounceInLeft}
          exiting={BounceOutLeft}
          className="w-[90%] self-center mb-2.5"
        >
          <Text className="text-sm text-red-500 mt-[-2%] self-start w-[90%]">
            {error}
          </Text>
        </Animated.View>
      ) : (
        <Text></Text>
      )}
    </>
  );
};

export default AppTextInput;
