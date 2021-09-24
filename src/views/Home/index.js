import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import github from './github.jfif'
import NotFound from "../../ components/Not Found";



const Home = () => {
  const [username, setUserName] = useState('')
  const history = useHistory()
  const handleChange = (e) => {
    setUserName(e.target.value)

  }

  const handlePress = (e) => {
    if (e.key === "Enter" && username.trim()) {
      history.push(`/${username}`)

    }
  }


  return (
    <div className='home d-flex justify-content-center align-items-center' style={{
      backgroundImage: `url(${github})`
    }}>
      <div>
        <input className='form-control' type="text" onChange={handleChange} onKeyPress={handlePress}
               placeholder='user name'/>
      </div>
    </div>
  );

};

export default Home;