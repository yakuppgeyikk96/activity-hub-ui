import OtherLayout from "../_layouts/OtherLayout";

export default function OtherLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <OtherLayout>{children}</OtherLayout>;
}
