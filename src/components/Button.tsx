import React from "react"
import { StyleSheet, StyleProp, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors"

interface Props {
    text: string;
    onPress: () => void;
    styles?: any;
}

export const Button = (props: Props) => {

    return <TouchableOpacity style={[styles.container, props.styles]} onPress={props.onPress}>
        <View>
            <Text>{props.text}</Text>
        </View>
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