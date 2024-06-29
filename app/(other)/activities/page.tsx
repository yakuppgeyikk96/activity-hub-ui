import { get } from "@/actions/activity/get";
import ActivityList from "../../../components/ActivityList";

export default async function ActivitiesPage() {
  const activityData = await get();
  const gCloudBaseUrl = process.env.GCLOUD_BASEURL;

  if (!activityData.result) {
    return <h1>No activities found</h1>;
  }

  return (
    <ActivityList
      activities={activityData.result}
      gCloudBaseUrl={gCloudBaseUrl}
    />
  );
}
