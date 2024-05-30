"use client";

import { IActivity } from "@/app/_models/activities/IActivity";
import "./styles.scss";
import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface IActivityListProps {
  activities: IActivity[];
  gCloudBaseUrl: string | undefined;
}

export default function ActivityList({
  activities,
  gCloudBaseUrl,
}: IActivityListProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderItem = (item: IActivity, index: number) => {
    return (
      <Card key={index} sx={{ width: "100%", display: "flex" }}>
        <CardActionArea
          sx={{ display: "flex", justifyContent: "flex-start", gap: "1rem" }}
          disableRipple
        >
          <CardMedia
            component="img"
            image={gCloudBaseUrl ? `${gCloudBaseUrl}/activity/${item._id}` : ""}
            alt={item._id}
            sx={{ width: "35%" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "40%",
            }}
          >
            <Box component="div">
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </CardContent>
          <CardContent
            sx={{
              height: "100%",
              width: "25%",
              borderLeft: "1px dashed #e0e0e0",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.date.toString()}
            </Typography>

            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{ width: "100%" }}
            >
              Learn More
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
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
