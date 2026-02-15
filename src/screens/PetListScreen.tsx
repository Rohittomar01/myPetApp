import React from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import PetCard from '../components/PetCard';
import { usePetStore } from '../store/petStores';
import CustomHeader from '../components/CustomHeader';

export default function PetListScreen() {
  const pets = usePetStore(state => state?.pets);

  return (
    <>
      <CustomHeader
        title="Hello,Dear Adopter!"
        containerStyle={{
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      />
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: '#fff' }}>
        <FlatList
          data={pets}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <Text
              variant="headlineMedium"
              style={{ marginBottom: 15, fontWeight: 'bold', marginTop: 20 }}
            >
              Available Pets
            </Text>
          }
          renderItem={({ item }) => <PetCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
