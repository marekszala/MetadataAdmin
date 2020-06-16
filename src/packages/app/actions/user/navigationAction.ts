import { createActionFactory, Feature } from "../../../shared";
import { RiksTvApp } from "./../../state";

export const appNavigationMenuEntryClicked = createActionFactory<RiksTvApp>("OpenMetadataAdminClicked", Feature.Framework);
