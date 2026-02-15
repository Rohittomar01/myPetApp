import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-paper';
import { useOrderStore } from '../store/orderStore';
import CustomHeader from '../components/CustomHeader';

export default function OrdersScreen() {
  const { orders } = useOrderStore();

  return (
    <>
      <CustomHeader
        title="Orders"
        showCart={false}
        gradientColors={['#fff', '#fff']}
        textColor="#000"
        containerStyle={{ elevation: 0, shadowOpacity: 0 }}
      />

      <View style={styles.container}>
        <FlatList
          data={orders}
          keyExtractor={(item: any) => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No orders placed yet.</Text>
          }
          renderItem={({ item }: any) => (
            <Card style={styles.orderCard}>
              <Card.Content>
                {/* Order Header */}
                <View style={styles.orderHeader}>
                  <Text style={styles.orderId}>Order #{item.id}</Text>
                  <Text style={styles.orderDate}>{item.date}</Text>
                </View>

                <Divider style={{ marginVertical: 10 }} />

                {/* Pets List */}
                {item.items.map((pet: any) => (
                  <View key={pet.id} style={styles.petRow}>
                    <Image
                      source={{ uri: pet.image }}
                      style={styles.petImage}
                    />

                    <View style={styles.petDetails}>
                      <Text style={styles.petName}>{pet.name}</Text>

                      <Text style={styles.petBreed}>Breed: {pet.breed}</Text>

                      <Text style={styles.petPrice}>
                        ₹ {pet.price} x {pet.quantity}
                      </Text>
                    </View>
                  </View>
                ))}

                <Divider style={{ marginVertical: 10 }} />

                {/* Order Total */}
                <View style={styles.totalRow}>
                  <Text style={styles.totalText}>Total</Text>
                  <Text style={styles.totalAmount}>₹ {item.total}</Text>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f6fa',
  },

  header: {
    marginBottom: 15,
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: 'gray',
  },

  orderCard: {
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#fff',
  },

  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderId: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  orderDate: {
    color: 'gray',
    fontSize: 13,
  },

  petRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  petImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },

  petDetails: {
    flex: 1,
    justifyContent: 'center',
  },

  petName: {
    fontSize: 16,
    fontWeight: '600',
  },

  petBreed: {
    color: 'gray',
    fontSize: 13,
    marginVertical: 2,
  },

  petPrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },

  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4cc0b9',
  },
});
