import { RiksTvAdminPortal } from "./../state";
import { combineReducers, Reducer } from "redux";
import { AppReducer } from "./../app";
import { MetadataAdminReducer } from "./../metadataAdmin";
import { routerReducer } from 'react-router-redux';

const reducer: Reducer<RiksTvAdminPortal> = combineReducers<RiksTvAdminPortal>({
    appState: AppReducer,
    metadataAdmin: MetadataAdminReducer,
    router: routerReducer
});

export default reducer;