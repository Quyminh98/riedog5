import { SVGProps } from "react";

export const MenuIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M4 9.33334H28"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4 16H28"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4 22.6667H28"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
