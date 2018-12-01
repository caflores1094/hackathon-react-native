import { StyleSheet } from 'react-native';
import { colors, fonts, padding, dimensions } from '../../styles/base.js';

export default StyleSheet.create({
    textInput: {
        fontSize: fonts.md,
        height: 40,
        borderColor: '#000',
        borderBottomWidth: 2,
        marginBottom: 20,
    },

    container: {
        height: dimensions.fullHeight,
        paddingHorizontal: padding.md,
        paddingVertical: 100,
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
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: fonts.md,
        fontWeight: '600',
    },
    error: {
        color: '#cc0000',
        fontSize: fonts.md,
        textAlign: 'center',
        marginTop: 20,
    },
})
