import Navbar from "../_components/Navbar";

interface IOtherLayoutProps {
  children: React.ReactNode;
}

export default function OtherLayout({ children }: IOtherLayoutProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <div>other footer</div>
    </>
  );
}
