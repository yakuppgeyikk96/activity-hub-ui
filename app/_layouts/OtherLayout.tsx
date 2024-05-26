import Appbar from "../_components/Appbar";
import Navbar from "../_components/Navbar";

interface IOtherLayoutProps {
  children: React.ReactNode;
}

export default function OtherLayout({ children }: IOtherLayoutProps) {
  return (
    <>
      <header>
        <Appbar />
      </header>
      <main>{children}</main>
      <div>other footer</div>
    </>
  );
}
