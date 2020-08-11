const actions = {
    SET_THEME: "SET_THEME",

    setTheme: (themeId) => ({
        type: actions.SET_THEME,
        theme: themeId || "light"
    })
}

export default actions;