interface ChangeThemeEvent {
    isDark: boolean
}

export const changeTheme = (isDark: boolean) => {
    let event = new CustomEvent<ChangeThemeEvent>("themeChanged", {
        detail: {
            isDark
        }
    });

    window.dispatchEvent(event);
}