import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

const authDialogContainer: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    md: "70%",
    lg: "50%",
  },
  bgcolor: "background.paper",
  borderRadius: "12px",
  padding: "2rem",
};

export { authDialogContainer };
