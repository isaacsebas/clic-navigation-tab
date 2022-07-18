import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function LaptopScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Laptop!</Text>
      </View>
    );
  }
  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }

  function HeartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Heart!</Text>
      </View>
    );
  }

  function CartScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cart!</Text>
      </View>
    );
  }
  function  CirclesSreens() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>add-circle!</Text>
      </View>
    );
  }
  function  PersonScreens() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Person!</Text>
      </View>
    );
  }
  

  
  

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
      <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if(route.name=='laptop'){
                iconName = focused ? 'laptop' : 'laptop-outline';
        }else if(route.name=='Search'){
                iconName = focused ? 'search' : 'search-outline';
            }else if(route.name=='heart'){
                iconName = focused ? 'heart' : 'heart-outline';
            }else if(route.name=='cart'){
              iconName = focused ? 'cart' : 'cart-outline';
            }else if(route.name=='add-circle'){
              iconName = focused ? 'add-circle' : 'add-circle-outline';
           
            }else if(route.name=='person'){
                iconName = focused ? 'person' : 'person-outline';
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#02CCFF',
          tabBarInactiveTintColor: 'black',
        })}
        >
             
        <Tab.Screen name="laptop" component={LaptopScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
   
        <Tab.Screen name="heart" component={HeartScreen} />
        <Tab.Screen name="cart" component={CartScreen} />
        <Tab.Screen name="add-circle" component={CirclesSreens} />
        <Tab.Screen name="person" component={PersonScreens} />
      
      </Tab.Navigator>
   
  );
}