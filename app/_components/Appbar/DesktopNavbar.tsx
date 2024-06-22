import { Box } from "@mui/material";
import NavLink from "./NavLink";
import { navbarItems } from "./constants";

export default function DesktopNavbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        gap: "2rem",
        display: {
          xs: "none",
          md: "flex",
        },
        paddingLeft: "4rem",
      }}
    >
      {navbarItems.map((item) => (
        <NavLink
          key={item.key}
          href={item.href}
          title={item.title}
          iconName={item.iconName}
        />
      ))}
    </Box>
  );
}
