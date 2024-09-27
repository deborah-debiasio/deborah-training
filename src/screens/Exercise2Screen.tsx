import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";


const Exercise2Screen = () => {
	const navigation = useNavigation<any>();

	const goBack = () => {
		navigation.goBack();
	}

	return <View>
		<AppHeader title={strings.exercise2} onBackPress={goBack} />

	</View>;
};

export default Exercise2Screen;
