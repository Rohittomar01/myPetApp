import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PetListScreen from '../screens/PetListScreen';
import AddPetScreen from '../screens/AddPetScreen';
import CartScreen from '../screens/CartScreen';
import RandomPetScreen from '../screens/RandomPetScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 🐾 Pet Stack
function PetStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// 🔥 Bottom Tabs With Safe Area Insets
function BottomTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#4cc0b9',

        tabBarStyle: {
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 5,
          borderTopWidth: 1,
          backgroundColor: '#fff',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'Pets') iconName = 'paw';
          else if (route.name === 'Add Pet') iconName = 'plus-circle';
          else if (route.name === 'Random') iconName = 'dog';
          else if (route.name === 'Orders') iconName = 'clipboard-list';

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Pets" component={PetStack} />
      <Tab.Screen name="Add Pet" component={AddPetScreen} />
      <Tab.Screen name="Random" component={RandomPetScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}

// 🚀 Root Stack
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
