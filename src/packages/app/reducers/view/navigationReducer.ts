import {
    buildReducer,
    Action,
} from "../../../shared";
import { NavigationState } from "../../state";
import { openMetadataAdminClicked } from "../../actions/user/navigationAction";

export default buildReducer<NavigationState>()
    .handle(openMetadataAdminClicked, (state, _) => {

        return {
            ...state,
            currentRoute: "metadataAdmin"
        };
    })
    .done({
        currentRoute: "metadataAdmin"
    });