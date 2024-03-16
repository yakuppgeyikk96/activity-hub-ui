import { MenuItem } from "primereact/menuitem";
import { TabMenu, TabMenuTabChangeEvent } from "primereact/tabmenu";
import { SyntheticEvent, useState } from "react";
import "./AuthDialog.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface IAuthDialogContentProps {
  hide: (e: SyntheticEvent<Element, Event>) => void;
}

export default function AuthDialogContent({ hide }: IAuthDialogContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items: MenuItem[] = [
    {
      label: "Login",
      icon: "pi pi-sign-in",
    },
    { label: "Signup", icon: "pi pi-user-plus" },
  ];

  const handleTabChange = (e: TabMenuTabChangeEvent) => {
    setActiveIndex(e.index);
  };

  return (
    <div
      id="auth-dialog-content"
      className="flex flex-column px-6 py-5 gap-4 bg-white border-round"
    >
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={handleTabChange}
      />
      {activeIndex === 0 ? <LoginForm /> : <SignupForm />}
    </div>
  );
}
