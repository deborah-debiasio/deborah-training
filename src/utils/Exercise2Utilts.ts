import { colors } from "../assets/colors";

export const getBeerColorByAlcohol = (percentage: string): string => {

    const alcohol = parseFloat(percentage.replace('%', ''));
	if (alcohol <= 5 ) {
		return colors.green;
	} else if (alcohol >= 10.1 ) {
		return colors.red;
	} else { 
		return colors.yellow;
	}

}