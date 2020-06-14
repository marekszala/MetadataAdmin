import { buildReducer } from "../../../shared";
import { SearchModuleDataState } from "../../state";
import { loadAssetsCompletedAction } from "../../actions/data/loadAssetsAction";

export default buildReducer<SearchModuleDataState>()
    .handleDataAction(loadAssetsCompletedAction, (state, action) => {
        return {
            ...state,
            assets: action.payload
        };
    })
    .done({
        assets: []
    });