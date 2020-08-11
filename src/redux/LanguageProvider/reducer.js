import actions from "./action";

const initState = {
    lang: localStorage.getItem("lang") || "vi"
}

export default function (state = initState, action) {
    switch (action.type) {
        case actions.SET_LANGUAGE:
            return {...state, lang: action.lang}
        default:
            return state;
    }
}