import { Container } from "@mui/material";
import Appbar from "../_components/Appbar";
import Navbar from "../_components/Navbar";

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <>
      <header>
        <Appbar />
        <div>searchbar</div>
      </header>
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
      <div>footer</div>
    </>
  );
}
