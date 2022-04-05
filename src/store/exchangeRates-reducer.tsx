import {InferActionsTypes} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export const actions = {
    setExchangeRates: (payload: Record<string, Valute>) => ({type: "SET-EXCHANGE-RATES", payload} as const)
}

type ActionsType = InferActionsTypes<typeof actions>

export type Valute = {
    id: number,
    name: string,
    charCode: string,
    value: number
}

type ValuteState = { valute: Record<string, Valute> }

const initialState: ValuteState = {
    valute: {}
}

const contentReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-EXCHANGE-RATES":
            let copyState = {...state}
            let copyValute = {...state.valute}
            copyValute = action.payload
            copyState.valute = copyValute
            return copyState

        default:
            return state;
    }
}

//thunks

export const setValute = (payload: Record<string, Valute>) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(actions.setExchangeRates(payload))
}

export default contentReducer;