import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '@/components/CustomButton'; // Import CustomButton

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // Function to handle image picking
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  // Function to handle form submission
  const handleSave = () => {
    // You can add your save logic here
    Alert.alert('Profile Updated', 'Your profile has been updated successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePicContainer}>
        {profilePic ? (
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        ) : (
          <View style={styles.defaultPicContainer}>
            <Text style={styles.defaultPicText}>Add Picture</Text>
          </View>
        )}
        <TouchableOpacity style={styles.editPicButton} onPress={pickImage}>
          <Text style={styles.editPicButtonText}>📷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CustomButton
          title="Save Changes"
          onPress={handleSave}
          bgVariant="primary"
          textVariant="primary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Light gray background
    padding: 20,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#0286FF', // Primary color border
    backgroundColor: '#E2E8F0', // Light gray background for empty state
  },
  defaultPicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E2E8F0', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultPicText: {
    fontSize: 18,
    color: '#B0BEC5', // Grayish color
  },
  editPicButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0286FF', // Primary color for the button
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPicButtonText: {
    fontSize: 24,
    color: '#FFFFFF', // White color for the button icon
  },
  form: {
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default Profile;
