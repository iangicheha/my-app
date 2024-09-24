import React, { useState, useEffect } from "react";
import { Text, View, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const conditions = require('@/constants/conditions').conditions; 
const conditionDetails = require('@/constants/conditions').conditionDetails;

interface NutritionProps {
  selectedCondition: string; 
}

const Nutrition: React.FC<NutritionProps> = ({ selectedCondition }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCondition, setExpandedCondition] = useState<string | null>(null);
  const [displayedConditions, setDisplayedConditions] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter(); // Use router for navigation

  useEffect(() => {
    const updatedConditions: string[] = [selectedCondition, ...conditions.filter((condition: string) => condition !== selectedCondition)];
    setDisplayedConditions(updatedConditions);
  }, [selectedCondition]);

  const handleConditionPress = (condition: string) => {
    setExpandedCondition(expandedCondition === condition ? null : condition);
  };

  const toggleFavorite = (condition: string): void => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.includes(condition);
      if (isFavorite) {
        return prevFavorites.filter((fav: string) => fav !== condition);
      } else {
        const updatedFavorites = [...prevFavorites, condition];
        setDisplayedConditions(prevConditions => {
          const filteredConditions = prevConditions.filter((item: string) => item !== condition);
          return [condition, ...filteredConditions];
        });
        return updatedFavorites;
      }
    });
  };

  const filteredConditions = displayedConditions.filter((condition: string) =>
    condition && condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nutrition</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search conditions..."
          placeholderTextColor="#B0BEC5"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={filteredConditions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => handleConditionPress(item)} style={styles.conditionItem}>
              <Text style={styles.conditionText}>{item}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(item)}>
                <MaterialIcons 
                  name={favorites.includes(item) ? "star" : "star-outline"} 
                  size={24} 
                  color={favorites.includes(item) ? "gold" : "#B0BEC5"} 
                  style={styles.starIcon} 
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {expandedCondition === item && (
              <View style={styles.expandedDetails}>
                {conditionDetails[item] && (
                  <Text style={styles.detailText}>
                    {conditionDetails[item].description}
                  </Text>
                )}
                <TouchableOpacity 
                  style={styles.mealPlanButton} 
                  onPress={() => router.replace(`/MealPlan?condition=${item}`)} // Pass the selected condition
                >
                  <Text style={styles.mealPlanText}>Meal Plan</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28A745",
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#FFFFFF",
  },
  conditionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#B0BEC5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  conditionText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  starIcon: {
    marginLeft: 10,
  },
  expandedDetails: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginTop: 5,
  },
  detailText: {
    color: "#000000",
  },
  mealPlanButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 5,
    alignItems: "center",
  },
  mealPlanText: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default Nutrition;
