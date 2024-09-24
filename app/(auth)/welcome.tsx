import { onboarding } from "@/constants";
import { useRef, useState, useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton"; // Import CustomButton
import { useRouter } from 'expo-router'; // Import useRouter

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const router = useRouter(); // Use router hook

  // Automatic sliding logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplayActive) {
      interval = setInterval(() => {
        if (swiperRef.current) {
          swiperRef.current.scrollBy(1, true);
        }
      }, 3000); // Adjust the interval for auto-sliding
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isAutoplayActive]);

  // Handle user interaction with Swiper
  const handleTouchStart = () => setIsAutoplayActive(false);
  const handleTouchEnd = () => setTimeout(() => setIsAutoplayActive(true), 3000);

  // Handle button presses
  const handleGetStartedPress = () => {
    router.replace('/(auth)/sign-up'); // Navigate to sign-up page
  };

  const handleLogInPress = () => {
    router.replace('/(auth)/sign-in'); // Navigate to sign-in page
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={activeIndex !== onboarding.length - 1 && (
          <View style={styles.dot} />
        )}
        activeDot={activeIndex !== onboarding.length - 1 && (
          <View style={styles.activeDot} />
        )}
        onIndexChanged={setActiveIndex}
        showsPagination={activeIndex !== onboarding.length - 1} // Hide dots on last slide
        autoplay={false}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {onboarding.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            {/* Display Get Started and Log In buttons only on the last slide */}
            {index === onboarding.length - 1 && (
              <View style={styles.buttonContainer}>
                <CustomButton
                  title="Get Started"
                  bgVariant="primary"
                  textVariant="primary"
                  onPress={handleGetStartedPress}
                />
                <View style={styles.logInContainer}>
                  <CustomButton
                    title="Log In"
                    bgVariant="secondary"
                    textVariant="primary"
                    onPress={handleLogInPress} // Handle Log In press
                  />
                </View>
              </View>
            )}
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
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  titleContainer: {
    position: 'absolute',
    top: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 130,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 28,
    width: '80%',
    alignItems: 'center',
  },
  logInContainer: {
    marginTop: 20,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 1,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    marginHorizontal: 1,
    backgroundColor: '#0286FF',
    borderRadius: 4,
  },
});

export default Onboarding;
