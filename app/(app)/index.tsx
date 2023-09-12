import { Link } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Pressable } from 'react-native';

import { useAuth } from '../../providers/AuthProvider';

const Index = () => {
  const { t } = useTranslation();
  const authContext = useAuth();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home from app</Text>
      <Text>{t('welcome')}</Text>
      <Pressable
        onPress={() => {
          authContext.logout();
        }}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Index;
