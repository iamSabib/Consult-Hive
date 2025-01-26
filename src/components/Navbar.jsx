import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { GiTreeBeehive } from "react-icons/gi";
import { useContext } from 'react';

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user.email);

  const links = [
    //set loader to home true when clicked
    <li key="home"><Link to="/" onClick={() => setLoading(true)}>Home</Link></li>,
    <li key="all-service"><Link to="/allservice" onClick={() => setLoading(true)}>All Service</Link></li>,
    <li key="add-service"><Link to="/add-service">Add Service</Link></li>,
    <li key="manage-service"><Link to="/manage-service">Manage Service</Link></li>,
    <li key="faq"><Link to="/faq">FAQ</Link></li>,
    user && <li key="addmovies"><Link to="/user/addmovies">Add Movies</Link></li>,
    user && <li key="favmovies"><Link to={`/user/favmovies/${user.email}`}>Favorite Movies</Link></li>,
  ];

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      {/* Navbar Start: Logo and Hamburger */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link
          to="/"

        >
          <div className="btn btn-ghost text-2xl  italic flex items-center pl-0 md:pl-4 gap-2 ">
          <GiTreeBeehive className='text-yellow-300 text-3xl text-center'/>
            <span className="text-center hidden sm:block font-bold">Consult Hive</span>
          </div>
        </Link>
      </div>

      {/* Navbar Center: Links for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {links}
        </ul>
      </div>

      {/* Navbar End: User Profile and Buttons */}
      <div className="navbar-end ">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <button className='btn-disabled'>
                  {user.displayName}
                </button>
              </li>
              <li><button onClick={() => logOut()}>
                Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className='flex'>
            <button
              className="btn btn-primary py-2 px-5 md:py-3 md:px-6 rounded-3xl min-h-0 h-auto mr-2"
              onClick={() => navigate("/auth/login")}>
              Login
            </button>
            <button
              className="btn btn-primary py-2 px-5 md:py-3 md:px-6 rounded-3xl min-h-0 h-auto "
              onClick={() => navigate("/auth/register")}>
              Register
            </button>
          </div>
        )}
        <ThemeToggle></ThemeToggle>
      </div>

    </div>
  );
};

export default Navbar;
