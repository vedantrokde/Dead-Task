import { View, Text, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../utils/styles";
import RoundedButton from "../../components/RoundedButton";
import { spaceSizes } from "../../utils/size";

export default function Focus({ addSubject }: { addSubject: any }) {
	const [input, setInput] = useState("");

	return (
		<View style={globalStyles.focusContainer}>
			<Text style={globalStyles.focusText}>
				What would you like to focus on?
			</Text>
			<View style={globalStyles.inputContainer}>
				<TextInput
					style={globalStyles.input}
					value={input}
					onChangeText={setInput}
				/>
				<RoundedButton
					title="+"
					size={spaceSizes.xxl}
					onPress={() => {
						addSubject(input);
						setInput("");
						Keyboard.dismiss();
					}}
				/>
			</View>
		</View>
	);
}
