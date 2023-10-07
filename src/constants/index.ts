// BASE STYLES FOR STYLED COMPONENTS

// MAIN COLORS
const { WHITE, BROWN, GREEN, YELLOW, RED, GREY, BLACK, GREY_BLUE, DARK_GREY, OLIVE } =
  Object.freeze({
    WHITE: "#FFFFFF",
    BROWN: "#A6876D",
    GREEN: "#4AA741",
    YELLOW: "#DCCD43",
    RED: "#A74141",
    GREY: "#7F919B",
    BLACK: "#182228",
    GREY_BLUE: "#232E34",
    DARK_GREY: "#354249",
    OLIVE: "#2C747E",
  });

const THEME = {
  COLORS: {
    GENERAL: {
      DARK: {
        FILL: {
          BACKGROUND_LINEAR: "linear-gradient(284deg, #0E181E 0%, #222C32 122.25%))",
          BACKGROUND_BLOCK: DARK_GREY,
          BACKGROUND_BLOCK_HEADLINE: BLACK,
          BACKGROUND_CARD: GREY_BLUE,
        },
        STROKE: {
          GREY_BORDER: GREY,
          RED_BORDER: RED,
        },
      },
    },
    TEXT: {
      BASE: {
        WHITE_MAIN: WHITE,
        BROWN_ACCENT: BROWN,
        GREY_SUB: GREY,
        BLACK_ACCENT: BLACK,
      },
      STATUS: {
        GREEN,
        YELLOW,
        RED,
      },
    },
    ICONS: {
      FILL: {
        DEAFULT: WHITE,
        HOVER: GREY,
        ACTIVE: OLIVE,
        DISABLED: "#BDC3C7",
      },
    },
    // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    BUTTONS: {
      // VARIANT
      MAIN_BLUE: {
        DEFAULT: { BACKGROUND: OLIVE, TEXT: WHITE, BORDER: "" },
        HOVER: {
          TEXT: WHITE,
          BACKGROUND: "#18606A",
          BORDER: "",
        },
        ACTIVE: {
          BACKGROUND: BLACK,
          TEXT: WHITE,
          BORDER: "",
        },
        DISABLED: {
          BACKGROUND: "#A5B9BC",
          TEXT: WHITE,
          BORDER: "",
        },
      },

      // VARIANT
      NAVIGATION_DARK: {
        DEFAULT: { BACKGROUND: BLACK, TEXT: WHITE, BORDER: "" },
        HOVER: { BACKGROUND: "#091217", TEXT: WHITE, BORDER: "" },
        ACTIVE: { BACKGROUND: OLIVE, TEXT: WHITE, BORDER: "" },
        DISABLED: { BACKGROUND: "#27353E", TEXT: WHITE, BORDER: "" },
      },

      // VARIANT
      RED: {
        DEFAULT: { BACKGROUND: RED, TEXT: WHITE, BORDER: "" },
        HOVER: {
          TEXT: WHITE,
          BACKGROUND: "#932D2D",
          BORDER: "",
        },
        ACTIVE: { TEXT: "", BACKGROUND: BLACK, BORDER: "" },
        DISABLED: { TEXT: "", BACKGROUND: "#D1A9A6", BORDER: "" },
      },

      // VARIANT
      GREY: {
        DEFAULT: { BACKGROUND: "rgba(127, 145, 155, 0.60)", BORDER: "" },
        HOVER: {
          TEXT: "",
          BACKGROUND: "rgba(97, 115, 125, 0.60)",
          BORDER: "",
        },
        ACTIVE: { TEXT: "", BACKGROUND: "rgba(24, 34, 40, 0.60)", BORDER: "" },
        DISABLED: { TEXT: "", BACKGROUND: "#BDC3C7", BORDER: "" },
      },
    },

    INPUT: {
      BACKGROUND: { DEFAULT: "#2B383F", DISABLED: DARK_GREY, ERROR: "#2B383F" },
      BORDER: {
        DEFAULT: BLACK,
        HOVER: DARK_GREY,
        ACTIVE: OLIVE,
        DISABLED: OLIVE,
        ERROR: "#733B3B",
      },
      PLACEHOLDER: { DEFAULT: GREY, DISABLED: "#6B7D87" },
    },
  },

  FONTS: {
    ROBOTO: {
      FAMILY: "font-family:'Roboto Condensed', sans-serif;",

      SIZE: {
        HEADLINES: {
          HEADLINE_ONE: {},
          HEADLINE_TWO: {},
          HEADLINE_THREE: {},
        },
        TEXT: {
          TITLE: {
            "line-height": 1.25,
            "font-size": "16px",
            "font-weight": 500,
          },
          REGULAR: {
            "line-height": 1.25,
            "font-size": "16px",
            "font-weight": 400,
          },
          STATUS: {
            "line-height": 1.25,
            "font-size": "16px",
            "font-weight": 700,
            "letter-spacing": " 0.8px",
            "text-transform": "uppercase",
          },
        },
        BUTTONS: {
          LABEL: [
            "font-size: 20px;",
            "font-style: normal;",
            "font-weight: 500;",
            "line-height: 1.2;",
            "text-transform: uppercase;",
          ],
          NAVIGATION: [
            "font-size: 20px;",
            "font-style: normal;",
            "font-weight: 500;",
            "line-height: 1.2;",
          ],
        },
        FIELDS: {
          INPUT_TEXT: [
            "font-size: 16px;",
            "font-style: normal;",
            "font-weight: 400;",
            "line-height: 1.25;",
          ],
          PLACEHOLDER: [
            ["font-size", "12px;"],
            ["font-style", "normal;"],
            ["font-weight", "400;"],
            ["line-height", "1.33;"],
          ],
        },
      },
    },
    ALEGREYA: { FAMILY: "'Alegreya Sans SC', sans-serif" },
  },

  ANIMATIONS: {
    HOVER_EFFECT: "300ms cubic-bezier(.89,.91,0,.65)",
    LAMP_EFFECT: "",
  },
};

export default THEME;
