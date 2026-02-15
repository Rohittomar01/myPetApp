import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  orderCard: {
    marginBottom: 15,
    borderRadius: 14,
    elevation: 4,
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
    width: 75,
    height: 75,
    borderRadius: 12,
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
    marginVertical: 3,
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

export default styles;
