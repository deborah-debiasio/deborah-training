
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Exercise1Screen from '../screens/Exercise1Screen';
import Exercise2Screen from '../screens/Exercise2Screen';

export const routeNames = {
	home: 'Home',
	exercise1: 'Exercise1',
	exercise2: 'Exercise2'
}

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
	return <NavigationContainer>
		<Stack.Navigator
			initialRouteName={routeNames.home}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={routeNames.home} component={HomeScreen} />
			<Stack.Screen name={routeNames.exercise1} component={Exercise1Screen} />
			<Stack.Screen name={routeNames.exercise2} component={Exercise2Screen} />
		</Stack.Navigator>
	</NavigationContainer>
}

export default AppNavigator;
