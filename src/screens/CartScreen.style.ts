import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    marginBottom: 12,
    borderRadius: 16,
    elevation: 3,
  },

  cardContent: {
    paddingVertical: 12,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  petName: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  emptySub: {
    marginTop: 6,
    color: '#888',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },

  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  checkoutBtn: {
    borderRadius: 30,
    paddingVertical: 6,
    backgroundColor: '#4cc0b9',
  },
});
