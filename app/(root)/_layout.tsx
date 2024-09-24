import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* You can add more screens here if needed */}
    </Stack>
  );
};

export default Layout;