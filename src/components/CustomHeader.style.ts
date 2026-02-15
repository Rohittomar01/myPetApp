import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconButton: {
    marginRight: 10,
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cartWrapper: {
    padding: 5,
  },

  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
