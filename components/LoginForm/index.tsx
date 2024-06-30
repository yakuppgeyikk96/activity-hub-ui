import { Box, Button, FormControl, Snackbar } from "@mui/material";
import TextInput from "../Form/TextInput";
import { AlternateEmail, KeyOutlined } from "@mui/icons-material";
import PasswordInputEndAdornment from "./PasswordInputEndAdornment";
import { useLoginFormStore } from "@/store/LoginForm";
import { login } from "@/actions/auth/login";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, {});
  const isPasswordVisible = useLoginFormStore(
    (state: any) => state.isPasswordVisible
  );
  const loginError = useLoginFormStore((state: any) => state.loginError);
  const setLoginError = useLoginFormStore((state: any) => state.setLoginError);

  if (state?.serverStatus?.message) {
    setLoginError(state.serverStatus.message);
  }

  console.log(loginError);

  return (
    <Box
      component="form"
      action={formAction}
      sx={{
        paddingTop: 4,
        paddingBottom: 2,
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <TextInput
          name="email"
          label="Email"
          type="email"
          fullWidth
          startAdornment={
            <AlternateEmail sx={{ marginRight: 1 }} color="action" />
          }
          error={!!state.clientStatus?.errors?.email}
          helperText={state.clientStatus?.errors?.email?.map((error: any) => (
            <p key={error}>{error}</p>
          ))}
        />
      </FormControl>
      <FormControl sx={{ width: "100%", marginTop: 4 }}>
        <TextInput
          name="password"
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          fullWidth
          startAdornment={
            <KeyOutlined sx={{ marginRight: 1 }} color="action" />
          }
          endAdornment={<PasswordInputEndAdornment />}
          error={!!state.clientStatus?.errors?.password}
          helperText={state.clientStatus?.errors?.password?.map(
            (error: any) => (
              <p key={error}>{error}</p>
            )
          )}
        />
      </FormControl>
      <Button
        sx={{ width: "100%", marginTop: "2rem" }}
        variant="contained"
        size="large"
        type="submit"
        disableElevation
      >
        Login
      </Button>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={loginError}
        message={loginError ? loginError : ""}
        onClose={() => setLoginError("")}
      />
    </Box>
  );
}
