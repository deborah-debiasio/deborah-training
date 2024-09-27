import React from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native"
import { colors } from "../assets/colors"
import { images } from "../assets/images"
import { textStyles } from "../assets/textStyles"

interface Props {
    title: string;
    onBackPress?: () => void;
    onDeliveryPress?: () => void;
}

export const AppHeader = (props: Props) => {

    return <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {props.onBackPress && 
                    <TouchableOpacity onPress={props.onBackPress}>
                        <Image source={images.backIcon} style={styles.icon} />
                    </TouchableOpacity>}
             </View>
            <Text style={textStyles.headerTitle}>{props.title}</Text>
            <View style={styles.iconContainer}>
                {props.onDeliveryPress && 
                    <TouchableOpacity onPress={props.onDeliveryPress}>
                        <Image source={images.textIcon} style={styles.icon} />
                    </TouchableOpacity>}
            </View>
        </View>
    </SafeAreaView>
}

export const styles = StyleSheet.create({
    safearea: {
        backgroundColor: colors.primary,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    iconContainer: {
        height: 24,
        width: 48,
    },
    icon: {
        height: 24,
        width: 24,
        tintColor: colors.primaryDark,
        alignSelf: 'center'
    }
})