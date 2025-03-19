import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.jpg";

const menuItems = [
  { path: "/about", label: "회사소개" },
  { path: "/products", label: "제품소개" },
  { path: "/board", label: "알림센터" },
  { path: "/contact", label: "문의하기" },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black py-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center lg:ml-12 lg:mr-8">
          <Link to="/">
            <img
              src={Logo}
              alt="삼정유리 로고"
              className="h-10 w-auto mr-0" // 이미지 크기 조정 + 오른쪽 여백
            />
          </Link>
          <h1 className="text-xl lg:text-2xl font-black lg:ml-3 lg:mr-8">
            <a href="/">주식회사 삼정유리</a>
          </h1>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 text-xl font-bold">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
