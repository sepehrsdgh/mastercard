"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbSmartHome } from "react-icons/tb";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { UserProvider } from "@/context/userContext";

export default function MainLayout({ children }) {
  const pathname = usePathname(); // Get the current path
  const mainRoutes = [
    { href: "/main/home", title: "Home", icon: <TbSmartHome size={20} /> },
    {
      href: "/main/deposit",
      title: "Deposit",
      icon: <TetherIconSVG size={20} />,
    },
    {
      href: "/main/transfer",
      title: "Transfer",
      icon: <BsArrowUpRightCircle size={20} />,
    },
    {
      href: "/main/profile",
      title: "Profile",
      icon: <FaRegCircleUser size={20} />,
    },
  ];
  return (
      <UserProvider>   
        <main className="bg-[#F6F8FA]">{children}</main>
      <footer className="fixed border-t-2 border-t-[#E5E5E5] bottom-0 left-0 py-3 right-0 bg-[#FDFDFD] flex items-center justify-around">
        {/* You can add your footer content here */}
        {mainRoutes.map((route, i) => (
          <Link
            href={route.href}
            key={i}
            className={`relative flex text-xs font-bold flex-col items-center transition-colors ease-in-out duration-300 gap-y-1 ${
              pathname === route.href ? "text-[#5848A8]" : "text-[#323232d5]"
            }`}
          >
            {route.icon}
            {route.title}
            {pathname === route.href && (
              <div className="absolute -bottom-3 -right-3 -left-3 bg-[#5848A8] h-0.5"></div>
            )}
          </Link>
        ))}
      </footer>
        </UserProvider>
  );
}

const TetherIconSVG = () => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_129_702)">
        <path
          d="M4.4375 2.5H17.5625V5.475H4.4375V2.5ZM12.9688 10.95V17.5125H9.03125V10.95H12.9688Z"
          fill="#323232"
          fillOpacity="0.8"
        />
        <path
          d="M11 7.1875C6.19628 7.1875 2.31128 8.1 2.31128 9.2125C2.31128 10.325 6.2094 11.2375 11 11.2375C15.7907 11.2375 19.6888 10.325 19.6888 9.2125C19.6888 8.1 15.7907 7.1875 11 7.1875ZM11 10.3125C6.56378 10.3125 2.96753 9.6875 2.96753 8.9125C2.96753 8.1375 6.56378 7.5125 11 7.5125C15.4363 7.5125 19.0325 8.1375 19.0325 8.9125C19.0325 9.6875 15.4363 10.3125 11 10.3125Z"
          fill="#323232"
          fillOpacity="0.8"
        />
        <path
          d="M11 9.85C11.6825 9.85 12.3387 9.8375 12.9687 9.8V4.6875H9.03125V9.8C9.66125 9.825 10.3175 9.85 11 9.85Z"
          fill="#323232"
          fillOpacity="0.8"
        />
        <path
          d="M17.7623 19.4315V12.5508H19.3234V19.4315H17.7623ZM15.1025 16.7717V15.2106H21.9832V16.7717H15.1025Z"
          fill="#323232"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <clipPath id="clip0_129_702">
          <rect
            width="21"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
