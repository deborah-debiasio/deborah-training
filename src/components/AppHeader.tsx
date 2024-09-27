import React from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native"
import { colors } from "../assets/colors"
import { images } from "../assets/images"
import { textStyles } from "../assets/textStyles"

interface Props {
    title: string;
    onBackPress?: () => void;
}

export const AppHeader = (props: Props) => {

    return <SafeAreaView style={styles.safearea}>
        <View style={[styles.container, !props.onBackPress && { alignSelf: 'center' }]}>
            {props.onBackPress && 
                <TouchableOpacity onPress={props.onBackPress}>
                    <Image source={images.backIcon} style={styles.backIcon} />
                </TouchableOpacity>}
            <Text style={textStyles.headerTitle}>{props.title}</Text>
            {props.onBackPress && 
                <TouchableOpacity>
                    <Image source={images.text} style={styles.backIcon} />
                </TouchableOpacity>}
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
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    backIcon: {
        height: 24,
        width: 24,
        tintColor: colors.primaryDark,
    }
})