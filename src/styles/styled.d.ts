// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors?: {
      primary?: string;
      textTitle?: string;
      textTitleAccent?: string;
      textLinearGradient?: string;
      borderLinearGradient?: string;
      background?: string;
      backgroundCard?: string;
      backgroundHover?: string;
      border?: string;
      lightLink?: string;
    };
    fontSize?: {
      smallXS?: string;
      smallS?: string;
      smallM?: string;

      mediumXS?: string;
      mediumS?: string;
      mediumM?: string;

      largeXS?: string;
    };
    fontFamily?: {
      primary?: string;
      secondary?: string;
    };
    border?: {
      radius: string;
    };
    container?: {
      maxWidth?: string;
      paddingX?: string;
    };
    transition?: {
      duration?: string;
    };
    section?: {
      marginBottom?: string;
    };

    mediaBreakpoints?: {
      desktop?: string,
      deskftopXS?: string,
      tablet?: string,
      phone?: string,
      phoneXS?: string,
    }


  }
}
