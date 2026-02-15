import { StyleSheet } from 'react-native';
import colors from '../utils/Colors';

export const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 22,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },

  image: {
    height: 260,
    justifyContent: 'flex-end',
  },

  imageRadius: {
    borderRadius: 22,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
    borderRadius: 22,
  },

  content: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  breed: {
    color: '#eee',
    fontSize: 14,
  },

  price: {
    color: colors.price,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
});
