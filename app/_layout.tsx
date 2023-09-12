import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import useStorybook from 'hooks/useStorybook';
import AuthProvider from 'providers/AuthProvider';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'assets/css/global.css';
import '../i18n';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/(app)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const StorybookComponent = useStorybook();
  const [areFontLoaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (areFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontLoaded]);

  /**
   * Render the Storybook UI if the `EXPO_PUBLIC_STORYBOOK_ENABLED` environment
   */
  if (StorybookComponent) return StorybookComponent;
  /**
   * Render the splash screen until fonts are loaded.
   */
  if (!areFontLoaded) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </QueryClientProvider>
  );
}
