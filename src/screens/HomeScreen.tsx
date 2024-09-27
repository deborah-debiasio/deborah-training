
import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { routeNames } from "../navigation/AppNavigator";
import { Button } from "../components/Button";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";


const HomeScreen = () => {
	const navigation = useNavigation<any>();

	const pages = [routeNames.exercise1, routeNames.exercise2]

	const navigateToExercisePage = (pageName: string) => {
		navigation.navigate(pageName);
	}

	return <View>
		<AppHeader title={strings.homeTitle}/>
		<ScrollView>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			{pages.map((value: string, index: number) => 
				<View style={{ marginVertical: 20 }} key={`exercise-${index}`}>
					<Button text={value} onPress={() => navigateToExercisePage(value)} />
				</View>)}
			</View>
		</ScrollView>
	</View>;
};

export default HomeScreen;
