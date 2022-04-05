import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import contentReducer from "./exchangeRates-reducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    contentStore: contentReducer
})

type RootReducer = typeof rootReducer;
export type AppState = ReturnType<RootReducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;

type PropertiesType<T> = T extends { [key: string]: infer u } ? u : never
export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>//без any в данном случае
// сделать не получилось.Такую типизацию redux-store я подсмотрела на видеокурсе по react-redux
