"use client";

import { IActivity } from "@/models/activities/IActivity";
import { Box, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { IActivityListProps } from "./ActivityList.model";
import ActivityCard from "../ActivityCard";
import "../styles.scss";

export default function ActivityList({
  activities,
  gCloudBaseUrl,
}: IActivityListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(activities);
    setMounted(true);
  }, []);

  const renderItem = (item: IActivity, index: number) => {
    return (
      <ActivityCard
        itemId={item._id}
        gCloudBaseUrl={gCloudBaseUrl}
        title={item.title}
        description={item.description}
        date={item.date.toString()}
        capacity={item.capacity}
        duration={item.duration}
        location={item.location}
        user={item.createdBy}
      />
    );
  };

  const listActivities = () => {
    const activityList = activities.map((activity, index) =>
      renderItem(activity, index)
    );
    return <Box component="section">{activityList}</Box>;
  };

  return mounted ? (
    listActivities()
  ) : (
    <Stack spacing={2}>
      <Skeleton variant="rounded" height={250} />
      <Skeleton variant="rounded" height={250} />
      <Skeleton variant="rounded" height={250} />
    </Stack>
  );
}
