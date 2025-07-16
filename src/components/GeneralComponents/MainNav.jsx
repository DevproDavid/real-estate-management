import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function MainNav() {
  const navItemsLeft = [
    { label: 'Properties', path: '/properties' },
    { label: 'Find my Agents', path: '/find-agents' },
    { label: 'Guides', path: '/guides' },
  ];

  const navItemsRight = [
    { label: 'Service Intelligence', path: '/services' }, // ✅ now links to /services
    { label: 'Agent Portal', path: '/agent-portal' },
    { label: 'Events', path: '/events' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const languageRef = useRef(null);

  const handleLanguageUpdate = () => {
    const selected = languageRef.current?.value;
    if (selected) {
      setSelectedLanguage(selected.slice(0, 2).toUpperCase());
    }
    setShowLanguageModal(false);
  };

  const NavLink = ({ item }) => (
    <Link
      to={item.path}
      onClick={() => setMenuOpen(false)}
      className="relative group text-lg transition-all duration-300 font-semibold whitespace-nowrap px-4 py-3 text-black hover:text-[#22965D] w-full border-b md:border-none md:w-auto md:px-3 md:py-2"
    >
      <span className="relative z-10 group-hover:text-[#22965D]">{item.label}</span>
      <span className="hidden md:block absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#22965D] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
  );

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50">
      {/* 🌐 Mobile Top Bar */}
      <div className="flex md:hidden justify-between items-center px-2 py-2 fixed top-1 left-4 right-4 -z-50 text-black">
        <button
          ref={toggleRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white"
          aria-label="Toggle menu"
        >
          <i className={`text-gray-900 fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <Link to="/" className="mx-10 shrink-0">
  <img
    src={logo}
    alt="company logo"
    className="h-14 w-14"
  />
</Link>

        <button
          onClick={() => setShowLanguageModal(true)}
          className="flex gap-2 items-center text-[13px] hover:text-[#22965D]"
          aria-label="Select language"
        >
          <i className="text-gray-900 fas fa-globe text-[18px]"></i>
          <span className="text-gray-900 text-[18px]">{selectedLanguage}</span>
        </button>
      </div>

      {/* 🖥️ Desktop Top Nav */}
      <div className="hidden md:flex justify-between items-center bg-gray-100 px-48 py-2 shadow text-sm mb-3">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => setShowLanguageModal(true)}
            className="flex items-center space-x-1 text-[15px] hover:text-[#22965D]"
          >
            <i className="fas fa-globe text-[17px]"></i>
            <span>{selectedLanguage}</span>
          </button>

          <div className="text-[15px] hover:text-[#22965D] cursor-pointer">
            <i className="fas fa-gear mr-1"></i> Site settings
          </div>
        </div>

        <div className="flex items-center space-x-6 font-medium text-sm">
          <Link to="/favourites" className="hover:text-[#22965D]">
            <i className="fas fa-heart mr-1"></i>Favourite properties
          </Link>
          <Link to="/saved-searches" className="hover:text-[#22965D]">
            <i className="fas fa-star mr-1"></i>Saved searches
          </Link>
          <Link to="/login" className="hover:text-[#22965D]">
            <i className="fas fa-user mr-1 rounded-full bg-gray-200"></i>Login
          </Link>
        </div>
      </div>

      {/* 🖥️ Main Navigation */}
      <div className="bg-transparent md:bg-white text-black px-4 md:pb-5">
        <div className="hidden md:flex justify-center items-center text-lg px-2 sm:px-4 md:px-6 lg:px-10 xl:px-16 w-full mt-4">
          <div className="flex items-center gap-5 justify-center w-full">
            {navItemsLeft.map((item, i) => (
              <NavLink key={i} item={item} />
            ))}
<Link to="/" className="mx-10 shrink-0">
  <img
    src={logo}
    alt="company logo"
    className="h-14 w-14"
  />
</Link>
            {navItemsRight.map((item, i) => (
              <NavLink key={i + navItemsLeft.length} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 🌐 Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Select Language</h2>
            <select
              ref={languageRef}
              className="w-full border p-2 rounded mb-4"
            >
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLanguageModal(false)}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLanguageUpdate}
                className="px-3 py-1 bg-[#22965D] text-white rounded hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 📱 Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* 📱 Mobile Slide Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex p-4 justify-between">
          <Link to="/">
  <img src={logo} alt="logo" className="h-10 w-10" />
</Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl text-black"
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="flex flex-col">
          {navItemsLeft.map((item, i) => (
            <NavLink key={i} item={item} />
          ))}
          {navItemsRight.map((item, i) => (
            <NavLink key={i + navItemsLeft.length} item={item} />
          ))}
          <div className="mt-4 border-t pt-4 px-4 space-y-2">
            <div className="text-[15px] hover:text-[#22965D] cursor-pointer">
              <i className="fas fa-gear mr-1"></i> Site settings
            </div>
            <Link to="/favourites" className="block hover:text-[#22965D]">
              <i className="fas fa-heart mr-1"></i>Favourite properties
            </Link>
            <Link to="/saved-searches" className="block hover:text-[#22965D]">
              <i className="fas fa-star mr-1"></i>Saved searches
            </Link>
            <Link to="/login" className="block hover:text-[#22965D]">
              <i className="fas fa-user mr-1 rounded-full bg-gray-200"></i>Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
