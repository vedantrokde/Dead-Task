import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Focus from "./src/features/focus/Focus";
import FocusHistory from "./src/features/focus/FocusHistory";
import Timer from "./src/features/timer/Timer";
import { globalStyles } from "./src/utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STATUS = {
	COMPLETE: 1,
	FAILURE: 2,
};

export default function App() {
	const [focusSubject, setFocusSubject] = useState(null);
	const [focusHistory, setFocusHistory] = useState<
		{ key: string; subject: string; status: number }[]
	>([]);

	const updateHistory = (subject: string, status: number) => {
		setFocusHistory([
			...focusHistory,
			{ key: String(focusHistory.length + 1), subject, status },
		]);
	};

	const saveFocusHistory = async () => {
		try {
			await AsyncStorage.setItem(
				"focusHistory",
				JSON.stringify(focusHistory)
			);
		} catch (error) {
			console.log(error);
		}
	};

	const loadFocusHistory = async () => {
		try {
			const history = await AsyncStorage.getItem("focusHistory");

			if (history && JSON.parse(history).length) {
				setFocusHistory(JSON.parse(history));
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadFocusHistory();
	}, []);

	useEffect(() => {
		saveFocusHistory();
	}, [focusHistory]);

	return (
		<View style={globalStyles.homeContainer}>
			{focusSubject ? (
				<Timer
					focusSubject={focusSubject}
					onTimerEnd={() => {
						setFocusSubject(null);
						updateHistory(focusSubject, STATUS.COMPLETE);
					}}
					clearSubject={() => {
						setFocusSubject(null);
						updateHistory(focusSubject, STATUS.FAILURE);
					}}
				/>
			) : (
				<>
					<Focus addSubject={setFocusSubject} />
					<FocusHistory
						focusHistory={focusHistory}
						onClear={() => setFocusHistory([])}
					/>
				</>
			)}

			<StatusBar style="auto" />
		</View>
	);
}
