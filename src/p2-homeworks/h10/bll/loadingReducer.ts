const LOADING = 'LOADING';

type ActionsType = LoadingType;
type InitialStateType = {
    loading: boolean
}
const initState = {
    loading: false
}

export const loadingReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case LOADING: {

            return {
                ...state,
                loading: !state.loading
            }
        }

        default: return state
    }
}

type LoadingType = { type: typeof LOADING };
export const loadingAC = (): LoadingType => {
    return {type: LOADING}
} // fix any