import { onboarding } from "@/constants";
import { useRef, useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
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
      }, 3000); // Adjust the interval
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [activeIndex, isAutoplayActive]);

  // Handle user interaction with Swiper
  const handleTouchStart = () => setIsAutoplayActive(false);
  const handleTouchEnd = () => setTimeout(() => setIsAutoplayActive(true), 3000);

  // Handle button press
  const handleGetStartedPress = () => {
    router.replace('/(auth)/sign-up'); // Use the correct path format
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={{ width: 8, height: 8, marginHorizontal: 1, backgroundColor: '#E2E8F0', borderRadius: 4 }} />}
        activeDot={<View style={{ width: 8, height: 8, marginHorizontal: 1, backgroundColor: '#0286FF', borderRadius: 4 }} />}
        onIndexChanged={setActiveIndex}
        showsPagination={true}
        autoplay={false}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {onboarding.map((item, index) => (
          <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Image
              source={item.image}
              style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute' }}
            />
            <View style={{ position: 'absolute', top: 60, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                {item.title}
              </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 130, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 18, color: 'gray', textAlign: 'center' }}>
                {item.description}
              </Text>
            </View>
            {/* Get Started button on the last slide */}
            {index === onboarding.length - 1 && (
              <View style={{ position: 'absolute', bottom: 20, width: '80%', alignItems: 'center' }}>
                <CustomButton
                  title="Get Started"
                  bgVariant="primary"
                  textVariant="primary"
                  onPress={handleGetStartedPress} // Pass the handle function here
                />
              </View>
            )}
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
