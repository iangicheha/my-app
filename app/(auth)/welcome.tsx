import { onboarding } from "@/constants";
import { useRef, useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // Use this effect to handle automatic sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplayActive) {
      interval = setInterval(() => {
        if (swiperRef.current) {
          const newIndex = (activeIndex + 1) % onboarding.length;
          swiperRef.current.scrollBy(1, true);
        }
      }, 3000); // Adjust the interval as needed
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeIndex, isAutoplayActive]);

  // Handle user interaction with Swiper
  const handleTouchStart = () => {
    setIsAutoplayActive(false); // Pause autoplay when user interacts
  };

  const handleTouchEnd = () => {
    // Resume autoplay after a delay when user stops interacting
    setTimeout(() => {
      setIsAutoplayActive(true);
    }, 3000); // Resume after 3 seconds
  };

  // Handle button press
  const handleGetStartedPressIn = () => {
    setIsButtonPressed(true);
  };

  const handleGetStartedPressOut = () => {
    setIsButtonPressed(false);
    // Navigate to the next screen or handle action here
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-center bg-white">
      <Swiper
        ref={swiperRef}
        loop={false} // Disable loop to stop at the last slide
        dot={
          <View className="w-[8px] h-[8px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[8px] h-[8px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index); // Update active index on change
        }}
        showsPagination={true}
        autoplay={false} // Disable Swiper's built-in autoplay
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {onboarding.map((item, index) => (
          <View key={index} className="flex items-center justify-center w-full h-full">
            <Image
              source={item.image}
              style={{ width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute' }}
            />
            {/* Title at the top */}
            <View style={{ position: 'absolute', top: 60, paddingHorizontal: 20 }}>
              <Text className="text-2xl font-bold text-black text-center">
                {item.title}
              </Text>
            </View>
            {/* Description below the title */}
            <View style={{ position: 'absolute', bottom: 130, paddingHorizontal: 20 }}>
              <Text className="text-lg text-gray-700 text-center">
                {item.description}
              </Text>
            </View>
            {/* Get Started button on the last slide */}
            {index === onboarding.length - 1 && (
              <TouchableOpacity
                onPressIn={handleGetStartedPressIn} // Detect button press
                onPressOut={handleGetStartedPressOut} // Handle when the button is released
                className="absolute bottom-10 w-[80%] items-center"
                style={{
                  backgroundColor: isButtonPressed ? '#0056b3' : '#0286FF', // Darker blue when pressed
                  paddingVertical: 15,
                  borderRadius: 30, // More rounded corners
                  shadowColor: '#000', // Add shadow for a more fancy look
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  elevation: 8, // Elevation for Android devices
                }}
              >
                <Text className="text-white text-lg font-JakartaBold">
                  Get Started
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
