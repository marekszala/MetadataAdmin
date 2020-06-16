import {
    buildReducer,
    Action,
} from "../../../shared";
import { NavigationState } from "../../state";
import { appNavigationMenuEntryClicked } from "../../actions/user/navigationAction";

export default buildReducer<NavigationState>()
    .handle(appNavigationMenuEntryClicked, (state, action) => {

        return {
            ...state,
            currentRoute: action.payload
        };
    })
    .done({
        currentRoute: "metadataAdmin"
    });