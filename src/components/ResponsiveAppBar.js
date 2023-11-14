import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function ResponsiveAppBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='container-navbar'>
      <Link to="/" className='author-name'>MuhammadAbdulloh's Blog</Link>
      <ul className='nav-menu'>
        <CustomLink className='nav-list' to="#" >Academy</CustomLink>
        <CustomLink className='nav-list' to="#" >Blog</CustomLink>
        <CustomLink className='nav-list' to="#" >Projects</CustomLink>
        <CustomLink className='nav-list' to="https://t.me/muhammadabdulloh_uz">Channel</CustomLink>
      </ul>
        <div className='navbar__menu'>          
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> }
      {toggleMenu && (
        <div className='navbar__menu-container scale-up center'>          
          <ul className='nav-menu-links'>
            <CustomLink className='nav-list' to="/academy" >Academy</CustomLink>
            <CustomLink className='nav-list' to="/blog" >Blog</CustomLink>
            <CustomLink className='nav-list' to="/projects" >Projects</CustomLink>
            <CustomLink className='nav-list' to="https://t.me/muhammadabdulloh_uz">Channel</CustomLink>
      </ul>
      </div>
      )}
        </div>
    </div>

  );

  function CustomLink({ to, children, ...props }) {
    return (
      <li>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
}
export default ResponsiveAppBar;

