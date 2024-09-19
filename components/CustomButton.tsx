// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  bgVariant?: 'primary' | 'secondary' | 'danger' | 'success';
  textVariant?: 'default' | 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, bgVariant = 'primary', textVariant = 'default' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[`${bgVariant}Button`]]}>
      <Text style={[styles.buttonText, styles[`${textVariant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 26,
    alignItems: 'center',
    width: '100%', // Make the button take up the full width of the container
    maxWidth: 400, // You can set a max width to control how wide it can get
  },
  primaryButton: {
    backgroundColor: '#0286FF', // Primary color
  },
  secondaryButton: {
    backgroundColor: '#6B7280', // Secondary color
  },
  dangerButton: {
    backgroundColor: '#EF4444', // Danger color
  },
  successButton: {
    backgroundColor: '#10B981', // Success color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  defaultText: {
    color: '#FFFFFF', // Default text color
  },
  primaryText: {
    color: '#FFFFFF', // Primary text color
  },
  secondaryText: {
    color: '#000000', // Secondary text color
  },
});

export default CustomButton;
