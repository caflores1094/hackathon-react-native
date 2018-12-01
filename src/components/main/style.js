import { StyleSheet } from 'react-native';
import { colors, fonts, padding, dimensions } from '../../styles/base.js';

export default StyleSheet.create({
    container: {
        paddingHorizontal: padding.lg,
        paddingVertical: padding.lg,
        width: dimensions.fullWidth,
        flex: 1,
        alignItems: 'center',
    },
    header: {
        fontSize: fonts.lg,
        fontFamily: fonts.primary,
        margin: 10,
    },
    section: {
        paddingVertical: padding.lg,
        paddingHorizontal: padding.xl
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        paddingHorizontal: 40,
    },
})
