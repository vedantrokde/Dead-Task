import { View, Text } from "react-native";
import React from "react";
import RoundedButton from "../../components/RoundedButton";
import { globalStyles } from "../../utils/styles";

export default function Timing({ changeTime }: { changeTime: any }) {
	return (
		<View style={globalStyles.timingContainer}>
			<View>
				<RoundedButton
					size={65}
					title="10"
					onPress={() => changeTime(10)}
				/>
			</View>
			<View>
				<RoundedButton
					size={65}
					title="15"
					onPress={() => changeTime(15)}
				/>
			</View>
			<View>
				<RoundedButton
					size={65}
					title="20"
					onPress={() => changeTime(20)}
				/>
			</View>
		</View>
	);
}
