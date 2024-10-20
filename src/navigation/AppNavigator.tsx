import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import StartScreen from '../screens/StartScreen';
import Order from '../screens/Detail/Order';
import DetailExample from '../screens/Detail/DetailExample';
import petshop from '../screens/TabScreen/Home';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={petshop} />
        <Stack.Screen name="DetailExample" component={DetailExample} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Order" component={Order} options={{
          headerShown: false,
        }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
