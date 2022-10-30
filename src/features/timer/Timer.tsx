import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../utils/styles";
import { Countdown } from "../../components/Countdown";
import { spaceSizes } from "../../utils/size";
import RoundedButton from "../../components/RoundedButton";
import Timing from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

export default function Timer({
	focusSubject,
	onTimerEnd,
	clearSubject,
}: {
	focusSubject: string;
	onTimerEnd: any;
	clearSubject: any;
}) {
	useKeepAwake();
	const [minutes, setMinutes] = useState(0.1);
	const [isStarted, setIsStarted] = useState(false);

	return (
		<View style={globalStyles.timerContainer}>
			<Countdown
				minutes={minutes}
				isPaused={!isStarted}
				onTimerEnd={() => onTimerEnd()}
			/>
			<View style={{ paddingTop: spaceSizes.xxxl }}>
				<Text style={globalStyles.timerTitle}>Focusing on:</Text>
				<Text style={globalStyles.timerTask}>{focusSubject}</Text>
			</View>
			<View style={globalStyles.timerBtnWrapper}>
				<Timing changeTime={(time: number) => setMinutes(time)} />
			</View>
			<View style={globalStyles.timerBtnWrapper}>
				<RoundedButton
					title={isStarted ? "pause" : "start"}
					onPress={() => setIsStarted((state) => !state)}
				/>
			</View>
			<RoundedButton
				style={globalStyles.clearBtn}
				size={50}
				title="x"
				onPress={() => clearSubject()}
			/>
		</View>
	);
}
