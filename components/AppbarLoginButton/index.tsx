"use client";

import { useLoginModalStore } from "@/store/LoginModal";
import { LoginOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function AppbarLoginButton() {
  const openLoginDialog = useLoginModalStore((state: any) => state.open);

  return (
    <Button
      startIcon={<LoginOutlined />}
      variant="contained"
      onClick={openLoginDialog}
    >
      Login
    </Button>
  );
}
