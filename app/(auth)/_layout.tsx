import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      {/* Ensure the name here matches your route's file name */}
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout;