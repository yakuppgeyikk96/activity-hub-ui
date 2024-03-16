import Link from "next/link";

interface INavbarItemProps {
  label: string;
  icon: string;
  route: string;
}

export default function NavbarItem({ label, icon, route }: INavbarItemProps) {
  return (
    <Link href={route} legacyBehavior>
      <a className="flex align-items-center p-menuitem-link">
        <span className={icon} />
        <span className="mx-2">{label}</span>
      </a>
    </Link>
  );
}
