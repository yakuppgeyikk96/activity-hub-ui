"use client";

import { useLoginModalStore } from "@/store/LoginModal";
import { Box, Modal, Tab, Tabs } from "@mui/material";
import * as styles from "./styles";

export default function AuthDialog() {
  const isOpen = useLoginModalStore((state: any) => state.isOpen);
  const close = useLoginModalStore((state: any) => state.close);

  console.log(isOpen);

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={styles.authDialogContainer}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs value={0} sx={{ width: "100%" }}>
            <Tab label="Login"></Tab>
            <Tab label="Register"></Tab>
          </Tabs>
        </Box>
      </Box>
    </Modal>
  );
}
