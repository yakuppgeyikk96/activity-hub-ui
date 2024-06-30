import { Box, Tab, Tabs } from "@mui/material";
import * as styles from "./styles";
import { useAuthDialogTabStore } from "@/store/AuthDialogTab";

export default function AuthDialogTabs() {
  const tabIndex = useAuthDialogTabStore((state: any) => state.tabIndex);
  const setTabIndex = useAuthDialogTabStore((state: any) => state.setTabIndex);

  return (
    <Box sx={styles.authDialogTabsContainer}>
      <Tabs value={tabIndex} sx={{ width: "100%" }}>
        <Tab label="Login" onClick={() => setTabIndex(0)}></Tab>
        <Tab label="Register" onClick={() => setTabIndex(1)}></Tab>
      </Tabs>
    </Box>
  );
}
