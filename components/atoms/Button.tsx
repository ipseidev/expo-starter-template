// src/components/Button.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
};

export const MyButton: React.FC<MyButtonProps> = ({
  onPress,
  text,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.3 : 1 }]}
      className="bg-red-600"
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: { color: 'white' },
});
