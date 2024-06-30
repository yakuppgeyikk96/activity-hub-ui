import { useLoginFormStore } from "@/store/LoginForm";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function PasswordInputEndAdornment() {
  const isPasswordVisible = useLoginFormStore(
    (state: any) => state.isPasswordVisible
  );
  const setIsPasswordVisibility = useLoginFormStore(
    (state: any) => state.setIsPasswordVisibility
  );

  return isPasswordVisible ? (
    <Box
      onClick={() => setIsPasswordVisibility(false)}
      sx={{ cursor: "pointer" }}
    >
      <VisibilityOutlined color="action" />
    </Box>
  ) : (
    <Box
      onClick={() => setIsPasswordVisibility(true)}
      sx={{ cursor: "pointer" }}
    >
      <VisibilityOffOutlined color="action" />
    </Box>
  );
}
