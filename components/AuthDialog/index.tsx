"use client";

import { useLoginModalStore } from "@/store/LoginModal";
import { Box, Modal, Tab, Tabs } from "@mui/material";
import * as styles from "./styles";
import AuthDialogTabs from "./AuthDialogTabs";
import AuthDialogTabPanels from "./AuthDialogTabPanels";

export default function AuthDialog() {
  const isOpen = useLoginModalStore((state: any) => state.isOpen);
  const close = useLoginModalStore((state: any) => state.close);

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={styles.authDialogContainer}>
        <AuthDialogTabs />
        <AuthDialogTabPanels />
      </Box>
    </Modal>
  );
}
