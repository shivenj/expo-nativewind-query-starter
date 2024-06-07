import React from "react";
import {
  Pressable,
  Text,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface CustomButtonProps extends PressableProps {
  title?: string;
  buttonStyle?: string;
  textStyle?: string;
  loading?: boolean;
}

const AppButton: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  loading,
  ...pressableProps
}) => {
  return (
    <Pressable
      {...pressableProps}
      className={`py-2 px-4 rounded-md items-center justify-center bg-gray-900 w-[90%] ${buttonStyle}`}
      disabled={loading}
    >
        <Text className={`text-lg text-white ${textStyle}`}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;
