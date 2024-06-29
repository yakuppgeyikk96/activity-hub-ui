"use client";

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
import * as Styled from "./ActivityCard.styled";
import { ReactNode } from "react";
import PersonIcon from "@/components/Icons/PersonIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import CommunityIcon from "@/components/Icons/CommunityIcon";

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
            <Styled.ActivityInformationItemContainer>
              <PersonIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Styled.ActivityInformationItemContainer>
          );
        case "company":
          return (
            <Styled.ActivityInformationItemContainer>
              <CompanyIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Styled.ActivityInformationItemContainer>
          );
        case "community":
          return (
            <Styled.ActivityInformationItemContainer>
              <CommunityIcon />
              <Typography variant="subtitle1" color="text.primary">
                {user.name}
              </Typography>
            </Styled.ActivityInformationItemContainer>
          );
      }
    }
    return <></>;
  };

  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      <CardActionArea
        sx={{ display: "flex", justifyContent: "flex-start", gap: "1rem" }}
        disableRipple
      >
        <CardMedia
          component="img"
          image={gCloudBaseUrl ? `${gCloudBaseUrl}/activity/${itemId}` : ""}
          alt={itemId}
          sx={{ width: "35%" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "40%",
            gap: "1rem",
          }}
        >
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
        <CardContent
          sx={{
            height: "100%",
            width: "25%",
            borderLeft: "1px dashed #e0e0e0",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <Styled.ActivityInformationContainer>
            <Styled.ActivityInformationItemContainer>
              <AlarmIcon />
              <Typography variant="body2" color="text.secondary">
                {formatDate(date, "MMM DD, YYYY")}
              </Typography>
            </Styled.ActivityInformationItemContainer>
            <Styled.ActivityInformationItemContainer>
              <PersonCapacityIcon />
              <Typography variant="body2" color="text.secondary">
                {`${capacity} persons`}
              </Typography>
            </Styled.ActivityInformationItemContainer>
            <Styled.ActivityInformationItemContainer>
              <DurationIcon />
              <Typography variant="body2" color="text.secondary">
                {`${duration}h`}
              </Typography>
            </Styled.ActivityInformationItemContainer>
            <Styled.ActivityInformationItemContainer>
              <LocationIcon />
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Styled.ActivityInformationItemContainer>
          </Styled.ActivityInformationContainer>

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
