import actions from "./action";

const initState = {
    theme: localStorage.getItem("theme") || "light"
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.SET_THEME:
            return {...state, theme: action.theme}
        default:
            return state
    }
}