import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, { FadeInRight } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome #Devember",
    description: `Daily React Native projects during December`,
  },
  {
    icon: "book",
    title: "Learn and grow together",
    description: `Learn by building 24 projects with React Native and Expo`,
  },
  {
    icon: "fire",
    title: "Educations",
    description: `You are Perfect`,
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const composed = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
  );

  return (
    <SafeAreaProvider style={styles.page}>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      <GestureDetector gesture={composed}>
        <View style={styles.pageContent} key={screenIndex}>
          <View style={styles.stepIndicatorContainer}>
            {onboardingSteps.map((step, index) => (
              <View
                key={step.title}
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index === screenIndex ? "#CEF202" : "gray",
                  },
                ]}
              />
            ))}
          </View>
          <Animated.View entering={FadeInRight}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text entering={FadeInRight} style={styles.title}>
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={FadeInRight.delay(200)}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonsText}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonsText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  stepIndicator: {
    flex: 1,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  image: {
    alignSelf: "center",
    margin: 30,
    marginTop: 100,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 24,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonsText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Inter",
    padding: 15,
    paddingHorizontal: 25,
  },
});
