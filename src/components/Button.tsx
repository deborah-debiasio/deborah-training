import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../assets/colors"

interface Props {
    text: string;
    onPress: () => void;
}

export const Button = (props: Props) => {

    return <TouchableOpacity style={styles.container} onPress={props.onPress}>
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