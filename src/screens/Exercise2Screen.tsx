import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";
import { routeNames } from "../navigation/AppNavigator";


const Exercise2Screen = () => {
	const navigation = useNavigation<any>();

	const goBack = () => {
		navigation.goBack();
	}
	
	const onDeliveryPress = () => {
		navigation.navigate(routeNames.delivery, 
			{ title: strings.exercise2, deliveryText: strings.exercise2Text });
	}

	return <View>
		<AppHeader title={strings.exercise2} onBackPress={goBack} onDeliveryPress={onDeliveryPress} />

	</View>;
};

export default Exercise2Screen;
