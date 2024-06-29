import { IActivity } from "@/models/activities/IActivity";

export interface IActivityListProps {
  activities: IActivity[];
  gCloudBaseUrl: string | undefined;
}
