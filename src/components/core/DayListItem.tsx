import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type TDay = {
  day: number;
};

export const DayListItem = ({ day }: TDay) => {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#FAEED1",
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00A9FF",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15,
  },
  text: {
    color: "#00A9FF",
    fontSize: 50,
    fontFamily: "Inter",
  },
});
