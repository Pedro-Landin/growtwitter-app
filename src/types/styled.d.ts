import 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string
            secondary: string
            backgrounColor: string
            textColor: string
            textColorTweet: string
            border: string
        }
    }
}