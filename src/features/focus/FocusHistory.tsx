import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../../utils/styles";
import { fontSizes, spaceSizes } from "../../utils/size";
import RoundedButton from "../../components/RoundedButton";

const HistoryItem = ({ item, index }: { item: any; index: number }) => (
	<Text key={index} style={styles(item.status).historyItem}>
		{item?.subject}
	</Text>
);

export default function FocusHistory({
	focusHistory,
	onClear,
}: {
	focusHistory: Array<{ subject: string; status: number }>;
	onClear: any;
}) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{!!focusHistory.length && (
				<>
					<Text
						style={{
							...globalStyles.focusText,
							paddingLeft: spaceSizes.lg,
						}}
					>
						Things you have focused on...
					</Text>
					<FlatList
						style={{ flex: 1 }}
						contentContainerStyle={{
							flex: 1,
							alignItems: "center",
						}}
						data={focusHistory}
						renderItem={HistoryItem}
					/>
					<RoundedButton
						style={globalStyles.clearBtn}
						size={50}
						title="x"
						onPress={() => onClear()}
					/>
				</>
			)}
		</SafeAreaView>
	);
}

const styles = (status: number) =>
	StyleSheet.create({
		historyItem: {
			color: status > 1 ? "red" : "green",
			fontSize: fontSizes.md,
		},
	});
