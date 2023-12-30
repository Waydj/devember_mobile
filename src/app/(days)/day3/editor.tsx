import { Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const defaultContent = `
# Markdown editor

Hello ***world!***
`;

const EditorScreen = () => {
  const [content, setContent] = useState(defaultContent);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "Editor" }} />
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            { backgroundColor: tab === "edit" ? "#A0E9FF" : "white" },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            { backgroundColor: tab === "preview" ? "#A0E9FF" : "white" },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {tab === "edit" ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
  },
  tabText: {
    fontWeight: "600",
    fontFamily: "Inter",
  },
});
