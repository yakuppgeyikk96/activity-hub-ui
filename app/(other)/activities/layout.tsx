import OtherLayout from "@/app/_layouts/OtherLayout";

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OtherLayout>
      <section className="flex align-items-center gap-4">
        <aside className="w-20rem bg-red-300">Filter</aside>
        <section className="flex-1 my-4">{children}</section>
      </section>
    </OtherLayout>
  );
}
