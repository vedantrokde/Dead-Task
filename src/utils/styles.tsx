import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fontSizes, spaceSizes } from "./size";

export const globalStyles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		backgroundColor: colors.bgColor,
	},
	focusContainer: {
		padding: spaceSizes.lg,
		marginVertical: spaceSizes.xxxl,
	},
	focusText: {
		color: colors.txtColor,
		fontSize: fontSizes.md,
	},
	input: {
		flex: 1,
		height: spaceSizes.xxl,
		marginRight: spaceSizes.sm,
		paddingHorizontal: spaceSizes.md,
		borderRadius: spaceSizes.sm,
		backgroundColor: colors.fieldColor,
	},
	inputContainer: {
		marginTop: spaceSizes.sm,
		marginBottom: spaceSizes.md,
		flexDirection: "row",
	},
	counterTxt: {
		textAlign: "center",
		backgroundColor: colors.scBgColor,
		padding: spaceSizes.lg,
		color: colors.txtColor,
		fontSize: fontSizes.xxxl,
		fontWeight: "bold",
	},
	timerContainer: {
		width: "100%",
		marginVertical: spaceSizes.xxxl,
	},
	timerTask: {
		color: colors.txtColor,
		fontSize: fontSizes.md,
		fontWeight: "bold",
		textAlign: "center",
	},
	timerTitle: {
		textAlign: "center",
		color: colors.txtColor,
		fontSize: fontSizes.md,
	},
	timerBtnWrapper: {
		alignItems: "center",
		padding: spaceSizes.lg,
	},
	timingContainer: {
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-around",
	},
	clearBtn: {
		margin: spaceSizes.lg,
	},
});
