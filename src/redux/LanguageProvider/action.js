const actions = {
    SET_LANGUAGE: "SET_LANGUAGE",

    setLanguage: (lang) => ({
        type: actions.SET_LANGUAGE,
        lang: lang || "vi"
    })
}

export default actions;