import React from 'react';
import { View } from 'react-native';

const useStorybook = () => {
  const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';
  if (storybookEnabled) {
    const StorybookUI = require('../.storybook').default;
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  }

  return null;
};

export default useStorybook;
