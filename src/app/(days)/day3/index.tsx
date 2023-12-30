import { Button, StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
  # Markdown

  Integrate Markdown content in ***React Native***
`;

const DayDetailsScreen = () => {
  return (
    <View style={style.page}>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href="/day3/editor" asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;

const style = StyleSheet.create({
  page: { flex: 1 },
});
