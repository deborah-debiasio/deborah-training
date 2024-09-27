import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppHeader } from "../components/AppHeader";
import { strings } from "../assets/strings";
import { routeNames } from "../navigation/AppNavigator";
import { useEffect, useState } from "react";
import { Exercise2Service } from "../services/Exercise2Service";
import { BeerComponent } from "../components/Exercise2/BeerComponents";


const Exercise2Screen = () => {
	const focused = useIsFocused();
	const navigation = useNavigation<any>();
	const [beers, setBeers] = useState<Array<Beer>>([]);
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

	const getBeers = async (refresh?: boolean) => {
		try {
			refresh && setIsRefreshing(true);
			const res = await Exercise2Service.getBeerInfo(50);
			res.data && setBeers(res.data);
			console.log('res ', res.data);
		} catch (e) {
			console.log('Error ', e);
		} finally {
			refresh && setIsRefreshing(false);
		}
	}

	const goBack = () => {
		navigation.goBack();
	}
	
	const onDeliveryPress = () => {
		navigation.navigate(routeNames.delivery, 
			{ title: strings.exercise2, deliveryText: strings.exercise2Text });
	}


	useEffect(() => {
		focused && getBeers();

	}, [focused]);

	return <View>
		<AppHeader title={strings.exercise2} onBackPress={goBack} onDeliveryPress={onDeliveryPress} />

		<FlatList 
			contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}
			data={beers}
			keyExtractor={(item: Beer, index: number) => `beer-${index}`}
			renderItem={({ item }) => <BeerComponent beer={item} />}
			refreshing={isRefreshing}
			onRefresh={() => getBeers(true)}
		/>
	</View>;
};

export default Exercise2Screen;
