import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator />;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#A0E9FF" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
}
