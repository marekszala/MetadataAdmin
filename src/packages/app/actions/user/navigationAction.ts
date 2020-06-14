import { Action, createActionFactory, Feature } from "../../../shared";

export const openMetadataAdminClicked = createActionFactory<void>("OpenMetadataAdminClicked", Feature.Framework);
