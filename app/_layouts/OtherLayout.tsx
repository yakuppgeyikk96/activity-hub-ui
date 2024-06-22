import { Box, Container } from "@mui/material";
import Appbar from "../_components/Appbar";

interface IOtherLayoutProps {
  children: React.ReactNode;
}

export default function OtherLayout({ children }: IOtherLayoutProps) {
  return (
    <>
      <header>
        <Appbar />
      </header>
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
      <footer>
        <Container maxWidth="xl">
          <Box
            component="div"
            sx={{ height: "4rem", border: "1px solid #e0e0e0" }}
          >
            footer
          </Box>
        </Container>
      </footer>
    </>
  );
}
