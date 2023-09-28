// import THEME from "@/constants/app-theme/app-theme.constants";
// // const {
// //   COLORS: { BUTTONS, TEXT, GENERAL },
// //   FONTS: { ROBOTO, ALEGREYA },
// // } = THEME;

// interface Theme {
//   THEME: object;
//   // getCssForButton: (variant: ButtonVariantType) => string;
// }

// type FontsFamily = "ROBOTO" | "ALEGREYA";

// type Types = keyof FontsFamily;

// class ThemeProvider implements Theme {
//   THEME: object;
//   COLORS: object;
//   FONTS: object;
//   constructor() {
//     this.THEME = THEME;
//     this.COLORS = THEME.COLORS;
//     this.FONTS = THEME.FONTS;
//   }

//   get allColors() {
//     return this.COLORS;
//   }
//   get theme() {
//     return this.THEME;
//   }

//   // formateAllFullCssFonts(family: FontsFamily) {
//   //   const {
//   //     FAMILY,
//   //     SIZE: {
//   //       BUTTONS: { LABEL, NAVIGATION },
//   //     },
//   //   } = this.FONTS[family as keyof Types];

//   //   LABEL.flatMap();
//   //   return this.FONTS;
//   }

//   // getCssForButton(variant: ButtonVariantType) {
//   //   return "";
//   // }
//   // private formateColorsStyles(styles: object) {
//   //   const result = [`background-color: ${styles};`, `color: ${styles}`];
//   //   return "";
//   // }

//   // private formateFontStyles(font: object) {
//   //   return "";
//   // }
// }

// export default new ThemeProvider();
