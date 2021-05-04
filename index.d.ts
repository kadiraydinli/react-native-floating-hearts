declare module 'react-native-floating-hearts' {
    import React from 'react'
    import ReactNative, { ColorValue, StyleProp, ViewStyle } from 'react-native'

    export interface FloatingHeartsProps extends ReactNative.ViewProps {
        count: number,
        renderCustomShape?: React.ReactNode,
        style?: StyleProp<ViewStyle>,
        color?: ColorValue,
    }

    export class FloatingHearts extends React.Component<FloatingHeartsProps> { }

    export default FloatingHearts
}
