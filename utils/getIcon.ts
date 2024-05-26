import HomeIcon from "@/app/_components/Icons/HomeIcon";
import LinkIcon from "@/app/_components/Icons/LinkIcon";
import React from "react";

const Icons: { [key: string]: React.ComponentType<any> } = {
  HomeIcon,
  LinkIcon,
};

type IconComponentType = React.ComponentType<any>;

const getIcon = (iconName: string): IconComponentType | null => {
  return Icons[iconName] || null;
};

export default getIcon;
