import { IconProps } from "./IconProps";

export default function AlarmIcon({ size = "24" }: IconProps) {
  const primaryColor = "#333";
  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="13"
        r="8"
        stroke={primaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9V13L15 15"
        stroke={primaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 3L21 6"
        stroke={primaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 3L3 6"
        stroke={primaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
