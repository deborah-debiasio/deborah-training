import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";
import { routeNames } from "../navigation/AppNavigator";
import { useEffect, useState } from "react";
import { Exercise2Service } from "../services/Exercise2Service";
import { BeerComponent } from "../components/Exercise2/BeerComponents";
import { AppTextInput } from "../components/AppTextInput";
import { colors } from "../assets/colors";
import { images } from "../assets/images";
import { BeerFilters } from "../components/Exercise2/BeerFilters";
import { textStyles } from "../assets/textStyles";


const Exercise2Screen = () => {
	const focused = useIsFocused();
	const navigation = useNavigation<any>();
	const [filteredBeers, setFilteredBeers] = useState<Array<Beer>>([]);
	const [beers, setBeers] = useState<Array<Beer>>([]);
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
	const [searchedValue, setSearchedValue] = useState<string>();
	const [showFilters, setShowFilters] = useState<boolean>(false);
	const [selectedMalts, setSelectedMalts] = useState<string | undefined>();

	const getBeers = async (refresh?: boolean) => {
		try {
			refresh && setIsRefreshing(true);
			const res = await Exercise2Service.getBeerInfo(50);
			if (res.data) {
				setBeers(res.data)
				setFilteredBeers(res.data);
				setSearchedValue(undefined);
				setSelectedMalts(undefined);
			}
		} catch (e) {
			console.log('Error ', e);
		} finally {
			refresh && setIsRefreshing(false);
		}
	}

	const filterBeers = () => {
		let filtered: Array<Beer> = [];
		if (!!searchedValue && !!selectedMalts) {
			filtered = beers.filter((item: Beer) => item.name.includes(searchedValue) && item.malts === selectedMalts);
			setFilteredBeers(filtered);
		} else if (!!searchedValue) {
			filtered = beers.filter((item: Beer) => item.name.includes(searchedValue));
			setFilteredBeers(filtered);
		} else if (!!selectedMalts) {
			filtered = beers.filter((item: Beer) => item.malts === selectedMalts);
			setFilteredBeers(filtered);
		} else {
			setFilteredBeers(beers);
		}
	}

	const goBack = () => {
		navigation.goBack();
	}
	
	const onDeliveryPress = () => {
		navigation.navigate(routeNames.delivery, 
			{ title: strings.exercise2, deliveryText: strings.exercise2Text });
	}
	
	const getAvailableMalts = () => {
		const malts = Array.from(new Set(beers.flatMap((item: Beer) => item.malts)));
		return malts;
	}

	useEffect(() => {
		filterBeers();
	}, [searchedValue, selectedMalts]);

	useEffect(() => {
		focused && getBeers();
		setSearchedValue(undefined);
	}, [focused]);

	return <View style={{ flex: 1 }}>
		<AppHeader title={strings.exercise2} onBackPress={goBack} onDeliveryPress={onDeliveryPress} />

		<View style={styles.filtersContainer}>
			<View style={{ flex: 0.8 }}>
				<AppTextInput
					value={searchedValue}
					placeholder={strings.searchBeer}
					onChangeText={(value: string) => setSearchedValue(value)}
				/>
			</View>
			<TouchableOpacity style={styles.filterIconContainer} onPress={() => setShowFilters(true)}>
				{!!selectedMalts && <View style={styles.usedFilter} />}
				<Image source={images.filterIcon} style={styles.filterIcon} />
			</TouchableOpacity>
		</View>
		<FlatList
			contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}
			data={filteredBeers}
			keyExtractor={(item: Beer, index: number) => `beer-${index}`}
			renderItem={({ item }) => <BeerComponent beer={item} />}
			showsVerticalScrollIndicator={false}
			refreshing={isRefreshing}
			onRefresh={() => getBeers(true)}
			ListEmptyComponent={() => <View style={styles.emptyViewContainer}>
				<Text style={[textStyles.textRegular, { textAlign: 'center' }]}>{strings.noResults}</Text>
			</View>}
		/>
		<BeerFilters 
			isVisible={showFilters} 
			setModalVisible={(isVisible: boolean) => setShowFilters(isVisible)}
			availableMalts={getAvailableMalts()}
			selectedMalts={selectedMalts}
			setSelectedMalts={setSelectedMalts}
		/>
	</View>;
};

export default Exercise2Screen;

export const styles = StyleSheet.create({
    filtersContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
		borderBottomColor: colors.primaryDark,
        borderBottomWidth: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
    },
	filterIconContainer: {
		height: 60,
        width: 60,
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterIcon: {
		height: 30,
        width: 30,
        tintColor: colors.primaryDark,
	},
	usedFilter: {
		height: 10,
		width: 10,
		borderRadius: 10,
		backgroundColor: colors.primaryDark,
		position: 'absolute',
		right: 10,
		top: 10,
	},
	emptyViewContainer: { 
		height: '100%', 
		justifyContent: 'center', 
		alignItems: 'center' 
	}
})