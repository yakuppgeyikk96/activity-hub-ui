"use client";

import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import AuthDialog from "../Auth/AuthDialog";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const itemRenderer = (item: MenuItem) => (
    <NavbarItem
      label={item.label || ""}
      icon={item.icon || ""}
      route={item.url || ""}
    />
  );
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
      template: itemRenderer,
    },
    {
      label: "Activities",
      icon: "pi pi-users",
      url: "/activities",
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = isAuthenticated ? (
    <div className="flex align-items-center gap-4">
      <Button size="small" label="Create Activity" icon="pi pi-plus" />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
        size="large"
      />
    </div>
  ) : (
    <AuthDialog />
  );

  return (
    <div>
      <Menubar
        model={items}
        start={start}
        end={end}
        pt={{
          menu: {
            className: "flex-1 pl-4",
          },
        }}
        className="px-4"
      />
    </div>
  );
}
