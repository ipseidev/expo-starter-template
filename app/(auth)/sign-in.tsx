import { useAuth } from 'providers/AuthProvider';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

const SignIn = () => {
  const authContext = useAuth();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>SignIn</Text>
      <Pressable
        onPress={() => {
          authContext.login();
        }}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
