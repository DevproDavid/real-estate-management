import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("Properties");
  const [isMobile, setIsMobile] = useState(false);

  const navItemsAll = [
    "Properties",
    "Transactions",
    "TruEstimates",
    "Projects",
    "Agents",
  ];

  const navItemsMobile = ["Properties", "Projects", "Transactions"];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (label) => {
    setActive(label);
  };

  const navItems = isMobile ? navItemsMobile : navItemsAll;

  return (
    <div className={`flex justify-center w-full px-2`}>
      <nav
        className={`flex items-center justify-between ${
          isMobile
            ? "gap-1.5 text-sm py-1 px-1.5 bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            : "gap-5 text-xl bg-gray-100 text-black py-1.5 px-1.5 rounded-lg md:w-32 mx-auto"
        }`}
        style={{
          width: isMobile ? "95%" : "auto",      // reduced width
          maxWidth: isMobile ? "400px" : "auto", // max width optional
          margin: isMobile ? "0 auto" : "unset", // center horizontally
        }}
      >
        {navItems.map((item, index) => (
          <a
            href="#"
            key={index}
            onClick={() => handleClick(item)}
            className={`cursor-pointer flex items-center justify-center rounded-lg whitespace-nowrap transition-colors
              ${
                active === item
                  ? "bg-[#D1F0E2] text-green-600 font-bold px-3 py-1.5"
                  : "hover:bg-gray-200 px-3 py-1.5"
              }
            `}
            style={{
              flex: isMobile ? 1 : "unset",
              minWidth: isMobile ? "0" : "auto",
              textAlign: "center",
              fontSize: isMobile ? "0.875rem" : "1.125rem", // 14px vs 18px
            }}
          >
            {item === "TruEstimates" ? (
              <>
                <span>Tru</span>
                <span className="font-bold">Estimates</span>
                <sup className="text-xs font-semibold">TM</sup>
              </>
            ) : (
              item
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
