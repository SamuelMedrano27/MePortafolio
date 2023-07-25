import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import '../App.css';

const Layout = function () {
  const location = useLocation();

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li className="border-b border-black p-3">
              <NavLink exact to="/" activeClassName="bg-blue-500" className={`hover:bg-blue-300 ${location.pathname === '/' ? 'text-white' : 'text-black'} font-bold py-2 px-4 rounded`}>
                Home
              </NavLink>
            </li>
            <li className="border-b border-black p-3">
              <NavLink to="/blogs" activeClassName="bg-blue-500" className={`hover:bg-blue-300 ${location.pathname === '/blogs' ? 'text-white' : 'text-black'} font-bold py-2 px-4 rounded`}>
                Blogs
              </NavLink>
            </li>
            <li className="border-b border-black p-3">
              <NavLink to="/contact" activeClassName="bg-blue-500" className={`hover:bg-blue-300 ${location.pathname === '/contact' ? 'text-white' : 'text-black'} font-bold py-2 px-4 rounded`}>
                Contact
              </NavLink>
            </li>
            <li className="border-b border-black p-3">
              <NavLink to="/product" activeClassName="bg-blue-500" className={`hover:bg-blue-300 ${location.pathname === '/product' ? 'text-white' : 'text-black'} font-bold py-2 px-4 rounded`}>
                Product
              </NavLink>
            </li>
            <li className="border-b border-black p-3">
              <NavLink to="/services" activeClassName="bg-blue-500" className={`hover:bg-blue-300 ${location.pathname === '/services' ? 'text-white' : 'text-black'} font-bold py-2 px-4 rounded`}>
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;


