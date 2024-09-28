import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";
import { routeNames } from "../navigation/AppNavigator";
import { images } from "../assets/images";
import { colors } from "../assets/colors";
import { AppTextInput } from "../components/AppTextInput";
import { Button } from "../components/Button";
import { textStyles } from "../assets/textStyles";


const Exercise1Screen = () => {
	const navigation = useNavigation<any>();
	const [searchedValue, setSearchedValue] = useState<string>();
	const [text, setText] = useState<string | undefined>();

	const goBack = () => {
		navigation.goBack();
	}

	const onDeliveryPress = () => {
		navigation.navigate(routeNames.delivery, 
			{ title: strings.exercise1, deliveryText: strings.exercise1Text, image: images.exercise1Delivery });
	}

	const createImage = () => {
		if (searchedValue) {
			const parsed = parseInt(searchedValue, 10);
			if (!isNaN(parsed) && parsed.toString() === searchedValue) {
				let image: string = '';
				const middle = Math.floor(parsed / 2);
				for (let i = 0; i <= middle; i++) {
					image += '  '.repeat(i) + '*'.repeat(parsed - i * 2) + '\n';
				}
				for (let i = middle - 1; i >= 0; i--) {
					image += '  '.repeat(i) + '*'.repeat(parsed - i * 2) + (i !== 0 ? '\n' : '');
				}
				setText(image);
			}
		}
	}

	const isValueValid = () => {
		if (searchedValue) {
			const parsed = parseInt(searchedValue, 10);
			return !(!isNaN(parsed) && parsed.toString() === searchedValue);
		} else {
			return true;
		}
	}

	return <View>
		<AppHeader title={strings.exercise1} onBackPress={goBack} onDeliveryPress={onDeliveryPress} />
		<View style={styles.filtersContainer}>
			<Text style={textStyles.textRegular}>{strings.insertNumber}</Text>
			<AppTextInput
				value={searchedValue}
				placeholder={strings.typeANumber}
				onChangeText={(value: string) => setSearchedValue(value)}
				keyboardType={'number-pad'}
			/>
			<Button text={strings.create} onPress={createImage} isDisabled={isValueValid()} styles={styles.createButton} />
		</View>
		<ScrollView contentContainerStyle={styles.imageContainer}>
			{text && <Text style={[textStyles.textBold, styles.image]}>{text}</Text>}
		</ScrollView>
	</View>;
};

export default Exercise1Screen;

export const styles = StyleSheet.create({
    filtersContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
		borderBottomColor: colors.primaryDark,
        borderBottomWidth: 2,
    },
	createButton: {
		marginTop: 20,
		width: '50%',
		marginHorizontal: '25%'
	},
	imageContainer: {
		marginVertical: 20,
		alignItems: 'center',
		paddingBottom: 300,
	},
	image: {
		backgroundColor: colors.black,
		color: colors.white,
	}
})