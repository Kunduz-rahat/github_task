import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState({})
  const {username} = useParams()

  useEffect(() =>{
    axios(`https://api.github.com/users/${username}`)
      .then(({data}) => setUser(data))
  }, [username])
  return (
    <header className='header bg-dark text-white d-flex justify-content-between align-items-center p-3'>
      <div className='d-flex align-items-center'>
        <p className='me-3'> {user.login}</p>
        <img  src={user.avatar_url} alt="" width ="50"/>

      </div>
      <input type="text" placeholder='search'/>
    </header>
  );
};

export default Header;