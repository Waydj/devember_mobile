import { StyleSheet, Text, View } from "react-native";

type TDay = {
  day: number;
};

export const DayListItem = ({ day }: TDay) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
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
