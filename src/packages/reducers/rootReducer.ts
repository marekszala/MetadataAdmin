import { RiksTvAdminPortal } from "./../state";
import { combineReducers, Reducer } from "redux";
import { AppReducer } from "./../app";
import { MetadataAdminReducer } from "./../metadataAdmin";

const reducer: Reducer<RiksTvAdminPortal> = combineReducers<RiksTvAdminPortal>({
    appState: AppReducer,
    metadataAdmin: MetadataAdminReducer,
});

export default reducer;