import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.page}>
      <Markdown>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
});
