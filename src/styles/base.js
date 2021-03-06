import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
}

export const colors  = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',
  button: '#fff',
  background: '#ececec',
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
}

export const styleClasses = {
    textInput: {
        fontSize: fonts.md,
        height: 40,
        borderColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 20,
    },
}
