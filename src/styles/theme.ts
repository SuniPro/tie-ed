import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";

export const OPACITY_35 = 59;

const deviceSize = {
  phone: "screen and (max-width: 645px)",
  tablet: "screen and (min-width: 646px) and (max-width: 1280px)",
  desktop: "screen and (min-width: 1281px)",
};

export const windowSize = {
  mobile: 645,
  tablet: 768,
  HD: 1280,
  HDPlus: 1680,
  FHD: 1920,
};

const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
};

const fontStyle = {
  serif: "sans-serif",
  nanumGothic: "Nanum Gothic, Tofu",
  futuraDisplay: "Futura Display",
  iBrand: "iBrand",
  gothamMedium: "GothamMedium",
  pacificoRegular: "Pacifico, cursive",
  catallina: "Catallina",
  picoBl: "PicoBl",
  picoW: "PicoW",
  tradeGothicBold: "Trade Gothic LT Std Bold Condensed No. 20",
  tradeGothicRegular: "Trade Gothic LT Std Regular",
  hanArum: "Han Arum",
  yesGothicBold: "YES Gothic bold",
  yesGothicExtraBold: "YES Gothic extra bold",
  yesGothicMedium: "YES Gothic medium",
  yesGothicRegular: "YES Gothic regular",
  yesGothicLight: "YES Gothic light",
  roboto: "Roboto, sans-serif",
  robotoCondensed: "Roboto Condensed, sans-serif;",
  montserrat: "Montserrat, sans-serif",
  poppins: "Poppins, sans-serif",
  archivo: "Archivo, sans-serif",
  katibeh: "Katibeh, sans-serif",
  playfair: "Playfair Display, sans-serif",
  appleNeoBold: "Apple SD Gothic Neo Bold",
  sCoreDreamThin: "S-CORE-Dream thin",
  sCoreDreamExtraLight: "S-CORE-Dream thin extra light",
  sCoreDreamLight: "S-CORE-Dream light",
  sCoreDreamRegular: "S-CORE-Dream regular",
  sCoreDreamMedium: "S-CORE-Dream medium",
  sCoreDreamBold: "S-CORE-Dream bold",
  sCoreDreamExtraBold: "S-CORE-Dream extra bold",
  sCoreDreamHeavy: "S-CORE-Dream extra heavy",
  sCoreDreamBlack: "S-CORE-Dream extra black",
  koPubBatangLight: "KOPUB Batang light",
  koPubBatangMedium: "KOPUB Batang medium",
  koPubBatangBold: "KOPUB Batang bold",
  koPubDotumLigth: "KOPUB Dotum light",
  koPubDotumMedium: "KOPUB Dotum medium",
  koPubDotumBold: "KOPUB Dotum bold",
};

const borderRadius = {
  circle: "50%",
  roundedBox: "30px",
  softBox: "8px",
  appRounded: "14px",
};

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: "#979797",

  // ✅ Primary Colors
  vividCerulean: "#00A0FF",
  skyBlue: "#007BFF",
  deepBlue: "#0056D2",
  royalBlue: "#003C99",

  // ✅ Secondary Colors (정확한 색상 코드 없음 → ToneUp/ToneDown 적용)
  lightGrayToneUp: "#DDDDDD", // 기존 secondary
  midnightBlack: "#121212",
  darkCharcoal: "#1E1E1E",
  charlestonGreen: "#292D2E",

  // ✅ Neutral Colors
  snowGray: "#F5F5F5", // 기존 showGray
  platinum: "#e6e6e6",
  ashGray: "#D6D6D6",
  steelGray: "#A0A0A0",
  graniteGray: "#606060",
  softWhiteGray: "#F2F2F2", // 기존 whiteGray
  brightGray: "#E6EEF3",
  lightGray: "#B0B0B0",

  // ✅ Accent Colors
  neonBlue: "#00D4FF",
  electricBlue: "#0088CC",
  darkSapphire: "#002C66",
  azureBlue: "#00A8FF",
  mayaBlue: "#58CCFF",
  babyBlue: "#85C8F2",
  babyBlueToneDown: "#88D4F2",
  diamond: "#B8EDFD",
  azureishWhite: "#DBEDF9",

  // ✅ Background Colors
  iceBlue: "#F0F8FF",
  carbonBlack: "#0D0D0D",

  // ✅ UI Feedback Colors
  successGreen: "#52C41A",
  warningRed: "#DF1313",

  crimsonRed: "#B22222",

  honeyHaze: "#ffc300",
  honeyHazeToneDown: "#ffc30080",

  // ✅ Special Colors
  luxuryGreen: "#356358",
  gold: "#D7BC6A",
  lightGold: "#F3E1A9",
  gradientGoldBottom: "linear-gradient(to bottom, #D7BC6A, #FFE9A6)",
  gradientGoldRight: "linear-gradient(to right, #D7BC6A, #FFE9A6)",

  // ✅ Hover Colors (투명도 적용)
  vividCeruleanTransparent: "#00A0FF50",

  // ✅ Basic UI Colors
  basicBlack: "#181818",
};

const lightMode = {
  // 🔹 배경 색상 (Black Theme)
  bodyBackground: colors.white,
  contentBackground: colors.darkCharcoal,
  cardBackground: colors.white,

  // 🔹 기본 텍스트 색상
  textPrimary: colors.black,
  textSecondary: colors.graniteGray,
  textAccent: colors.vividCerulean,

  // 🔹 버튼 색상
  buttonBackground: colors.snowGray,

  buttonActiveBackground: colors.crimsonRed,
  buttonIsActiveBackground: colors.ashGray,
  buttonText: colors.black,

  // 🔹 링크 색상
  linkColor: colors.electricBlue,
  linkHover: colors.azureBlue,

  // 🔹 네비게이션 & 메뉴
  menuBackground: colors.midnightBlack,
  menuActive: colors.vividCerulean,
  menuInactive: colors.lightGrayToneUp,

  // 🔹 테두리 & 구분선
  borderColor: colors.graniteGray,
  dividerColor: colors.steelGray,

  // 🔹 입력 필드
  inputBackground: colors.darkCharcoal,
  inputText: colors.white,
  inputPlaceholder: colors.lightGray,
  inputBorder: colors.platinum,

  // 🔹 상태 색상
  success: colors.successGreen,
  warning: colors.warningRed,

  // 🔹 강조 색상
  highlight: colors.neonBlue,
  highlightHover: colors.electricBlue,

  // 🔹 호버 색상
  hoverEffect: colors.honeyHaze,

  // 🔹 푸터 색상
  footerBackground: colors.midnightBlack,
  footerText: colors.lightGray,

  font: {
    logo: fontStyle.poppins,
    header: {
      menuItem: fontStyle.yesGothicExtraBold,
    },
    banner: {
      title: fontStyle.playfair,
      description: fontStyle.yesGothicRegular,
    },
    snb: {
      menuText: fontStyle.roboto,
    },
    navigation: {
      item: fontStyle.koPubDotumBold,
    },
    button: {
      default: fontStyle.gothamMedium,
    },
    search: fontStyle.yesGothicMedium,
    component: {
      mainTitle: fontStyle.montserrat,
      itemTitle: fontStyle.nanumGothic,
      itemDescription: fontStyle.yesGothicMedium,
    },
    dynamicIsland: {
      stateView: fontStyle.yesGothicExtraBold,
    },
    empty: {
      title: fontStyle.koPubDotumBold,
    },
  },
};

const darkMode = {
  // 🔹 배경 색상 (Black Theme)
  bodyBackground: colors.black,
  contentBackground: colors.black,
  cardBackground: colors.black,

  // 🔹 기본 텍스트 색상
  textPrimary: colors.white,
  textSecondary: colors.steelGray,
  textAccent: colors.vividCerulean,

  // 🔹 버튼 색상
  buttonBackground: colors.black,
  buttonActiveBackground: colors.crimsonRed,
  buttonIsActiveBackground: colors.steelGray,
  buttonText: colors.white,

  // 🔹 링크 색상
  linkColor: colors.electricBlue,
  linkHover: colors.azureBlue,

  // 🔹 네비게이션 & 메뉴
  menuBackground: colors.midnightBlack,
  menuActive: colors.honeyHaze,
  menuInactive: colors.lightGrayToneUp,

  // 🔹 테두리 & 구분선
  borderColor: colors.graniteGray,
  dividerColor: colors.steelGray,

  // 🔹 입력 필드
  inputBackground: colors.darkCharcoal,
  inputText: colors.white,
  inputPlaceholder: colors.lightGray,
  inputBorder: colors.graniteGray,

  // 🔹 상태 색상
  success: colors.successGreen,
  warning: colors.warningRed,

  // 🔹 강조 색상
  highlight: colors.neonBlue,
  highlightHover: colors.electricBlue,

  // 🔹 호버 색상
  hoverEffect: colors.honeyHaze,

  // 🔹 푸터 색상
  footerBackground: colors.midnightBlack,
  footerText: colors.lightGray,

  font: {
    logo: fontStyle.poppins,
    header: {
      menuItem: fontStyle.yesGothicExtraBold,
    },
    banner: {
      title: fontStyle.playfair,
      description: fontStyle.archivo,
    },
    snb: {
      menuText: fontStyle.roboto,
    },
    navigation: {
      item: fontStyle.appleNeoBold,
    },
    search: fontStyle.yesGothicMedium,
    component: {
      mainTitle: fontStyle.montserrat,
      itemTitle: fontStyle.nanumGothic,
      itemDescription: fontStyle.yesGothicMedium,
    },
    dynamicIsland: {
      stateView: fontStyle.yesGothicExtraBold,
    },
    button: {
      default: fontStyle.roboto,
    },
    empty: {
      title: fontStyle.koPubDotumBold,
    },
  },
};

export type lightModeTypes = typeof lightMode;
export type darkModeTypes = typeof darkMode;
export type DeviceSizeTypes = typeof deviceSize;
export type WindowSizeTypes = typeof windowSize;
export type FontSizeTypes = typeof fontSize;
export type ColorTypes = typeof colors;
export type BorderRadiusTypes = typeof borderRadius;

const muiBase = createTheme();
const baseTheme = {
  colors,
  deviceSize,
  windowSize,
  fontSize,
  borderRadius,
};

export const lightTheme: Theme = {
  ...muiBase,
  ...baseTheme,
  mode: lightMode,
};

export const darkTheme: Theme = {
  ...muiBase,
  ...baseTheme,
  mode: darkMode,
};
