import { StyleSheet } from 'react-native';
import { colors, fonts, padding, dimensions } from '../../styles/base.js';

export default StyleSheet.create({
    container: {
        // paddingHorizontal: padding.lg,
        // paddingVertical: padding.lg,
        // width: dimensions.fullWidth,
        flex: 1,
        // alignItems: 'center',
        backgroundColor: colors.background,
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
    messageContainer: {
        borderRadius: 5,
        backgroundColor: colors.primary,
        margin: 10,
        padding: 10,
    },
    myMessageContainer: {
        borderRadius: 5,
        backgroundColor: colors.tertiary,
        alignItems: 'flex-end',
        margin: 10,
        padding: 10,
    },
    messageText: {
        color: '#fff',
        marginBottom: 5,
    },
})
