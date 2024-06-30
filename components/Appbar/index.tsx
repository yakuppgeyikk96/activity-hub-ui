import { DarkModeOutlined } from "@mui/icons-material";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import DesktopNavbar from "../DesktopNavbar";
import AppbarLoginButton from "../AppbarLoginButton";
import getToken from "@/actions/common/get-token";

export default function Appbar() {
  const token = getToken();

  console.log(token);

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        height: "6rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Image
            src="/images/activityhub-logo.png"
            alt="logo"
            width={80}
            height={80}
          />
          <DesktopNavbar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              startIcon={
                <DarkModeOutlined fontSize="large" sx={{ color: "#333" }} />
              }
            />
            {!token ? <AppbarLoginButton /> : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
