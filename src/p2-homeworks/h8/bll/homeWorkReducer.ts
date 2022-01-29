

export type StateItemType = {_id: number, name: string, age: number}
export type InitialStateType = Array<StateItemType>

export type ActionsType = sortByNameUpType | sortByAgeType;
export const homeWorkReducer = (state: InitialStateType, action: ActionsType): InitialStateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix

            const copyState = [...state];

            if(action.payload === 'up') {
                return copyState.sort((a, b) => {
                    if(a.name >= b.name) { return 1 }
                    else { return -1 }
                })
            }

            if(action.payload === 'down') {
                return copyState.sort((a, b) => {
                    if(a.name <= b.name) { return 1 }
                    else { return -1 }
                })
            }

            return copyState;
        }


        case 'check': {
            // need to fix
            const copyState = [...state];



            return copyState.filter(el => el.age > action.payload);
        }
        default: return state
    }
}

type sortByNameUpType = {
    type: 'sort'
    payload: string | number
}

type sortByAgeType = {
    type: 'check'
    payload: string | number
}

export const sortByName = (payload: string | number): sortByNameUpType => {
    return {type: 'sort', payload}
}

export const checkByAge = (payload: string | number): sortByAgeType => {
    return {type: 'check', payload}
}
