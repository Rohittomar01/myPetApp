import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';
import { styles } from './PetCard.style';
export default function PetCard({ item }: any) {
  const cart = useCartStore(state => state.cart);
  const addToCart = useCartStore(state => state.addToCart);

  const isAdded = cart.some((cartItem: any) => cartItem.id === item.id);

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.breed}>{item.breed}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>

          <Button
            mode="contained"
            onPress={() => !isAdded && addToCart(item)}
            style={[
              styles.button,
              { backgroundColor: isAdded ? '#999' : '#4cc0b9' },
            ]}
            disabled={isAdded}
          >
            {isAdded ? 'Added ✓' : 'Adopt Now 🐾'}
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
