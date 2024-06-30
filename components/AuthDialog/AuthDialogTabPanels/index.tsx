import { useAuthDialogTabStore } from "@/store/AuthDialogTab";
import { Box } from "@mui/material";
import { AuthDialogTabs } from "../AuthDialog.enums";
import LoginForm from "@/components/LoginForm";

export default function AuthDialogTabPanels() {
  const tabIndex = useAuthDialogTabStore((state: any) => state.tabIndex);

  return (
    <Box>
      <div role="tabpanel" hidden={tabIndex !== AuthDialogTabs.LOGIN}>
        <LoginForm />
      </div>
      <div role="tabpanel" hidden={tabIndex !== AuthDialogTabs.REGISTER}>
        Register
      </div>
    </Box>
  );
}
