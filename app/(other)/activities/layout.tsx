import OtherLayout from "@/app/_layouts/OtherLayout";
import { Box } from "@mui/material";

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box component="section" sx={{ display: "flex", gap: "2rem" }}>
      <Box
        component="aside"
        sx={{
          width: "25rem",
          height: "calc(100vh - 10rem)",
          border: "1px solid #e0e0e0",
        }}
      >
        Filter
      </Box>
      <Box
        component="section"
        sx={{
          flex: 1,
          paddingBlock: "2rem",
          minHeight: "calc(100vh - 10rem)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
