import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants"; // Ensure this path is correct

// Custom Tab Icon component with a dynamic color option
const TabIcon = ({ source, focused, color }: { source: ImageSourcePropType; focused: boolean; color?: string; }) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      width: 48,
      height: 48,
    }}
  >
    <Image
      source={source}
      style={{
        width: 28,
        height: 28,
        tintColor: focused ? (color ? color : "#007AFF") : "#B0BEC5", // Default blue, custom green for Nutrition
        resizeMode: "contain",
      }}
    />
  </View>
);

// Main Layout component for Tab Navigation
export default function Layout() {
  return (
    <Tabs
      initialRouteName="home" // Set the initial route to home
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#B0BEC5",
        tabBarShowLabel: false, // Hide labels to show only icons
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // Background for tab bar
          borderRadius: 0,
          marginHorizontal: 0,
          marginBottom: 0,
          height: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="Home" // Use lowercase for consistency with route names
        options={{
          title: "Home",
          headerShown: false, // Hide the header bar
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      
      {/* Metahuman Tab */}
      <Tabs.Screen
        name="metahuman"
        options={{
          title: "Metahuman",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.AI} focused={focused} />
          ),
        }}
      />
      
      {/* Nutrition Tab */}
      <Tabs.Screen
        name="Nutrition" // Use lowercase for consistency with route names
        options={{
          title: "Nutrition",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.nutrition} focused={focused} color="#28A745" /> // Green color for Nutrition
          ),
        }}
      />

      {/* Doctors Appointment Tab */}
      <Tabs.Screen
        name="DoctorsAppointment" // Use lowercase for consistency with route names
        options={{
          title: "Doctors Appointment",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.Ap} focused={focused} />
          ),
        }}
      />
      
      {/* Pharmacy Tab */}
      <Tabs.Screen
        name="pharmacy"
        options={{
          title: "Pharmacy",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.Pharmacy} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
