import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Toast from 'react-native-toast-message';

import { petSchema, PetFormData } from '../utils/validation';
import { submitPet } from '../api/petApi';
import { usePetStore } from '../store/petStores';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ImageUploader from '../components/ImageUploader';
import colors from '../utils/Colors';
import CustomHeader from '../components/CustomHeader';

export default function AddPetScreen() {
  const addPet = usePetStore(state => state.addPet);

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // ✅ add this
  } = useForm<PetFormData>({
    resolver: zodResolver(petSchema),
  });

  const onSubmit = async (data: PetFormData) => {
    if (!image) {
      Toast.show({
        type: 'error',
        text1: 'Please upload an image of the pet',
      });
      return;
    }

    try {
      setLoading(true);

      // const response = await submitPet(data);
      // console.log('Response from API:', response);

      const newPet = {
        id: new Date().getTime().toString(),
        name: data.name,
        breed: data.breed,
        age: data.age,
        price: Number(data.price),
        image,
      };

      addPet(newPet);

      Toast.show({
        type: 'success',
        text1: 'Pet Added Successfully',
      });

      // Optionally clear form
      setImage('');
    } catch (error) {
      console.log('Error submitting pet:', error);
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <>
      <CustomHeader
        title="Add New Pet"
        showCart={false}
        gradientColors={['#fff', '#fff']}
        textColor="#000"
        containerStyle={{ elevation: 0, shadowOpacity: 0 }}
      />

      <ScrollView
        contentContainerStyle={{
          padding: 20,
          backgroundColor: colors.background,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Card
          style={{
            padding: 22,
            borderRadius: 22,
            backgroundColor: colors.cardBackground,
            elevation: 8,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
          }}
        >
          <Text
            variant="headlineSmall"
            style={{
              marginBottom: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              color: colors.textPrimary,
            }}
          >
            🐾 Add New Pet
          </Text>

          {/* Image Upload */}
          <ImageUploader onSelect={setImage} />

          <View style={{ marginTop: 15 }}>
            {/* Pet Name */}
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <>
                  <CustomInput
                    label="Pet Name"
                    value={field.value}
                    onChangeText={field.onChange}
                    error={!!errors.name as any}
                  />
                  {errors.name && (
                    <Text style={{ color: 'red', fontSize: 12 }}>
                      {errors.name.message}
                    </Text>
                  )}
                </>
              )}
            />

            {/* Breed */}
            <Controller
              control={control}
              name="breed"
              render={({ field }) => (
                <>
                  <CustomInput
                    label="Breed"
                    value={field.value}
                    onChangeText={field.onChange}
                    error={!!errors.breed as any}
                  />
                  {errors.breed && (
                    <Text style={{ color: 'red', fontSize: 12 }}>
                      {errors.breed.message}
                    </Text>
                  )}
                </>
              )}
            />

            {/* Age */}
            <Controller
              control={control}
              name="age"
              render={({ field }) => (
                <>
                  <CustomInput
                    label="Age"
                    value={field.value}
                    onChangeText={field.onChange}
                    error={!!errors.age as any}
                    keyboardType="numeric"
                  />
                  {errors.age && (
                    <Text style={{ color: 'red', fontSize: 12 }}>
                      {errors.age.message}
                    </Text>
                  )}
                </>
              )}
            />

            {/* Price */}
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <>
                  <CustomInput
                    label="Price"
                    value={field.value}
                    onChangeText={field.onChange}
                    keyboardType="numeric"
                    error={!!errors.price as any}
                  />
                  {errors.price && (
                    <Text style={{ color: 'red', fontSize: 12 }}>
                      {errors.price.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>

          {/* Submit Button */}
          <CustomButton
            title={loading ? 'Submitting...' : 'Add Pet 🐶'}
            onPress={handleSubmit(onSubmit)}
            style={{
              marginTop: 25,
              backgroundColor: colors.primary,
              borderRadius: 30,
              paddingVertical: 12,
            }}
            disabled={loading}
          />
        </Card>
      </ScrollView>
    </>
  );
}
