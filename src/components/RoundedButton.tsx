import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export default function RoundedButton({
	style = {},
	textStyle = {},
	size = 125,
	...props
}) {
	return (
		<TouchableOpacity
			style={[styles(size).radius, style]}
			onPress={props.onPress}
		>
			<Text style={[styles(size).text, textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
}

const styles = (size: number) =>
	StyleSheet.create({
		radius: {
			height: size,
			width: size,
			borderRadius: size / 2,
			alignItems: "center",
			justifyContent: "center",
			borderColor: colors.fieldColor,
			borderWidth: 2,
		},
		text: {
			color: colors.txtColor,
			fontSize: size / 3,
		},
	});
