import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

const MealPlan: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Plan</Text>
      {/* Add more details about the meal plan here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MealPlan;