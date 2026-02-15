import React from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-paper';
import { useCartStore } from '../store/cartStore';
import { styles } from './CartScreen.style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import { useOrderStore } from '../store/orderStore';

export default function CartScreen() {
  const { cart, removeFromCart, getTotal, clearCart } = useCartStore();
  const navigation = useNavigation<any>();
  const { addOrder } = useOrderStore();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      Alert.alert('Cart is empty');
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: getTotal(),
      date: new Date().toLocaleString(),
    };

    addOrder(order);
    clearCart(); // 👈 CLEAR HERE

    Alert.alert('Success', 'Order placed successfully!');
    navigation.navigate('MainTabs', {
      screen: 'Orders',
    });
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.price}>₹ {item.price}</Text>
          </View>

          <Button
            mode="text"
            textColor="#FF3B30"
            onPress={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <>
      <CustomHeader
        title="My Cart"
        showCart={false}
        showBack
        gradientColors={['#fff', '#fff']}
        textColor="#000"
        containerStyle={{ elevation: 0, shadowOpacity: 0 }}
      />
      <View style={styles.container}>
        {cart.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Your cart is empty 🛒</Text>
            <Text style={styles.emptySub}>
              Add some lovely pets to continue
            </Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 120 }}
            />

            {/* Bottom Total Section */}
            <View style={styles.bottomContainer}>
              <Divider />

              <View style={styles.totalRow}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalAmount}>₹ {getTotal()}</Text>
              </View>

              <Button
                onPress={handlePlaceOrder}
                mode="contained"
                style={styles.checkoutBtn}
                labelStyle={{ fontWeight: 'bold' }}
              >
                Place Order
              </Button>
            </View>
          </>
        )}
      </View>
    </>
  );
}
