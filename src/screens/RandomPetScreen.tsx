import React, { useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Button, TextInput, Text, Card } from 'react-native-paper';
import { fetchRandomPetImage } from '../api/petApi';
import colors from '../utils/Colors';
import { styles } from './RandomPetScreen.style';
import CustomHeader from '../components/CustomHeader';

export default function RandomPetScreen() {
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    try {
      setLoading(true);
      const img = await fetchRandomPetImage(); // pass breed
      setImage(img);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomHeader
        title="Random Pet"
        showCart={false}
        gradientColors={['#fff', '#fff']}
        textColor="#000"
        containerStyle={{ elevation: 0, shadowOpacity: 0 }}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>🐶 Discover Random Dog</Text>

        {/* Search Input */}
        {/* <TextInput
        label="Search by Breed (optional)"
        value={breed}
        onChangeText={setBreed}
        mode="outlined"
        style={styles.input}
        outlineColor={colors.secondary}
        activeOutlineColor={colors.primary}
      /> */}

        {/* Fetch Button */}
        <Button
          mode="contained"
          onPress={fetchImage}
          style={styles.button}
          labelStyle={styles.buttonText}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Random Dog'}
        </Button>

        {/* Loading Indicator */}
        {loading && (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={{ marginTop: 20 }}
          />
        )}

        {/* Image Card */}
        {image && !loading && (
          <Card style={styles.card}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </Card>
        )}

        {!image && !loading && (
          <Text style={styles.emptyText}>
            Click button to discover a cute dog 🐾
          </Text>
        )}
      </ScrollView>
    </>
  );
}
