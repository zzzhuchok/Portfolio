import { DefaultTheme } from "styled-components";

export const GlobalTheme: DefaultTheme = {
  colors: {
    primary: "#a7a7a7",
    textTitle: "#ccc",
    textTitleAccent: "#d9d9d9",
    textLinearGradient: "linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%)",
    borderLinearGradient: "linear-gradient(#e70faa 0%, #13b0f5 100%)",
    background: "#191919",
    backgroundCard: "#363636",
    backgroundHover: "#43baf2",
    lightLink: "#fff",
    border: "rgb(66 68 110 / 0.3)",
  },

  fontSize: {
    smallXS: "16px",
    smallS: "18px",
    smallM: "20px",
    mediumXS: "28px",
    mediumS: "32px",
    mediumM: "48px",
    largeXS: "58px",
  },
  fontFamily: {
    primary: `"Poppins", sans-serif`,
    secondary: `"DM Sans", sans-serif`,
  },

  border: {
    radius: "20px",
  },
  container: {
    maxWidth: "1280px",
    paddingX: "20px",
  },
  transition: {
    duration: "0.2s",
  },
  section: {
    marginBottom: 'clamp(100px, 14vw,200px)',
  },

  mediaBreakpoints: {
    deskftopXS: 'max-width: 1199.98px',
    tablet: '(max-width: 991.98px)',
    phone: '(max-width: 767.98px)',
    phoneXS: '(max-width: 575.98px)',
  }
};
