import { Dispatch } from "redux";
import { RiksTvApp } from "./../state";
import { appNavigationMenuEntryClicked } from "./../actions/user/navigationAction";

export function openRiksTVApp(dispatch: Dispatch): (riksTvApp: RiksTvApp) => void {
    return (riksTvApp): void => {
        dispatch(appNavigationMenuEntryClicked(riksTvApp));
    };
}