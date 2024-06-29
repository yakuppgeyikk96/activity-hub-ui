import { Container } from "@mui/material";
import Appbar from "../../components/Appbar";

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
