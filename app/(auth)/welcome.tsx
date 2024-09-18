import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboard = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        style={styles.skipButton}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slideContainer}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain" // Adjust to fit within the specified dimensions
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  skipButton: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 15,
  },
  skipText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 393,   // Fixed width
    height: 850,  // Fixed height
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions without distortion
  },
  title: {
    position: 'absolute',
    bottom: 60,  // Adjust text position
    fontSize: 24,
    color: '#000',  // Text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 1,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 1,
    backgroundColor: '#0286FF',
    borderRadius: 2,
  },
});

export default Onboard;
