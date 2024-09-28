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
	const [selectedItems, setSelectedItems] = useState<string | undefined>();

	const filter = () => {
		props.setSelectedMalts(selectedItems);
		props.setModalVisible(false)
	}

	const cancel = () => {
		props.setModalVisible(false);
		setSelectedItems(props.selectedMalts);
	}

	const reset = () => {
		props.setSelectedMalts(undefined);
	}

	useEffect(() => {
		if (props.isVisible) {
			const values: Array<RadioButtonProps> = [];
			props.availableMalts.forEach((item: string, index: number) => {
				values.push({
					id: item,
					label: item,
					value: item
				})
			});
			setRadioButtons(values);
			setSelectedItems(props.selectedMalts);
		}
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
						onPress={setSelectedItems}
						selectedId={selectedItems}
						containerStyle={styles.radioGroupContainer}
						labelStyle={textStyles.textRegular}
					/>
					<Button 
						text={strings.filter} 
						onPress={filter}
						styles={styles.filterButton}
					/>
					<View style={styles.buttonsContainer}>
						<Button 
							text={strings.reset} 
							onPress={reset}
							styles={{ marginRight: 5 }}
						/>
						<Button 
							text={strings.cancel} 
							onPress={cancel}
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
	},
	filterButton: {
		marginVertical: 10,
	}
})