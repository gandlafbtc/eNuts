import { mainColors } from '@styles'
import { View } from 'react-native'
import { s, ScaledSheet } from 'react-native-size-matters'

export default function PinDots({ input, mismatch }: { input: number[], mismatch?: boolean }) {
	return (
		<View style={[styles.pinWrap, { width: s(25) * input.length }]}>
			{input.map((_n, i) => <View key={i} style={[styles.pinCircle, { backgroundColor: mismatch ? mainColors.ERROR : mainColors.WHITE }]} />)}
		</View>
	)
}

const styles = ScaledSheet.create({
	pinWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginVertical: '40@vs',
	},
	pinCircle: {
		width: '10@s',
		height: '10@s',
		borderRadius: '5@s',
	},
})