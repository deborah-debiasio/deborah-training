import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors";
import { textStyles } from "../../assets/textStyles";
import { getBeerColorByAlcohol } from "../../utils/Exercise2Utilts";


interface Props {
    beer: Beer;
}

export const BeerComponent = ({ beer }: Props) => {

    return <View style={styles.container}>
        <View style={styles.rowContainer}>
            <View style={{ flex: 0.7 }}>
                <Text style={textStyles.textBold}>{beer.name}</Text>
                <Text style={[textStyles.descriptionRegular, { marginTop: 10 }]}>{beer.brand}</Text>
            </View>
			<View style={{ flex: 0.3, alignItems: 'flex-end' }}>
				<Text style={textStyles.descriptionRegular}>{beer.hop.toUpperCase()}</Text>
				<View style={[styles.alcoholPercentage, { backgroundColor: getBeerColorByAlcohol(beer.alcohol)}]} />
			</View>
        </View>
    </View>;
};


export const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.primaryDark,
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	alcoholPercentage: {
		height: 20,
		width: 20,
		borderRadius: 50,
		marginTop: 10,
	}
})