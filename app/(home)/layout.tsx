import HomeLayout from "../_layouts/HomeLayout";

export default function HomeLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout>{children}</HomeLayout>;
}
