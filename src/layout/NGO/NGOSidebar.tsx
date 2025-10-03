import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaMap, 
  FaUsers, 
  FaChartLine, 
  FaVideo, 
  FaCog,
  FaBars,
  FaTimes
} from "react-icons/fa";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/ngo", icon: <FaHome /> },
  { name: "Mapa das Fazendas", path: "/ngo/farm-map", icon: <FaMap /> },
  { name: "Agricultores", path: "/ngo/farmers", icon: <FaUsers /> },
  { name: "Relatórios", path: "/ngo/farm-reports", icon: <FaChartLine /> },
  { name: "Conteúdo Educativo", path: "/ngo/videos", icon: <FaVideo /> },
];

export default function NGOSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-green-600 text-white"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center py-6 px-4 border-b border-gray-200">
            <Link to="/ngo" className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="Farm Navigators"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-green-600">
                Farm Navigators
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-green-100 text-green-700 border-r-4 border-green-600' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/ngo/settings"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors duration-200"
            >
              <FaCog className="mr-3 text-lg" />
              <span className="font-medium">Configurações</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}