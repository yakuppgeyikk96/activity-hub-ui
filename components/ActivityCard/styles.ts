import { SxProps, Theme } from "@mui/material";

export const activityInformationContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
};

export const activityInformationItemContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

export const activityCardContainer: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  border: 1,
  borderColor: "divider",
};

export const activityCardActionArea: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "1rem",
};

export const activityCardContent1: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "40%",
  gap: "1rem",
};

export const activityCardContent2: SxProps<Theme> = {
  height: "100%",
  width: "25%",
  borderLeft: "1px dashed #e0e0e0",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  justifyContent: "space-between",
};
