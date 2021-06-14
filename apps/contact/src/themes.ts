interface AppTheme {
    borderColor: string,
    textColor: string,
    cardBodyColor: string,
    cardBodyShadow: string
}

export const BaseTheme: AppTheme = {
    borderColor: "var(--secondary-light)",
    textColor: "var(--black)",
    cardBodyColor: "var(--white)",
    cardBodyShadow: "2px 2px 8px rgb(193, 187, 134, 0.58)"
}

export const DarkTheme: AppTheme = {
    borderColor: "var(--secondary-dark)",
    textColor: "var(--white)",
    cardBodyColor: "var(--primary-dark)",
    cardBodyShadow: "2px 2px 8px rgb(43, 46, 70, 0.74)"
}