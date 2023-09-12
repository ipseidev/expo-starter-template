import { Redirect, Stack } from 'expo-router';
import { useAuth } from 'providers/AuthProvider';
import { Text, View } from 'react-native';

export default function AppLayout() {
  const { loading, user, initialized } = useAuth();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (loading || !initialized) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(app)" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    />
  );
}
