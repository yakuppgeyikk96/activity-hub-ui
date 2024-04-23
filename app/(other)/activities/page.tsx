import { get } from "@/actions/activity/get";
import ActivityList from "./_components/ActivityList";

export default async function ActivitiesPage() {
  const activityData = await get();

  if (!activityData.result) {
    return <h1>No activities found</h1>;
  }

  return <ActivityList activities={activityData.result} />;
}
