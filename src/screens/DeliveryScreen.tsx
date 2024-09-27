import React from "react";
import { Image, ImageProps, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { StyleSheet } from "react-native";
import { textStyles } from "../assets/textStyles";

interface Props {
	route: {
		params: {
            title: string;
            deliveryText: string;
			image?: ImageProps;
		}
	}
}

const DeliveryScreen = (props: Props) => {
	const navigation = useNavigation<any>();
    const params = props.route.params;

	const goBack = () => {
		navigation.goBack();
	}

	return <View>
		<AppHeader title={params.title} onBackPress={goBack} />
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={textStyles.textRegular}>{params.deliveryText}</Text>
			{params.image &&
				<Image style={styles.image} source={params.image}  />}
        </ScrollView>
	</View>;
};

export default DeliveryScreen;

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
		alignItems: 'center',
    },
	image: {
		marginTop: 40,
		width: 300,
		height: 300
	}
})