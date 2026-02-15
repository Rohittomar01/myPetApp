import { StyleSheet } from 'react-native';
import colors from '../utils/Colors';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flexGrow: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.textPrimary,
  },

  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingVertical: 6,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },

  card: {
    marginTop: 25,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
  },

  image: {
    height: 300,
    width: '100%',
  },

  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 14,
  },
});
