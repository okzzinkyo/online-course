import React, { useEffect, useState } from 'react';
import './Nav.css';
import profile from 'assets/images/user-profile.jpg';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src={'https://i.namu.wiki/i/MItAcktgp0wbRDTzFmack6FrbMbFJ_4qFw8opZnTFwXDbl1SS4r7IXwy32J2_IcfVEs_xlJcaFLFuPZDHLU-Uw.svg'}
        alt='Netflix logo'
        onClick={() => window.location.reload()}
      />
      <input className='nav__input' type='text' value={searchValue} onChange={handleChange} placeholder='영화를 검색해 주세요.'></input>
      <img className='nav__avator' src={profile} alt='User_logged'></img>
    </nav>
  );
}
