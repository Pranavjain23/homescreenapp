import {
    createBox,
    createText,
    useTheme as useReTheme,
} from "@shopify/restyle";

import {TextStyle, ViewStyle} from "react-native";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle};

export const theme ={
    colors : {
        primary : 'rgb(61,61,63)',
        background : 'rgb(61,61,63)',
        card : 'rgb(255,255,255)',
        text : 'rgb(255,255,255)',
        border : 'rgb(199,199,204)',
        notification : 'rgb(255,69,58)'
    },
    spacing: {
        xs:3,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    }, 
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight:80,

            color: "text",
            textAlign: "center",
        },
        title1: {
            fontSize: 28,
            color: "border",
        },
        title2:{
            fontSize: 24,
            lineHeight:30,

            color: "text",
        },
        title3:{
            fontSize: 14,
            lineHeight:15,

            fontWeight: "bold",
            color: "text",
        },
        body:{
            fontSize: 16,
            lineHeight:24,
            fontWeight: "bold",
            color: "text",
        },
        small1:{
            fontSize: 10,
            lineHeight: 13,
            color: "border",
        },
        small:{
            fontSize: 7,
            lineHeight: 13,
            color: "border",
        },
        button:{
            fontSize: 15,

            color: "text",
        },
        header:{
            fontSize: 12,
            lineHeight:24,

            color: "text",
        },
    },
    breakpoints : {},
};


export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};

