import AlarmIcon from "@/components/Icons/AlarmIcon";
import DurationIcon from "@/components/Icons/DurationIcon";
import PersonCapacityIcon from "@/components/Icons/PersonCapacityIcon";
import formatDate from "@/utils/formatDate";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IActivityCardProps } from "./ActivityCard.model";
import LocationIcon from "@/components/Icons/LocationIcon";
import { ReactNode } from "react";
import PersonIcon from "@/components/Icons/PersonIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import CommunityIcon from "@/components/Icons/CommunityIcon";
import * as styles from "./styles";

export default function ActivityCard({
  itemId,
  gCloudBaseUrl,
  title,
  description,
  date,
  capacity,
  duration,
  location,
  user,
}: IActivityCardProps) {
  const renderOwnerOfActivity = (): ReactNode => {
    if (user) {
      switch (user.type) {
        case "individual":
          return (
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <PersonIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Box>
          );
        case "company":
          return (
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <CompanyIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Box>
          );
        case "community":
          return (
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <CommunityIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Box>
          );
      }
    }
    return <></>;
  };

  return (
    <Card sx={styles.activityCardContainer} elevation={0}>
      <CardActionArea sx={styles.activityCardActionArea} disableRipple>
        <CardMedia
          component="img"
          image={gCloudBaseUrl ? `${gCloudBaseUrl}/activity/${itemId}` : ""}
          alt={itemId}
          sx={{ width: "35%" }}
        />
        <CardContent sx={styles.activityCardContent1}>
          {renderOwnerOfActivity()}
          <Box component="div">
            <Typography gutterBottom variant="body1" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
        <CardContent sx={styles.activityCardContent2}>
          <Box component="div" sx={styles.activityInformationContainer}>
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <AlarmIcon />
              <Typography variant="body2" color="text.secondary">
                {formatDate(date, "MMM DD, YYYY")}
              </Typography>
            </Box>
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <PersonCapacityIcon />
              <Typography variant="body2" color="text.secondary">
                {`${capacity} persons`}
              </Typography>
            </Box>
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <DurationIcon />
              <Typography variant="body2" color="text.secondary">
                {`${duration}h`}
              </Typography>
            </Box>
            <Box component="div" sx={styles.activityInformationItemContainer}>
              <LocationIcon />
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          </Box>

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
}
