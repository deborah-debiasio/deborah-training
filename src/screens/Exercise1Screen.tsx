import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";


const Exercise1Screen = () => {
	const navigation = useNavigation<any>();

	const goBack = () => {
		navigation.goBack();
	}

	return <View>
		<AppHeader title={strings.exercise1} onBackPress={goBack} />

	</View>;
};

export default Exercise1Screen;
