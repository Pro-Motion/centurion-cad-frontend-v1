= = = = = COMPONENTS = = = = =

We have 3 types of the components
Their names must be clear and contain at least two words in the PascalCase.

- STYLED(ATOMIC) - only return UI and UI-logic
  EXP: StyledInput, StyledSelect, StyledCard, StyledTooltip etc.

        STYLED components also called "ATOMIC"
        These components are used everywhere and they are tiny, for example it are inputs, buttons, text-links etc.

---

- LOGICAL(MOLECULAR) - include business logic or/and provide it
  EXP: LoginForm, CreateUserForm, TooltipProvider etc.

       LOGICAL components also called "MOLECULAR".
       These components include ATOMIC components and provide some business-logic

- BASE - can include STYLED and/or LOGICAL components. These are only for basic particles
