import { RiksTvAdminPortal } from "./../state";
import { combineReducers } from "redux";
import { AppReducer } from "./../app";
import { MetadataAdminReducer } from "./../metadataAdmin";
import { connectRouter } from "connected-react-router";
import { History } from "history"

const createRootReducer = (history: History) => combineReducers<RiksTvAdminPortal>({
    appState: AppReducer,
    metadataAdmin: MetadataAdminReducer,
    router: connectRouter(history),
})

export default createRootReducer