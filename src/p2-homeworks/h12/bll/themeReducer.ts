const CHANGE_THEME = 'CHANGE_THEME';

export type InitialThemeStateType = { themeList: string[], currentTheme: ThemeType };
export type ThemeType = 'dark' | 'red' | 'some';
type ActionsType = ChangeThemeType;

const initState: InitialThemeStateType = {
    themeList: ['dark', 'red', 'some'],
    currentTheme: "some"
};


export const themeReducer = (state: InitialThemeStateType = initState, action: ActionsType): InitialThemeStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                currentTheme: action.theme
            }
        }
        default: return state;
    }
};

type ChangeThemeType = {type: typeof CHANGE_THEME, theme: ThemeType};
export const changeThemeC = (theme: ThemeType): ChangeThemeType => {
    return  {type: CHANGE_THEME, theme}
}; // fix any