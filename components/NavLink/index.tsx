"use client";

import Link from "next/link";
import * as Styled from "./Navlink.styled";
import { Typography } from "@mui/material";
import { Suspense } from "react";
import getIcon from "@/utils/getIcon";
import { usePathname } from "next/navigation";

interface INavLinkProps {
  href: string;
  title: string;
  iconName: string;
}

export default function NavLink({ title, href, iconName }: INavLinkProps) {
  const Icon = getIcon(iconName);
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <Styled.NavLinkContainer
        color={(theme) => (isActive ? theme.palette.primary.main : "#333")}
      >
        <Suspense fallback={<></>}>{Icon ? <Icon /> : null}</Suspense>
        <Typography fontWeight={600} color="inherit" textTransform="capitalize">
          {title}
        </Typography>
      </Styled.NavLinkContainer>
    </Link>
  );
}
