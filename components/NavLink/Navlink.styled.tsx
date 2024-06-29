import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const NavLinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "&:hover": {
    cursor: "pointer",
  },
}));
