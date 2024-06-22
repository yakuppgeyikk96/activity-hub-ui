import { IActivity } from "@/app/_models/activities/IActivity";

export interface IActivityListProps {
  activities: IActivity[];
  gCloudBaseUrl: string | undefined;
}
