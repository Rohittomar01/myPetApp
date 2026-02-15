import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';
import { useOrderStore } from '../store/orderStore';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutScreen() {
  const navigation = useNavigation<any>();
  const { cart } = useCartStore();
  const { addOrder } = useOrderStore();

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Alert.alert('Cart is empty');
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    addOrder(order);

    Alert.alert('Success', 'Order placed successfully!');
    navigation.navigate('Orders');
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text variant="headlineMedium" style={{ marginBottom: 15 }}>
        Checkout
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleMedium">{item.name}</Text>
              <Text>₹ {item.price}</Text>
              <Text>Qty: {item.quantity}</Text>
            </Card.Content>
          </Card>
        )}
      />

      <Divider style={{ marginVertical: 15 }} />

      <Text variant="titleLarge">Total: ₹ {total}</Text>

      <Button
        mode="contained"
        style={{ marginTop: 20 }}
        onPress={handlePlaceOrder}
      >
        Place Order
      </Button>
    </View>
  );
}
