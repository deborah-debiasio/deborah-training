import React from "react"
import { StyleSheet, StyleProp, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors"
import { textStyles } from "../assets/textStyles"

interface Props {
    text: string;
    onPress: () => void;
    styles?: any;
    isDisabled?: boolean;
}

export const Button = (props: Props) => {

    return <TouchableOpacity 
        style={[styles.container, props.styles, props.isDisabled && { opacity: 0.3 }]} 
        onPress={props.onPress} 
        disabled={props.isDisabled}
    >
        <Text style={[textStyles.textRegular, { textAlign: 'center' }]}>{props.text}</Text>
    </TouchableOpacity>
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderColor: colors.primaryDark,
        borderWidth: 2,
    }
})