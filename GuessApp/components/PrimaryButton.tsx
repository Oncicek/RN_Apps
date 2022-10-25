import { FC, ReactNode } from "react";
import { View, Text } from "react-native";

interface PrimaryButtonProps {
  children?: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
