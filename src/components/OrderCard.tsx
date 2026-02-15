import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';
import styles from './OrderCard.style';

interface OrderCardProps {
  order: any;
}

export default function OrderCard({ order: pet }: OrderCardProps) {
  return (
    <Card style={styles.orderCard}>
      <Card.Content>
        {/* Order Header */}
        <View style={styles.orderHeader}>
          <Text style={styles.orderId}>Order #{pet.id}</Text>
          <Text style={styles.orderDate}>{pet.date}</Text>
        </View>

        <Divider style={{ marginVertical: 10 }} />

        {/* Pet Items */}
        {/* {order.items.map((pet: any) => ( */}
        <View key={pet.id} style={styles.petRow}>
          <Image source={{ uri: pet.image }} style={styles.petImage} />

          <View style={styles.petDetails}>
            <Text style={styles.petName}>{pet.name}</Text>

            <Text style={styles.petBreed}>Breed: {pet.breed}</Text>

            <Text style={styles.petPrice}>
              ₹ {pet.price} x {pet.quantity}
            </Text>
          </View>
        </View>
        {/* ))} */}

        <Divider style={{ marginVertical: 10 }} />

        {/* Total */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>₹ {pet.price}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}
