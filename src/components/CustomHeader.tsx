import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useCartStore } from '../store/cartStore';
import colors from '../utils/Colors';
import { styles } from './CustomHeader.style';

interface Props {
  title: string;
  showBack?: boolean;
  showCart?: boolean;
  height?: number;
  containerStyle?: ViewStyle;
  gradientColors?: string[];
  badgeColor?: string;
  textColor?: string; // 👈 NEW
  badgeTextColor?: string; // 👈 Optional
}

export default function CustomHeader({
  title,
  showBack = false,
  showCart = true,
  height = 70,
  containerStyle,
  gradientColors = colors.primaryGradient,
  badgeColor = '#000',
  textColor = '#fff', // 👈 default white
  badgeTextColor = '#fff',
}: Props) {
  const navigation = useNavigation<any>();
  const cart = useCartStore(state => state.cart);

  return (
    <LinearGradient
      colors={gradientColors}
      style={[styles.gradient, { height }, containerStyle]}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          {/* LEFT SECTION */}
          <View style={styles.leftSection}>
            {showBack && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={22}
                  color={textColor} // 👈 dynamic
                />
              </TouchableOpacity>
            )}

            <Text
              style={[
                styles.title,
                {
                  fontSize: height > 120 ? 24 : 20,
                  color: textColor, // 👈 dynamic
                },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {title}
            </Text>
          </View>

          {/* CART SECTION WITH BADGE */}
          {showCart && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.cartWrapper}
            >
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={textColor} // 👈 dynamic
              />

              {cart.length > 0 && (
                <View style={[styles.badge, { backgroundColor: badgeColor }]}>
                  <Text style={[styles.badgeText, { color: badgeTextColor }]}>
                    {cart.length}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}
