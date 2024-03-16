import Navbar from "../_components/Navbar";

interface IHomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLayoutProps) {
  return (
    <>
      <header>
        <Navbar />
        <div>searchbar</div>
      </header>
      <main>{children}</main>
      <div>footer</div>
    </>
  );
}
