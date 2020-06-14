import NavigationReducer from "./view/navigationReducer";
import { combineReducers, Reducer } from "redux";
import { AppViewState, AppState, AppDataState } from "../state";
import IsLoggedInReducer from "./data/isLoggedInReducer";

const viewStateReducer: Reducer<AppViewState> = combineReducers<AppViewState>({
    navigationState: NavigationReducer,
});

const dataStateReducer: Reducer<AppDataState> = combineReducers<AppDataState>({
    isLoggedIn: IsLoggedInReducer
});

const reducer: Reducer<AppState> = combineReducers<AppState>({
    view: viewStateReducer,
    data: dataStateReducer
});


export default reducer;