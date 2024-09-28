import React from "react"
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors"
import { textStyles } from "../assets/textStyles"

interface Props {
	value?: string;
    placeholder: string;
    onChangeText: (value: string) => void;
    keyboardType?: KeyboardTypeOptions;
}

export const AppTextInput = (props: Props) => {

    return <View>
        <TextInput 
			placeholder={props.placeholder} 
			placeholderTextColor={colors.primaryDark}
			defaultValue={props.value}
         	onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
			style={[styles.container, textStyles.textRegular]}
		/>
    </View>
}

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderColor: colors.primaryDark,
        borderWidth: 2,
        height: 60,
    }
})