
import { DefaultTheme } from "styled-components"

export const BaseTheme: DefaultTheme = {
    borderColor: "var(--secondary-light)",
    textColor: "var(--black)",
    cardBodyColor: "var(--white)",
    cardBodyShadow: "2px 2px 8px rgb(193, 187, 134, 0.58)",
    modalMask: "rgba(125, 125, 125, 0.41)",
    modalBodyColor: "var(--app-body-light)",
    modalHeaderColor: "var(--secondary-light)",
}

export const DarkTheme: DefaultTheme = {
    borderColor: "var(--secondary-dark)",
    textColor: "var(--white)",
    cardBodyColor: "var(--primary-dark)",
    cardBodyShadow: "2px 2px 8px rgb(43, 46, 70, 0.74)",
    modalMask: "rgba(53, 53, 53, 0.31)",
    modalBodyColor: "var(--primary-dark)",
    modalHeaderColor: "var(--app-body-dark)",
}