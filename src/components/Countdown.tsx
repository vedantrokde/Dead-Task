import { useEffect, useRef, useState } from "react";
import { Platform, Text, Vibration, View } from "react-native";
import { Bar } from "react-native-progress";
import { colors } from "../utils/colors";
import { globalStyles } from "../utils/styles";

const minutesToMillis = (min: number) => min * 60000;

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
	minutes = 20,
	isPaused,
	onTimerEnd,
}: {
	minutes: number;
	isPaused: boolean;
	onTimerEnd: any;
}) => {
	const interval = useRef<
		ReturnType<typeof setTimeout> | number | string | undefined
	>(undefined);
	const [millis, setMillis] = useState(minutesToMillis(minutes));
	const [progress, setProgress] = useState(1);

	useEffect(() => {
		setMillis(minutesToMillis(minutes));
	}, [minutes]);

	useEffect(() => {
		setProgress(millis / minutesToMillis(minutes));

		if (millis === 0) {
			clearInterval(interval.current);
			if (Platform.OS === "ios") {
				const vibrateInterval = setInterval(
					() => Vibration.vibrate(),
					1000
				);
				setTimeout(() => clearInterval(vibrateInterval), 10000);
			} else {
				Vibration.vibrate(10000);
			}
			onTimerEnd();
		}
	}, [millis]);

	useEffect(() => {
		if (isPaused) {
			if (interval.current) clearInterval(interval.current);
			return;
		}

		interval.current = setInterval(
			() => setMillis((time) => time - 1000),
			1000
		);
		return () => clearInterval(interval.current);
	}, [isPaused]);

	const M = Math.floor(millis / 1000 / 60) % 60;
	const S = Math.floor(millis / 1000) % 60;

	return (
		<View>
			<Text style={globalStyles.counterTxt}>
				{formatTime(M)} : {formatTime(S)}
			</Text>
			<Bar
				style={{}}
				width={null}
				borderRadius={0}
				color={colors.txtColor}
				borderWidth={0.3}
				progress={progress}
			/>
		</View>
	);
};
