"use client";

import { DarkModeOutlined, LoginOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";

export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <DesktopNavbar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              startIcon={
                <DarkModeOutlined fontSize="large" sx={{ color: "#333" }} />
              }
            />
            <Button startIcon={<LoginOutlined />} variant="contained">
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
