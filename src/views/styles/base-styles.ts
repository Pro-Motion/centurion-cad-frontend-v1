import THEME from "@/constants/app-theme/app-theme.constants";
const { COLORS, FONTS, ANIMATIONS } = THEME;

// = = = = BASE CSS STYLES = = = =

// - - - BUTTONS - - -
const BUTTON_BASE_STYLES = `
cursor: pointer;
 
display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
width: 100%;
  /* max-width: 100px; */
  height: 56px;
  padding-left: 16px;
  /* BORDERS */
  border: none;
  border-radius: 4px;
  
  /*FONTS  */
${`${FONTS.ROBOTO.FAMILY} ${FONTS.ROBOTO.SIZE.BUTTONS.LABEL.join("")}`}

/* COLORS */
color: ${COLORS.BUTTONS.MAIN_BLUE.DEFAULT.TEXT};

/* TRANSITIONS */
transition: background-color ${ANIMATIONS.HOVER_EFFECT};
`;

// - - - FIELDS - - -

// - - - ANIMATIONS - - -

// - - - BUTTONS - - -

// - - - BUTTONS - - -

// - - - BUTTONS - - -

export { BUTTON_BASE_STYLES };
