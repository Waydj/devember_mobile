import { Stack } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "Inter" }}>day1</Text>
    </View>
  );
};

export default index;
