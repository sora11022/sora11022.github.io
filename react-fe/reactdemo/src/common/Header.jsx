import { NavLink, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useContext } from 'react';
import { ThemeContext } from '../context/ToggleMode';
const Header = () => {
  const { handleTheme } = useContext(ThemeContext);
  const navigate = useNavigate('');

  const handleLogout = () => {
    if (localStorage.getItem('access_token')) {
      localStorage.clear();
      navigate('/login');
    } else {
      console.log('????');
    }
  };

  return (
    <div className="header">
      <div className="icon">
        <img src="/Logo.svg" alt="" />
      </div>
      <div className="navbar">
        <label className="switch">
          <input type="checkbox" onClick={handleTheme}></input>
          <span className="slider round"></span>
        </label>
        <div className="navbar_menu ml-6">
          <NavLink className={'navbar_menu--item'} to={'/'}>
            Home
          </NavLink>
          <NavLink className={'navbar_menu--item'} to={'/article'}>
            Articles
          </NavLink>
          <NavLink className={'navbar_menu--item'} to={'/pricing'}>
            Pricing
          </NavLink>
          <NavLink className={'navbar_menu--item'} to={'/faq'}>
            Faq
          </NavLink>
        </div>
        {localStorage.getItem('access_token') ? (
          <div className="btn">
            <button className="btn_text" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="btn">
            <NavLink to={'/login'}>
              <button className="btn_text">Sign in</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
