import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";
import { routeNames } from "../navigation/AppNavigator";
import { images } from "../assets/images";


const Exercise1Screen = () => {
	const navigation = useNavigation<any>();

	const goBack = () => {
		navigation.goBack();
	}

	const onDeliveryPress = () => {
		navigation.navigate(routeNames.delivery, 
			{ title: strings.exercise1, deliveryText: strings.exercise1Text, image: images.exercise1Delivery });
	}

	return <View>
		<AppHeader title={strings.exercise1} onBackPress={goBack} onDeliveryPress={onDeliveryPress} />

	</View>;
};

export default Exercise1Screen;
