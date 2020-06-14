import { combineReducers, Reducer } from "redux";
import { MetadataAdminState, MetadataAdminViewState, MetadataAdminDataState } from "../state";
import SearchViewModelReducer from "./view/searchModuleViewReducer";
import ModuleNavigationReducer from "./view/moduleNavigationReducer";
import SearchModuleDataReducer from "./data/searchModuleDataReducer";

const dataReducer: Reducer<MetadataAdminDataState> = combineReducers<MetadataAdminDataState>({
    searchModuleState: SearchModuleDataReducer
});

const metadataViewReducer: Reducer<MetadataAdminViewState> = combineReducers<MetadataAdminViewState>({
    currentModule: ModuleNavigationReducer,
    searchModule: SearchViewModelReducer
});

const reducer: Reducer<MetadataAdminState> = combineReducers<MetadataAdminState>({
    view: metadataViewReducer,
    data: dataReducer
});

export default reducer;