import React, { useMemo, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors";
import { strings } from "../../assets/strings";
import { textStyles } from "../../assets/textStyles";
import { getBeerColorByAlcohol } from "../../utils/Exercise2Utilts";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import { useEffect } from "react";
import { Button } from "../Button";


interface Props {
    isVisible: boolean;
    setModalVisible: (isVisible: boolean) => void;
	availableMalts: Array<string>;
	selectedMalts?: string;
	setSelectedMalts: (selectedMalts?: string) => void;
}

export const BeerFilters = (props: Props) => {
	const [radioButtons, setRadioButtons] = useState<Array<RadioButtonProps>>([]);

	useEffect(() => {
		const values: Array<RadioButtonProps> = [];
		props.availableMalts.forEach((item: string, index: number) => {
			values.push({
				id: item,
				label: item,
				value: item
			})
		});
		setRadioButtons(values);

	}, [props.isVisible]);


    return <Modal
		animationType="slide"
		transparent={true}
		visible={props.isVisible}
		onRequestClose={() => props.setModalVisible(!props.isVisible)}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={textStyles.textBold}>{strings.filterBeerByMalts}</Text>
					<RadioGroup 
						radioButtons={radioButtons} 
						onPress={props.setSelectedMalts}
						selectedId={props.selectedMalts}
						containerStyle={styles.radioGroupContainer}
						labelStyle={textStyles.textRegular}
					/>
					<View style={styles.buttonsContainer}>
						<Button 
							text={strings.resetFilter} 
							onPress={() => props.setSelectedMalts(undefined)}
							styles={{ marginRight: 5 }}
						/>
						<Button 
							text={strings.filter} 
							onPress={() => props.setModalVisible(!props.isVisible)}
							styles={{ marginLeft: 5 }}
						/>
					</View>
				</View>
			</View>
  	</Modal>;
};


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
	},
	modalView: {
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
			width: 0,
			height: 2,
    	},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
	radioGroupContainer: {
		alignItems: 'flex-start',
		paddingVertical: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})