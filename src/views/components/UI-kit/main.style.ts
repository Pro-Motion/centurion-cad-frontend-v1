import styled from "vue3-styled-components";
import THEME from "@/constants/app-theme/app-theme.constants";
import { BUTTON_BASE_STYLES } from "@/views/styles/base-styles";
const { COLORS, FONTS, ANIMATIONS } = THEME;
// --   --   --   --   --   --   --   --   --   --
//  -- - -- - -- - -- - -- - -- - -- - -- - -- - --
// --   --   --   --   --   --   --   --   --   --
// - - - - - -  UI KIT STYLED COMPONENTS - - - - - -
const MainStyledButton = styled("button", {})`
  ${() => BUTTON_BASE_STYLES}
  background-color: ${() => COLORS.BUTTONS.MAIN_BLUE.DEFAULT.BACKGROUND};
  &:hover {
    background-color: ${() => THEME.COLORS.BUTTONS.MAIN_BLUE.HOVER.BACKGROUND};
  }
  &:active {
    background-color: ${() => THEME.COLORS.BUTTONS.MAIN_BLUE.ACTIVE.BACKGROUND};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${() => THEME.COLORS.BUTTONS.MAIN_BLUE.DISABLED.BACKGROUND};
  }
`;

const RedStyledButton = styled("button", {})`
  ${() => BUTTON_BASE_STYLES}
  background-color: ${() => COLORS.BUTTONS.RED.DEFAULT.BACKGROUND};
  &:hover {
    background-color: ${() => THEME.COLORS.BUTTONS.RED.HOVER.BACKGROUND};
  }
  &:active {
    background-color: ${() => THEME.COLORS.BUTTONS.RED.ACTIVE.BACKGROUND};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${() => THEME.COLORS.BUTTONS.RED.DISABLED.BACKGROUND};
  }
`;

const NavigationStyledButton = styled("button", {})`
  ${() => BUTTON_BASE_STYLES}
  background-color: ${() => COLORS.BUTTONS.NAVIGATION_DARK.DEFAULT.BACKGROUND};
  &:hover {
    background-color: ${() => THEME.COLORS.BUTTONS.NAVIGATION_DARK.HOVER.BACKGROUND};
  }
  &:active {
    background-color: ${() => THEME.COLORS.BUTTONS.NAVIGATION_DARK.ACTIVE.BACKGROUND};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${() => THEME.COLORS.BUTTONS.NAVIGATION_DARK.DISABLED.BACKGROUND};
  }
`;
const GreyStyledButton = styled("button", {})`
  ${() => BUTTON_BASE_STYLES}
  background-color: ${() => COLORS.BUTTONS.GREY.DEFAULT.BACKGROUND};
  &:hover {
    background-color: ${() => THEME.COLORS.BUTTONS.GREY.HOVER.BACKGROUND};
  }
  &:active {
    background-color: ${() => THEME.COLORS.BUTTONS.GREY.ACTIVE.BACKGROUND};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${() => THEME.COLORS.BUTTONS.GREY.DISABLED.BACKGROUND};
  }
`;
export { MainStyledButton, RedStyledButton, NavigationStyledButton, GreyStyledButton };
